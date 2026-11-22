/**
 * Family mediation, Melbourne: /melbourne/mediation/ (D-27, D-50).
 *
 * A stub in the generic inner-page template so the Melbourne header has a mediation
 * destination at launch (D-49). Its copy starts from the mediation section of the approved
 * Melbourne hub (export/melbourne-family-law.html), expanded enough to stand alone. A designed
 * version follows in January (D-22). It keeps "family mediation Melbourne" in the title and H1
 * so it supports the hub's page-one positions rather than competing with them.
 *
 * Rules: no Melbourne mediator is named until Q-11 is answered; no claim that the firm issues
 * section 60I certificates (D-13); no fees (D-02).
 */
import type { PageModule } from '@/site/types';
import { url, abs, articleKey, isLive, type RouteKey } from '@/config/routes';
import { offices } from '@/config/offices';
import { people } from '@/config/people';
import { graph, webPageNode, breadcrumbNode, officeNode, serviceNode, personId } from '@/lib/schema';
import { PageHero, Breadcrumb, Body, type CrumbItem } from '@/components/InnerPage';
import { CtaBand } from '@/components/CtaBand';
import { ReviewNote } from '@/components/ReviewNote';
import { PhoneLink } from '@/components/PhoneLink';

const title = 'Family Mediation Melbourne | Family Law Mediation | Nolan';
const description = 'Want to settle property or parenting arrangements without court? Our Melbourne office offers family law mediation, in person on Bourke Street or by video.';
const mel = offices.melbourne;
const trail: CrumbItem[] = [{ key: 'home' }, { key: 'melbourneHub', name: 'Melbourne' }, { key: 'melbourneMediation', name: 'Family mediation' }];

