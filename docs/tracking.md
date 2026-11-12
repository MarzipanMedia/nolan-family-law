# Tracking: what the site sends, and the GTM set-up it needs

The site loads **one** Google Tag Manager container, from `NEXT_PUBLIC_GTM_ID`. With no ID set
it loads nothing. The old site fired two containers (`GTM-5LNPVM7G` and `GTM-NRSK8FD`), which
probably counted calls and page views twice. Decide which one survives (Q-12) and remove the
other's tags from it, or start a clean container.

Enquiry form field values are confidential and are never sent to the dataLayer (D-38).

## Events pushed to the dataLayer

| Event | When | Parameters |
|---|---|---|
| `call_click` | Any tap on an office phone number | `office` (`sydney` or `melbourne`), `click_location` (`header`, `body`, `footer`), `cta_position` (`strip`, `nav`, `call-button`, `menu`, `hero`, `mid`, `contact`, `footer`, …), `page_path` |
| `enquiry_submit` | An enquiry was accepted by the server | `office`, `topic` (the option chosen, e.g. `fees`), `page_path` |
| `cta_click` | A non-phone call to action with a position | `cta_position` (`header`, `menu`, `mid`, …), `cta_target`, `page_path` |

`call_click` keeps the old site's GA4 event name, so the case-study baseline (Aug 38, Sep 17,
Oct 18) compares like with like.

## In GTM (Ben)

1. **Variables:** Data Layer Variables for `office`, `click_location`, `cta_position`, `topic`, `page_path`.
2. **Triggers:** three Custom Event triggers: `call_click`, `enquiry_submit`, `cta_click`.
3. **GA4 tags:** one GA4 Event tag per trigger, passing the parameters above. In GA4, register
   `office`, `click_location`, `cta_position` and `topic` as custom dimensions, and mark
   `call_click` and `enquiry_submit` as key events.
4. **Google Ads:** a call conversion tag on `call_click` and a lead conversion on
   `enquiry_submit`. `/thanks-enquiry/` still exists for the ads landing page `/lp/`.
5. **Google Business Profile links (launch day):** add UTM tags, for example
   `?utm_source=google&utm_medium=organic&utm_campaign=gbp-sydney` on `/` and
   `?utm_source=google&utm_medium=organic&utm_campaign=gbp-melbourne` on `/melbourne/family-law/`.
   Query strings survive every redirect (tested by `npm run test:redirects`).

## Pre-launch checklist

- [ ] One container only in the page source; the second old container is gone.
- [ ] GA4 DebugView shows `call_click` with the right `office` on a Sydney page and a Melbourne page.
- [ ] Header strip, header phone link, mobile Call button, hero, mid-page prompt, contact band and footer each report their own `cta_position`.
- [ ] `enquiry_submit` fires once per enquiry and carries no personal details.
- [ ] Google Ads call and lead conversions record (Tag Assistant).
- [ ] Test on an iPhone and an Android phone: the Call button dials the local office.
