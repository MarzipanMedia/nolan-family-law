/**
 * The consultation CTA band that ends every page (DESIGN.md §7), for pages that do not carry
 * their own designed version: articles, profiles and carry-over pages. The one --deep section
 * on the page. Markup and copy follow the Melbourne hub's band, with the office from the config.
 */
import { offices, type OfficeKey } from '@/config/offices';
import { PhoneLink } from './PhoneLink';
import { EnquiryForm } from './EnquiryForm';

const label = { display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', fontWeight: 600, color: '#1A2E40', minWidth: 0 } as const;
const field = { fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400, color: '#1A2E40', background: '#FEFDFB', border: '1px solid #E8E4DC', borderRadius: '2px', padding: '14px 16px', minWidth: 0 } as const;
const radio = { display: 'inline-flex', alignItems: 'center', gap: '10px', minHeight: '44px', fontSize: '15px', color: '#2C3E50', cursor: 'pointer' } as const;
const dot = { width: '18px', height: '18px', accentColor: '#1A2E40', margin: 0 } as const;
const legend = { padding: 0, marginBottom: '10px', fontSize: '14px', fontWeight: 600, color: '#1A2E40' } as const;
const fieldset = { border: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' } as const;

const PROMISES = [
  'Run a conflict check before anything else',
  'Listen first, then explain where you stand under the law',
  'Set out your options, from mediation to court, and what each involves',
  'Tell you how our fees work, and put an estimate in writing',
];

const TOPICS: Array<[string, string]> = [
  ['children', 'Arrangements for my children'],
  ['property', 'Property and finances'],
  ['divorce', 'Separation or divorce'],
  ['mediation', 'Mediation'],
  ['bfa', 'A prenup or financial agreement'],
  ['fees', 'Fees and how this works'],
  ['other', 'Something else'],
];

export function CtaBand({ office }: { office: OfficeKey }) {
  const o = offices[office];
  return (
    <section id="book" data-screen-label="Consultation CTA" data-section="true" data-deep="true" style={{ background: '#1C2F40' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '120px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '56px 80px', alignItems: 'start' }}>
        <div data-reveal="true" style={{ minWidth: 0 }}>
          <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#A9C9DB', marginBottom: '18px' }}>Talk to us</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(32px, 4.6vw, 48px)', lineHeight: 1.14, color: '#FFFFFF', margin: '0 0 22px', maxWidth: '19ch', textWrap: 'pretty' }}>Talk to our {o.city} team.</h2>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#E3E9EE', maxWidth: '50ch', margin: '0 0 36px', textWrap: 'pretty' }}>You do not need to have everything worked out before you call. Tell us a little about your situation and we will explain your options, and what each would involve.</p>
          <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C3D0DC', marginBottom: '14px' }}>When you get in touch, we will</div>
          <ul style={{ listStyle: 'none', margin: '0 0 40px', padding: 0, display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(195,208,220,0.22)' }}>
            {PROMISES.map((p) => (
              <li key={p} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid rgba(195,208,220,0.22)', fontSize: '16px', lineHeight: 1.55, color: '#E3E9EE' }}><span aria-hidden="true" style={{ color: '#A9C9DB' }}>✓</span>{p}</li>
            ))}
          </ul>
          <PhoneLink office={office} location="body" position="contact" style={{ display: 'inline-block', fontFamily: 'var(--font-serif)', fontSize: '30px', color: '#FFFFFF', marginBottom: '10px' }} />
          <div style={{ fontSize: '15px', lineHeight: 1.65, color: '#C3D0DC' }}>{o.addressDisplay}<br />In person, by phone or by video</div>
        </div>
        <div data-reveal="true" data-form-card="true" style={{ minWidth: 0, background: '#FEFDFB', borderRadius: '3px', padding: '40px' }}>
          <div data-form-success="" hidden>
            <div role="status" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: '28px', lineHeight: 1.25, color: '#1A2E40', margin: 0 }}>Thank you. We have your message.</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#4A5A66', margin: 0 }}>A member of our {o.city} team will contact you within one business day, using the method you chose. If something is urgent, please call us.</p>
              <button type="button" data-action="resetForm" data-press="true" style={{ alignSelf: 'flex-start', minHeight: '48px', padding: '0 22px', border: '1px solid #BFC8D2', borderRadius: '2px', background: 'transparent', color: '#1A2E40', fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>Send another enquiry</button>
            </div>
          </div>
          <div data-form-wrap="">
            <EnquiryForm office={office} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', lineHeight: 1.3, color: '#1A2E40' }}>Send us a confidential enquiry</div>
              <label style={label}>What should we call you?
                <input data-field="true" type="text" name="name" required autoComplete="name" style={field} />
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '20px' }}>
                <label style={label}>Phone
                  <input data-field="true" type="tel" name="phone" autoComplete="tel" style={field} />
                </label>
                <label style={label}>Email
                  <input data-field="true" type="email" name="email" autoComplete="email" style={field} />
                </label>
              </div>
              <label style={label}>What would you like to talk about?
                <select data-field="true" name="topic" style={{ ...field, minHeight: '52px' }}>
                  {TOPICS.map(([value, text]) => <option key={value} value={value}>{text}</option>)}
                </select>
              </label>
              <label style={label}>
                <span>Anything you would like us to know? <span style={{ fontWeight: 400, color: '#4A5A66' }}>Optional. Share only what you are comfortable with.</span></span>
                <textarea data-field="true" name="message" rows={4} style={{ ...field, lineHeight: 1.55, resize: 'vertical' }} />
              </label>
              <fieldset style={fieldset}>
                <legend style={legend}>Is it safe for us to leave a message?</legend>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
                  <label style={radio}><input type="radio" name="safe" value="yes" defaultChecked style={dot} />Yes</label>
                  <label style={radio}><input type="radio" name="safe" value="no" style={dot} />No, please only speak to me</label>
                </div>
              </fieldset>
              <button type="submit" data-press="true" style={{ minHeight: '56px', padding: '18px 34px', border: 'none', borderRadius: '2px', background: '#B4552F', color: '#FFFFFF', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', cursor: 'pointer' }}>Send confidentially</button>
              <p style={{ fontSize: '14px', lineHeight: 1.55, color: '#4A5A66', margin: 0 }}>Your enquiry is confidential and goes only to our {o.city} team. Sending it does not commit you or the other party to anything.</p>
            </EnquiryForm>
          </div>
        </div>
      </div>
    </section>
  );
}
