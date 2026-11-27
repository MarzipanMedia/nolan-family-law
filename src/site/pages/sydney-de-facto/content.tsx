/**
 * Page sections for "sydney-de-facto", converted from export/sydney-de-facto-relationship-lawyer.html
 * by tools/convert-prototype.mjs --notes and then maintained by hand, as the Sydney divorce page:
 * the shared MidPrompt and CtaBand, the shared photo files (the 25 Bligh Street entrance from the
 * homepage's Sydney card, Tash's and Jessica's portraits, the Bligh Street rooms), Jessica's card
 * as the Sydney hub's second card, and the trust ribbon left to the footer. The "In Victoria
 * instead?" card renders only once articleDeFactoVictoria is live (D-61).
 * Copy is export/sydney-de-facto-draft-v1.md word for word; it is the approved copy:
 * change wording only with Ben's sign-off. URLs come from the routes file and office details
 * from the office config, never from this file.
 */
import { url, isLive } from '@/config/routes';
import { offices } from '@/config/offices';
import { PhoneLink } from '@/components/PhoneLink';
import { ReviewNote } from '@/components/ReviewNote';
import { MidPrompt } from '@/components/MidPrompt';
import { CtaBand } from '@/components/CtaBand';
import { Picture } from '@/components/Picture';
import { images } from '@/site/images';

