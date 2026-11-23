/**
 * The review board's ticks and notes (staging only; see src/review/board.ts).
 *
 *   GET   every entry so far, oldest first
 *   POST  { itemId, author, kind: 'approve' | 'unapprove' | 'note', body? } adds one, and emails Ben
 *
 * On the live site (SITE_ENV=production) this route does not exist. On staging it sits behind
 * the staging password like everything else (src/proxy.ts).
 */
import { NextResponse } from 'next/server';
import { buildBoard, REVIEWERS, type Reviewer } from '@/review/board';
import { addEntry, listEntries, notify, storeConfigured, type EntryKind } from '@/review/store';

export const dynamic = 'force-dynamic';

const isProduction = process.env.SITE_ENV === 'production';
const notFound = () => new NextResponse('Not found', { status: 404 });
const clean = (v: unknown, max: number) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);

export async function GET() {
  if (isProduction) return notFound();
  if (!storeConfigured()) return NextResponse.json({ configured: false, entries: [] });
  try {
    return NextResponse.json({ configured: true, entries: await listEntries() });
  } catch {
    return NextResponse.json({ message: 'Sorry, the feedback could not be loaded just now.' }, { status: 502 });
  }
}

export async function POST(request: Request) {
  if (isProduction) return notFound();
  if (!storeConfigured()) return NextResponse.json({ message: 'Feedback is not switched on yet.' }, { status: 503 });

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ message: 'Sorry, that could not be read.' }, { status: 400 }); }

  const item = buildBoard().find((i) => i.id === clean(body.itemId, 200));
  const author = clean(body.author, 20) as Reviewer;
  const kind = clean(body.kind, 20) as EntryKind;
  const text = clean(body.body, 4000);

  if (!item) return NextResponse.json({ message: 'That item is not on the board.' }, { status: 422 });
  if (!REVIEWERS.includes(author)) return NextResponse.json({ message: 'Please choose who you are first.' }, { status: 422 });
  if (!['approve', 'unapprove', 'note'].includes(kind)) return NextResponse.json({ message: 'Sorry, that could not be read.' }, { status: 422 });
  if (kind === 'note' && !text) return NextResponse.json({ message: 'Please write a note first.' }, { status: 422 });

  try {
    const entry = await addEntry({ item_id: item.id, author, kind, body: kind === 'note' ? text : '' });
    const link = `${new URL(request.url).origin}/review/#${encodeURIComponent(item.id)}`;
    const emailed = await notify(entry, item.title, link);
    return NextResponse.json({ ok: true, entry, emailed });
  } catch {
    return NextResponse.json({ message: 'Sorry, that could not be saved just now. Please try again.' }, { status: 502 });
  }
}
