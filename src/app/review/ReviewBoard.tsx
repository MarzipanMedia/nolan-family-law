'use client';
/**
 * The review board's screen. Styling follows export/DESIGN.md v2.0 (Bone and Paper grounds,
 * Ink type, Harbour blue accent, Stone hairlines). There is no terracotta here: nothing on this
 * page is a client call to action.
 */
import { useCallback, useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import type { BoardItem, Reviewer } from '@/review/board';
import type { Entry, EntryKind } from '@/review/store';

const INK = '#1A2E40';
const BODY = '#2C3E50';
const MUTED = '#4A5A66';
const STONE = '#E8E4DC';
const MIST = '#BFC8D2';
const PAPER = '#FEFDFB';
const BONE = '#F8F6F2';
const ACCENT = '#3A6D8C';
const TINT = '#DCE9F0';

const serif: CSSProperties = { fontFamily: 'var(--font-serif)', fontWeight: 400, color: INK, margin: 0, textWrap: 'pretty' };
const eyebrow: CSSProperties = { fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT };
const secondaryButton: CSSProperties = { minHeight: '44px', padding: '0 18px', border: `1px solid ${MIST}`, borderRadius: '2px', background: 'transparent', color: INK, fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, cursor: 'pointer' };
const tag: CSSProperties = { display: 'inline-block', padding: '3px 8px', border: `1px solid ${STONE}`, borderRadius: '2px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em', color: MUTED, background: BONE };

const ME_KEY = 'nolan-review-me';
const when = (iso: string) => new Date(iso).toLocaleString('en-AU', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit', timeZone: 'Australia/Sydney' });
const cityName = (c: BoardItem['city']) => (c === 'sydney' ? 'Sydney' : c === 'melbourne' ? 'Melbourne' : null);

interface ItemState { approval: Entry | null; notes: Entry[] }

export function ReviewBoard({ items, dates, reviewers }: { items: BoardItem[]; dates: Array<{ label: string; date: string }>; reviewers: Reviewer[] }) {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [configured, setConfigured] = useState<boolean | null>(null);
  const [loadError, setLoadError] = useState('');
  const [me, setMe] = useState<Reviewer | null>(null);
  const [mineOnly, setMineOnly] = useState(false);

  useEffect(() => {
    try { const saved = window.localStorage.getItem(ME_KEY) as Reviewer | null; if (saved && reviewers.includes(saved)) setMe(saved); } catch { /* storage unavailable */ }
    fetch('/api/review', { cache: 'no-store' })
      .then(async (r) => { const data = await r.json(); if (!r.ok) throw new Error(data.message); setConfigured(data.configured); setEntries(data.entries); })
      .catch((e: Error) => { setConfigured(true); setLoadError(e.message || 'Sorry, the feedback could not be loaded just now.'); });
  }, [reviewers]);

  const choose = (who: Reviewer) => { setMe(who); try { window.localStorage.setItem(ME_KEY, who); } catch { /* storage unavailable */ } };

  const state = useMemo(() => {
    const map = new Map<string, ItemState>();
    for (const e of entries) {
      const s = map.get(e.item_id) ?? { approval: null, notes: [] };
      if (e.kind === 'note') s.notes.push(e); else s.approval = e;
      map.set(e.item_id, s);
    }
    return map;
  }, [entries]);

  const approved = (id: string) => state.get(id)?.approval?.kind === 'approve';
  const visible = (i: BoardItem) => !mineOnly || !me || (!!i.who?.includes(me) && !approved(i.id));

  const save = useCallback(async (itemId: string, kind: EntryKind, body = ''): Promise<string | null> => {
    if (!me) return 'Please choose who you are at the top of the page first.';
    try {
      const r = await fetch('/api/review', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ itemId, author: me, kind, body }) });
      const data = await r.json();
      if (!r.ok) return data.message ?? 'Sorry, that could not be saved.';
      setEntries((prev) => [...prev, data.entry]);
      return null;
    } catch {
      return 'Sorry, that could not be saved. Please check your connection and try again.';
    }
  }, [me]);

  const review = items.filter((i) => i.stage === 'review' && i.group !== 'Questions');
  const questions = items.filter((i) => i.group === 'Questions');
  const builtPages = items.filter((i) => i.stage === 'built' && i.group === 'Pages');
  const profiles = items.filter((i) => i.stage === 'built' && i.group === 'Team profiles');
  const articles = items.filter((i) => i.stage === 'built' && i.group === 'Articles');
  const coming = items.filter((i) => i.stage === 'coming');
  const toReview = [...review, ...questions];
  const doneCount = toReview.filter((i) => approved(i.id)).length;
  const readOnly = configured === false || !!loadError;

  const order = (list: BoardItem[]) => [...list].filter(visible).sort((a, b) => Number(approved(a.id)) - Number(approved(b.id)));
  const card = (i: BoardItem) => <ItemCard key={i.id} item={i} state={state.get(i.id)} me={me} readOnly={readOnly} canApprove={i.stage !== 'coming'} onSave={save} />;

  return (
    <div data-root="true" style={{ minHeight: '100vh', background: BONE, color: BODY }}>
      <header style={{ background: PAPER, borderBottom: `1px solid ${STONE}` }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          <img src="/images/nolan-logo.webp" alt="Nolan Family Law & Mediation" width={449} height={166} style={{ display: 'block', height: '44px', width: 'auto' }} />
          <span style={tag}>Staging only. Not part of the live site</span>
        </div>
      </header>

      <main style={{ maxWidth: '980px', margin: '0 auto', padding: 'clamp(40px, 6vw, 72px) 24px 96px' }}>
        <div style={eyebrow}>New website</div>
        <h1 style={{ ...serif, fontSize: 'clamp(34px, 5vw, 52px)', lineHeight: 1.12, margin: '14px 0 18px' }}>Review board.</h1>
        <p style={{ fontSize: '18px', lineHeight: 1.65, maxWidth: '62ch', margin: '0 0 12px' }}>
          Everything built for the new site so far, in one place. Open a page, read it through, then tick it when you are happy, or leave a note if something needs changing.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.65, color: MUTED, maxWidth: '62ch', margin: 0 }}>
          Ben is emailed each time something is ticked or a note is added, so there is no need to send it separately. This list updates itself as pages are built.
        </p>

        <section aria-label="Key dates" style={{ marginTop: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '12px' }}>
          {dates.map((d) => (
            <div key={d.label} style={{ background: PAPER, border: `1px solid ${STONE}`, borderRadius: '3px', padding: '18px 20px' }}>
              <div style={{ fontSize: '14px', color: MUTED, marginBottom: '6px' }}>{d.label}</div>
              <div style={{ ...serif, fontSize: '20px', lineHeight: 1.3 }}>{d.date}</div>
            </div>
          ))}
        </section>

        <section aria-label="Who is reviewing" style={{ marginTop: '36px', padding: '24px', background: PAPER, border: `1px solid ${STONE}`, borderRadius: '3px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '16px', fontWeight: 600, color: INK, marginRight: '4px' }}>Who is reviewing?</span>
            {reviewers.map((r) => (
              <button key={r} type="button" data-press="true" aria-pressed={me === r} onClick={() => choose(r)} style={{ ...secondaryButton, minWidth: '88px', background: me === r ? INK : 'transparent', color: me === r ? '#FFFFFF' : INK, borderColor: me === r ? INK : MIST }}>{r}</button>
            ))}
          </div>
          {me && me !== 'Ben' && (
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '16px', fontSize: '15px', cursor: 'pointer' }}>
              <input type="checkbox" checked={mineOnly} onChange={(e) => setMineOnly(e.target.checked)} style={{ width: '20px', height: '20px', accentColor: INK }} />
              Only show what is waiting on me
            </label>
          )}
          <p style={{ fontSize: '15px', color: MUTED, margin: '14px 0 0' }}>
            {toReview.length - doneCount === 0 ? 'Everything waiting for review has been approved. Thank you.' : `${doneCount} of ${toReview.length} items for review approved so far.`}
          </p>
        </section>

        {configured === false && <Banner>Saving is not switched on yet, so ticks and notes cannot be added for now. Everything below is up to date.</Banner>}
        {loadError && <Banner>{loadError} Please refresh the page in a moment.</Banner>}

        <Section title="Ready for your review" intro="These pages have been designed for the new site. Each one needs a read and a tick before launch." count={review.length}>
          {order(review).map(card)}
          {questions.some(visible) && (
            <>
              <h3 style={{ ...serif, fontSize: '24px', lineHeight: 1.25, margin: '28px 0 4px' }}>Questions only you can answer</h3>
              <p style={{ fontSize: '16px', color: MUTED, margin: '0 0 8px' }}>A short note with the answer is perfect. Tick it once it is answered.</p>
              {order(questions).map(card)}
            </>
          )}
        </Section>

        {!mineOnly && (
          <>
            <Section title="Built and carried over" intro="These pages have moved across from the current site as they are, into the new layout. They will be redesigned in place after launch. A note is welcome if anything looks wrong." count={builtPages.length + profiles.length + articles.length}>
              {builtPages.map(card)}
              <Folder title="Team profiles" count={profiles.length}>{profiles.map(card)}</Folder>
              <Folder title="Articles" count={articles.length}>{articles.map(card)}</Folder>
            </Section>
            <Section title="Coming next" intro="Planned for launch or soon after, but not built yet. You can leave a note now if there is something we should know." count={coming.length}>
              {coming.map(card)}
            </Section>
          </>
        )}
      </main>
    </div>
  );
}

