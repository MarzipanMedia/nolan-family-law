/**
 * Google Tag Manager: ONE container, from NEXT_PUBLIC_GTM_ID (the old site fired two, which
 * probably double-counted calls and page views). Loads nothing when the ID is not set.
 * TODO (Ben): which container survives (Q-12).
 */
import Script from 'next/script';

const id = process.env.NEXT_PUBLIC_GTM_ID;

export function GtmHead() {
  if (!id) return null;
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`}
    </Script>
  );
}

export function GtmBody() {
  if (!id) return null;
  return (
    <noscript>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${id}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" />
    </noscript>
  );
}
