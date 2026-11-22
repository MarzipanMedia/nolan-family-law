/**
 * The one mid-page prompt (D-31), shared by the city hubs and the inner service pages.
 * Its links carry data-cta-position="mid". Markup follows export/melbourne-family-law.html.
 */
import { offices, type OfficeKey } from '@/config/offices';
import { PhoneLink } from './PhoneLink';
import { Picture, type ImageAsset } from './Picture';

interface Props {
  office: OfficeKey;
  img: ImageAsset;
  objectPosition: string;
  text: string;
  /** The button label, e.g. "Talk to us". */
  cta: string;
  heading?: string;
  /** The small label above the heading. Leave out for none. */
  eyebrow?: string;
  /** Words before the phone number, e.g. "or call ". */
  phonePrefix?: string;
  /** Topic the button chooses in the enquiry form, e.g. "bfa". */
  topic?: string;
}

const eyebrowStyle = { fontSize: '13px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3A6D8C', marginBottom: '6px' } as const;

export function MidPrompt({ office, img, objectPosition, text, cta, heading = 'Not sure how this applies to you?', eyebrow, phonePrefix = '', topic }: Props) {
  const o = offices[office];
  const title = <h2 id="mid-cta-title" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '28px', lineHeight: 1.25, color: '#1A2E40', margin: 0, minWidth: 0, textWrap: 'pretty' }}>{heading}</h2>;
  return (
    <aside aria-labelledby="mid-cta-title" data-screen-label="Mid-page prompt" data-mid-cta="true" data-reveal="true" style={{ margin: '8px 0 0', padding: '40px', background: '#F8F6F2', border: '1px solid #E8E4DC', borderRadius: '3px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: '22px', maxWidth: '760px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
        <Picture img={img} alt="" sizes="64px" style={{ flex: 'none', width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', objectPosition, background: '#DCE9F0' }} />
        {eyebrow ? (
          <div style={{ minWidth: 0 }}>
            <div style={eyebrowStyle}>{eyebrow}</div>
            {title}
          </div>
        ) : title}
      </div>
      <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#2C3E50', margin: 0, maxWidth: '58ch', textWrap: 'pretty' }}>{text}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px 28px' }}>
        <a href="#book" data-press="true" data-cta-position="mid" data-pick-topic={topic} style={{ background: '#B4552F', color: '#FFFFFF', fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', padding: '18px 34px', borderRadius: '2px', textDecoration: 'none' }}>{cta}</a>{' '}
        <PhoneLink office={office} location="body" position="mid" style={{ fontSize: '16px', fontWeight: 600, color: '#1A2E40' }}>
          {phonePrefix}{o.phoneDisplay}
        </PhoneLink>
      </div>
    </aside>
  );
}