function Banner({ children }: { children: ReactNode }) {
  return <div role="status" style={{ marginTop: '20px', padding: '16px 20px', background: TINT, border: `1px solid ${ACCENT}`, borderRadius: '3px', fontSize: '16px', lineHeight: 1.6, color: INK }}>{children}</div>;
}

function Section({ title, intro, count, children }: { title: string; intro: string; count: number; children: ReactNode }) {
  if (count === 0) return null;
  return (
    <section style={{ marginTop: '64px' }}>
      <div style={{ width: '56px', height: '3px', background: ACCENT, marginBottom: '18px' }} />
      <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.4vw, 36px)', lineHeight: 1.2 }}>{title}</h2>
      <p style={{ fontSize: '16px', lineHeight: 1.65, color: MUTED, maxWidth: '62ch', margin: '10px 0 22px' }}>{intro}</p>
      <div style={{ display: 'grid', gap: '14px' }}>{children}</div>
    </section>
  );
}

function Folder({ title, count, children }: { title: string; count: number; children: ReactNode }) {
  if (count === 0) return null;
  return (
    <details style={{ background: PAPER, border: `1px solid ${STONE}`, borderRadius: '3px' }}>
      <summary style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        <span style={{ ...serif, fontSize: '22px' }}>{title} <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: MUTED }}>({count})</span></span>
        <span data-faq-plus="true" aria-hidden="true" style={{ fontSize: '24px', color: ACCENT, transition: 'transform 220ms cubic-bezier(0.23,1,0.32,1)' }}>+</span>
      </summary>
      <div style={{ display: 'grid', gap: '12px', padding: '0 16px 16px' }}>{children}</div>
    </details>
  );
}

