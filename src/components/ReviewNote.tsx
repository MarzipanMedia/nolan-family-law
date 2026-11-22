/**
 * A yellow review note (LEGAL REVIEW, CHECK, BEN), as on the prototypes. Shown on staging only:
 * it renders nothing when SITE_ENV=production, so notes can never reach the live site. The
 * rule check allows the note colour in this file and nowhere else.
 */
import type { ReactNode } from 'react';

export function ReviewNote({ children }: { children: ReactNode }) {
  if (process.env.SITE_ENV === 'production') return null;
  return (
    <div data-staging-note="true" style={{ margin: '20px 0', display: 'block', width: 'fit-content', padding: '8px 10px', border: '1.5px dashed #B7791F', background: '#FFF4D6', color: '#5A3E00', fontFamily: 'ui-monospace, Menlo, monospace', fontSize: '11.5px', lineHeight: 1.45, borderRadius: '4px', maxWidth: '660px' }}>
      {children}
    </div>
  );
}
