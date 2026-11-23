/**
 * Where review board ticks and notes are kept, and the email Ben gets for each one.
 *
 * Storage is one append-only Supabase table, `review_feedback` (SQL in docs/review-board.md),
 * reached over its REST API with the service key, server-side only. Nothing is ever updated
 * or deleted, so the table doubles as a record of who approved what, and when.
 *
 * Email goes through Resend's REST API. Both are optional: with no Supabase settings the
 * board is read-only, and with no Resend settings feedback is saved but no email is sent.
 * REVIEW_STORE=memory keeps feedback in memory instead (local testing only; lost on restart).
 */
import type { Reviewer } from './board';

export type EntryKind = 'approve' | 'unapprove' | 'note';

export interface Entry {
  id: string;
  item_id: string;
  author: Reviewer;
  kind: EntryKind;
  body: string;
  created_at: string;
}

const supabaseUrl = (process.env.SUPABASE_URL ?? '').replace(/\/$/, '');
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
const useMemory = process.env.REVIEW_STORE === 'memory';
const memory: Entry[] = [];

export const storeConfigured = () => useMemory || (supabaseUrl !== '' && supabaseKey !== '');

// Newer Supabase secret keys (sb_secret_...) go in the apikey header only; the older service_role
// keys are JWTs and also go in Authorization. Both work.
const headers = (): Record<string, string> => supabaseKey.startsWith('sb_')
  ? { apikey: supabaseKey, 'content-type': 'application/json' }
  : { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, 'content-type': 'application/json' };

/** Supabase's own reason for a failed request (status, error code and message; never a key). */
async function reason(res: Response): Promise<string> {
  let detail = '';
  try { const body = await res.json(); detail = [body.code, body.message ?? body.msg ?? body.error, body.hint].filter(Boolean).join(': '); } catch { /* not JSON */ }
  return `${res.status}${detail ? ` ${detail}` : ''}`.slice(0, 300);
}

export async function listEntries(): Promise<Entry[]> {
  if (useMemory) return [...memory];
  const res = await fetch(`${supabaseUrl}/rest/v1/review_feedback?select=*&order=created_at.asc`, { headers: headers(), cache: 'no-store' });
  if (!res.ok) throw new Error(`Supabase read failed: ${await reason(res)}`);
  return res.json();
}

export async function addEntry(entry: Pick<Entry, 'item_id' | 'author' | 'kind' | 'body'>): Promise<Entry> {
  if (useMemory) {
    const saved: Entry = { ...entry, id: crypto.randomUUID(), created_at: new Date().toISOString() };
    memory.push(saved);
    return saved;
  }
  const res = await fetch(`${supabaseUrl}/rest/v1/review_feedback`, { method: 'POST', headers: { ...headers(), Prefer: 'return=representation' }, body: JSON.stringify(entry), cache: 'no-store' });
  if (!res.ok) throw new Error(`Supabase write failed: ${await reason(res)}`);
  const [saved] = await res.json();
  return saved;
}

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);

/** Emails Ben about one tick or note. Never throws: a failed email must not lose the feedback. */
export async function notify(entry: Entry, itemTitle: string, link: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY ?? '';
  const to = process.env.REVIEW_NOTIFY_EMAIL ?? '';
  if (!key || !to) return false;
  const from = process.env.REVIEW_FROM_EMAIL || 'Nolan review board <onboarding@resend.dev>';
  const action = entry.kind === 'approve' ? 'approved' : entry.kind === 'unapprove' ? 'took back approval for' : 'left a note on';
  const subject = `${entry.author} ${action} "${itemTitle}"`;
  const text = [subject + '.', entry.body ? `\n${entry.body}\n` : '', `Open the review board: ${link}`].join('\n');
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#2C3E50">
<p><strong>${escape(entry.author)}</strong> ${action} <strong>${escape(itemTitle)}</strong>.</p>
${entry.body ? `<blockquote style="margin:0 0 16px;padding:12px 16px;background:#F8F6F2;border-left:3px solid #3A6D8C">${escape(entry.body).replace(/\n/g, '<br>')}</blockquote>` : ''}
<p><a href="${escape(link)}" style="color:#1A2E40">Open the review board</a></p></div>`;
  try {
    const res = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${key}`, 'content-type': 'application/json' }, body: JSON.stringify({ from, to: to.split(',').map((s) => s.trim()).filter(Boolean), subject, text, html }), cache: 'no-store' });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * A health check for /api/review?check=1 (staging only). Reads from Supabase and asks Resend
 * whether its key is valid, without saving anything or sending an email. Never returns a key.
 */
export async function healthCheck() {
  const supabase: Record<string, unknown> = { urlSet: supabaseUrl !== '', keySet: supabaseKey !== '' };
  if (useMemory) supabase.mode = 'memory';
  else if (supabaseUrl && supabaseKey) {
    const warnings: string[] = [];
    supabase.warnings = warnings;
    if (/\/rest\/v1/.test(supabaseUrl)) warnings.push( 'SUPABASE_URL should be the project URL only, without /rest/v1 on the end');
    else if (!/^https:\/\/[a-z0-9]+\.supabase\.co$/.test(supabaseUrl)) warnings.push('SUPABASE_URL does not look like https://<project>.supabase.co');
    const keyRole = (() => { try { return JSON.parse(atob(supabaseKey.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))).role as string; } catch { return supabaseKey.startsWith('sb_secret_') ? 'secret' : supabaseKey.startsWith('sb_publishable_') ? 'publishable' : 'unknown'; } })();
    supabase.keyType = keyRole;
    if (keyRole === 'anon' || keyRole === 'publishable') warnings.push('SUPABASE_SERVICE_ROLE_KEY is the public (anon/publishable) key. Use the service_role (secret) key');
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/review_feedback?select=id&limit=1`, { headers: headers(), cache: 'no-store' });
      supabase.ok = res.ok;
      supabase.result = res.ok ? 'table found and readable' : await reason(res);
    } catch (e) {
      supabase.ok = false;
      supabase.result = `could not reach Supabase: ${(e as Error).message}`;
    }
  }
  const key = process.env.RESEND_API_KEY ?? '';
  const resend: Record<string, unknown> = { keySet: key !== '', notifyEmailSet: (process.env.REVIEW_NOTIFY_EMAIL ?? '') !== '', fromEmailSet: (process.env.REVIEW_FROM_EMAIL ?? '') !== '' };
  if (key) {
    try {
      const res = await fetch('https://api.resend.com/domains', { headers: { Authorization: `Bearer ${key}` }, cache: 'no-store' });
      const body = await res.json().catch(() => ({}));
      // A sending-only key cannot list domains, but saying so proves the key itself is valid.
      resend.ok = res.ok || body?.name === 'restricted_api_key';
      resend.result = res.ok ? 'key valid' : body?.name === 'restricted_api_key' ? 'key valid (sending only)' : `${res.status} ${body?.name ?? ''}: ${body?.message ?? ''}`.trim();
    } catch (e) {
      resend.ok = false;
      resend.result = `could not reach Resend: ${(e as Error).message}`;
    }
  }
  return { siteEnv: process.env.SITE_ENV ?? '', stagingPasswordSet: (process.env.STAGING_PASSWORD ?? '') !== '', supabase, resend };
}
