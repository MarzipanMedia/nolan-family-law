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

const headers = () => ({ apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, 'content-type': 'application/json' });

export async function listEntries(): Promise<Entry[]> {
  if (useMemory) return [...memory];
  const res = await fetch(`${supabaseUrl}/rest/v1/review_feedback?select=*&order=created_at.asc`, { headers: headers(), cache: 'no-store' });
  if (!res.ok) throw new Error(`Supabase read failed: ${res.status}`);
  return res.json();
}

export async function addEntry(entry: Pick<Entry, 'item_id' | 'author' | 'kind' | 'body'>): Promise<Entry> {
  if (useMemory) {
    const saved: Entry = { ...entry, id: crypto.randomUUID(), created_at: new Date().toISOString() };
    memory.push(saved);
    return saved;
  }
  const res = await fetch(`${supabaseUrl}/rest/v1/review_feedback`, { method: 'POST', headers: { ...headers(), Prefer: 'return=representation' }, body: JSON.stringify(entry), cache: 'no-store' });
  if (!res.ok) throw new Error(`Supabase write failed: ${res.status}`);
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