function ItemCard({ item, state, me, readOnly, canApprove, onSave }: { item: BoardItem; state?: ItemState; me: Reviewer | null; readOnly: boolean; canApprove: boolean; onSave: (id: string, kind: EntryKind, body?: string) => Promise<string | null> }) {
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const approval = state?.approval ?? null;
  const isApproved = approval?.kind === 'approve';
  const notes = state?.notes ?? [];
  const city = cityName(item.city);

  const run = async (kind: EntryKind, body = '') => {
    setBusy(true); setError('');
    const problem = await onSave(item.id, kind, body);
    setBusy(false);
    if (problem) setError(problem); else if (kind === 'note') { setDraft(''); setOpen(false); }
  };

  return (
    <article id={item.id} style={{ background: PAPER, border: `1px solid ${isApproved ? ACCENT : STONE}`, borderRadius: '3px', padding: 'clamp(20px, 3vw, 28px)', scrollMarginTop: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ minWidth: 0, flex: '1 1 320px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
            {city && <span style={tag}>{city}</span>}
            {item.origin === 'carried over' && <span style={tag}>Carried over</span>}
            {item.who?.map((w) => <span key={w} style={{ ...tag, background: TINT, borderColor: TINT, color: INK }}>For {w}</span>)}
          </div>
          <h3 style={{ ...serif, fontSize: '22px', lineHeight: 1.3 }}>{item.title}</h3>
          {item.path && <div style={{ fontSize: '14px', color: MUTED, marginTop: '4px', wordBreak: 'break-all' }}>{item.path}</div>}
        </div>
        {item.path && (
          <a href={item.path} target="_blank" rel="noopener" style={{ fontSize: '15px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', minHeight: '44px' }}>
            Open the page <span data-arrow="true" aria-hidden="true">→</span>
          </a>
        )}
      </div>

      {item.note && <p style={{ fontSize: '16px', lineHeight: 1.65, margin: '14px 0 0', maxWidth: '64ch' }}>{item.note}</p>}

      {notes.length > 0 && (
        <ol style={{ listStyle: 'none', margin: '18px 0 0', padding: 0, display: 'grid', gap: '10px' }}>
          {notes.map((n) => (
            <li key={n.id} style={{ background: BONE, borderLeft: `3px solid ${ACCENT}`, padding: '12px 16px', borderRadius: '0 2px 2px 0' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: MUTED, marginBottom: '4px' }}>{n.author} · {when(n.created_at)}</div>
              <div style={{ fontSize: '16px', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{n.body}</div>
            </li>
          ))}
        </ol>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px 20px', flexWrap: 'wrap', marginTop: '18px', paddingTop: '16px', borderTop: `1px solid ${STONE}` }}>
        {canApprove && (
          <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '16px', fontWeight: 600, color: INK, cursor: readOnly ? 'default' : 'pointer', minHeight: '44px' }}>
            <input type="checkbox" checked={isApproved} disabled={readOnly || busy} onChange={(e) => run(e.target.checked ? 'approve' : 'unapprove')} style={{ width: '22px', height: '22px', accentColor: INK, cursor: 'inherit' }} />
            {isApproved ? 'Approved' : 'Happy with this'}
          </label>
        )}
        {approval && (
          <span style={{ fontSize: '14px', color: MUTED }}>
            {isApproved ? 'Approved' : 'Approval taken back'} by {approval.author}, {when(approval.created_at)}
          </span>
        )}
        {!readOnly && !open && (
          <button type="button" data-press="true" onClick={() => setOpen(true)} style={{ ...secondaryButton, marginLeft: 'auto' }}>Add a note</button>
        )}
      </div>

      {open && (
        <div style={{ marginTop: '14px' }}>
          <label htmlFor={`note-${item.id}`} style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: INK, marginBottom: '8px' }}>
            Your note{me ? ` (from ${me})` : ''}
          </label>
          <textarea id={`note-${item.id}`} data-field="true" rows={3} value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="What would you like changed, or anything we should know?" style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', border: `1px solid ${STONE}`, borderRadius: '2px', background: PAPER, fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.6, color: BODY, resize: 'vertical' }} />
          <div style={{ display: 'flex', gap: '12px', marginTop: '10px', flexWrap: 'wrap' }}>
            <button type="button" data-press="true" disabled={busy || !draft.trim()} onClick={() => run('note', draft)} style={{ ...secondaryButton, background: INK, color: '#FFFFFF', borderColor: INK, opacity: busy || !draft.trim() ? 0.45 : 1 }}>{busy ? 'Saving' : 'Save note'}</button>
            <button type="button" data-press="true" onClick={() => { setOpen(false); setDraft(''); setError(''); }} style={secondaryButton}>Cancel</button>
          </div>
        </div>
      )}
      {error && <p role="alert" style={{ fontSize: '15px', color: '#8A2E1F', margin: '10px 0 0' }}>{error}</p>}
    </article>
  );
}
