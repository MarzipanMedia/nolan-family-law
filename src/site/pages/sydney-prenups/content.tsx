/**
 * Page sections for "sydney-prenups", converted from export/prenuptial-agreements-sydney.html
 * by tools/convert-prototype.mjs --notes and then maintained by hand (shared MidPrompt and
 * CtaBand, the shared photo files, the article link from the routes file, and the trust
 * ribbon left to the footer). The copy is the approved copy:
 * change wording only with Ben's sign-off. URLs come from the routes file and office details
 * from the office config, never from this file.
 */
import { url } from '@/config/routes';
import { offices } from '@/config/offices';
import { PhoneLink } from '@/components/PhoneLink';
import { ReviewNote } from '@/components/ReviewNote';
import { MidPrompt } from '@/components/MidPrompt';
import { CtaBand } from '@/components/CtaBand';
import { images } from '@/site/images';

export function Content() {
  return (
    <>

    {/* ── Hero ── */}
    <section data-screen-label="Hero" style={{ background: "#F8F6F2" }}>
      <div data-hero-grid="true" style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 24px 72px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "64px", alignItems: "start" }}>
        <div style={{ minWidth: "0" }}>
          <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "26px" }}>
            {"Sydney · Prenups and BFAs"}
          </div>
          <h1 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(40px, 5.4vw, 72px)", lineHeight: "1.06", letterSpacing: "-0.015em", color: "#1A2E40", margin: "0 0 26px", maxWidth: "17ch", textWrap: "pretty" }}>
            {"Prenups and binding financial agreements in Sydney"}
          </h1>
          <p data-reveal="true" style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0 0 20px", textWrap: "pretty" }}>
            {"One of you owns the apartment you will be living in, or a share of the family company, or a practice built over twenty years. Someone has said the word \"prenup\", and now neither of you quite knows how to talk about it."}
          </p>
          <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "0 0 38px", maxWidth: "56ch" }}>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"Leave it, and the decision is made for you. If the relationship ends, property is divided under the Family Law Act, and in NSW marriage can also cancel the will you made to look after your children. Leave it until the last few weeks before a wedding, and an agreement may not survive a challenge."}
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"A binding financial agreement lets you settle these questions together, calmly and in good time, alongside your wills. Our Sydney team at Bligh Street prepares agreements for couples marrying for the first or second time, for de facto partners, and for families with trusts and companies to think about. Our Principal, Tash Nolan, is recognised in Doyle's Guide 2026 for high net-worth and complex financial matters."}
            </p>
          </div>
          <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <a href="#book" data-pick-topic="bfa" data-press="true" style={{ background: "#B4552F", color: "#FFFFFF", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", textDecoration: "none" }}>
              {"Talk to us"}
            </a>
            {" "}
            <PhoneLink office="sydney" location="body" position="hero" data-press="true" style={{ border: "1px solid #BFC8D2", color: "#1A2E40", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", background: "rgba(248,246,242,0.6)", textDecoration: "none" }}>
              {"Call "}
              {offices.sydney.phoneDisplay}
            </PhoneLink>
          </div>
          <ReviewNote>{"SEO · Title tag is 60 characters (Ben, 23 Nov), and leads with \"prenup\" wording. H1 as approved in the draft. The query baseline is D-57 in DECISIONS.md (D-40 in the Claude Design copy) and sydney-prenup-gsc-baseline.csv. The homepage prenup card links here with the anchor \"prenup lawyers in Sydney\"; the homepage title is unchanged."}</ReviewNote>
        </div>
        <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div data-clip="true" style={{ overflow: "hidden", borderRadius: "3px", aspectRatio: "4 / 3.6", maxHeight: "560px", background: "#E8E4DC" }}>
            <div data-hero-img="true" data-placeholder="true" role="img" aria-label="Image placeholder: a Sydney couple in their mid-forties or older" style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "32px", boxSizing: "border-box", textAlign: "center", background: "#E8E4DC" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A5A66" }}>
                {"Image placeholder"}
              </div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40", maxWidth: "22ch" }}>
                {"A Sydney couple, mid-forties or older, in natural light"}
              </div>
            </div>
          </div>
          <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 100px), 1fr))", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Married or de facto"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"The same federal agreement"}
              </div>
            </div>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Planned with your wills"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"Marriage can revoke a will in NSW"}
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
          <ReviewNote>{"IMAGE · Ben, 23 Nov: a photograph of a Sydney couple aged about 45 or over replaces Tash's portrait in the hero, to make the page feel more human. This conflicts with the draft's image note (\"No stock imagery of couples or rings\"), so it needs a real or commissioned photograph, not stock, and Chad should confirm it. Tash's portrait stays in the mid-page prompt and the lawyer card. CHECK · Ben: the three fact-strip sub-lines are new copy; the draft gave the headings only."}</ReviewNote>
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
            {"Prenups and binding financial agreements"}
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
          {"Settling the money questions while things are good, so they never have to be fought over."}
        </h2>

        {/* ── Quick Answer ── */}
        <aside aria-labelledby="quick-answer" data-screen-label="Quick Answer" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "20px 56px", padding: "40px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "14px" }}>
              {"Quick answer"}
            </div>
            <h3 id="quick-answer" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0", textWrap: "pretty" }}>
              {"What is a prenup in NSW, and is it binding?"}
            </h3>
          </div>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "62ch", textWrap: "pretty" }}>
            {"A prenup in NSW is a binding financial agreement under the Family Law Act 1975, a federal law that applies to married and de facto couples. It sets out how property, money and superannuation would be divided if the relationship ended. To be binding, each partner must get independent legal advice from a separate lawyer before signing, and the Act's other formal steps must be followed. An agreement finished well before the wedding, after full financial disclosure, is much harder to overturn. In NSW, marriage generally revokes an existing will, and an agreement does not stop a family provision claim against an estate, so plan the agreement and your wills together."}
          </p>
        </aside>
        <ReviewNote>{"LEGAL REVIEW · Tash: every sentence. CHECK · Ben: the on-screen label stays \"Quick answer\", as on the hub and property page. The heading \"What is a prenup in NSW, and is it binding?\" is new copy; the draft had none for this slot."}</ReviewNote>
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
            {"What brings you here?"}
          </h2>
          <p style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0", textWrap: "pretty" }}>
            {"Pick whichever is closest. Each one opens the part of this page that matters most to you right now."}
          </p>
        </div>
        <div data-route-cards="6" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "24px" }}>
          <a href="#hold" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"The wedding date is set"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Why time matters more than anything else."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#defacto" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"We're moving in, or registering our relationship"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"How NSW treats de facto couples."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#notional" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"I want my children to inherit"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Wills, estates and notional estate in NSW."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#trusts" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"There's a family trust, company or practice"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Protecting structures others rely on."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#handed" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"I've been handed an agreement to sign"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Your own lawyer, your own pace."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#book" data-pick-topic="bfa" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
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
            <a href="#when" data-toc-link="when" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"When it makes sense"}
            </a>
            {" "}
            <a href="#law" data-toc-link="law" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"How the law treats it"}
            </a>
            {" "}
            <a href="#hold" data-toc-link="hold" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"What makes it hold"}
            </a>
            {" "}
            <a href="#will" data-toc-link="will" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Your will in NSW"}
            </a>
            {" "}
            <a href="#notional" data-toc-link="notional" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Notional estate"}
            </a>
            {" "}
            <a href="#defacto" data-toc-link="defacto" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"De facto couples"}
            </a>
            {" "}
            <a href="#trusts" data-toc-link="trusts" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Trusts and companies"}
            </a>
            {" "}
            <a href="#duty" data-toc-link="duty" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Transfer duty"}
            </a>
            {" "}
            <a href="#outside" data-toc-link="outside" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"What sits outside it"}
            </a>
            {" "}
            <a href="#handed" data-toc-link="handed" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Being asked to sign"}
            </a>
            {" "}
            <a href="#cost" data-toc-link="cost" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"What affects the cost"}
            </a>
            {" "}
            <a href="#process" data-toc-link="process" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Working with us"}
            </a>
            {" "}
            <a href="#court" data-toc-link="court" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"If it is challenged"}
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
              <a href="#when" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"When it makes sense"}
              </a>
              {" "}
              <a href="#law" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"How the law treats it"}
              </a>
              {" "}
              <a href="#hold" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"What makes it hold"}
              </a>
              {" "}
              <a href="#will" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Your will in NSW"}
              </a>
              {" "}
              <a href="#notional" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Notional estate"}
              </a>
              {" "}
              <a href="#defacto" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"De facto couples"}
              </a>
              {" "}
              <a href="#trusts" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Trusts and companies"}
              </a>
              {" "}
              <a href="#duty" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Transfer duty"}
              </a>
              {" "}
              <a href="#outside" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"What sits outside it"}
              </a>
              {" "}
              <a href="#handed" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Being asked to sign"}
              </a>
              {" "}
              <a href="#cost" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"What affects the cost"}
              </a>
              {" "}
              <a href="#process" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Working with us"}
              </a>
              {" "}
              <a href="#court" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"If it is challenged"}
              </a>
              {" "}
              <a href="#faq" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Questions"}
              </a>
            </nav>
          </details>

          {/* ── When it makes sense ── */}
          <section id="when" data-screen-label="When it makes sense" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"When does a prenup make sense for a Sydney couple?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"A prenup is not a forecast. Most couples who sign one never look at it again. What it gives you is an answer, agreed in advance, to the questions that are hardest to discuss once a relationship is under strain."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"In our Sydney practice, the people who ask about agreements tend to have one of a handful of things in common. One partner owns property bought before the relationship, often a home in which the other partner will now live. Someone runs a business or a professional practice, or holds shares in a family company that a parent or sibling also depends on. A family trust sits behind the family's wealth, and the trustee or the wider family would like it kept out of any future dispute. One partner is marrying for the second time and has adult children who expect to inherit. And some couples arrive from overseas with an agreement signed in another country and want to know whether it still means anything here."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"It also tends to suit couples where one partner has much more than the other, because a clear agreement protects the partner with less as well. Knowing what you would each receive, rather than hoping, is a form of security in its own right."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"If you are unsure how to raise it, start with the reason rather than the document, and start early. A conversation about why the agreement matters to you is far easier than a conversation about a draft."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"A prenup earns its keep where there is property from before the relationship, a business, a family trust or company, a second family, or an overseas agreement. It is about certainty for both of you."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: the \"protects the partner with less\" framing."}</ReviewNote>
          </section>

          {/* ── How the law treats it ── */}
          <section id="law" data-screen-label="How the law treats it" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How does Australian law treat a prenup?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Australian law does not use the word \"prenup\". The Family Law Act 1975 calls it a financial agreement, and lawyers usually say binding financial agreement, or BFA. Because the Act is Commonwealth law, the rules for making a valid agreement are the same in Sydney as in Perth or Hobart. What differs in NSW is the state law around the agreement: wills, family provision claims, relationship registration and duty. Those are the sections that follow."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 28px", textWrap: "pretty" }}>
              {"You can sign an agreement at any of three stages, and the Act has a separate section for each:"}
            </p>
            <div data-reveal="true" style={{ overflowX: "auto", marginBottom: "28px", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
              <table style={{ width: "100%", minWidth: "560px", borderCollapse: "collapse", fontSize: "16px", background: "#FEFDFB" }}>
                <caption style={{ captionSide: "top", textAlign: "left", padding: "18px 22px 0", fontSize: "14px", color: "#4A5A66" }}>
                  {"The section of the Family Law Act that applies at each stage"}
                </caption>
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: "left", padding: "16px 22px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3A6D8C", borderBottom: "1px solid #E8E4DC" }}>
                      {"Stage"}
                    </th>
                    <th scope="col" style={{ textAlign: "left", padding: "16px 22px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3A6D8C", borderBottom: "1px solid #E8E4DC" }}>
                      {"If you are, or will be, married"}
                    </th>
                    <th scope="col" style={{ textAlign: "left", padding: "16px 22px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3A6D8C", borderBottom: "1px solid #E8E4DC" }}>
                      {"If you are de facto partners"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style={{ textAlign: "left", padding: "15px 22px", fontWeight: "600", color: "#1A2E40", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Before you marry or start living together"}
                    </th>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Section 90B"}
                    </td>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Section 90UB"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ textAlign: "left", padding: "15px 22px", fontWeight: "600", color: "#1A2E40", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"While you are together"}
                    </th>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Section 90C"}
                    </td>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Section 90UC"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ textAlign: "left", padding: "15px 22px", fontWeight: "600", color: "#1A2E40", verticalAlign: "top" }}>
                      {"Once you have separated"}
                    </th>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", verticalAlign: "top" }}>
                      {"Section 90D, after a divorce order"}
                    </td>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", verticalAlign: "top" }}>
                      {"Section 90UD"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"An agreement can deal with any property either of you owns now or acquires later, your superannuation, and whether one of you would support the other financially after separation. A well-written agreement also explains why it says what it says, which helps if anyone has to read it years from now."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"People sometimes ask whether a prenup is the same as consent orders. It is not. Consent orders are made by the court, usually after separation, once a judicial officer is satisfied the arrangement is just and equitable. A financial agreement is a private contract that a court never approves. We compare the two in detail on our property settlement page: "}
              <a href={url("sydneyProperty", "consent-vs-bfa")} style={{ fontWeight: "600" }}>
                {"Consent orders or a BFA"}
              </a>
              {"."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"A prenup is a federal financial agreement that can be made before, during or after a marriage or de facto relationship. NSW law shapes what surrounds it."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: the six sections and how the table frames them (90C also covers the period after separation but before a divorce order); superannuation splitting under an agreement; the consent orders sentence, matched to the property page's #consent-vs-bfa section. CHECK · Ben: the table caption is new copy."}</ReviewNote>
          </section>

          {/* ── What makes it hold ── */}
          <section id="hold" data-screen-label="What makes it hold" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What has to happen for a prenup to hold up?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The Act is unforgiving about form. Section 90G says an agreement binds you only if all of these happen. You both sign it. Before signing, each of you receives independent legal advice about how the agreement affects your rights, and about its advantages and disadvantages for you at that point. Each lawyer signs a statement saying that advice was given. A copy of each statement is given to the other partner or to their lawyer, which section 90G(1)(ca) adds in its own words. And after signing, the original agreement goes to one of you and a copy to the other. Nothing in the section requires a witness, and the agreement is never lodged with a court."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Getting every step right is necessary but not enough. Section 90K lets a court set aside an agreement that was properly signed, for example where one of you hid assets or debts that mattered, where it was signed under duress, undue influence or unconscionable conduct, where circumstances have made it impracticable to carry out, or where a material change in the care of a child would leave a parent or the child in hardship."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Timing is where agreements most often fail, and the High Court's decision in "}
              <strong>
                {"Thorne v Kennedy [2017] HCA 49"}
              </strong>
              {" explains why. Ms Thorne had moved to Australia to marry. With her family already here for the wedding, she was told about eleven days beforehand that there would be no wedding unless she signed. Her solicitor advised her strongly against it, and she signed four days before the ceremony, then signed a second, near-identical agreement after it. The High Court set both aside. An agreement signed with a wedding about to happen, and no real choice, is fragile no matter how well it is drafted."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Two lawyers, signed advice statements exchanged, honest disclosure and time to think. If the wedding is close, the agreement is at risk."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: the 90G elements, including 90G(1)(ca); \"no witness\" and \"never lodged\" wording; the 90K grounds as summarised; the Thorne v Kennedy facts (eleven days' notice, signed four days before, second agreement afterwards, set aside on undue influence by the plurality and unconscionable conduct by Nettle and Gordon JJ). Sources: High Court judgment summary, 8 November 2017."}</ReviewNote>
          </section>

          {/* ── Your will in NSW ── */}
          <section id="will" data-screen-label="Your will in NSW" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What does getting married do to my will in NSW?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Most couples arrive thinking about separation. NSW law makes it just as important to think about death."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              <strong>
                {"Marriage generally revokes your will."}
              </strong>
              {" Under section 12 of the Succession Act 2006 (NSW), a will is revoked when you marry. The main exceptions are a will made in contemplation of that particular marriage, which survives whether or not it says so, and a will that says it is made in contemplation of marriage in general. Some gifts and appointments in favour of the person you marry also survive. So if you made a will years ago leaving your home to your children and you now marry, that will may no longer exist, and the intestacy rules could apply instead."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              <strong>
                {"Divorce revokes some gifts."}
              </strong>
              {" Under section 13, a divorce or annulment generally cancels gifts to your former spouse and their appointment as executor or trustee, unless your will shows you intended otherwise. Separation alone does not, and neither does the end of a de facto relationship, so a will made in favour of a partner you have since separated from can still stand until you change it."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              <strong>
                {"A promise in your agreement may not be the last word."}
              </strong>
              {" Many agreements include a promise not to claim against each other's estate. In NSW, a release of the right to bring a family provision claim binds only if the Supreme Court approves it, under section 95 of the Succession Act. Without that approval, a surviving spouse or de facto partner may still be able to apply. The agreement can still matter as evidence of what you both intended."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"For these reasons we look at the agreement and your wills side by side. Tash's practice has long included wills and estates as well as family law, so the two pieces of planning can be done together, while each of you still takes independent advice on the agreement itself."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"In NSW, marrying usually cancels an existing will, and a promise not to claim on an estate needs the Supreme Court's approval to bind. Update your wills when you sign your agreement."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 12 and its exceptions (12(2) to 12(4)); that ending a de facto relationship does not revoke a will in NSW (section 13 covers only divorce and annulment); section 95 and court approval of releases; whether to name intestacy; whether to mention section 90H (an agreement continues to operate after a death)."}</ReviewNote>
            <ReviewNote>{"CHECK · Ben: Tash's live profile lists wills, estates and probate among her past work. Confirm she is happy to be named for wills on this page, and whether the firm prepares wills today."}</ReviewNote>
          </section>

          {/* ── Notional estate ── */}
          <section id="notional" data-screen-label="Notional estate" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What is notional estate, and why does it matter for a prenup?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"This is the part of NSW law that most often surprises people, and it is one that no other state has in the same form."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"When someone dies, certain people close to them can ask the Supreme Court of NSW for a share of the estate, or a larger share, under Chapter 3 of the Succession Act. They include a spouse or de facto partner at the time of death, a former spouse, and children. In most states, the court can only distribute what is actually in the estate. In NSW, it can also reach some property that sits outside it, by designating that property as \"notional estate\"."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"That can include assets that pass outside a will, such as a home or account held jointly that passes to the surviving joint owner, and certain gifts or transfers made in the years before death, particularly where they were made to defeat a claim. The rules are detailed and depend heavily on the facts, and the court has a broad discretion in how it applies them."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"For anyone using an agreement to keep wealth for their children, the practical lesson is that a financial agreement, a will and the way assets are held all need to work together. Moving property into joint names, into a trust or to a child shortly before death does not necessarily put it beyond a claim in NSW. This is general information only, and not something to rely on without advice about your own estate."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"In NSW, a family provision claim can reach some property outside the estate, including jointly held assets and some earlier transfers. Plan your agreement, your will and how you hold your assets as one."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: who is an eligible person (section 57); notional estate orders under Part 3.3 (sections 74 to 80, including the three-year and one-year periods in section 80 and joint tenancy under section 76); \"no other state has in the same form\". Kept deliberately general, as Ben asked."}</ReviewNote>
          </section>

          {/* ── Mid-page prompt ── */}
          <MidPrompt office="sydney" img={images.tashSmall} objectPosition="50% 12%" eyebrow="Every situation is different" heading="Not sure how this applies to your family?" text="A first conversation can show you which parts matter for you." cta="Talk to us" phonePrefix="or call " topic="bfa" />
          <ReviewNote>{"TEMPLATE · Mid-page prompt (D-31), copied from melbourne-family-law.html with Tash's photo and the Sydney number. One per page. Links carry data-cta-position=\"mid\". The eyebrow \"Every situation is different\" is the Melbourne hub's."}</ReviewNote>

          {/* ── De facto and registered couples ── */}
          <section id="defacto" data-screen-label="De facto and registered couples" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"We're not married. Does NSW law treat us differently?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"For most de facto couples in NSW, the answer is no. NSW referred its powers over de facto property to the Commonwealth, so couples who separated on or after 1 March 2009 generally deal with property under the Family Law Act, much as married couples do. A de facto couple makes their agreement under Part VIIIAB of the Act, and section 90UJ sets out the same formal steps that section 90G sets for married couples."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Two parts of NSW law are worth knowing about."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              <strong>
                {"Registering your relationship."}
              </strong>
              {" NSW lets two adults in a relationship as a couple register it under the Relationships Register Act 2010, through NSW Births, Deaths and Marriages, provided neither is married or already in a registered relationship. A registered relationship is recognised as de facto under NSW law. It also matters under the Family Law Act. A de facto partner can usually seek property orders only if the relationship lasted two years, there is a child, or another condition applies. A relationship registered under a prescribed state law, as NSW's is, meets that requirement by itself. If you are thinking of registering, think about an agreement at the same time."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              <strong>
                {"Relationships the federal Act does not cover."}
              </strong>
              {" The Property (Relationships) Act 1984 (NSW) still applies to some relationships, including close personal relationships between two adults who live together where one cares for the other, and some older separations. If your situation is unusual, ask us which law applies before anything is drafted."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"De facto couples in NSW use the same federal agreements as married couples. Registering your relationship can bring you within the Family Law Act straight away, so plan the two together."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: the 1 March 2009 wording (match the Sydney hub); Part VIIIAB and section 90UJ; that NSW registration satisfies section 90SB(d); the registration eligibility wording (Births, Deaths and Marriages states both partners must be over 18, not married, and not already in a registered relationship; confirm any NSW residence requirement); the Property (Relationships) Act sentence and the examples given."}</ReviewNote>
          </section>

          {/* ── Trusts, companies and practices ── */}
          <section id="trusts" data-screen-label="Trusts, companies and practices" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Can a prenup protect a family trust, company or practice?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Family trusts and private companies are common in Sydney, and they are often the reason an agreement is needed. They are also where agreements most often go wrong."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"A family court looks at what you control, not only what you own in your own name. If you are a director of the trustee company, an appointor, or the person who really decides how a trust's income and capital are distributed, the court may treat the trust's assets as yours, or as a financial resource available to you. A good agreement deals with that directly. It identifies the structure, says how your interest in it is to be treated, and is drafted so that it fits with the trust deed, the company constitution and any shareholder or partnership agreement."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Professional practices raise similar questions. A share in a medical, dental, accounting or legal practice may be valued in a way that partners and partnership agreements already dictate. Inherited wealth and gifts from parents, particularly money put towards a first home, are another common theme, along with how any growth in value during the relationship is to be shared."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Where the wider family's structures are involved, their accountant or other advisers often need to be part of the conversation. Tash's work regularly involves family companies, trust structures and superannuation interests, which is why she leads agreements of this kind."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"If a trust, company or practice is part of the picture, the agreement needs to deal with control as well as ownership, and to fit the documents that already govern the structure."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: the control test and \"financial resource\" wording; the practice examples."}</ReviewNote>
            <ReviewNote>{"CHECK · Ben: \"regularly involves family companies, trust structures and superannuation interests\" follows her live profile (\"matters involving family companies, trust structures and superannuation interests\"). Confirm she leads BFAs, since the profile does not say so directly."}</ReviewNote>
          </section>

          {/* ── Transfer duty ── */}
          <section id="duty" data-screen-label="Transfer duty" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Will we pay transfer duty if property changes hands later?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"If an agreement is ever acted on, a property may need to move from joint names into one name, or from one partner to the other. In NSW, section 68 of the Duties Act 1997 can exempt that transfer from transfer duty, where it happens because a marriage or de facto relationship has broken down and is made under a binding financial agreement or court orders. Revenue NSW makes clear that the exemption is for relationship breakdown: an agreement made while the relationship is continuing does not itself attract it."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Whether it applies to a particular transfer depends on the property, who it moves between, and the documents. Treat this as general information and check with Revenue NSW, or ask us to, when the time comes."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Transfers between partners after a breakdown can be exempt from NSW transfer duty if they are made under a binding agreement or court orders. Confirm with Revenue NSW at the time."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 68 (marriage, 68(1); de facto, 68(1A)); that an agreement under sections 90B to 90D or 90UB to 90UD qualifies only once the relationship has ended. Sources: Revenue NSW, \"Break-up of marriages and other relationships\" and \"Marriage or relationship break ups\"."}</ReviewNote>
          </section>

          {/* ── What sits outside it ── */}
          <section id="outside" data-screen-label="What sits outside it" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What sits outside a prenup?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"An agreement deals with money and property between the two of you. It cannot decide where children would live or how much time they would spend with each parent. Those arrangements are always worked out separately, according to the children's best interests at the time."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Child support is also separate. It is assessed through Services Australia under the child support legislation, and an agreement cannot simply contract out of it. And if an agreement says one partner will never pay maintenance to the other, section 90F limits that promise: it does not prevent a court ordering maintenance if, when the time comes, the partner could not support themselves without an income-tested pension, allowance or benefit."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Prenups cover property, money and maintenance between partners. Children's arrangements and child support are dealt with on their own."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 90F wording; child support kept general."}</ReviewNote>
          </section>

          {/* ── Being handed one to sign ── */}
          <section id="handed" data-screen-label="Being handed one to sign" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"I've been given a prenup to sign. Where do I start?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Being presented with an agreement can feel like a verdict on the relationship. It usually isn't. Often it reflects a family business, a trust, or a parent's wishes more than any doubt about you."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Start by giving yourself time. The law requires you to have your own lawyer, at a different firm from your partner's, and that lawyer's job is to look after you. They will explain what you would be giving up and what you would receive, whether the terms are reasonable for someone in your position, and what you might ask to change. A first draft is rarely the final one, and a good agreement often improves when the receiving partner's lawyer asks the right questions."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"If you feel rushed, say so. As Thorne v Kennedy shows, pressure and deadlines weaken an agreement for both of you. Our Sydney team can act for you whether you are the partner proposing an agreement or the one asked to sign."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Take your time, get your own lawyer, and ask about anything you don't understand. Being asked to sign does not mean being asked to agree to everything."}
              </p>
            </div>
            <ReviewNote>{"CHECK · Ben, with Tash: \"can act for you whether you are the partner proposing an agreement or the one asked to sign\" is a capability statement only. Strengthen to \"regularly\" only if Tash confirms it."}</ReviewNote>
          </section>

          {/* ── What affects the cost ── */}
          <section id="cost" data-screen-label="What affects the cost" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What affects the cost of a prenup?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Many people search for a price before anything else, and it is a fair question. The honest answer is that the cost depends on the work your agreement needs, and that is different for every couple."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The main things that shape it are how many assets and structures are involved, whether there are trusts, companies or overseas assets, how quickly each of you can pull your disclosure together, and how much negotiation there is between the two lawyers. A straightforward agreement about one property is a very different piece of work from one dealing with a family group of companies."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Our approach is clear costs from day one. We explain how our fees work in your first conversation and put an estimate in writing before work begins. Your partner's lawyer charges separately, because they must be independent of us. "}
              <a href="#book" data-pick-topic="fees" style={{ fontWeight: "600" }}>
                {"Talk to us about costs"}
              </a>
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"The cost depends on how complex your finances are and how much negotiation is needed. We explain our fees in the first conversation and confirm an estimate in writing."}
              </p>
            </div>
            <ReviewNote>{"CHECK · Chad: this section is new. It answers about 3,000 impressions a year of cost searches (for example \"how much does a prenup cost in australia\") without any figures (D-02). \"Estimate in writing\" matches the property page's consultation CTA."}</ReviewNote>
          </section>

          {/* ── Working with us at Bligh Street ── */}
          <section id="process" data-screen-label="Working with us at Bligh Street" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How does working with our Bligh Street office work?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Every agreement follows its own path, but the stages are much the same."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"We start with a confidential conversation, at our Bligh Street office in the city or by video if you are elsewhere in NSW or overseas. We talk about what you want to protect, why it matters, and what your partner is likely to need so that the agreement feels fair to them too. Your partner will need their own lawyer at another firm. If they don't have one, we can suggest that they look for an experienced family lawyer, but the choice must be theirs."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Then comes disclosure. Each of you sets out what you own and owe, your income, your superannuation, any interest in a trust or company, and anything you expect to receive, such as an inheritance. It does not have to be sworn. But leaving something out is one of the most common grounds for a later challenge, so we ask for full disclosure with documents to support it."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"We prepare a draft, and your partner's lawyer reviews it. There is usually some back and forth. When the terms are agreed, each of you receives independent advice, the advice statements are exchanged, and you both sign. We keep the original safely and make sure each of you has a copy. If your wills need updating, we deal with that at the same stage."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"We won't promise a timeframe, because so much depends on disclosure and on the other lawyer. What we can say is that it should be finished well before any wedding, not squeezed into its last weeks. If you have a date in mind, now is the right time to start."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"A first conversation, full disclosure, a draft, review by your partner's lawyer, then advice and signing, with your wills updated alongside. Start months before a wedding."}
              </p>
            </div>
            <ReviewNote>{"CHECK · Ben, with Tash: \"suggest that they look for an experienced family lawyer\" wording (the firm cannot refer in a way that compromises independence); whether the firm holds originals in safe custody."}</ReviewNote>
          </section>

          {/* ── If it is ever challenged ── */}
          <section id="court" data-screen-label="If it is ever challenged" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Where would a challenge be heard in NSW?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Very few agreements ever reach a court. If one is challenged in NSW, the case goes to the Federal Circuit and Family Court of Australia, which hears family law matters in Sydney at the Lionel Bowen Commonwealth Law Courts Building at 97 to 99 Goulburn Street, and at the Garfield Barwick Commonwealth Law Courts Building in Parramatta. An agreement made carefully, with full disclosure and plenty of time, is the best way never to go there. A family provision claim against an estate is different: it is heard by the Supreme Court of NSW."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Challenges are heard by the federal family court in Sydney or Parramatta. Estate claims go to the NSW Supreme Court."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: registry wording, against the court's location pages (Lionel Bowen Building, 97 to 99 Goulburn Street; Garfield Barwick Commonwealth Law Courts Building, 1 to 3 George Street, Parramatta). Match the Sydney hub's wording if it names them."}</ReviewNote>
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
            {"Your prenup lawyer in Sydney"}
          </h2>
        </div>
        <div data-person="true" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "148px minmax(0,1fr)", gap: "32px", alignItems: "start", maxWidth: "860px", padding: "34px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <img src={images.tashSmall.src} width={images.tashSmall.width} height={images.tashSmall.height} alt="Tash Nolan, Principal at Nolan Family Law and Mediation" loading="lazy" style={{ display: "block", width: "148px", height: "148px", borderRadius: "3px", objectFit: "cover", objectPosition: "50% 20%" }} decoding="async" />
          <div style={{ minWidth: "0" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 6px" }}>
              {"Tash Nolan"}
            </h3>
            <div style={{ fontSize: "15px", fontWeight: "600", color: "#3A6D8C", marginBottom: "18px" }}>
              {"Principal"}
            </div>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 14px", maxWidth: "58ch" }}>
              {"Tash has practised for nearly 17 years. Before focusing on family law, her work covered property, commercial matters, wills and estates, which shapes how she approaches an agreement: as one part of a family's wider planning. Her family law work ranges from straightforward property matters to complex, high net-worth financial disputes involving family companies, trust structures and superannuation. She holds a Master of Applied Law in Family Law, is a Nationally Accredited Mediator, and is recognised in Doyle's Guide 2026 as a leading family lawyer for high net-worth and complex financial matters. The firm has been recognised by Doyle's Guide every year since 2023."}
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
        <ReviewNote>{"CHECK · Ben, Chad: all claims are taken from Tash's live profile (23 Nov). Her title is Principal (Ben, 23 Nov). Two things to settle at review: \"nearly 17 years\" (update if the profile changes); the \"before focusing on family law\" wording, which reads her profile's list of past work as a sequence. Also whether Jessica Swain or another Sydney lawyer appears here beside Tash."}</ReviewNote>
      </div>
    </section>

    {/* ── Melbourne toggle and related reading ── */}
    <section data-screen-label="Melbourne toggle and related reading" data-section="true" style={{ background: "#FEFDFB", borderTop: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 24px" }}>
        <a href={url("melbournePrenups")} data-card="true" data-reveal="true" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "18px 32px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px 34px", color: "#1A2E40", textDecoration: "none", marginBottom: "56px" }}>
          <span style={{ minWidth: "0" }}>
            <span style={{ display: "block", fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
              {"In Victoria instead?"}
            </span>
            {" "}
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "24px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Our Melbourne office also prepares prenups and binding financial agreements."}
            </span>
            {" "}
            <span style={{ display: "block", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66", marginTop: "6px" }}>
              {"The agreement is federal, but Victoria's wills and estate rules differ, so our Bourke Street team sets them out separately"}
            </span>
          </span>
          {" "}
          <span data-arrow="true" aria-hidden="true" style={{ fontSize: "20px", color: "#3A6D8C" }}>
            {"→"}
          </span>
        </a>
        <div data-reveal="true" style={{ marginBottom: "32px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
            {"Related reading"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(28px, 3.4vw, 38px)", lineHeight: "1.2", color: "#1A2E40", margin: "0", maxWidth: "24ch", textWrap: "pretty" }}>
            {"Planning ahead: agreements, property and family law in Sydney"}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "24px" }}>
          <a href={url("sydneyHub")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Family law in Sydney"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Our Sydney guide, from separation to settlement"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("sydneyProperty", "consent-vs-bfa")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Consent orders or a BFA"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"How the two compare, side by side"}
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
              {"Dividing property if a relationship ends"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("article:binding-financial-agreements-are-they-worth-the-paper-theyre-written-on")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Are binding financial agreements worth the paper they're written on?"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"When agreements hold up, and when they do not"}
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
          {" "}
          <a href={url("profile:tash-nolan")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Tash's profile"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Her background, recognition and approach"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
        </div>
        <ReviewNote>{"CHECK · Ben: the Melbourne sub-line, the related reading heading and the six card sub-lines are new copy; the draft gave titles only. Q-5: confirm the article \"Are binding financial agreements worth the paper they're written on?\" is imported and its URL is unchanged. The href here is a guess at the live slug; take the real one from the routes file."}</ReviewNote>
      </div>
    </section>

    {/* ── Rooms image ── */}
    <section data-screen-label="Rooms image" style={{ background: "#FEFDFB", borderTop: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0" }}>
        <div data-clip="true" style={{ overflow: "hidden", aspectRatio: "2 / 1", maxHeight: "520px", background: "#E8E4DC" }}>
          <img src="/images/meeting-rooms-at-25-bligh-street-sydney-where-we-c1e5d7b5.webp" width={1300} height={650} alt={`Meeting rooms at ${offices.sydney.streetShort}, Sydney, where couples meet with us to plan their agreements`} loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} decoding="async" />
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
            {"Prenup questions, answered plainly"}
          </h2>
        </div>
        <div style={{ maxWidth: "860px", borderTop: "1px solid #E8E4DC" }}>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Is a prenup legally binding in NSW?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes, if it follows the Family Law Act's requirements. You both sign, each of you first receives independent legal advice from your own lawyer, and the lawyers' signed advice statements are exchanged. The rules come from federal law, so they are the same in NSW as in every other state."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Does getting married revoke my will in NSW?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Generally, yes. Under the Succession Act 2006 (NSW), marriage revokes an existing will unless it was made in contemplation of that marriage, or says it was made in contemplation of marriage generally. Review your will whenever you sign a prenup."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"What is notional estate?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Notional estate is property outside a deceased person's estate that the Supreme Court of NSW can treat as part of it when deciding a family provision claim. It can include jointly owned assets and some transfers made before death. NSW is unusual in having this power."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Can a prenup stop my partner claiming on my estate?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Not on its own in NSW. A promise not to bring a family provision claim binds only if the Supreme Court approves the release. Your agreement can still show what you both intended, so plan it alongside your wills."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Do de facto couples in NSW need a prenup?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"They don't need one, but many benefit from one. De facto couples in NSW are generally covered by the Family Law Act much as married couples are, so if you are buying property together or bringing significant assets into the relationship, an agreement gives you the same certainty."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Does registering our relationship in NSW matter?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes, it can. A relationship registered under the Relationships Register Act 2010 (NSW) meets the Family Law Act's threshold for de facto property claims without the usual two years. If you plan to register, consider an agreement at the same time."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Is transfer duty payable if property changes hands under our agreement?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Often not, if the transfer happens because the relationship has broken down and is made under a binding financial agreement or court orders. Section 68 of the Duties Act 1997 (NSW) provides the exemption. Check with Revenue NSW before the transfer."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"How close to the wedding is too close?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"There is no fixed deadline, but the closer to the wedding an agreement is signed, the easier it is to challenge. In Thorne v Kennedy, the High Court set aside an agreement signed four days before a wedding. Aim to finish months ahead."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Can one lawyer act for both of us?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"No. Each partner must receive independent legal advice, so you need separate lawyers at separate firms."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Will an overseas prenup work in Australia?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Not necessarily. An agreement signed overseas may not meet the Family Law Act's requirements, so an Australian family lawyer should review it. Often the safest course is to sign a new Australian agreement."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Can we change or end our agreement later?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes. You can replace it with a new agreement, or end it with a termination agreement, following the same formal steps. Many couples review their agreement after children, an inheritance or a business sale."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Does a prenup deal with our children?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"No. Arrangements for children and child support are handled separately from a financial agreement."}
            </p>
          </details>
        </div>
        <ReviewNote>{"LEGAL REVIEW · Tash: every answer, especially notional estate, the section 95 release, registration, duty, overseas agreements and termination (section 90J). SEO · All 12 questions are in FAQPage schema in the head, worded exactly as here. CHECK · Ben: the heading \"Prenup questions, answered plainly\" is new copy, following the property page."}</ReviewNote>
      </div>
    </section>

    {/* ── Consultation CTA ── */}
    <CtaBand
      office="sydney"
      heading={"Plan it properly, and in good time."}
      lede={"Whether you are proposing an agreement or have been asked to sign one, a first conversation will show you where you stand and what to do next. It is confidential, with no obligation."}
      promises={[
        "Run a conflict check before anything else",
        "Explain how an agreement would work for your situation, including your wills",
        "Talk through timing, especially if a wedding is planned",
        "Tell you how our fees work, and put an estimate in writing",
      ]}
      topics={[
        ["bfa", "A prenup or binding financial agreement"],
        ["signing", "I've been asked to sign one"],
        ["wills", "Wills alongside an agreement"],
        ["fees", "Fees and how this works"],
        ["other", "Something else"],
      ]}
      askStage
      stages={[
        ["wedding", "A wedding date is set"],
        ["moving", "Moving in or registering"],
        ["exploring", "Just exploring", true],
      ]}
      topic="bfa"
    />
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
      <ReviewNote>{"CHECK · Ben: form topic and stage options are new for this page, replacing the property settlement ones. Topic is pre-selected to \"A prenup or binding financial agreement\" (value bfa). The hero button, the \"I'd rather talk it through\" card and the mid-page prompt set it via pickBFA; \"Talk to us about costs\" sets fees. Delivers to the Sydney team."}</ReviewNote>
    </div>
    </>
  );
}
