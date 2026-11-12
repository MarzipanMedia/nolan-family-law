/**
 * Receives an enquiry and passes it to the firm.
 *
 * TODO (Ben): where enquiries go (CRM or email). Until ENQUIRY_WEBHOOK_URL is set:
 *   staging     accepts the enquiry and delivers it nowhere, so the form can be tested;
 *   production  refuses, so an enquiry can never be silently lost.
 * Nothing here is logged or sent to analytics: enquiries are confidential.
 */
import { NextResponse } from 'next/server';
import { offices, type OfficeKey } from '@/config/offices';

const clean = (v: unknown, max = 4000) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);

export async function POST(request: Request) {
  let body: { office?: string; page?: string; fields?: Record<string, unknown> };
  try { body = await request.json(); } catch { return NextResponse.json({ message: 'Sorry, we could not read that message.' }, { status: 400 }); }

  const f = body.fields ?? {};
  if (clean(f.company)) return NextResponse.json({ ok: true }); // spam trap filled in: pretend success

  const office: OfficeKey = body.office === 'melbourne' ? 'melbourne' : 'sydney';
  const enquiry = {
    office,
    officeName: offices[office].name,
    page: clean(body.page, 300),
    receivedAt: new Date().toISOString(),
    name: clean(f.name, 200),
    phone: clean(f.phone, 60),
    email: clean(f.email, 200),
    topic: clean(f.topic, 60),
    // Any other choices on the form (stage, whether the other party has agreed, and so on).
    answers: Object.fromEntries(Object.entries(f).filter(([k]) => !['name', 'phone', 'email', 'topic', 'message', 'company', 'safe'].includes(k)).map(([k, v]) => [clean(k, 60), clean(v, 200)])),
    safeToLeaveMessage: clean(f.safe, 10) !== 'no',
    message: clean(f.message),
  };

  if (!enquiry.name) return NextResponse.json({ message: 'Please tell us what to call you.' }, { status: 422 });
  if (!enquiry.phone && !enquiry.email) return NextResponse.json({ message: 'Please add a phone number or an email address so we can reply.' }, { status: 422 });

  const destination = process.env.ENQUIRY_WEBHOOK_URL;
  if (!destination) {
    if (process.env.SITE_ENV === 'production') return NextResponse.json({ message: 'Sorry, we could not send your message just now.' }, { status: 503 });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(destination, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(enquiry) });
    if (!res.ok) throw new Error(String(res.status));
  } catch {
    return NextResponse.json({ message: 'Sorry, we could not send your message just now.' }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivered: true });
}
