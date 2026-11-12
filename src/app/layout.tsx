import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Open_Sans } from 'next/font/google';
import { SITE_ORIGIN } from '@/config/routes';
import { SiteBehaviour } from '@/components/SiteBehaviour';
import { GtmHead, GtmBody } from '@/components/Gtm';
import './globals.css';

// Self-hosted at build time (no request to Google from the visitor's browser). DESIGN.md §3.
const serif = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-serif', display: 'swap' });
const sans = Open_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  icons: { icon: '/favicon.png' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#F8F6F2' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks that scripts run, so scroll-reveal content is never hidden without them. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <GtmHead />
      </head>
      <body>
        <GtmBody />
        {children}
        <SiteBehaviour />
      </body>
    </html>
  );
}
