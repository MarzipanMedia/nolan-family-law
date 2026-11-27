/**
 * Page sections for "sydney-divorce", converted from export/sydney-divorce-lawyer.html
 * by tools/convert-prototype.mjs --notes and then maintained by hand: the shared MidPrompt and
 * CtaBand, the shared photo files (the homepage's lobby photo, Tash's and Jessica's portraits),
 * Jessica's card as the Sydney hub's second card, and the trust ribbon left to the footer.
 * Copy is export/sydney-divorce-draft-v1.md word for word; it is the approved copy:
 * change wording only with Ben's sign-off. URLs come from the routes file and office details
 * from the office config, never from this file.
 */
import { url } from '@/config/routes';
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
            {"Sydney · Divorce"}
          </div>
          <h1 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(40px, 5.4vw, 72px)", lineHeight: "1.06", letterSpacing: "-0.015em", color: "#1A2E40", margin: "0 0 26px", maxWidth: "17ch", textWrap: "pretty" }}>
            {"Divorce lawyers in Sydney"}
          </h1>
          <p data-reveal="true" style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0 0 20px", textWrap: "pretty" }}>
            {"You have been apart for a year or more, and the marriage is over in every way except on paper. Perhaps you want to remarry, or simply to close the chapter, and you are not sure whether a divorce will also sort out the house, the super and the children."}
          </p>
          <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "0 0 38px", maxWidth: "56ch" }}>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"It won't. A divorce order ends the marriage and nothing more. Worse, the day it takes effect starts a 12 month clock on property and spousal maintenance claims, and people who think the divorce has dealt with everything sometimes find that clock has run out."}
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"We help you apply in the right way, alone or together, and make sure the questions a divorce leaves open are settled too. Our Sydney team works from Bligh Street, led by Principal Tash Nolan, who is recognised in Doyle's Guide 2026 among the Leading Family & Divorce Lawyers in Sydney."}
            </p>
          </div>
          <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <a href="#book" data-pick-topic="divorce" data-press="true" data-cta-position="hero" style={{ background: "#B4552F", color: "#FFFFFF", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", textDecoration: "none" }}>
              {"Talk to us"}
            </a>
            {" "}
            <PhoneLink office="sydney" location="body" position="hero" data-press="true" style={{ border: "1px solid #BFC8D2", color: "#1A2E40", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", background: "rgba(248,246,242,0.6)", textDecoration: "none" }}>
              {"Call "}
              {offices.sydney.phoneDisplay}
            </PhoneLink>
          </div>
          <ReviewNote>{"SEO · Title tag is 52 characters (Ben, 27 Nov): \"divorce lawyers sydney\" (21,761 impressions, homepage position 2.4) leads the singular. H1 as approved in the draft. Baseline: D-58 and sydney-divorce-gsc-baseline.csv. The homepage \"Separation & Divorce\" card gains a second link here, \"Divorce lawyers in Sydney\"; the homepage title and H1 are unchanged."}</ReviewNote>
        </div>
        <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div data-clip="true" style={{ overflow: "hidden", borderRadius: "3px", aspectRatio: "4 / 3.6", maxHeight: "560px", background: "#E8E4DC" }}>
            <img data-hero-img="true" src="/images/lobby-of-25-bligh-street-sydney-b488661d.webp" width={1436} height={1337} alt={`The lobby of ${offices.sydney.streetShort}, Sydney, where our Sydney office is`} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%" }} fetchPriority="high" decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 100px), 1fr))", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Sole or joint applications"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"Whichever suits your situation"}
              </div>
            </div>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Property and parenting alongside"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"Nothing left unfinished"}
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
          <ReviewNote>{"IMAGE · The 25 Bligh Street lobby (public/images/lobby-of-25-bligh-street-sydney-b488661d.webp, as on the homepage), not a portrait: Tash's photo is 360px, too small for the hero. CHECK · Ben: the three fact-strip sub-lines are new copy; the draft gave the headings only."}</ReviewNote>
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
            {"Divorce"}
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
          {"Ending the marriage properly, with your property, your children and your deadlines looked after alongside it."}
        </h2>

        {/* ── Quick answer ── */}
        <aside aria-labelledby="quick-answer" data-screen-label="Quick answer" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "20px 56px", padding: "40px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "14px" }}>
              {"Quick answer"}
            </div>
            <h3 id="quick-answer" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0", textWrap: "pretty" }}>
              {"How does divorce work in NSW?"}
            </h3>
          </div>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "62ch", textWrap: "pretty" }}>
            {"In NSW, divorce comes under the federal Family Law Act 1975 and is granted by the Federal Circuit and Family Court of Australia. Either spouse, or both together, can apply once you have been separated for more than 12 months and the marriage has broken down with no reasonable likelihood of you getting back together. One of you must be an Australian citizen, regard Australia as your home, or have lived here for the 12 months before applying. Who was to blame plays no part. A divorce does not divide property or decide arrangements for children, and once the order takes effect, one month and one day after it is made, you generally have 12 months to apply for property or spousal maintenance orders. Nolan Family Law & Mediation advises from "}
            {offices.sydney.streetShort}
            {", Sydney."}
          </p>
        </aside>
        <ReviewNote>{"LEGAL REVIEW · Tash: every sentence, especially the section 39(3) wording (citizen, domiciled, ordinarily resident for one year immediately before filing), section 48, section 55 and the section 44(3) time limit. CHECK · Ben: the heading \"How does divorce work in NSW?\" is new copy; the draft had none for this slot."}</ReviewNote>
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
          <a href="#eligible" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"I'm ready to apply"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"What you need before you file."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#oneroof" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"We still live under the same roof"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"The extra evidence the court asks for."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#children" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"We have children under 18"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"What the court checks, and what it doesn't decide."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#apply" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"My spouse has applied and I've been served"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"What you need to do, and when."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#clock" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Our divorce is already final"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"The deadline you may not know about."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#book" data-pick-topic="divorce" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
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
            <a href="#what" data-toc-link="what" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"What a divorce does"}
            </a>
            {" "}
            <a href="#eligible" data-toc-link="eligible" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Who can apply"}
            </a>
            {" "}
            <a href="#oneroof" data-toc-link="oneroof" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Under one roof"}
            </a>
            {" "}
            <a href="#short" data-toc-link="short" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Married under two years"}
            </a>
            {" "}
            <a href="#apply" data-toc-link="apply" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Applying together or alone"}
            </a>
            {" "}
            <a href="#children" data-toc-link="children" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Children"}
            </a>
            {" "}
            <a href="#hearing" data-toc-link="hearing" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"The hearing and the order"}
            </a>
            {" "}
            <a href="#clock" data-toc-link="clock" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"The deadline that follows"}
            </a>
            {" "}
            <a href="#lawyer" data-toc-link="lawyer" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Do I need a lawyer?"}
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
              <a href="#what" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"What a divorce does"}
              </a>
              {" "}
              <a href="#eligible" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Who can apply"}
              </a>
              {" "}
              <a href="#oneroof" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Under one roof"}
              </a>
              {" "}
              <a href="#short" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Married under two years"}
              </a>
              {" "}
              <a href="#apply" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Applying together or alone"}
              </a>
              {" "}
              <a href="#children" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Children"}
              </a>
              {" "}
              <a href="#hearing" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"The hearing and the order"}
              </a>
              {" "}
              <a href="#clock" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"The deadline that follows"}
              </a>
              {" "}
              <a href="#lawyer" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Do I need a lawyer?"}
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

          {/* ── What a divorce does ── */}
          <section id="what" data-screen-label="What a divorce does" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What does a divorce actually do?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The most common misunderstanding we hear at Bligh Street is that a divorce is where everything gets sorted out. In law it is the opposite. A divorce order does one thing: it formally ends a marriage, so that each of you is free to marry again. It says nothing about who keeps the home, how superannuation is split, whether anyone pays maintenance, or where the children live."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Those questions are dealt with through separate processes under the same Act. Property and spousal maintenance are settled by agreement and made binding with consent orders or a financial agreement, or decided by the court. Parenting arrangements are agreed in a parenting plan or consent orders, or decided by the court. None of this has to wait for a divorce. Many people settle their property and parenting arrangements in the year before they are even eligible to apply, and that is often the calmer order in which to do things."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The reverse is also true. Being divorced does not mean your financial ties are cut. Until property is formally settled, either of you can still bring a claim within the time allowed, and assets acquired after separation can still be part of the picture."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"If you were never married, there is nothing to divorce. De facto couples deal with property and children under the same Act, with a different time limit: see "}
              <a href={url("sydneyDeFacto")} style={{ fontWeight: "600" }}>
                {"de facto relationships in Sydney"}
              </a>
              {"."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"A divorce ends the marriage and nothing else. Property, maintenance and parenting are separate, and you can settle them before or after the divorce."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: \"assets acquired after separation can still be part of the picture\" (the post-separation property point under section 79 as amended); whether to mention binding child support agreements here or leave them out."}</ReviewNote>
          </section>

          {/* ── Who can apply ── */}
          <section id="eligible" data-screen-label="Who can apply" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Who can apply for a divorce in Australia?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"There is only one ground for divorce in Australia: the marriage has broken down irretrievably. You show that by having been separated for at least 12 months, with no reasonable likelihood of getting back together. Fault, affairs and who left are not part of the application, and the court does not ask about them."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The 12 months run from the day you separated, and the court's guidance is that you can file from the day after the first anniversary of that date. Separation does not need paperwork. It happens when at least one of you decides the marriage is over and makes that clear to the other, by words or by actions. If you tried to reconcile and lived together again for a single period of up to three months, that does not restart the count, although the time you spent back together is not counted in the 12 months."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"At least one of you also needs a connection to Australia on the day you apply. You qualify if either of you is an Australian citizen, by birth, descent or grant; regards Australia as home and intends to live here indefinitely; or has ordinarily lived in Australia for the 12 months before applying. Where you married does not matter. A marriage celebrated overseas can be ended in Australia, and a marriage celebrated here can be ended even if neither of you lives here any longer, provided one of those tests is met. If your marriage certificate is not in English, you will need a translation."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"There is no separate NSW divorce. Because divorce is federal law, the rules are the same across Australia, and applications from Sydney are filed online through the Commonwealth Courts Portal."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"You need 12 months of separation, a marriage that has broken down for good, and one of you with a citizenship, home or residence connection to Australia. Fault is irrelevant."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 48(2) and the \"12 months and one day\" filing guidance (court's apply page); section 50 (one resumption of cohabitation of up to three months, periods before and after aggregated); section 39(3) and the three tests, including the domicile wording; \"a marriage celebrated here can be ended even if neither of you lives here\" (citizenship test only; check the wording doesn't overreach)."}</ReviewNote>
          </section>

          {/* ── Under one roof ── */}
          <section id="oneroof" data-screen-label="Under one roof" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"We separated but still live together. Does that count?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Yes. Plenty of couples separate while still sharing a home, often for the children's sake or because neither can yet afford to move out. The law treats that as separation if the marriage has genuinely ended, even though you are under one roof."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Because the court cannot see the change from the outside, it asks for more evidence. If you lived in the same home for any part of the 12 months, the court requires an affidavit explaining how your relationship changed: for example, that you moved into separate rooms, stopped sharing meals or household tasks, separated your finances, stopped going out as a couple, and told family, friends or government agencies that you had separated. In a joint application you each file an affidavit. In a sole application the court's guidance also recommends an affidavit from someone else, such as a friend or relative, who can confirm what they observed."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"This is one of the points where applications most often run into trouble, so it is worth taking care with the detail and the dates. It can also be worth attending the hearing, so that you can answer any questions the registrar has."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Separation under one roof counts, but you need affidavits showing how the marriage changed. Detail and dates matter."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: the affidavit requirement for any period under one roof (court's apply page); the third-party affidavit as recommended rather than mandatory, and whether that applies to joint as well as sole applications; the examples of change."}</ReviewNote>
          </section>

          {/* ── Married under two years ── */}
          <section id="short" data-screen-label="Married under two years" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"We've been married less than two years. Is there an extra step?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Not any more. Until 10 June 2025, couples who applied within two years of their wedding had to attend counselling about reconciliation and file a certificate, or ask the court's permission to apply without one. The Family Law Amendment Act 2024 removed that requirement. Today a short marriage is treated the same way as any other: the 12 months of separation and the other requirements above still apply, but there is no counselling certificate to obtain."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"You may still find the old rule described on other websites and in older guides. If something you have read says you need a counselling certificate, check its date."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Since 10 June 2025 there is no counselling certificate for marriages under two years. The usual requirements still apply."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: repeal of section 44(1B) and (1C) from 10 June 2025 (Family Law Amendment Act 2024, Schedule 3 Part 1A; FCFCOA practice and procedure update, 3 June 2025). This replaces item 5 of the hand-off brief, which was written from memory and described the old rule."}</ReviewNote>
          </section>

          {/* ── Applying together or alone ── */}
          <section id="apply" data-screen-label="Applying together or alone" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Should we apply together, or can I apply on my own?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Either. A "}
              <strong>
                {"joint application"}
              </strong>
              {" is made by both of you as applicants. You both sign it, and because you are both part of it, nobody has to be served. It suits couples who agree that the marriage is over and are able to cooperate on the paperwork."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"A "}
              <strong>
                {"sole application"}
              </strong>
              {" is made by one of you alone, and it does not need the other's agreement. Once it is filed, the sealed documents must be served on your spouse at least 28 days before the hearing if they are in Australia, or at least 42 days before if they are overseas. You cannot hand them over yourself, but another adult can, or they can be sent by post, with proof of service filed afterwards. If your spouse cannot be found, or is avoiding service, the court can allow another method, such as email or a message on social media, or in some cases excuse service altogether. That needs a separate application with evidence of what you have tried."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Either way, the supporting affidavit has to be signed in front of a lawyer or a Justice of the Peace before the application is filed, and the court charges a filing fee, which can be reduced in cases of financial hardship."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              <strong>
                {"If you have been served."}
              </strong>
              {" If your spouse has applied and you agree with what the application says, you do not need to do anything more, although returning the acknowledgement of service helps. If some of the facts are wrong but you do not oppose the divorce, you can file a Response to Divorce correcting them. You can oppose a divorce only on limited grounds, for example that you have not in fact been separated for 12 months, or that the court lacks jurisdiction. Unhappiness about property or the children is not a reason the court can refuse a divorce, although it is a very good reason to get advice about those issues now."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Apply together and no one needs to be served. Apply alone and your spouse must be served 28 days before the hearing, or 42 if overseas."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: 28 and 42 days (court's serving page); who may serve and the ban on serving it yourself; substituted service and dispensation (practice direction 2.20); the Affidavit for eFiling being signed before a lawyer or JP; reduced fee wording (no figure, D-02); the respondent's options and the limited grounds for opposing."}</ReviewNote>
          </section>

          {/* ── Mid-page prompt ── */}
          <MidPrompt office="sydney" img={images.tashSmall} objectPosition="50% 12%" eyebrow="Every situation is different" text="A first conversation can show you what to do first, and in what order." cta="Talk to us" phonePrefix="or call " topic="divorce" />
          <ReviewNote>{"TEMPLATE · Mid-page prompt (D-31), as on the prenup page. One per page, after the application section. Links carry data-cta-position=\"mid\" and set the form topic to Divorce."}</ReviewNote>

          {/* ── Children ── */}
          <section id="children" data-screen-label="Children" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What does the court need to know about our children?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"If there is a child of the marriage under 18, the court cannot make a divorce order unless it is satisfied that proper arrangements are in place for that child, or that there are circumstances which justify making the order anyway. That is section 55A of the Act. The application asks for details of where each child lives, who cares for them, their schooling and health, the time they spend with each parent, and how they are supported financially."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"\"Child of the marriage\" is wider than many people expect. It includes children born before the marriage or after separation, adopted children, and stepchildren or other children who were treated as part of your family before you separated."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"What the court is checking is that arrangements exist and are adequate. It is not deciding what those arrangements should be, and a divorce order is not a parenting order. If you and your former partner disagree about the children, the divorce can still usually go ahead, but the arrangements themselves have to be settled separately. Our page on "}
              <a href={url("sydneyChildCustody")} style={{ fontWeight: "600" }}>
                {"child custody in Sydney"}
              </a>
              {" explains how parenting arrangements are agreed and made formal."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"For children under 18, the court checks that proper arrangements are in place. It does not make parenting orders as part of a divorce."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 55A as framed, and whether to mention that the court may adjourn rather than refuse; the definition of child of the marriage (section 55A(4) and the court's guidance); \"the divorce can still usually go ahead\"."}</ReviewNote>
          </section>

          {/* ── The hearing and the order ── */}
          <section id="hearing" data-screen-label="The hearing and the order" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Do I have to go to court, and when is the divorce final?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Usually you do not have to go anywhere. Divorce hearings are listed before a registrar and held by phone or video unless someone asks to attend in person or the court orders it. Most applications are decided without either of you appearing."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"You must attend if you asked to in your application, if your spouse files a response opposing the divorce, if your spouse asks to attend and there are children under 18, or if you applied to serve your spouse another way or to be excused from serving them. Since 10 June 2025 a sole applicant no longer has to attend just because there are children. Attending can still be wise if you separated under one roof or something has changed since you filed, so that you can answer the registrar's questions."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"If the registrar is satisfied, the divorce order is made at the hearing. It takes effect one month and one day later, unless the court shortens that period, and the order can then be downloaded from the Commonwealth Courts Portal. You are not free to remarry until it has taken effect."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Most divorces are granted without anyone attending. The order takes effect one month and one day after it is made."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: the attendance list against rule 15.15 and the current Divorce hearing page; the section 98A amendment from 10 June 2025; \"one month and one day\" (section 55 and the court's wording); download from the Portal the next working day; whether to mention rescission (section 57) here or only in the FAQ."}</ReviewNote>
          </section>

          {/* ── The deadline that follows ── */}
          <section id="clock" data-screen-label="The deadline that follows" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What deadline starts when the divorce is final?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"This is the part of a divorce that costs people the most when it is missed. For married couples, an application to the court for property orders or spousal maintenance must generally be made within 12 months of the divorce order taking effect. After that, you need the court's permission to apply late, and it is not guaranteed."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"It is often wiser to settle property before applying for a divorce, or alongside it, rather than afterwards. Our Sydney hub explains "}
              <a href={url("sydneyHub", "timelimits")} style={{ fontWeight: "600" }}>
                {"how the time limits work after separation"}
              </a>
              {", including the different rule for de facto couples."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Once your divorce takes effect, you generally have 12 months to apply for property or maintenance orders."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 44(3) as summarised; the anchor #timelimits matches the Sydney hub's section id."}</ReviewNote>
          </section>

          {/* ── Do I need a lawyer? ── */}
          <section id="lawyer" data-screen-label="Do I need a lawyer?" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Do I need a lawyer for a divorce?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Not always, and we would rather tell you that honestly. If you have been apart for well over a year, you agree that the marriage is over, you can apply jointly, and your property and parenting arrangements are already settled, the application itself is something many people complete on their own through the Commonwealth Courts Portal."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"A lawyer earns their place in the situations around the application. Separation under one roof needs careful affidavits. A spouse who cannot be found, or who will not engage, means applications for substituted service. Overseas marriages and documents bring their own questions. And above all, the divorce is usually the moment to check that property, superannuation, maintenance and parenting are properly settled, because the deadline begins the day the order takes effect."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"If you do meet with a lawyer, go in prepared. Our article on "}
              <a href={url("article:11-questions-to-ask-your-divorce-lawyer-at-your-first-meeting")} style={{ fontWeight: "600" }}>
                {"11 questions to ask your divorce lawyer at your first meeting"}
              </a>
              {" covers what to ask about experience, approach, communication and costs, so that you can judge whether the fit is right."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"A simple joint divorce often needs no lawyer. Property, parenting, one roof cases and the 12 month deadline usually do."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: the honest-answer framing, and whether the firm will still prepare a simple joint application for a client who asks."}</ReviewNote>
          </section>

          {/* ── How we help ── */}
          <section id="how" data-screen-label="How we help" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How do we help around a divorce?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Some clients come to us only for the divorce itself. More often the divorce is one step in a wider separation, and we look after it as part of the whole. We can prepare and file the application, joint or sole; arrange service and deal with a spouse who is hard to reach; prepare the affidavits needed when you separated under one roof; and attend the hearing where that is needed."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Around it, we help you settle property and superannuation and make the agreement binding, put parenting arrangements on a formal footing, and, where it suits you, resolve matters through mediation rather than court. We will also remind you of the practical things a divorce changes, such as reviewing your will and your superannuation nominations, since in NSW a divorce generally cancels gifts to a former spouse in a will but separation alone does not."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Our approach is to work towards agreement first, and to go to court when that is what it takes. You will know from the start what we recommend, what it involves, and how our fees work."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"We handle the application itself and everything a divorce leaves open, working towards agreement first."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 13 of the Succession Act 2006 (NSW) as summarised; the list of services. CHECK · Ben: the firm acts on simple divorce applications as well as the wider matters."}</ReviewNote>
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
            {"Your divorce lawyers in Sydney"}
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
        <ReviewNote>{"CHECK · Ben, Chad: Tash's wording follows D-45, her live profile and the Sydney hub card (\"leads our Sydney office\" is already approved there). Jessica added by Ben, 27 Nov. Her wording comes from her live profile (page 12740: Sydney CBD since 2016, property, parenting, spouse maintenance and child support, psychology degree) and D-13 (Nationally Accredited Mediator); it differs from the hub's card on purpose. Wording follows D-05. TEMPLATE · The second card is the Sydney hub's component (city lead first, then the second card)."}</ReviewNote>
      </div>
    </section>

    {/* ── Related reading ── */}
    <section data-screen-label="Related reading" data-section="true" style={{ background: "#FEFDFB", borderTop: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 24px" }}>
        <div data-reveal="true" style={{ marginBottom: "32px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
            {"Related reading"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(28px, 3.4vw, 38px)", lineHeight: "1.2", color: "#1A2E40", margin: "0", maxWidth: "24ch", textWrap: "pretty" }}>
            {"More on divorce and separation in Sydney"}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "24px" }}>
          <a href={url("article:the-divorce-process-explained")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"The divorce process explained"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Each step, from application to order"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("article:your-essential-checklist-when-getting-a-divorce")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Your essential checklist when getting a divorce"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Documents, accounts and arrangements to sort"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("article:11-questions-to-ask-your-divorce-lawyer-at-your-first-meeting")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"11 questions to ask your divorce lawyer"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Get the most from a first meeting"}
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
        <ReviewNote>{"CHECK · Ben: the related reading heading and the six card sub-lines are new copy; the draft gave titles only. Card titles are short labels: check them against each article's H1 after import. The three articles keep their URLs (D-23) and each gets a link back here with the anchor \"divorce lawyers in Sydney\" (D-12 pattern). No location toggle: there is no Melbourne divorce page. The old checklist PDF 301s to the checklist article (Q-10, D-58)."}</ReviewNote>
      </div>
    </section>

    {/* ── Rooms image ── */}
    <section data-screen-label="Rooms image" style={{ background: "#FEFDFB", borderTop: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0" }}>
        <div data-clip="true" style={{ overflow: "hidden", aspectRatio: "2 / 1", maxHeight: "520px", background: "#E8E4DC" }}>
          <img src="/images/meeting-rooms-at-25-bligh-street-sydney-where-we-c1e5d7b5.webp" width={1300} height={650} alt={`Meeting rooms at ${offices.sydney.streetShort}, Sydney, where clients meet with us about divorce and separation`} loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} decoding="async" />
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
            {"Divorce questions, answered plainly"}
          </h2>
        </div>
        <div style={{ maxWidth: "860px", borderTop: "1px solid #E8E4DC" }}>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"How long does a divorce take in NSW?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Once you are eligible, it usually takes a few months. You choose a hearing date from those available when you file, a sole application must be served at least 28 days before it, and the order takes effect one month and one day after it is made. Delays usually come from service or missing evidence."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Can I get a divorce if my spouse doesn't want one?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes. A sole application does not need your spouse's agreement. They can oppose it only on limited grounds, such as that you have not been separated for 12 months, and disagreement about property or children is not one of them."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Do I have to be divorced before we settle property?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"No. You can settle property and superannuation at any time after separating, and many couples do so before the divorce. Once a divorce takes effect, you generally have 12 months to apply to the court."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Does a divorce decide who the children live with?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"No. The court only checks that proper arrangements are in place for children under 18. Parenting arrangements are agreed or decided separately, through a parenting plan, consent orders or parenting orders."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"We married overseas. Can we get divorced in Sydney?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes, if one of you is an Australian citizen, regards Australia as home, or has lived here for the 12 months before applying. You will need your marriage certificate, with a translation if it is not in English."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Is there a different divorce law in NSW?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"No. Divorce is governed by the federal Family Law Act 1975, so the rules are the same in every state. Applications are filed online with the Federal Circuit and Family Court of Australia."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"We've been married less than two years. Do we need counselling first?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Not since 10 June 2025. The requirement to file a counselling certificate, or get the court's permission, was repealed. You still need 12 months of separation."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"What if I can't find my spouse to serve them?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"You can ask the court for permission to serve them another way, such as by email, through a relative or on social media, or to excuse service altogether. You will need to show the court what you have already tried."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Will I have to attend a court hearing?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Usually not. Most divorces are decided without anyone attending, by a registrar, and hearings are held by phone or video. You must attend if your spouse opposes the application, if you asked to attend, or in a few other situations."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"When can I remarry?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Once your divorce order has taken effect, one month and one day after it is made. Until then you are still legally married, and a new marriage would not be valid."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Does divorce affect my will in NSW?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes, in part. Under the Succession Act 2006 (NSW), divorce generally cancels gifts to a former spouse in your will and their appointment as executor, unless the will shows otherwise. Separation alone does not, so review your will when you separate."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"What does a divorce cost?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"The court charges a filing fee, which can be reduced in cases of financial hardship. Our own fees depend on what you need, from the application alone to a full property settlement, and we confirm them in writing before we start. "}
              <a href="#book" data-pick-topic="fees" style={{ fontWeight: "600" }}>
                {"Talk to us about costs."}
              </a>
            </p>
          </details>
        </div>
        <ReviewNote>{"LEGAL REVIEW · Tash: every answer, especially timing (\"a few months\", no figure given, unlike draft 16051), the limited grounds for opposing, overseas marriages, the repeal date, substituted service methods, attendance, remarriage, and Succession Act section 13. No dollar figures (D-02). SEO · All 12 questions are in FAQPage schema in the head, worded exactly as here. CHECK · Ben: the heading \"Divorce questions, answered plainly\" follows the prenup page."}</ReviewNote>
      </div>
    </section>

    {/* ── Consultation CTA ── */}
    <CtaBand
      office="sydney"
      heading={"End the marriage well, and leave nothing unfinished."}
      lede={"Whether you are ready to apply, have just been served, or are not yet sure what comes first, a first conversation will show you where you stand. It is confidential, with no obligation."}
      promises={[
        "Run a conflict check before anything else",
        "Confirm whether you can apply now, and whether jointly or alone",
        "Check that property, parenting and the 12 month deadline are covered",
        "Tell you how our fees work, and put an estimate in writing",
      ]}
      topics={[
        ["divorce", "Applying for a divorce"],
        ["served", "I've been served with a divorce application"],
        ["property", "Property and money after separation"],
        ["children", "Arrangements for our children"],
        ["fees", "Fees and how this works"],
        ["other", "Something else"],
      ]}
      askStage
      stages={[
        ["separated12", "Separated 12 months or more"],
        ["recent", "Separated recently"],
        ["exploring", "Just exploring", true],
      ]}
      topic="divorce"
    />
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
      <ReviewNote>{"CHECK · Ben: form topic and stage options are new for this page, replacing the prenup ones. Topic is pre-selected to \"Applying for a divorce\" (value divorce). The hero button, the \"I'd rather talk it through\" card and the mid-page prompt set it via pickDivorce; \"Talk to us about costs\" sets fees. \"Just exploring\" stays as the default stage. Delivers to the Sydney team."}</ReviewNote>
    </div>
    </>
  );
}
