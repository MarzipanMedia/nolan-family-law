'use client';
/**
 * The enquiry form (BUILD-NOTES "Functionality to wire up").
 *
 * Posts to /api/enquiry/, shows the success state in the page with no redirect, and pushes
 * `enquiry_submit` to the dataLayer with the office and topic only. Field values are
 * confidential and are never sent to analytics (D-38).
 */
import { useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from 'react';
import { offices, type OfficeKey } from '@/config/offices';
import { PhoneLink } from './PhoneLink';

interface Props { office: OfficeKey; style?: CSSProperties; children: ReactNode }

export function EnquiryForm({ office, style, children }: Props) {
  const [error, setError] = useState('');
  const busy = useRef(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy.current) return;
    const form = e.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    busy.current = true;
    setError('');
    form.setAttribute('aria-busy', 'true');
    try {
      const res = await fetch('/api/enquiry/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ office, page: window.location.pathname, fields }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result.message || 'send-failed');
      const wrap = form.closest<HTMLElement>('[data-form-wrap]');
      const success = wrap?.parentElement?.querySelector<HTMLElement>('[data-form-success]');
      if (wrap && success) { wrap.hidden = true; success.hidden = false; success.scrollIntoView({ block: 'center' }); }
      form.reset();
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'enquiry_submit', office, topic: String(fields.topic ?? ''), page_path: window.location.pathname });
    } catch (err) {
      const message = err instanceof Error && err.message !== 'send-failed' && !/fetch/i.test(err.message) ? err.message : 'Sorry, we could not send your message just now.';
      setError(message);
    } finally {
      busy.current = false;
      form.removeAttribute('aria-busy');
    }
  }

  return (
    <form onSubmit={onSubmit} style={style} data-enquiry-form="">
      {children}
      {/* Spam trap: hidden from people, left empty by them. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label>Company<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {error && (
        <p role="alert" style={{ fontSize: '15px', lineHeight: 1.55, color: '#1A2E40', margin: 0, padding: '14px 16px', border: '1px solid #3A6D8C', borderRadius: '2px', background: '#F8F6F2' }}>
          {error} Please try again, or call our {offices[office].city} office on{' '}
          <PhoneLink office={office} location="body" position="form-error" style={{ fontWeight: 600 }} />.
        </p>
      )}
    </form>
  );
}
