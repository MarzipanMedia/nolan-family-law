/**
 * The only way a phone link is rendered. The number and tel: link come from the office
 * config. Taps are tracked by SiteBehaviour as `call_click` (D-38) using the data attributes.
 */
import type { CSSProperties, ReactNode } from 'react';
import { offices, telHref, type OfficeKey } from '@/config/offices';

export type ClickLocation = 'header' | 'body' | 'footer';

interface Props {
  office: OfficeKey;
  location: ClickLocation;
  /** Where on the page: hero, mid, contact, strip, nav, menu… (D-31). */
  position?: string;
  style?: CSSProperties;
  children?: ReactNode;
  [dataAttr: `data-${string}`]: string | undefined;
}

export function PhoneLink({ office, location, position, style, children, ...rest }: Props) {
  const o = offices[office];
  return (
    <a
      href={telHref(o)}
      aria-label={`Call our ${o.city} office on ${o.phoneDisplay}`}
      data-office-phone={o.key}
      data-click-location={location}
      data-cta-position={position}
      style={style}
      {...rest}
    >
      {children ?? o.phoneDisplay}
    </a>
  );
}