export function Content() {
  return (
    <>

    {/* ── Hero ── */}
    <section data-screen-label="Hero" style={{ background: "#F8F6F2" }}>
      <div data-hero-grid="true" style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 24px 72px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "64px", alignItems: "start" }}>
        <div style={{ minWidth: "0" }}>
          <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "26px" }}>
            {"Sydney · De facto relationships"}
          </div>
          <h1 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(40px, 5.4vw, 72px)", lineHeight: "1.06", letterSpacing: "-0.015em", color: "#1A2E40", margin: "0 0 26px", maxWidth: "17ch", textWrap: "pretty" }}>
            {"De facto relationship lawyers in Sydney"}
          </h1>
          <p data-reveal="true" style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0 0 20px", textWrap: "pretty" }}>
            {"You lived together, built a home and perhaps a family, but you never married. Now the relationship is over and you are not sure what the law sees: whether you count as a couple at all, what you might be entitled to, or what your former partner could claim from you."}
          </p>
          <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "0 0 38px", maxWidth: "56ch" }}>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"The uncertainty is understandable, and it can be costly. Whether you were in a de facto relationship is a question of evidence, not paperwork, and a property or maintenance claim generally has to be made within two years of separating. People who wait for things to settle down sometimes find that the time has gone."}
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"We help you work out where you stand and settle things properly, by agreement wherever possible. Our Sydney team works from Bligh Street, led by Principal Tash Nolan, who is recognised in Doyle's Guide 2026 among the Leading Family & Divorce Lawyers in Sydney."}
            </p>
          </div>
          <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <a href="#book" data-pick-topic="defacto" data-press="true" data-cta-position="hero" style={{ background: "#B4552F", color: "#FFFFFF", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", textDecoration: "none" }}>
              {"Talk to us"}
            </a>
            {" "}
            <PhoneLink office="sydney" location="body" position="hero" data-press="true" data-cta-position="hero" style={{ border: "1px solid #BFC8D2", color: "#1A2E40", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", background: "rgba(248,246,242,0.6)", textDecoration: "none" }}>
              {"Call "}
              {offices.sydney.phoneDisplay}
            </PhoneLink>
          </div>
          <ReviewNote>{"SEO · Title tag \"De Facto Relationship Lawyers Sydney | Nolan Family Law\", 55 characters (Ben, 27 Nov): \"relationship lawyer(s) sydney\" wording leads Search Console (about 2,000 impressions a year each for plural and singular, positions 9 to 10), ahead of \"de facto lawyer(s) sydney\". Baseline: D-60 and sydney-de-facto-gsc-baseline.csv. The homepage \"Separation & Divorce\" card gains a link here, \"De facto relationship lawyers in Sydney\"; the homepage title and H1 are unchanged."}</ReviewNote>
        </div>
        <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div data-clip="true" style={{ overflow: "hidden", borderRadius: "3px", aspectRatio: "4 / 3.6", maxHeight: "560px", background: "#E8E4DC" }}>
            <img data-hero-img="true" src="/images/entrance-to-25-bligh-street-sydney-552a47f9.webp" width={768} height={512} alt={`The entrance to ${offices.sydney.streetShort}, Sydney, where our Sydney office is`} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%" }} fetchPriority="high" decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 100px), 1fr))", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Same court, same principles"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"As for married couples"}
              </div>
            </div>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Two years from separation to apply"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"The deadline that matters most"}
              </div>
            </div>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Bligh Street or by video"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"Sydney CBD, or wherever you are"}
              </div>
            </div>
          </div>
          <ReviewNote>{"IMAGE · The 25 Bligh Street entrance (public/images/entrance-to-25-bligh-street-sydney-552a47f9.webp), used today only in the homepage's Sydney card and never as a hero; not the lobby (divorce) or the glass-walled rooms (property). CHECK · Ben: the source file is 768 × 512, so it may look soft at this size on large screens; a larger original can be swapped in place. The three fact-strip sub-lines are new copy; the draft gave the headings only. LEGAL REVIEW · Tash: \"two years from separation\" (section 44(5) runs from the end of the relationship)."}</ReviewNote>
        </div>
      </div>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px 72px" }}>

        {/* ── Breadcrumb and byline ── */}
        <nav aria-label="Breadcrumb" data-screen-label="Breadcrumb and byline" data-reveal="true" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "14px", color: "#4A5A66", paddingBottom: "28px", marginBottom: "40px", borderBottom: "1px solid #E8E4DC" }}>
          <a href={url("home")} style={{ color: "#4A5A66" }}>
            {"Home"}
          </a>
          <span aria-hidden="true">
            {"/"}
          </span>
          {" "}
          <a href={url("sydneyHub")} style={{ color: "#4A5A66" }}>
            {"Sydney"}
          </a>
          <span aria-hidden="true">
            {"/"}
          </span>
          {" "}
          <span aria-current="page" style={{ color: "#1A2E40" }}>
            {"De facto relationships"}
          </span>
          {" "}
          <span style={{ flex: "1 1 auto" }} />
          {" "}
          <span style={{ color: "#4A5A66" }}>
            {"Written and reviewed by "}
            <a href={url("profile:tash-nolan")} style={{ color: "#1A2E40", fontWeight: "600" }}>
              {"Tash Nolan"}
            </a>
            {", Principal · Updated November 2026"}
          </span>
        </nav>
        <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(26px, 3.2vw, 36px)", lineHeight: "1.2", color: "#1A2E40", margin: "0 0 40px", maxWidth: "30ch", textWrap: "pretty" }}>
          {"Clear answers on where you stand when a relationship ends without a marriage."}
        </h2>

        {/* ── Quick answer ── */}
        <aside aria-labelledby="quick-answer" data-screen-label="Quick answer" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "20px 56px", padding: "40px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "14px" }}>
              {"Quick answer"}
            </div>
            <h3 id="quick-answer" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0", textWrap: "pretty" }}>
              {"How do de facto relationships work in NSW?"}
            </h3>
          </div>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "62ch", textWrap: "pretty" }}>
            {"In NSW, a de facto relationship is a couple who are not married to each other and not related by family, living together on a genuine domestic basis. There is no minimum period to be de facto, but to apply for property or maintenance orders you generally need a relationship of at least two years in total, a child together, substantial contributions that would otherwise go unrecognised, or a relationship registered in NSW. For couples who separated on or after 1 March 2009, these claims are decided under the federal Family Law Act 1975 by the Federal Circuit and Family Court of Australia, on the same principles as for married couples. An application must generally be made within two years of separating. Nolan Family Law & Mediation advises from "}
            {offices.sydney.streetShort}
            {", Sydney."}
          </p>
        </aside>
        <ReviewNote>{"LEGAL REVIEW · Tash: every sentence, especially section 4AA(1) as paraphrased, section 90SB as summarised (\"substantial contributions that would otherwise go unrecognised\" for 90SB(c)), the 1 March 2009 start, and section 44(5). CHECK · Ben: the heading \"How do de facto relationships work in NSW?\" is new copy; the draft had none for this slot."}</ReviewNote>
      </div>
    </section>

    {/* ── Accreditations ── */}
    <section data-screen-label="Accreditations" style={{ background: "#FEFDFB", borderTop: "1px solid #E8E4DC", borderBottom: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "56px 24px" }}>
        <div data-reveal="true" style={{ textAlign: "center", fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "32px" }}>
          {"Recognised and accredited"}
        </div>
        <div data-badge-grid="true" style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0,1fr))", alignItems: "center", gap: "32px 32px" }}>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0" }}>
            <img src="/images/doyle-s-guide-to-the-australian-legal-profession-58751f82.webp" width={716} height={156} alt="Doyle's Guide to the Australian Legal Profession" loading="lazy" style={{ display: "block", height: "34px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0" }}>
            <img src="/images/member-of-the-law-society-of-new-south-wales-bfd9c30a.webp" width={300} height={128} alt="Member of the Law Society of New South Wales" loading="lazy" style={{ display: "block", height: "56px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0" }}>
            <img src="/images/law-council-of-australia-85fce8e6.webp" width={200} height={200} alt="Law Council of Australia" loading="lazy" style={{ display: "block", height: "72px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0" }}>
            <img src="/images/family-law-section-law-council-of-australia-325d03d2.webp" width={300} height={111} alt="Family Law Section, Law Council of Australia" loading="lazy" style={{ display: "block", height: "48px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0" }}>
            <img src="/images/australian-association-of-collaborative-professi-1aeae6fe.webp" width={216} height={70} alt="Australian Association of Collaborative Professionals" loading="lazy" style={{ display: "block", height: "44px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0" }}>
            <img src="/images/collaborative-professionals-nsw-act-inc-f740a8a4.webp" width={408} height={156} alt="Collaborative Professionals (NSW & ACT) Inc" loading="lazy" style={{ display: "block", height: "56px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
        </div>
      </div>
    </section>

    {/* ── How can we help you ── */}
    <section id="help" data-screen-label="How can we help you" data-section="true" style={{ background: "#F8F6F2" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "120px 24px" }}>
        <div data-reveal="true" style={{ marginBottom: "48px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
            {"How can we help you?"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 20px", maxWidth: "24ch", textWrap: "pretty" }}>
            {"Where are you up to?"}
          </h2>
          <p style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0", textWrap: "pretty" }}>
            {"Choose whichever sounds most like you. Each one takes you to the part of this page that matters most right now."}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "24px" }}>
          <a href="#status" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"I'm not sure we count as de facto"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"What the court looks at, and what it doesn't."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#claim" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"We were together less than two years"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"The exceptions to the two year rule."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#property" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"We've separated and need to sort out property"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"How it works, and what changed in 2025."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#evidence" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"My former partner says we were never a couple"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Proving the relationship and the dates."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#book" data-pick-topic="defacto" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"I'm leaving a relationship that doesn't feel safe"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"In an emergency, call 000. Then talk to us in confidence."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#book" data-pick-topic="defacto" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"I'd rather talk it through"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Tell us a little and we will call you."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
        </div>
        <ReviewNote>{"CHECK · Ben: card 5 follows the child custody page's safety card (\"In an emergency, call 000\"). If Chad would like 1800RESPECT (1800 737 732) named as well, it fits the same line."}</ReviewNote>
      </div>
    </section>

    {/* ── Guide ── */}
    <div data-screen-label="Guide" style={{ background: "#FEFDFB", borderTop: "1px solid #CFE0EA", borderBottom: "1px solid #CFE0EA" }}>
      <div data-article-grid="true" style={{ maxWidth: "1240px", margin: "0 auto", padding: "48px 24px 72px", display: "grid", gap: "64px", alignItems: "start" }}>
        <aside data-toc-aside="true" aria-label="On this page" style={{ position: "sticky", top: "112px", flexDirection: "column", gap: "18px", paddingTop: "72px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C" }}>
            {"On this page"}
          </div>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            <a href="#status" data-toc-link="status" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Are we de facto?"}
            </a>
            {" "}
            <a href="#whichlaw" data-toc-link="whichlaw" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Which law applies"}
            </a>
            {" "}
            <a href="#claim" data-toc-link="claim" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Less than two years"}
            </a>
            {" "}
            <a href="#evidence" data-toc-link="evidence" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Proving it, and the dates"}
            </a>
            {" "}
            <a href="#property" data-toc-link="property" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Property"}
            </a>
            {" "}
            <a href="#deadline" data-toc-link="deadline" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"The deadline"}
            </a>
            {" "}
            <a href="#maintenance" data-toc-link="maintenance" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Maintenance"}
            </a>
            {" "}
            <a href="#children" data-toc-link="children" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Children"}
            </a>
            {" "}
            <a href="#agreements" data-toc-link="agreements" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Agreements"}
            </a>
            {" "}
            <a href="#wills" data-toc-link="wills" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Wills"}
            </a>
            {" "}
            <a href="#how" data-toc-link="how" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"How we help"}
            </a>
            {" "}
            <a href="#faq" data-toc-link="faq" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Questions"}
            </a>
          </nav>
        </aside>
        <div style={{ minWidth: "0" }}>
          <details data-toc-inline="true" data-reveal="true" style={{ margin: "24px 0 0", border: "1px solid #E8E4DC", borderRadius: "3px", background: "#F8F6F2" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "18px 22px", fontSize: "15px", fontWeight: "600", color: "#1A2E40" }}>
              {"On this page"}
              <span data-faq-plus="true" aria-hidden="true" style={{ fontSize: "20px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <nav style={{ display: "flex", flexDirection: "column", padding: "0 22px 18px" }}>
              <a href="#status" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Are we de facto?"}
              </a>
              {" "}
              <a href="#whichlaw" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Which law applies"}
              </a>
              {" "}
              <a href="#claim" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Less than two years"}
              </a>
              {" "}
              <a href="#evidence" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Proving it, and the dates"}
              </a>
              {" "}
              <a href="#property" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Property"}
              </a>
              {" "}
              <a href="#deadline" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"The deadline"}
              </a>
              {" "}
              <a href="#maintenance" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Maintenance"}
              </a>
              {" "}
              <a href="#children" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Children"}
              </a>
              {" "}
              <a href="#agreements" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Agreements"}
              </a>
              {" "}
              <a href="#wills" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Wills"}
              </a>
              {" "}
              <a href="#how" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"How we help"}
              </a>
              {" "}
              <a href="#faq" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Questions"}
              </a>
            </nav>
          </details>

          {/* ── Are we de facto ── */}
          <section id="status" data-screen-label="Are we de facto" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Are we in a de facto relationship?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"De facto, sometimes written defacto, is the law's word for a couple who live together without marrying. Many matters begin with the question of whether you were one, and it often surprises people that the law has no simple test. Under section 4AA of the Family Law Act, you are in a de facto relationship if you are not married to each other, are not related by family, and, having regard to all the circumstances, have a relationship as a couple living together on a genuine domestic basis."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"To decide that, the court looks at the whole of the relationship. The Act lists the circumstances it may weigh: how long you were together; whether and how you lived together; whether there was a sexual relationship; how financially dependent or interdependent you were, and how you supported each other; how you owned, used and bought property; how committed you were to a shared life; whether the relationship was registered; whether you cared for children together; and how you presented yourselves to family, friends and the wider world. No single factor decides it, and none is essential. A couple who kept separate bank accounts can still be de facto, and so can a couple who spent some weeks apart for work."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Two points catch people out. You do not need to have been together for two years to be in a de facto relationship; two years matters for whether you can apply to the court, which is a separate question (see below). And you can be in a de facto relationship with one person while still legally married to someone else, or while in another de facto relationship. The law applies equally to same sex and opposite sex couples."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The Family Law Act test is also not the only one. Centrelink, the immigration system and the NSW laws on wills and estates each use their own rules, so being treated as a couple by one does not settle the question for another. Where the existence of the relationship is in dispute, the court can make a declaration that it did or did not exist, and for how long."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"De facto status depends on the whole relationship, not one fact. There is no minimum period to be de facto, and the Family Law Act test differs from Centrelink's and immigration's."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 4AA(1), (2) and (3) as paraphrased (the nine circumstances, \"no particular finding ... is necessary\"); section 4AA(5) on same sex couples and on a concurrent marriage or other de facto relationship; the separate tests (Social Security Act 1991 section 4(3), Migration Regulations 1994 regulation 1.09A, the NSW Interpretation Act 1987 section 21C and the Property (Relationships) Act 1984); declarations under section 90RD. \"A couple who spent some weeks apart for work\" should not overstate the cases."}</ReviewNote>
          </section>

          {/* ── Which law applies ── */}
          <section id="whichlaw" data-screen-label="Which law applies" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Which law applies to us in New South Wales?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"For almost every couple who separates today, the answer is the federal Family Law Act 1975. New South Wales referred its powers over the financial side of de facto relationships to the Commonwealth, and from 1 March 2009 de facto property and maintenance claims have been heard in the same federal court, and decided on the same principles, as claims between married couples. Parenting matters were already federal before then."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"If you separated before 1 March 2009, your claim falls under the NSW Property (Relationships) Act 1984 instead, unless you both chose in writing to come under the federal Act. That Act also still covers some relationships the federal law does not, such as close personal relationships between two adults who live together where one cares for the other."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The federal Act also asks for a connection with a participating state or territory, which NSW is. In practice that is met if either of you lives here when the application is made and either you both lived in a participating jurisdiction for at least a third of the relationship, the applicant made substantial contributions in one, or you were living in one when the relationship broke down. If one of you has moved interstate or overseas, it is worth checking this early."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"If you separated on or after 1 March 2009, federal law applies, with a connection to NSW or another participating state. Earlier separations fall under NSW law."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: the referral (Commonwealth Powers (De Facto Relationships) Act 2003 (NSW)) and the 1 March 2009 commencement; the Property (Relationships) Act 1984 (NSW) for earlier separations and the opt-in under section 86A of the Family Law Act; close personal relationships under the NSW Act; section 90SK(1) and (1A) as paraphrased (and section 90SD for maintenance)."}</ReviewNote>
          </section>

          {/* ── Can I make a claim ── */}
          <section id="claim" data-screen-label="Can I make a claim" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Can I make a claim if we were together less than two years?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Often, yes. Before the court can make property or maintenance orders, section 90SB of the Act requires at least one of four things:"}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              <strong>
                {"The relationship lasted at least two years in total."}
              </strong>
              {" Separate periods together can be added up, so a break and a reconciliation does not necessarily restart the count."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              <strong>
                {"There is a child of the relationship."}
              </strong>
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              <strong>
                {"You made substantial contributions, financial or otherwise, including as a homemaker or parent, and failing to make an order would result in serious injustice."}
              </strong>
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              <strong>
                {"The relationship was registered under a law of a state or territory, such as the NSW Relationships Register Act 2010."}
              </strong>
              {" In NSW, registration is made through NSW Registry of Births, Deaths and Marriages."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"If none of these applies, the court cannot divide property under the Family Law Act, however unfair the result may feel, although other legal routes may sometimes be available, such as a claim to jointly owned property under general law. If one of them does apply, it opens the door; it does not say what the outcome will be. That is decided separately (see the next section on property)."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"You need two years together in total, a child, substantial contributions with serious injustice, or a registered relationship. Meeting one opens the door, not the outcome."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 90SB(a) to (d), including the \"period, or the total of the periods\" wording and the \"serious injustice\" test in (c); NSW registration through Births, Deaths and Marriages; the general law sentence (trusts, partition of jointly owned land); whether to add that the gateways also apply to maintenance and to sections 90SL and 90SM. Format: the four gateways are four short paragraphs with a bold opening sentence, the divorce page's pattern, not bullets."}</ReviewNote>
          </section>

          {/* ── Proving it and the dates ── */}
          <section id="evidence" data-screen-label="Proving it and the dates" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How do we prove the relationship, and when it ended?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"When couples disagree about whether they were de facto, or for how long, it is the dates that usually matter most. The start date decides whether you reach two years in total. The end date starts the two year time limit for applying to the court. A difference of a few months either way can decide whether a claim can be made at all."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The evidence people gather is usually ordinary: leases and mortgage documents in both names, joint bank accounts and shared bills, insurance and superannuation nominations, Centrelink or tax records that list a partner, travel and photographs, messages and cards, and the accounts of family and friends who saw you as a couple. No single document proves a de facto relationship, and none is required. What persuades the court is a consistent picture over time."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Separation is proven the same way. It happens when one of you decides the relationship is over and makes that clear, by words or actions, and it can happen while you still live under one roof. If you are separating now, note the date, keep a copy of any message that marks it, and record changes such as moving to a separate room or separating your finances."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"The dates decide eligibility and the deadline, so gather consistent, everyday evidence of when the relationship began and ended."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: the examples of evidence; superannuation and Centrelink records as evidence; separation under one roof for de facto couples (the end of the relationship under section 4AA and the case law); \"no single document ... none is required\"."}</ReviewNote>
          </section>

          {/* ── Mid-page prompt ── */}
          <MidPrompt office="sydney" img={images.tashSmall} objectPosition="50% 12%" eyebrow="Every situation is different" text="A first conversation can show you whether you have a claim, and how long you have to make it." cta="Talk to us" phonePrefix="or call " topic="defacto" />
          <ReviewNote>{"TEMPLATE · Mid-page prompt (D-31), as on the prenup page. One per page, after the evidence section, before property. Links carry data-cta-position=\"mid\" and set the form topic to De facto."}</ReviewNote>

          {/* ── Property ── */}
          <section id="property" data-screen-label="Property" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How is property divided when a de facto relationship ends?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"In the same way as for married couples. The court identifies everything you own and owe, together and separately, including superannuation, which can be split for de facto couples too. It then looks at what each of you contributed, financially and otherwise, during the relationship and since; at your current and future circumstances, such as age, health, earning capacity and the care of children; and at whether the overall result is just and equitable. There is no automatic equal split, and who holds legal title to an asset does not decide who keeps it."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The law changed on 10 June 2025, for de facto couples as much as married ones. The court must now consider the economic effect of family violence, including financial abuse, on each person's contributions and circumstances. It can take into account the need to provide a home for children under 18. Family pets are now treated as companion animals, with their own list of considerations. And the duty to give full and frank financial disclosure is written into the Act itself."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Our page on "}
              <a href={url("sydneyProperty")} style={{ fontWeight: "600" }}>
                {"property settlement in Sydney"}
              </a>
              {" explains the process in detail, including valuations, superannuation splitting and consent orders."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"De facto property is divided on the same principles as for married couples, including the June 2025 changes on family violence, children's housing and pets."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 90SM as amended by the Family Law Amendment Act 2024 (the four considerations in place of the old steps); section 90SM(4) contributions including the express reference to family violence; section 90SF(3) as now framed, including housing needs of children; the companion animal provisions as they apply to de facto parties; the statutory duty of disclosure (section 71B and the de facto equivalent); superannuation splitting for de facto couples in participating jurisdictions (Part VIIIB)."}</ReviewNote>
          </section>

          {/* ── The deadline ── */}
          <section id="deadline" data-screen-label="The deadline" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How long do we have to apply?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Generally two years from the end of the relationship, for both property and maintenance. After that you need the court's permission to apply, which is given only in limited circumstances, so it is far safer to settle well before the deadline or to file in time. Our Sydney hub explains "}
              <a href={url("sydneyHub", "timelimits")} style={{ fontWeight: "600" }}>
                {"how the time limits work after separation"}
              </a>
              {", including the different rule for married couples."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"You generally have two years from separation to apply, and late applications need the court's permission."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 44(5) and leave under section 44(6) (hardship to the applicant or a child, or, for maintenance, inability to support oneself); \"only in limited circumstances\". The anchor #timelimits matches the Sydney hub's section id."}</ReviewNote>
          </section>

          {/* ── Maintenance ── */}
          <section id="maintenance" data-screen-label="Maintenance" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Can a former de facto partner be asked to support the other?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Yes, in some cases. If one of you cannot adequately support yourself, for example because you are caring for a young child, because of your age or health, or because you left paid work during the relationship, the court can order the other to contribute to your support, provided they can reasonably afford it. The same gateway requirements and the same two year time limit apply."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Maintenance is separate from child support, which is usually assessed by Services Australia. Our articles on "}
              <a href={url("article:understanding-spousal-maintenance")} style={{ fontWeight: "600" }}>
                {"understanding spousal maintenance"}
              </a>
              {" and "}
              <a href={url("article:do-i-have-to-pay-spousal-maintenance")} style={{ fontWeight: "600" }}>
                {"whether you have to pay it"}
              </a>
              {" explain more."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"A former partner who can afford it may have to help support one who cannot. The same two year limit applies."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 90SE and the matters in section 90SF(3); section 90SB applying to maintenance; the two year limit in section 44(5)(b); child support through Services Australia under the Child Support (Assessment) Act 1989."}</ReviewNote>
          </section>

          {/* ── Children ── */}
          <section id="children" data-screen-label="Children" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What about our children?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Nothing about parenting depends on whether you were married. The same law applies to every child, with the child's best interests as the paramount consideration, and the two year rule does not apply: parenting arrangements can be agreed or decided at any time while a child is under 18. Most separated parents agree arrangements in a parenting plan or consent orders, often with the help of mediation. Our page on "}
              <a href={url("sydneyChildCustody")} style={{ fontWeight: "600" }}>
                {"child custody in Sydney"}
              </a>
              {" explains how parenting arrangements are made and made formal."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Parenting arrangements work the same way whether or not you were married, and have no two year deadline."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: Part VII applying regardless of the parents' relationship; section 60CA; no time limit for parenting matters."}</ReviewNote>
          </section>

          {/* ── Agreements ── */}
          <section id="agreements" data-screen-label="Agreements" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Can we agree without going to court?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Yes, and most couples do. An agreement about property becomes binding in one of two ways. You can apply to the court for consent orders, which a registrar approves if the arrangement is just and equitable. Or you can sign a financial agreement under Part VIIIAB of the Act, which requires each of you to receive independent legal advice before signing. Agreements reached informally, or by an exchange of emails, are not binding and can leave both of you exposed."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Couples who are moving in together, or already living together, can also make a financial agreement before or during the relationship. Our page on "}
              <a href={url("sydneyPrenups", "defacto")} style={{ fontWeight: "600" }}>
                {"prenups and binding financial agreements in Sydney"}
              </a>
              {" explains how that works for de facto couples, and how it fits with registering your relationship."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Make an agreement binding by consent orders or a financial agreement. Informal agreements leave you exposed."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: consent orders under section 90SM; financial agreements under sections 90UB to 90UD, and section 90UJ (independent advice and the statements of advice); \"not binding\" for informal agreements. Link anchor #defacto matches the Sydney prenup page's section id."}</ReviewNote>
          </section>

          {/* ── Wills ── */}
          <section id="wills" data-screen-label="Wills" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Does separating change my will?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Not automatically. In New South Wales, the end of a de facto relationship does not revoke a will or cancel a gift to a former partner, so a will made during the relationship can still leave everything to them. When you separate, review your will, your superannuation death benefit nominations and any powers of attorney."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"In NSW, separating from a de facto partner does not change your will. Update it yourself."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: Succession Act 2006 (NSW): section 12 (marriage) and section 13 (divorce and annulment only), and no equivalent for the end of a de facto relationship; superannuation nominations and enduring powers of attorney as practical reminders."}</ReviewNote>
          </section>

          {/* ── How we help ── */}
          <section id="how" data-screen-label="How we help" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How do we help de facto couples?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Most of our de facto work begins with the questions on this page: whether a relationship counts, whether a claim can be made, and how long is left to make it. We look at the facts and the documents with you, give you a clear view of where you stand, and then help you settle property, superannuation and any maintenance, by negotiation or mediation wherever possible."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Where agreement is reached, we make it binding with consent orders or a financial agreement. Where the existence or length of the relationship is disputed, or a deadline is close, we prepare the evidence and, if it comes to it, the court application. We also act for people whose former partner has made a claim against them."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"If you are leaving a relationship that doesn't feel safe, you can talk to us in confidence, and we will move at a pace that suits you. You will know from the start what we recommend, what it involves, and how our fees work."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"We help you find out where you stand, then settle things by agreement first, and go to court only when that is what it takes."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: the list of services; \"we also act for people whose former partner has made a claim\". CHECK · Ben, Chad: the safety sentence and its tone; that the firm acts for respondents in de facto disputes. No fees or figures (D-02)."}</ReviewNote>
          </section>
        </div>
      </div>
    </div>

    {/* ── Your lawyers ── */}
    <section data-screen-label="Your lawyers" data-section="true" style={{ background: "#F8F6F2", borderTop: "1px solid #CFE0EA" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "120px 24px" }}>
        <div data-reveal="true" style={{ marginBottom: "48px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
            {"Who you would be working with"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0", maxWidth: "24ch", textWrap: "pretty" }}>
            {"Your de facto relationship lawyers in Sydney"}
          </h2>
        </div>
        <div data-person="true" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "148px minmax(0,1fr)", gap: "32px", alignItems: "start", maxWidth: "860px", padding: "34px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <img src={images.tashSmall.src} width={images.tashSmall.width} height={images.tashSmall.height} alt="Tash Nolan, Principal at Nolan Family Law and Mediation" loading="lazy" style={{ display: "block", width: "148px", height: "148px", borderRadius: "3px", objectFit: "cover", objectPosition: "50% 20%" }} decoding="async" />
          <div style={{ minWidth: "0" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 6px" }}>
              {"Tash Nolan"}
            </h3>
            <div style={{ fontSize: "15px", fontWeight: "600", color: "#3A6D8C", marginBottom: "18px" }}>
              {"Principal · Sydney office"}
            </div>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 14px", maxWidth: "58ch" }}>
              {"Tash has practised for nearly 17 years and leads the firm's Sydney office at "}
              {offices.sydney.streetShort}
              {". Her family law work runs from straightforward divorce and property matters to complex, high net-worth financial disputes involving family companies, trusts and superannuation, as well as parenting matters. She holds a Master of Applied Law in Family Law and is a Nationally Accredited Mediator. In Doyle's Guide 2026 she is recognised, for the fourth year running, among the Leading Family & Divorce Lawyers in Sydney, and in two further categories: Leading Parenting & Children's Matters and Leading Family Lawyers for High Net-Worth and Complex Financial Matters."}
            </p>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0" }}>
              <a href={url("profile:tash-nolan")} style={{ fontWeight: "600" }}>
                {"Read Tash's profile"}
              </a>
              {" · "}
              <a href={url("team")} style={{ fontWeight: "600" }}>
                {"See everyone at the firm"}
              </a>
            </p>
          </div>
        </div>
        <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "72px minmax(0,1fr)", gap: "22px", alignItems: "center", maxWidth: "860px", marginTop: "20px", padding: "24px 34px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <Picture img={images.jessica} alt="Jessica Swain, Partner" sizes="72px" style={{ display: "block", width: "72px", height: "72px", borderRadius: "3px", objectFit: "cover", objectPosition: "50% 15%", background: "#DCE9F0" }} />
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#2C3E50", margin: "0" }}>
            <a href={url("profile:jessica-swain")} style={{ fontWeight: "600" }}>
              {"Jessica Swain"}
            </a>
            {", Partner. Jessica works alongside Tash in Sydney, where she has practised family law since 2016. Her work covers complex property and parenting matters, spousal maintenance and child support, and she is a Nationally Accredited Mediator. Her psychology degree helps her guide clients through the emotional side of separation as well as the legal one."}
          </p>
        </div>
        <ReviewNote>{"CHECK · Ben, Chad: both cards reuse the divorce page's wording unchanged, which the twin test excludes as a shared template block. Jessica's card wording is still open on the divorce page; settle it once for both. Wording follows D-05."}</ReviewNote>
      </div>
    </section>

    {/* ── Location toggle and related reading ── */}
    <section data-screen-label="Location toggle and related reading" data-section="true" style={{ background: "#FEFDFB", borderTop: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 24px" }}>
        {isLive("articleDeFactoVictoria") && (<a href={url("articleDeFactoVictoria")} data-card="true" data-reveal="true" data-location-toggle="true" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "18px 32px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px 34px", color: "#1A2E40", textDecoration: "none", marginBottom: "20px" }}>
          <span style={{ minWidth: "0" }}>
            <span style={{ display: "block", fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
              {"In Victoria instead?"}
            </span>
            {" "}
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "24px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Read about de facto property rights in Victoria"}
            </span>
            {" "}
            <span style={{ display: "block", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66", marginTop: "6px" }}>
              {"De facto property claims work the same way under federal law, but some Victorian rules differ."}
            </span>
          </span>
          {" "}
          <span data-arrow="true" aria-hidden="true" style={{ fontSize: "20px", color: "#3A6D8C" }}>
            {"→"}
          </span>
        </a>)}
        <ReviewNote>{"CHECK · Ben: rendered only when articleDeFactoVictoria is live (D-28; draft 15996 is still being reworked and the slug is \"proposed, confirm\" in REDIRECT-MAP.csv). About 730 impressions a year on this page are Melbourne suburb searches at positions 25 to 75; this sends them to their own page rather than chasing them here. Component: the hubs' location toggle card (data-location-toggle), unchanged; the heading line is the draft's link text."}</ReviewNote>
        <div style={{ height: "56px" }} />
        <div data-reveal="true" style={{ marginBottom: "32px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
            {"Related reading"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(28px, 3.4vw, 38px)", lineHeight: "1.2", color: "#1A2E40", margin: "0", maxWidth: "24ch", textWrap: "pretty" }}>
            {"More on de facto relationships and separation"}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "24px" }}>
          <a href={url("article:the-family-court-and-de-facto-relationships")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"The Family Court and de facto relationships"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"How de facto cases run in court"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("article:understanding-spousal-maintenance")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Understanding spousal maintenance"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"When one former partner supports the other"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("sydneyHub")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Separation and family law in Sydney"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"What to do after separating, and the time limits"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("sydneyProperty")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Property settlement in Sydney"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Dividing property, super and debts"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("sydneyChildCustody")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Child custody in Sydney"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Parenting arrangements, agreed or decided"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("sydneyMediation")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Family law mediation in Sydney"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Reaching agreement with help, out of court"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
        </div>
        <ReviewNote>{"CHECK · Ben: the related reading heading and the six card sub-lines are new copy; the draft gave titles only. CHECK · Ben: /the-family-court-and-de-facto-relationships/ gets one link back to this page with the anchor \"de facto relationship lawyers in Sydney\" (D-12 pattern), added by Claude Code during import. It ranks for informational searches (\"definition of de facto incapacity\", \"opposite of de facto\"); this page takes the commercial ones."}</ReviewNote>
      </div>
    </section>

    {/* ── Rooms image ── */}
    <section data-screen-label="Rooms image" style={{ background: "#FEFDFB", borderTop: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0" }}>
        <div data-clip="true" style={{ overflow: "hidden", aspectRatio: "2 / 1", maxHeight: "520px", background: "#E8E4DC" }}>
          <img src="/images/meeting-rooms-at-25-bligh-street-sydney-where-we-c1e5d7b5.webp" width={1300} height={650} alt={`Meeting rooms at ${offices.sydney.streetShort}, Sydney, where clients meet with us about separation and de facto relationships`} loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} decoding="async" />
        </div>
      </div>
    </section>

    {/* ── FAQ ── */}
    <section id="faq" data-screen-label="FAQ" data-section="true" data-toc-section="true" style={{ background: "#F8F6F2", borderTop: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "120px 24px" }}>
        <div data-reveal="true" style={{ marginBottom: "40px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
            {"Questions people ask us"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0", maxWidth: "24ch", textWrap: "pretty" }}>
            {"De facto questions, answered plainly"}
          </h2>
        </div>
        <div style={{ maxWidth: "860px", borderTop: "1px solid #E8E4DC" }}>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"How long do you have to live together to be de facto in NSW?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"There is no minimum period. Whether you were de facto depends on the whole relationship. Two years matters for a different question: it is one of the ways to qualify to apply to the court for property or maintenance orders."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"We were together for less than two years. Can I still make a claim?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Possibly. You can still apply if you have a child together, if you made substantial contributions and it would be a serious injustice not to make orders, or if your relationship was registered in NSW. Periods together can also be added up."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Is my former partner entitled to half of everything?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"No. There is no automatic equal split for de facto or married couples. The court looks at what each of you contributed and at your future needs, and the result must be just and equitable, which may or may not be close to half."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Can we be de facto if we didn't always live together?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Sometimes. Living together is one of several circumstances the court weighs, and short periods apart, for work or family reasons, do not necessarily end a relationship. Couples who never shared a home at all will usually find it much harder to show a de facto relationship."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Can I be in a de facto relationship while still married to someone else?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes. The Family Law Act allows a de facto relationship to exist even if one of you is still legally married to another person, or in another de facto relationship at the same time."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"My former partner says we were never a couple. What happens now?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"The court decides on the evidence, and it can declare whether a de facto relationship existed and for how long. Gather documents that show a shared life over time, and keep a note of the dates it began and ended."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Does registering our relationship in NSW make a difference?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes. A relationship registered under the NSW Relationships Register Act 2010 meets the requirement to apply for property orders, however long it lasted. Registration is made through NSW Registry of Births, Deaths and Marriages."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Is the Centrelink definition of de facto the same?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"No. Centrelink, immigration and the Family Law Act each apply their own test. Being treated as a couple by Centrelink can be useful evidence, but it does not decide the question under family law."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Do I have to support my former de facto partner?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Only if they cannot adequately support themselves and you can reasonably afford to contribute. The court must make the order, and the application must generally be made within two years of separating."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Who keeps the dog when a de facto couple separates?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Since 10 June 2025, the court treats family pets as companion animals, with their own considerations, such as each person's and the children's attachment to the animal and any history of cruelty. It cannot order shared ownership."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Does separating from my de facto partner cancel my will in NSW?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"No. In NSW only marriage, divorce and annulment change a will automatically. A gift to a former de facto partner stays in place until you change it, so review your will and superannuation nominations when you separate."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"What does a de facto lawyer cost?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"It depends on what you need, from advice on whether you have a claim to a full property settlement, so we do not publish a price list. We explain how our fees work at the first meeting and confirm them in writing before we start. "}
              <a href="#book" data-pick-topic="fees" style={{ fontWeight: "600" }}>
                {"Talk to us about costs."}
              </a>
            </p>
          </details>
        </div>
        <ReviewNote>{"LEGAL REVIEW · Tash: every answer, especially \"periods together can be added up\" (90SB(a)), living apart (4AA and case law), concurrent relationships (4AA(5)(b)), declarations (90RD), NSW registration (90SB(d)), Centrelink as evidence, maintenance (90SE, 44(5)), companion animals (the factors and the bar on joint ownership or shared possession, per the Attorney-General's fact sheet), and the will answer (Succession Act sections 12 and 13). No dollar figures (D-02). None of the 12 repeats the hub's de facto FAQ (\"Do de facto couples have the same property rights as married couples in NSW?\") or its time limit FAQ. SEO · All 12 questions are in FAQPage schema, worded exactly as here."}</ReviewNote>
      </div>
    </section>

    {/* ── Consultation CTA ── */}
    <CtaBand
      office="sydney"
      heading={"Know where you stand, and how long you have."}
      lede={"Whether you have just separated, are not sure you count as a couple, or have received a claim from a former partner, a first conversation will show you where you stand. It is confidential, with no obligation."}
      promises={[
        "Run a conflict check before anything else",
        "Look at whether you were de facto, and whether a claim can be made",
        "Check the dates, and the two year deadline",
        "Tell you how our fees work, and put an estimate in writing",
      ]}
      topics={[
        ["defacto", "De facto separation and property"],
        ["status", "Whether we were in a de facto relationship"],
        ["claimed", "A former partner has made a claim against me"],
        ["children", "Arrangements for our children"],
        ["fees", "Fees and how this works"],
        ["other", "Something else"],
      ]}
      askStage
      stages={[
        ["separated", "Already separated"],
        ["considering", "Thinking about separating"],
        ["exploring", "Just exploring", true],
      ]}
      topic="defacto"
    />
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
      <ReviewNote>{"CHECK · Ben: form topic and stage options are new for this page, replacing the divorce ones. Topic is pre-selected to \"De facto separation and property\" (value defacto); add defacto, status and claimed to the enquiry topics if the form schema needs them. The hero button, the two #book routing cards and the mid-page prompt set it via pickDefacto; \"Talk to us about costs.\" sets fees. Stages: \"Already separated\" (separated), \"Thinking about separating\" (considering), \"Just exploring\" (exploring, default). Delivers to the Sydney team."}</ReviewNote>
    </div>
    </>
  );
}