const h2 = { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(28px, 3.4vw, 38px)', lineHeight: 1.2, color: '#1A2E40', margin: '56px 0 20px', maxWidth: '26ch', textWrap: 'pretty' } as const;
const p = { fontSize: '18px', lineHeight: 1.7, color: '#2C3E50', maxWidth: '62ch', margin: '0 0 18px', textWrap: 'pretty' } as const;
const bold = { fontWeight: 600 } as const;
const A = ({ to, hash, children }: { to: RouteKey; hash?: string; children: string }) => <a href={url(to, hash)} style={bold}>{children}</a>;

function Content() {
  const prepare = articleKey('how-to-prepare-for-mediation');
  const mediator = articleKey('role-of-the-mediator');
  return (
    <>
      <PageHero eyebrow="Melbourne · Family mediation" title="Family mediation in Melbourne" lede="Reaching agreement on property and parenting without a court deciding it for you, in person at our Bourke Street office or by video from anywhere in Victoria.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '32px' }}>
          <a href="#book" data-press="true" data-cta-position="hero" data-pick-topic="mediation" style={{ background: '#B4552F', color: '#FFFFFF', fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', padding: '18px 34px', borderRadius: '2px', textDecoration: 'none' }}>Talk to us</a>
          <PhoneLink office="melbourne" location="body" position="hero" data-press="true" style={{ border: '1px solid #BFC8D2', color: '#1A2E40', fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', padding: '18px 34px', borderRadius: '2px', textDecoration: 'none' }}>
            {'Call '}{mel.phoneDisplay}
          </PhoneLink>
        </div>
      </PageHero>
      <Breadcrumb trail={trail} />
      <Body>
        <ReviewNote>LEGAL REVIEW · Tash: the whole page. It is the D-50 stub, expanded from the hub&apos;s mediation section. Q-11 · Chad: who mediates in Melbourne, and their accreditations. Name nobody until answered, and do not claim section 60I certificates (D-13).</ReviewNote>

        <h2 style={{ ...h2, marginTop: 0 }}>What is family law mediation?</h2>
        <p style={p}>Mediation brings you and your former partner, with or without lawyers, into a structured conversation led by a neutral mediator. The mediator does not take sides and does not decide anything. Their job is to keep the discussion focused, help each of you understand what the other needs, and test whether an option would actually work.</p>
        <p style={p}>It is generally quicker, less costly and more private than going to court, and you keep control of the outcome. Most family law matters in Melbourne are settled by negotiation or mediation rather than decided by a judge.</p>

        <h2 style={h2}>Does our Melbourne office offer mediation?</h2>
        <p style={p}>Yes. Our Melbourne office offers family law mediation for property and parenting matters, in person at {mel.streetShort} or by video. Video can suit people who live some distance apart, or who would rather not sit in the same room.</p>
        <p style={p}>Before a mediation goes ahead, there is a first conversation with each of you separately, to check that mediation is safe and suitable for your situation and to understand what you each want to resolve.</p>

        <h2 style={h2}>Do you have to mediate before going to court in Victoria?</h2>
        <p style={p}>Family law in Victoria is federal, so the same rules apply here as in the rest of the country. For parenting matters, you generally need to attempt family dispute resolution and obtain a certificate from a registered family dispute resolution practitioner before you can apply to the court. There are exceptions, including family violence, a risk of child abuse and genuine urgency.</p>
        <p style={p}>For property matters, there is no certificate, but the court expects you to make a genuine attempt to resolve things first. Mediation is the usual way to do that, and it is often where a settlement is reached.</p>

        <h2 style={h2}>When mediation may not be right</h2>
        <p style={p}>Where there has been family violence, or there is a serious imbalance of power between you, mediation may not be appropriate. Nobody should feel pressured into it. We will talk this through with you first, and if mediation is not the right path, we will explain the other ways forward, including negotiating through lawyers or applying to the court.</p>

        <h2 style={h2}>What happens when you reach agreement?</h2>
        <p style={p}>An agreement reached at mediation is not binding on its own. For children, it can be recorded in a parenting plan, which is flexible but not enforceable, or in consent orders approved by the court. For property, it is made final through consent orders or a binding financial agreement. We can help you choose the right one and prepare it, so the agreement you worked for holds.</p>
        <p style={p}>Read more about <A to="melbourneProperty">property settlement in Melbourne</A> or <A to="melbournePrenups">binding financial agreements in Melbourne</A>.</p>

        <h2 style={h2}>Preparing for mediation</h2>
        <p style={p}>It helps to come with a clear picture of your finances, the arrangements you would like for any children, and the points where you are willing to be flexible. Our guides on {isLive(prepare) ? <A to={prepare}>how to prepare for mediation</A> : 'how to prepare for mediation'} and {isLive(mediator) ? <A to={mediator}>the role of the mediator</A> : 'the role of the mediator'} go into more detail.</p>
        <p style={p}>For family law more broadly in Victoria, see our <A to="melbourneHub">Melbourne family law</A> page. Mediation is also available at our <A to="sydneyMediation">Sydney office</A>.</p>
      </Body>
      <CtaBand office="melbourne" topic="mediation" lede={`A first conversation is confidential and there is no obligation. Visit us at ${mel.streetShort}, Melbourne, or meet by video from anywhere in Victoria.`} />
    </>
  );
}

const anastasia = personId(people.anastasia.slug);

export const melbourneMediation: PageModule = {
  title,
  description,
  menuCta: 'Talk to us about mediation',
  schema: (key) =>
    graph(
      webPageNode(key, { title, description, dateModified: '2026-11-22', about: abs(key, 'service'), author: anastasia }),
      breadcrumbNode(key, ['home', { key: 'melbourneHub', name: 'Melbourne' }, { key, name: 'Family mediation' }]),
      officeNode('melbourne'),
      serviceNode(key, {
        name: 'Family law mediation in Melbourne',
        serviceType: 'Family law mediation',
        description: 'Family law mediation for separated couples in Victoria resolving property and parenting matters, in person at the Melbourne office or by video.',
        office: 'melbourne',
        offers: ['Property mediation', 'Parenting mediation'],
      }),
    ),
  Content,
};
