/**
 * Page sections for "sydney-property", converted from export/property-settlement-sydney.html
 * by tools/convert-prototype.mjs and then maintained by hand. The copy is the approved copy:
 * change wording only with Ben's sign-off. URLs come from the routes file and office details
 * from the office config, never from this file.
 */
import { url } from '@/config/routes';
import { offices } from '@/config/offices';
import { PhoneLink } from '@/components/PhoneLink';
import { EnquiryForm } from '@/components/EnquiryForm';

export function Content() {
  return (
    <>

    {/* ── Hero ── */}
    <section data-screen-label="Hero" style={{ background: "#F8F6F2" }}>
      <div data-hero-grid="true" style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 24px 72px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "64px", alignItems: "start" }}>
        <div style={{ minWidth: "0" }}>
          <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "26px" }}>
            {"Sydney · Property settlement"}
          </div>
          <h1 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(40px, 5.4vw, 72px)", lineHeight: "1.06", letterSpacing: "-0.015em", color: "#1A2E40", margin: "0 0 26px", maxWidth: "17ch", textWrap: "pretty" }}>
            {"Property settlement lawyers in Sydney"}
          </h1>
          <p data-reveal="true" style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0 0 20px", textWrap: "pretty" }}>
            {"Separation means dividing what you built together, and most people have no clear idea where they stand."}
          </p>
          <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "0 0 38px", maxWidth: "56ch" }}>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"Left to drift, it gets harder rather than easier. Time limits run down, values move, and property you acquire in the meantime, including an inheritance or a redundancy payment, can still be drawn into the pool."}
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"We act for people across Sydney dividing homes, superannuation, businesses and debts, and we formalise it properly so it is actually final. Our Principal, Tash Nolan, is recognised in Doyle's Guide 2026 for high net-worth and complex financial matters."}
            </p>
          </div>
          <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <a href="#book" data-press="true" style={{ background: "#B4552F", color: "#FFFFFF", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", textDecoration: "none" }}>
              {"Talk to us about your options"}
            </a>
            {" "}
            <PhoneLink office="sydney" location="body" position="hero" data-press="true" style={{ border: "1px solid #BFC8D2", color: "#1A2E40", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", background: "rgba(248,246,242,0.6)", textDecoration: "none" }}>
              {"Call "}
              {offices.sydney.phoneDisplay}
            </PhoneLink>
          </div>
        </div>
        <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div data-clip="true" style={{ overflow: "hidden", borderRadius: "3px", aspectRatio: "4 / 3.6", maxHeight: "560px", background: "#E8E4DC" }}>
            <img data-hero-img="true" src="/images/glass-walled-meeting-rooms-at-nolan-family-law-a-e5a72b3b.webp" width={1300} height={650} alt="Glass-walled meeting rooms at Nolan Family Law and Mediation's offices on Bligh Street in the Sydney CBD" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%" }} fetchPriority="high" decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 100px), 1fr))", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Time limits apply"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"12 months, or 2 years de facto"}
              </div>
            </div>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Two ways to finalise"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"Consent orders or a BFA"}
              </div>
            </div>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {offices.sydney.streetShort}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"Sydney CBD, or by video"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px 72px" }}>
        <nav aria-label="Breadcrumb" data-reveal="true" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "14px", color: "#4A5A66", paddingBottom: "28px", marginBottom: "40px", borderBottom: "1px solid #E8E4DC" }}>
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
            {"Property settlement"}
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
          {"Property settlement after separation in NSW, and how to divide things fairly."}
        </h2>
        <aside aria-labelledby="quick-answer" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "20px 56px", padding: "40px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "14px" }}>
              {"Quick answer"}
            </div>
            <h3 id="quick-answer" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0", textWrap: "pretty" }}>
              {"What is a property settlement in NSW?"}
            </h3>
          </div>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "62ch", textWrap: "pretty" }}>
            {"A property settlement is how separating couples divide their property, superannuation and debts. It applies to married and de facto couples in NSW, and it is separate from divorce. Married couples generally have 12 months from when a divorce order takes effect to apply to the court, and de facto couples 2 years from separation. Most settlements are made final by consent orders, which the Federal Circuit and Family Court of Australia approves without a hearing, or by a binding financial agreement, which stays private but requires each person to have their own lawyer. Nolan Family Law & Mediation advises on property settlements from "}
            {offices.sydney.streetShort}
            {", Sydney."}
          </p>
        </aside>
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
            {"People arrive at this point from different places. Start with yours."}
          </h2>
          <p style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0", textWrap: "pretty" }}>
            {"Choose whichever is closest to your situation. Each one takes you to the part of this page that matters most right now."}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "24px" }}>
          <a href="#divide" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"I do not know what I am entitled to"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"How the court works out what is fair"}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#how" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"We mostly agree already"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Making it final by consent orders or a BFA"}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#process" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"We cannot agree on anything"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"How we move a stuck matter forward"}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#advice" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Our finances are complicated"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Businesses, trusts, self managed super and overseas assets"}
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
              {"What it is"}
            </a>
            {" "}
            <a href="#included" data-toc-link="included" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"What is in the pool"}
            </a>
            {" "}
            <a href="#timelimits" data-toc-link="timelimits" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Time limits"}
            </a>
            {" "}
            <a href="#how" data-toc-link="how" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Making it final"}
            </a>
            {" "}
            <a href="#consent-vs-bfa" data-toc-link="consent-vs-bfa" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Consent orders or a BFA"}
            </a>
            {" "}
            <a href="#divide" data-toc-link="divide" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"How the court decides"}
            </a>
            {" "}
            <a href="#super" data-toc-link="super" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Superannuation"}
            </a>
            {" "}
            <a href="#home" data-toc-link="home" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"The family home"}
            </a>
            {" "}
            <a href="#defacto" data-toc-link="defacto" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"De facto couples"}
            </a>
            {" "}
            <a href="#pets" data-toc-link="pets" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Pets"}
            </a>
            {" "}
            <a href="#process" data-toc-link="process" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Working with us"}
            </a>
            {" "}
            <a href="#advice" data-toc-link="advice" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"When to get advice"}
            </a>
            {" "}
            <a href="#costs" data-toc-link="costs" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"What it costs"}
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
                {"What it is"}
              </a>
              {" "}
              <a href="#included" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"What is in the pool"}
              </a>
              {" "}
              <a href="#timelimits" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Time limits"}
              </a>
              {" "}
              <a href="#how" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Making it final"}
              </a>
              {" "}
              <a href="#consent-vs-bfa" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Consent orders or a BFA"}
              </a>
              {" "}
              <a href="#divide" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"How the court decides"}
              </a>
              {" "}
              <a href="#super" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Superannuation"}
              </a>
              {" "}
              <a href="#home" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"The family home"}
              </a>
              {" "}
              <a href="#defacto" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"De facto couples"}
              </a>
              {" "}
              <a href="#pets" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Pets"}
              </a>
              {" "}
              <a href="#process" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Working with us"}
              </a>
              {" "}
              <a href="#advice" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"When to get advice"}
              </a>
              {" "}
              <a href="#costs" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"What it costs"}
              </a>
              {" "}
              <a href="#faq" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Questions"}
              </a>
            </nav>
          </details>

          {/* ── What it is ── */}
          <section id="what" data-screen-label="What it is" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What is a property settlement, and how is it different from divorce?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"A property settlement is how you divide what you own and what you owe after a relationship ends. It covers the home, savings, superannuation, businesses, vehicles and debts, and it applies to married couples and to de facto couples, including same sex couples."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Divorce and property settlement are two different things. A divorce ends a marriage and says nothing about money. A property settlement deals with the money and says nothing about your marital status. You do not need to be divorced to sort out your finances, and plenty of people deal with the property first."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"You can also be divorced with your finances still unresolved. That is the position worth avoiding, because a divorce starts a 12 month clock running on your right to apply to the court. If you are at the start of all this, our pages on "}
              <a href={url("sydneyHub")} style={{ fontWeight: "600" }}>
                {"separation and divorce"}
              </a>
              {" and "}
              <a href={url("sydneyChildCustody")} style={{ fontWeight: "600" }}>
                {"arrangements for children"}
              </a>
              {" cover the other two threads."}
            </p>
            <h3 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "36px 0 16px", textWrap: "pretty" }}>
              {"Who can apply in NSW?"}
            </h3>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"If you were married, you can apply whatever the length of the marriage. If you were in a de facto relationship, you generally need to show that you lived together for at least two years, or that you have a child together, or that one of you made substantial contributions and it would be a serious injustice not to make orders, or that the relationship was registered. There is also a requirement connecting the relationship to NSW or another participating state. There is more on this below, under "}
              <a href="#defacto" style={{ fontWeight: "600" }}>
                {"de facto couples"}
              </a>
              {"."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"A property settlement divides property, superannuation and debts after separation. It is separate from divorce, and you do not have to be divorced to do it. Married couples and eligible de facto couples in NSW can both apply."}
              </p>
            </div>
          </section>

          {/* ── What is in the pool ── */}
          <section id="included" data-screen-label="What is in the pool" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What goes into the asset pool?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 28px", textWrap: "pretty" }}>
              {"Almost everything, whosever name it is in. A common and costly assumption is that an account or a car in one person's name is simply theirs. The starting point is the opposite: the court looks at everything you each own and owe."}
            </p>
            <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden", marginBottom: "28px" }}>
              <div style={{ background: "#FEFDFB", padding: "24px 26px" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "12px" }}>
                  {"What usually counts as property"}
                </div>
                <div style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50" }}>
                  {"The family home and any investment property or land. Bank accounts, shares, managed funds, term deposits and cryptocurrency. Superannuation. Business interests, including companies, trusts, partnerships and sole trader assets. Vehicles, boats, caravans, furniture, jewellery and collectibles. Life insurance with a surrender value."}
                </div>
              </div>
              <div style={{ background: "#FEFDFB", padding: "24px 26px" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "12px" }}>
                  {"And the debts"}
                </div>
                <div style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50" }}>
                  {"Mortgages on any property. Personal loans and car finance. Credit card balances. Tax debts owed to the ATO. HECS and HELP debts. Debts count whoever incurred them, which is why a full picture of both sides matters from the beginning."}
                </div>
              </div>
            </div>
            <h3 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "36px 0 16px", textWrap: "pretty" }}>
              {"What about things you brought in?"}
            </h3>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Property you owned before the relationship counts as an initial contribution. It does not automatically stay yours. How much weight it carries depends on how long you were together, whether it was used for the family, and what became of it. After a long marriage, what each of you brought in tends to matter much less than it would after a short relationship."}
            </p>
            <h3 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "36px 0 16px", textWrap: "pretty" }}>
              {"What about an inheritance or a gift?"}
            </h3>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"An inheritance or a substantial gift received during the relationship generally comes into the picture, and is usually treated as a contribution by the person who received it. An inheritance that arrives after you separate can still be taken into account if it comes before your settlement is finalised, either as part of the pool or as a resource weighed alongside it. We have written more about this in "}
              <a href={url("article:inheritances-in-family-law")} style={{ fontWeight: "600" }}>
                {"inheritances in family law"}
              </a>
              {"."}
            </p>
            <h3 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "36px 0 16px", textWrap: "pretty" }}>
              {"And anything that arrives after separation"}
            </h3>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"A bonus, a redundancy payment, a lottery win, a property bought with someone new. Until your settlement is formalised, these can still be brought into account. This is the single strongest practical reason not to leave things half done."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"There is also a newer point worth knowing. Since the Family Law Act was amended in 2025, the court expressly takes into account material wastage, meaning property or financial resources that one person has run down deliberately or recklessly. Significant gambling losses are the obvious example, though whether something is material depends on the size of the pool."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Dividing property can also carry tax and duty consequences that are easy to miss. Our articles on "}
              <a href={url("article:taxation-issues-arising-in-family-law-property-settlements")} style={{ fontWeight: "600" }}>
                {"tax issues in property settlements"}
              </a>
              {" and "}
              <a href={url("article:stamp-duty-exemptions-in-family-law-property-settlements")} style={{ fontWeight: "600" }}>
                {"stamp duty exemptions"}
              </a>
              {" explain where these usually arise."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"The pool includes everything each of you owns and owes, in either name: property, accounts, superannuation, businesses, vehicles and debts. Property brought into the relationship, inheritances and gifts all come into the picture as contributions rather than staying separate. Anything acquired after separation can still count until the settlement is final."}
              </p>
            </div>
          </section>

          {/* ── Time limits ── */}
          <section id="timelimits" data-screen-label="Time limits" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How long do you have to apply in NSW?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 28px", textWrap: "pretty" }}>
              {"There are two deadlines, and which one applies to you depends on whether you were married."}
            </p>
            <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden", marginBottom: "28px" }}>
              <div style={{ background: "#FEFDFB", padding: "26px 28px" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "34px", lineHeight: "1.1", color: "#1A2E40", marginBottom: "8px" }}>
                  {"12 months"}
                </div>
                <div style={{ fontSize: "16.5px", lineHeight: "1.65", color: "#2C3E50" }}>
                  {"If you were married, from the day your divorce order takes effect, which is one month and one day after the court makes it."}
                </div>
              </div>
              <div style={{ background: "#FEFDFB", padding: "26px 28px" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "34px", lineHeight: "1.1", color: "#1A2E40", marginBottom: "8px" }}>
                  {"2 years"}
                </div>
                <div style={{ fontSize: "16.5px", lineHeight: "1.65", color: "#2C3E50" }}>
                  {"If you were in a de facto relationship, from the date you separated, which is why being clear about that date matters."}
                </div>
              </div>
            </div>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"If you apply within the time limit, you simply apply. After it, you need the court's permission first, and that is not readily given. You would need to show hardship and explain why you did not come sooner."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"You can be separated while still living in the same house, which often surprises people. What matters is whether you have stopped living as a couple: separate finances, separate sleeping arrangements, no longer doing things for one another as partners, and having told the people close to you. That date is what sets your clock running, so it is worth getting advice about it early rather than guessing."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0", textWrap: "pretty" }}>
              {"Waiting rarely helps. Records are harder to obtain, memories of who paid for what fade, values move, and new relationships complicate things. Meanwhile an informal arrangement, however carefully you wrote it down between yourselves, is not binding on either of you."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Married couples have 12 months from the day a divorce order takes effect. De facto couples have 2 years from separation. After that you need the court's permission, which is hard to get. You can be separated while living under one roof, and that date is what starts the clock."}
              </p>
            </div>
          </section>

          {/* ── Making it final ── */}
          <section id="how" data-screen-label="Making it final" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How is a property settlement made final?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 28px", textWrap: "pretty" }}>
              {"There are three routes, and the difference between them matters more than most people expect. An agreement that has not been formalised one of these ways is not binding, no matter how fair it feels or how clearly you have written it down."}
            </p>
            <h3 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 16px", textWrap: "pretty" }}>
              {"Consent orders, which most people use"}
            </h3>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Consent orders are your agreement turned into court orders. You reach agreement, between yourselves, through your lawyers or at mediation. We draft the application and the terms, you both sign, and it is filed with the Federal Circuit and Family Court of Australia. A registrar considers whether the orders are just and equitable, and if so, approves them. Neither of you attends court."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Once made, the orders are enforceable and the division is final. Most people choose this route because it gives certainty without a hearing, and because a registrar looking it over is a safeguard rather than an obstacle. Allow a couple of months for the court's part of it, on top of the time it takes to agree."}
            </p>
            <h3 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "36px 0 16px", textWrap: "pretty" }}>
              {"A binding financial agreement, which stays private"}
            </h3>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"A binding financial agreement is a contract between the two of you rather than a court order. It is never filed, so nothing about your finances goes near a court file. The trade off is that there is no independent check on fairness, and the formal requirements are strict. Each of you must have your own lawyer, and each lawyer must certify that advice was given. Get any of that wrong and the agreement can be set aside later, as can an agreement obtained by pressure, fraud or incomplete disclosure."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The same kind of agreement can be made before a marriage or during one, which is what people usually mean by a prenup. Our "}
              <a href={url("sydneyPrenups")} style={{ fontWeight: "600" }}>
                {"prenuptial agreements and BFAs"}
              </a>
              {" page covers those."}
            </p>
            <h3 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "36px 0 16px", textWrap: "pretty" }}>
              {"Court orders, when you genuinely cannot agree"}
            </h3>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"If agreement is out of reach, either of you can apply for property orders and a judge will decide. It is slower, more expensive and more stressful than the alternatives, and the outcome is no longer in your hands. It is sometimes necessary, where one person will not engage, where disclosure is being withheld, or where assets are being moved."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"We work towards agreement first, and the court expects the same. Before a property application, you are generally expected to have made a genuine attempt to resolve things, which is one reason "}
              <a href={url("sydneyMediation")} style={{ fontWeight: "600" }}>
                {"family law mediation"}
              </a>
              {" is often the step that unlocks a settlement."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"A property settlement becomes binding in one of three ways: consent orders, which the court approves without a hearing and which most people use; a binding financial agreement, which stays private but requires each person to have their own lawyer; or court orders, if you cannot agree. An informal agreement is not binding on either of you."}
              </p>
            </div>
          </section>

          {/* ── Consent orders or a BFA ── */}
          <section id="consent-vs-bfa" data-screen-label="Consent orders or a BFA" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Consent orders or a binding financial agreement?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 28px", textWrap: "pretty" }}>
              {"This is the choice most people face once they have agreed in principle. Set side by side, the difference is mainly about privacy, oversight and how easily the arrangement could be unpicked later."}
            </p>
            <div data-reveal="true" style={{ overflowX: "auto", marginBottom: "28px", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
              <table style={{ width: "100%", minWidth: "560px", borderCollapse: "collapse", fontSize: "16px", background: "#FEFDFB" }}>
                <caption style={{ captionSide: "top", textAlign: "left", padding: "18px 22px 0", fontSize: "14px", color: "#4A5A66" }}>
                  {"Consent orders compared with a binding financial agreement"}
                </caption>
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: "left", padding: "16px 22px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3A6D8C", borderBottom: "1px solid #E8E4DC" }} />
                    <th scope="col" style={{ textAlign: "left", padding: "16px 22px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3A6D8C", borderBottom: "1px solid #E8E4DC" }}>
                      {"Consent orders"}
                    </th>
                    <th scope="col" style={{ textAlign: "left", padding: "16px 22px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3A6D8C", borderBottom: "1px solid #E8E4DC" }}>
                      {"Binding financial agreement"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style={{ textAlign: "left", padding: "15px 22px", fontWeight: "600", color: "#1A2E40", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"The court's role"}
                    </th>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Approved by a registrar, with no hearing"}
                    </td>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"None at all"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ textAlign: "left", padding: "15px 22px", fontWeight: "600", color: "#1A2E40", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Legal advice"}
                    </th>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Strongly advisable, not compulsory"}
                    </td>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Compulsory, and each of you needs your own lawyer"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ textAlign: "left", padding: "15px 22px", fontWeight: "600", color: "#1A2E40", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Privacy"}
                    </th>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Filed with the court"}
                    </td>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Entirely private"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ textAlign: "left", padding: "15px 22px", fontWeight: "600", color: "#1A2E40", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"How long it takes"}
                    </th>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"A couple of months for the court's review"}
                    </td>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Effective as soon as it is properly signed"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ textAlign: "left", padding: "15px 22px", fontWeight: "600", color: "#1A2E40", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Fairness check"}
                    </th>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Yes, the registrar considers whether the orders are just and equitable"}
                    </td>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"No, you each accept the terms on your own advice"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ textAlign: "left", padding: "15px 22px", fontWeight: "600", color: "#1A2E40", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Risk of challenge"}
                    </th>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Low, on limited grounds"}
                    </td>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Higher, including for technical defects"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ textAlign: "left", padding: "15px 22px", fontWeight: "600", color: "#1A2E40", verticalAlign: "top" }}>
                      {"Tends to suit"}
                    </th>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", verticalAlign: "top" }}>
                      {"Most separating couples"}
                    </td>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", verticalAlign: "top" }}>
                      {"People for whom privacy is the priority, and some complex structures"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"In practice, most people in Sydney finalise by consent orders. The oversight and the difficulty of unpicking them afterwards are usually what people want once they understand the choice. A binding financial agreement comes into its own where privacy genuinely matters, or where the arrangement needs to do something a court order cannot."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0", textWrap: "pretty" }}>
              {"Which one suits you depends on your circumstances, and it is one of the first things we will talk through. If you are looking for parenting consent orders rather than property, that is covered on our "}
              <a href={url("sydneyChildCustody")} style={{ fontWeight: "600" }}>
                {"child custody and parenting arrangements"}
              </a>
              {" page."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Consent orders are approved by the court, carry a fairness check and are hard to challenge. A binding financial agreement is private and needs no approval, but each person must have their own lawyer and it is easier to attack if the formalities are not right. Most separating couples use consent orders."}
              </p>
            </div>
          </section>

          {/* ── How the court decides ── */}
          <section id="divide" data-screen-label="How the court decides" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How does the court decide what is fair?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The same framework applies whether a judge decides your matter or you settle it between yourselves, because any agreement still has to be one a court would approve. It sits in section 79 of the Family Law Act for married couples and section 90SM for de facto couples."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 28px", textWrap: "pretty" }}>
              {"Those provisions were restructured on 10 June 2025, so a good deal of the guidance still circulating online, including material that refers to the old \"section 75(2) factors\", no longer describes the law accurately. The Act does not prescribe an order of steps, but in practice the court still works through four stages."}
            </p>
            <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden", marginBottom: "28px" }}>
              <div data-fee-row="true" style={{ background: "#FEFDFB", padding: "26px 28px", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
                  {"Stage one"}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 10px" }}>
                  {"What is there to divide"}
                </h3>
                <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                  {"The court identifies what each of you owns and what each of you owes, and puts a value on it. Superannuation is included. Debts now sit in this first stage explicitly, which is one of the 2025 changes."}
                </p>
              </div>
              <div data-fee-row="true" style={{ background: "#FEFDFB", padding: "26px 28px", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
                  {"Stage two"}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 10px" }}>
                  {"What each of you contributed"}
                </h3>
                <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                  {"Money is only part of this. Raising children, running the household, renovating, and supporting the other person's career or business all count, and in long relationships contributions are often assessed as equal or close to it. The Act now also recognises, expressly, the effect family violence has had on a person's ability to contribute."}
                </p>
              </div>
              <div data-fee-row="true" style={{ background: "#FEFDFB", padding: "26px 28px", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
                  {"Stage three"}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 10px" }}>
                  {"Your current and future circumstances"}
                </h3>
                <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                  {"Age, health, income and earning capacity, and who is caring for any children under 18, including what that person needs in order to house them. This stage now also takes in the debts each of you will carry, the effect of family violence on the other person's circumstances, and property one of you has wasted deliberately or recklessly. These considerations used to be cross-referenced from the spousal maintenance provisions. Since June 2025 they sit in section 79 itself."}
                </p>
              </div>
              <div data-fee-row="true" style={{ background: "#FEFDFB", padding: "26px 28px", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
                  {"Stage four"}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 10px" }}>
                  {"Whether the result is just and equitable"}
                </h3>
                <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                  {"Finally the court stands back and asks whether the overall division is fair in your particular circumstances. If it is not, the figures are adjusted. This is also the question a registrar is considering when reviewing consent orders."}
                </p>
              </div>
            </div>
            <h3 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "36px 0 16px", textWrap: "pretty" }}>
              {"Is a 50/50 split the starting point?"}
            </h3>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"No, and this is the most common misunderstanding we meet. There is no presumption of equality and no formula. An equal division is a frequent outcome after a long relationship where contributions were similar, but the court arrives there rather than starting there. We have written about this at more length in "}
              <a href={url("article:family-law-property-settlements-is-a-50-50-split-the-starting-point")} style={{ fontWeight: "600" }}>
                {"is a 50/50 split the starting point?"}
              </a>
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"What we can do, once we understand your finances and your history together, is tell you the range a court would be likely to see as reasonable. That range is what sensible negotiation happens inside."}
            </p>
            <h3 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "36px 0 16px", textWrap: "pretty" }}>
              {"If there has been family violence"}
            </h3>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"This is one of the clearest changes in the 2025 amendments, and it is worth saying plainly: family violence is now expressly relevant to a property settlement, not only to arrangements for children. It can be relevant to what you were able to contribute, and to the circumstances you are left in. The definition in the Act also now expressly covers economic and financial abuse, and coercive or controlling behaviour, so matters such as being kept away from money, or debts taken out in your name without your agreement, are squarely within it."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 24px", textWrap: "pretty" }}>
              {"What matters legally is the effect it had, rather than the conduct in isolation. If any of this is part of your situation, please tell us early. It changes how we approach the matter, and it may change the outcome."}
            </p>
            <aside data-reveal="true" style={{ padding: "26px 28px", background: "#FEFDFB", border: "1px solid #3A6D8C", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "10px" }}>
                {"If you are not safe"}
              </div>
              <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0" }}>
                {"In an emergency, call "}
                <a href="tel:000" style={{ fontWeight: "600" }}>
                  {"000"}
                </a>
                {". For confidential counselling and support at any hour, 1800RESPECT is available on "}
                <a href="tel:1800737732" style={{ fontWeight: "600" }}>
                  {"1800 737 732"}
                </a>
                {". Your safety comes before any question about property."}
              </p>
            </aside>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"The court identifies the property and debts, assesses what each of you contributed, considers your current and future circumstances, then checks the overall result is just and equitable. There is no presumption of a 50/50 split. Since June 2025 the considerations sit in section 79 itself rather than being drawn from the maintenance provisions, and family violence and deliberate wastage are expressly relevant."}
              </p>
            </div>
          </section>

          {/* ── Superannuation ── */}
          <section id="super" data-screen-label="Superannuation" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What happens to superannuation?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Superannuation is often the second largest asset after the home, and it is the one most often misunderstood. Under the Family Law Act it is treated as property, which means it can be divided, even though neither of you can usually touch it for years."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 28px", textWrap: "pretty" }}>
              {"Super built up before the relationship, during it and after separation can all come into the pool. It is valued at its splittable amount rather than what you would receive if you could cash it in today."}
            </p>
            <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden", marginBottom: "28px" }}>
              <div style={{ background: "#FEFDFB", padding: "24px 28px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40", margin: "0 0 8px" }}>
                  {"Split it"}
                </h3>
                <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                  {"An agreed share moves across, giving the other person their own interest, either in the same fund or rolled into theirs. This keeps retirement savings intact for both of you, and tends to suit where the balances are significant and neither of you is near retirement."}
                </p>
              </div>
              <div style={{ background: "#FEFDFB", padding: "24px 28px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40", margin: "0 0 8px" }}>
                  {"Offset it"}
                </h3>
                <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                  {"One of you keeps your super untouched, and the other takes a larger share of the rest, often equity in the home. This helps where someone needs money they can actually use now, for a deposit or to re-establish themselves. There is no automatic discount for super being locked away, though it can be part of the negotiation."}
                </p>
              </div>
              <div style={{ background: "#FEFDFB", padding: "24px 28px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40", margin: "0 0 8px" }}>
                  {"Flag it"}
                </h3>
                <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                  {"The interest is flagged so it cannot be paid out until the flag is lifted. This is uncommon, and used where the value cannot sensibly be settled yet."}
                </p>
              </div>
            </div>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Two situations need particular care. Defined benefit schemes, which many people in the NSW public sector hold, often need an actuarial valuation before anyone can say what the interest is really worth. Self managed funds raise their own problems, especially where the fund owns the family home or business premises, or where you are both trustees."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Three things we are asked often, and the short answers. No, super is not simply yours because you earned it. Yes, it can be split now rather than at retirement. And no, there is no rule that converts a super balance into a lower cash figure. Our article on "}
              <a href={url("article:what-happens-to-your-super-when-you-separate")} style={{ fontWeight: "600" }}>
                {"what happens to your super when you separate"}
              </a>
              {" goes further into the mechanics."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Superannuation is property under the Family Law Act and can be divided even though it cannot be accessed until retirement. Super from before, during and after the relationship can be included. It can be split, offset against other property, or in rare cases flagged. Defined benefit schemes and self managed funds usually need expert valuation."}
              </p>
            </div>
          </section>

          {/* ── The family home ── */}
          <section id="home" data-screen-label="The family home" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What happens to the family home?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"For most people in Sydney this is both the largest number on the page and the hardest part of the conversation. It is rarely a simple question of selling."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"There are usually four possibilities. One of you refinances and buys out the other's share. The home is transferred to one of you as part of the wider settlement, balanced by superannuation or other property. It is sold and the proceeds divided. Or a sale is deferred for a defined period, sometimes until the children finish school, with the terms written into the orders."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"What decides it is often not the law but the bank. Whether a lender will refinance the mortgage on one income is the practical constraint, and it is worth finding that out early rather than negotiating towards something that cannot be funded."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Where there are children under 18, the 2025 amendments made the position clearer: the court expressly considers what the person caring for them needs in order to house them. That does not guarantee anyone keeps the house, but it is now a stated consideration rather than something argued by implication."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0", textWrap: "pretty" }}>
              {"A transfer between separating partners may attract a "}
              <a href={url("article:stamp-duty-exemptions-in-family-law-property-settlements")} style={{ fontWeight: "600" }}>
                {"stamp duty exemption"}
              </a>
              {" if it is done properly, and there can be "}
              <a href={url("article:taxation-issues-arising-in-family-law-property-settlements")} style={{ fontWeight: "600" }}>
                {"capital gains tax consequences"}
              </a>
              {" for an investment property. Both are worth addressing before the orders are drafted rather than afterwards."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"You do not necessarily have to sell. One person can refinance and buy the other out, the home can be transferred as part of the overall settlement, it can be sold and divided, or a sale can be deferred. Whether a lender will refinance is usually the real constraint, and the housing needs of children under 18 are now an express consideration."}
              </p>
            </div>
          </section>

          {/* ── De facto couples ── */}
          <section id="defacto" data-screen-label="De facto couples" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Property settlement for de facto couples in NSW"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Once you are through the gate, the law divides property the same way whether you were married or not. The differences are at the gate itself, and in the deadline."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"A married person simply applies. A de facto applicant has to establish that there was a de facto relationship, and usually when it began and when it ended. If your former partner disputes either date, that can matter a great deal, because your two year deadline runs from separation."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"In deciding whether a relationship was de facto, the court looks at the whole picture rather than any single thing: how long you were together, how you lived, whether your finances were intertwined, how you owned and used property, the degree of mutual commitment, the care of any children, how you divided the household, and how the relationship appeared to the people around you. You do not need to tick every box."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The evidence that tends to help is ordinary and unglamorous: joint accounts and shared expenses, a lease or title in both names, bills and correspondence at the same address, photographs and travel, a child's birth certificate, and statements from friends and family. If you think a dispute about dates is coming, start gathering it now. There is more on our "}
              <a href={url("sydneyDeFacto")} style={{ fontWeight: "600" }}>
                {"de facto relationships"}
              </a>
              {" page."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"De facto couples in NSW divide property under the same framework as married couples, but must first establish the relationship and generally apply within two years of separation. The court weighs the whole picture of how you lived rather than one factor, so the dates and the everyday evidence matter."}
              </p>
            </div>
          </section>

          {/* ── Pets ── */}
          <section id="pets" data-screen-label="Pets" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Who keeps the pets?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"People are sometimes embarrassed to raise this. They should not be. For many households it is one of the most painful parts of separating, and since 2025 the law has something specific to say about it."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The Family Law Act now deals with pets as companion animals, separately from other property. If you cannot agree, the court can decide that one of you keeps the animal, or that it be sold. In reaching that decision it considers matters such as who has cared for and paid for the animal, the relationship between the animal and each of you and any children, whether there has been family violence, and whether anyone has treated the animal cruelly."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0", textWrap: "pretty" }}>
              {"In practice almost everyone resolves this between themselves, and whatever you agree can be written into your consent orders so it is not revisited later. If an animal has been used to pressure or control you, that is relevant and you should tell us."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Since the 2025 changes, pets are treated as companion animals under the Family Law Act. If you cannot agree, the court can decide who keeps a pet or order that it be sold, considering who has cared for it, the bond with each person, any family violence and any cruelty. Most people agree it themselves and record it in their consent orders."}
              </p>
            </div>
          </section>

          {/* ── Working with us ── */}
          <section id="process" data-screen-label="Working with us" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What working with us actually involves"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 28px", textWrap: "pretty" }}>
              {"Most property settlements follow the same path. Knowing the shape of it in advance makes the whole thing less daunting."}
            </p>
            <ol data-reveal="true" style={{ listStyle: "none", margin: "0 0 28px", padding: "0", display: "flex", flexDirection: "column", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden", counterReset: "step" }}>
              <li style={{ background: "#FEFDFB", padding: "24px 28px" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
                  {"One"}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40", margin: "0 0 8px" }}>
                  {"We listen, then tell you where you stand"}
                </h3>
                <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                  {"You tell us about the relationship and the finances as you understand them. We explain the range a court would be likely to consider reasonable, the routes to getting there, and what each would involve. You leave with a plan rather than a lecture."}
                </p>
              </li>
              <li style={{ background: "#FEFDFB", padding: "24px 28px" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
                  {"Two"}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40", margin: "0 0 8px" }}>
                  {"Both sides put everything on the table"}
                </h3>
                <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                  {"You each have a duty to disclose your financial position fully: accounts, tax returns, superannuation, loans, business records. It feels laborious, and it is the foundation for everything after it. Orders made on an incomplete picture can be set aside years later."}
                </p>
              </li>
              <li style={{ background: "#FEFDFB", padding: "24px 28px" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
                  {"Three"}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40", margin: "0 0 8px" }}>
                  {"We establish what things are worth"}
                </h3>
                <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                  {"Property valuations where needed, a business valuation if there is one, and an actuarial figure for a defined benefit superannuation interest. Then the net pool is clear and the argument narrows to how it is shared."}
                </p>
              </li>
              <li style={{ background: "#FEFDFB", padding: "24px 28px" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
                  {"Four"}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40", margin: "0 0 8px" }}>
                  {"We negotiate"}
                </h3>
                <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                  {"Usually between solicitors, often at a round table, and frequently at "}
                  <a href={url("sydneyMediation")} style={{ fontWeight: "600" }}>
                    {"mediation"}
                  </a>
                  {", which resolves a great many matters that felt stuck. The aim is a settlement you can live with, reached without a hearing."}
                </p>
              </li>
              <li style={{ background: "#FEFDFB", padding: "24px 28px" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
                  {"Five"}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40", margin: "0 0 8px" }}>
                  {"We make it binding"}
                </h3>
                <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                  {"Consent orders drafted, signed and filed, or a binding financial agreement prepared with the certificates it requires. This is the step that turns an understanding into something neither of you can walk away from."}
                </p>
              </li>
              <li style={{ background: "#FEFDFB", padding: "24px 28px" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
                  {"Six"}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40", margin: "0 0 8px" }}>
                  {"We see it through"}
                </h3>
                <p style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                  {"Titles transferred, superannuation split, mortgages refinanced, accounts closed and payments made. We also suggest you update your will, which people routinely forget at exactly the moment it matters most."}
                </p>
              </li>
            </ol>
            <div data-reveal="true" style={{ padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"A property settlement runs through six stages: advice on where you stand, full financial disclosure on both sides, valuing what is there, negotiation or mediation, formalising by consent orders or a binding financial agreement, then putting it into effect. Where both people engage, it usually takes a few months rather than years."}
              </p>
            </div>
          </section>

          {/* ── When to get advice ── */}
          <section id="advice" data-screen-label="When to get advice" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"When should you get a lawyer involved?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 28px", textWrap: "pretty" }}>
              {"Not every separation needs a lawyer at every turn. Some situations, though, are expensive to get wrong, and the cost of fixing them later is almost always greater than the cost of advice at the start."}
            </p>
            <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden", marginBottom: "28px" }}>
              <div style={{ background: "#FEFDFB", padding: "24px 26px" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "12px" }}>
                  {"Get advice early if"}
                </div>
                <div style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50" }}>
                  {"Your finances involve a company, a family or discretionary trust, a partnership, a self managed super fund, several properties or assets overseas. There is a business to value. One of you held the money and the other does not know what exists. You suspect something is being hidden or moved. You were in a de facto relationship and the dates are contested, or you are approaching the two year limit. There has been family violence or coercion, including about money. An inheritance or a substantial initial contribution is in play, or there is already a financial agreement."}
                </div>
              </div>
              <div style={{ background: "#FEFDFB", padding: "24px 26px" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "12px" }}>
                  {"You may need less than you think if"}
                </div>
                <div style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#2C3E50" }}>
                  {"The relationship was short, there is little to divide, there is no property and no superannuation of consequence, you both agree, and there are no children. Even then, one advice appointment and a look over your documents is worth it, so that you know what you are signing away and the paperwork does not come back from the court."}
                </div>
              </div>
            </div>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The reason to use experienced family lawyers for this, rather than a general practice or a template, is that property settlements sit at the junction of several areas at once: the Family Law Act, the NSW rules for de facto couples, superannuation law, valuation practice, capital gains tax and stamp duty, and the court's own procedural requirements. A missed superannuation splitting clause or an overlooked duty exemption is costly and tedious to put right afterwards."}
            </p>
            <div data-reveal="true" style={{ padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Get advice early where the finances are complex, where a business, trust or self managed fund is involved, where one person controlled the money, where disclosure is doubted, where there has been family violence, or where you are a de facto couple near the two year limit. Even a straightforward matter benefits from one advice appointment and a document review."}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>

    {/* ── What it costs ── */}
    <section id="costs" data-screen-label="What it costs" data-section="true" data-toc-section="true" style={{ background: "#F8F6F2" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "120px 24px" }}>
        <div data-reveal="true" style={{ marginBottom: "40px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
            {"Clear costs from day one"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 20px", maxWidth: "24ch", textWrap: "pretty" }}>
            {"What does a property settlement cost?"}
          </h2>
          <p style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0 0 16px", textWrap: "pretty" }}>
            {"We do not publish a price list, because the honest answer depends on things we cannot know before we have spoken to you."}
          </p>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", maxWidth: "58ch", margin: "0" }}>
            {"What we will do is explain how our fees work at the first meeting, put an estimate in writing once we understand your matter, and keep you updated as it moves. If something is going to cost more than we expected, you hear it from us before the work is done, not afterwards."}
          </p>
        </div>
        <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden", marginBottom: "36px", maxWidth: "900px" }}>
          <div data-fee-row="true" style={{ background: "#FEFDFB", padding: "22px 26px", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1)" }}>
            <div style={{ fontSize: "17px", fontWeight: "600", color: "#1A2E40", marginBottom: "4px" }}>
              {"Whether the two of you can agree"}
            </div>
            <div style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", maxWidth: "62ch" }}>
              {"By far the biggest factor. A negotiated settlement formalised by consent orders costs a fraction of a contested hearing."}
            </div>
          </div>
          <div data-fee-row="true" style={{ background: "#FEFDFB", padding: "22px 26px", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1)" }}>
            <div style={{ fontSize: "17px", fontWeight: "600", color: "#1A2E40", marginBottom: "4px" }}>
              {"How complicated the finances are"}
            </div>
            <div style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", maxWidth: "62ch" }}>
              {"A home, a mortgage and two superannuation accounts is straightforward. Companies, trusts, a self managed fund or assets overseas take longer to work through."}
            </div>
          </div>
          <div data-fee-row="true" style={{ background: "#FEFDFB", padding: "22px 26px", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1)" }}>
            <div style={{ fontSize: "17px", fontWeight: "600", color: "#1A2E40", marginBottom: "4px" }}>
              {"Whether valuations are needed"}
            </div>
            <div style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", maxWidth: "62ch" }}>
              {"Property valuers, business valuers and actuaries charge their own fees. We tell you when one is genuinely necessary and when it is not."}
            </div>
          </div>
          <div data-fee-row="true" style={{ background: "#FEFDFB", padding: "22px 26px", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1)" }}>
            <div style={{ fontSize: "17px", fontWeight: "600", color: "#1A2E40", marginBottom: "4px" }}>
              {"Whether anyone has to go to court"}
            </div>
            <div style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", maxWidth: "62ch" }}>
              {"Court is the expensive path and we treat it as the last one. Most of our property matters never get there."}
            </div>
          </div>
        </div>
        <a href="#book" data-pick-topic="fees" data-press="true" data-reveal="true" style={{ display: "inline-block", background: "#B4552F", color: "#FFFFFF", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", textDecoration: "none" }}>
          {"Talk to us about costs"}
        </a>
      </div>
    </section>

    {/* ── Your lawyers ── */}
    <section data-screen-label="Your lawyers" data-section="true" style={{ background: "#FEFDFB", borderTop: "1px solid #CFE0EA" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "120px 24px" }}>
        <div data-reveal="true" style={{ marginBottom: "48px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
            {"Who you would be working with"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0", maxWidth: "24ch", textWrap: "pretty" }}>
            {"Your property settlement lawyers in Sydney"}
          </h2>
        </div>
        <div data-person="true" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "148px minmax(0,1fr)", gap: "32px", alignItems: "start", maxWidth: "860px", padding: "34px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <img src="/images/tash-nolan-principal-d4d3b561.webp" width={400} height={400} alt="Tash Nolan, Principal at Nolan Family Law and Mediation" loading="lazy" style={{ display: "block", width: "148px", height: "148px", borderRadius: "3px", objectFit: "cover", objectPosition: "50% 20%" }} decoding="async" />
          <div style={{ minWidth: "0" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 6px" }}>
              {"Tash Nolan"}
            </h3>
            <div style={{ fontSize: "15px", fontWeight: "600", color: "#3A6D8C", marginBottom: "18px" }}>
              {"Principal"}
            </div>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 14px", maxWidth: "58ch" }}>
              {"Tash leads the firm's property work and is recognised in Doyle's Guide 2026 as a leading family lawyer for high net-worth and complex financial matters, alongside listings for family and divorce law in Sydney and for parenting matters. That is the credential most relevant to this page: it reflects work on the settlements where the numbers and the structures are genuinely difficult."}
            </p>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 14px", maxWidth: "58ch" }}>
              {"She holds a Master of Applied Law in Family Law and is a Nationally Accredited Mediator, so she can take a matter through negotiation and mediation as readily as through the court. The firm has been recognised by Doyle's Guide every year since 2023."}
            </p>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0" }}>
              <a href={url("profile:tash-nolan")} style={{ fontWeight: "600" }}>
                {"Read Tash's full profile"}
              </a>
              {", or see "}
              <a href={url("team")} style={{ fontWeight: "600" }}>
                {"everyone at the firm"}
              </a>
              {"."}
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ── Melbourne and related reading ── */}
    <section data-screen-label="Melbourne and related reading" data-section="true" style={{ background: "#F8F6F2", borderTop: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 24px" }}>
        <a href={url("melbourneProperty")} data-card="true" data-reveal="true" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "18px 32px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px 34px", color: "#1A2E40", textDecoration: "none", marginBottom: "56px" }}>
          <span style={{ minWidth: "0" }}>
            <span style={{ display: "block", fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
              {"In Victoria instead?"}
            </span>
            {" "}
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "24px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Our Melbourne office also handles property settlements"}
            </span>
            {" "}
            <span style={{ display: "block", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66", marginTop: "6px" }}>
              {"The framework is national, but the local practice and our Bourke Street team are set out separately"}
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
            {"Going deeper on the parts that often matter most"}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "24px" }}>
          <a href={url("article:family-law-property-settlements-is-a-50-50-split-the-starting-point")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Is a 50/50 split the starting point?"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Why there is no presumption of equal division"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("article:what-happens-to-your-super-when-you-separate")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"What happens to your super when you separate"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"How splitting works in practice"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("article:inheritances-in-family-law")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Inheritances in family law"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"When an inheritance can be drawn in"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("article:stamp-duty-exemptions-in-family-law-property-settlements")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Stamp duty exemptions"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Transferring property between separating partners"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("article:taxation-issues-arising-in-family-law-property-settlements")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Tax issues in property settlements"}
            </span>
            <span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Capital gains and the traps people miss"}
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
              {"The step that unlocks many stuck settlements"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
        </div>
      </div>
    </section>

    {/* ── Rooms ── */}
    <section data-screen-label="Rooms" style={{ background: "#FEFDFB", borderTop: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0" }}>
        <div data-clip="true" style={{ overflow: "hidden", aspectRatio: "2 / 1", maxHeight: "520px", background: "#E8E4DC" }}>
          <img src="/images/meeting-rooms-at-25-bligh-street-sydney-where-we-c1e5d7b5.webp" width={1300} height={650} alt={`Meeting rooms at ${offices.sydney.streetShort}, Sydney, where we work through property settlements with clients`} loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} decoding="async" />
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
            {"Property settlement questions, answered plainly"}
          </h2>
        </div>
        <div style={{ maxWidth: "860px", borderTop: "1px solid #E8E4DC" }}>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"How long does a property settlement take in Sydney?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Where both people cooperate and disclose their finances promptly, a negotiated settlement formalised by consent orders usually takes about three to six months, including the time the court takes to review the application. Matters involving a business valuation, a defined benefit superannuation scheme or a dispute about what the pool contains take longer. Contested court proceedings can run well beyond a year."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"How much does a property settlement cost in Sydney?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"It depends on what your matter needs, so we do not publish a price list. Cost is driven by whether you and your former partner can agree, how complex your finances are, and whether valuations or court proceedings are required. We explain how our fees work at the first meeting and put an estimate in writing, and we keep you updated as the matter moves. "}
              <a href="#book" data-pick-topic="fees" style={{ fontWeight: "600" }}>
                {"Talk to us about costs"}
              </a>
              {"."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Can I get more than half of the property?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes. There is no rule that property is divided equally. The court looks at what each of you contributed, financially and otherwise, then at your current and future circumstances, including the care and housing of any children under 18, your earning capacity, your health and your age. The result has to be just and equitable in your particular circumstances."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Is a 50/50 split the starting point in a property settlement?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"No. Equal division is a common outcome in long relationships where contributions were similar, but it is not the starting point and it is not a presumption. The court begins by working out what the property and liabilities are, not by assuming a percentage."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"What happens to superannuation in a property settlement?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Superannuation is treated as property under the Family Law Act and can be divided, even though neither of you can usually access it until retirement. Super built up before, during and after the relationship can form part of the pool. It can be split so the other person receives their own interest, offset so one person keeps their super and the other receives more of the remaining property, or in rare cases flagged for later. Defined benefit schemes and self managed funds usually need expert valuation."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Can my former partner claim my inheritance?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Possibly. An inheritance received during the relationship generally forms part of the picture, and is usually treated as a contribution by the person who received it. An inheritance received after separation can still be taken into account if it arrives before your settlement is finalised, either as part of the pool or as a resource considered alongside it. Finalising promptly is the way to put later windfalls beyond reach."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Do I have to sell the family home?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Not necessarily. One person may be able to refinance and buy out the other's share, the home may be transferred to one person as part of the wider settlement, it may be sold and the proceeds divided, or a sale may be deferred for a period. What is possible usually comes down to whether a lender will refinance, and the housing needs of any children."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"What if my former partner is hiding assets?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Both of you have a duty to disclose your financial position fully and honestly. If we are concerned that something is missing, we can press for documents, issue subpoenas to banks and other institutions, involve a forensic accountant, and ask the court to make orders. Non-disclosure is taken seriously, and orders made on an incomplete picture can be set aside years later."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"We have already divided everything ourselves. Is that enough?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"An informal agreement, even a written one, is not binding. Until your settlement is formalised by consent orders or a binding financial agreement, either of you can change your mind, and property you acquire afterwards can still be brought into account. Formalising it is what makes the division final."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Do I need a lawyer for consent orders?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"You can prepare an application yourself, but it is worth getting advice first. Applications are regularly returned for technical problems, and orders that leave out a superannuation splitting clause or overlook capital gains tax or stamp duty consequences can be expensive to put right. A registrar also has to be satisfied the orders are just and equitable before approving them."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Can de facto couples apply for a property settlement in NSW?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes, where the relationship meets the criteria in the Family Law Act. Generally that means you lived together for at least two years, or you have a child together, or one of you made substantial contributions and it would be a serious injustice not to make orders, or the relationship was registered. There is also a geographic requirement connecting the relationship to NSW or another participating state. De facto applications must be made within two years of separation."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Who keeps the pets after separation?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Since the 2025 changes to the Family Law Act, pets are dealt with as companion animals and the court can decide who keeps one, or order that it be sold. In doing so it considers matters such as who has cared for and paid for the animal, the relationship between the animal and each person, any family violence, and any history of cruelty towards the animal."}
            </p>
          </details>
        </div>
      </div>
    </section>

    {/* ── Consultation CTA ── */}
    <section id="book" data-screen-label="Consultation CTA" data-section="true" data-deep="true" style={{ background: "#1C2F40" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "120px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: "56px 80px", alignItems: "start" }}>
        <div data-reveal="true" style={{ minWidth: "0" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#A9C9DB", marginBottom: "18px" }}>
            {"Talk to us"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(32px, 4.6vw, 48px)", lineHeight: "1.14", color: "#FFFFFF", margin: "0 0 22px", maxWidth: "19ch", textWrap: "pretty" }}>
            {"Find out where you actually stand."}
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#E3E9EE", maxWidth: "50ch", margin: "0 0 36px", textWrap: "pretty" }}>
            {"Most people come to us with no clear idea what they are entitled to, and leave with one. Tell us a little about your situation and we will explain your options and what each would involve."}
          </p>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C3D0DC", marginBottom: "14px" }}>
            {"When you get in touch, we will"}
          </div>
          <ul style={{ listStyle: "none", margin: "0 0 40px", padding: "0", display: "flex", flexDirection: "column", borderTop: "1px solid rgba(195,208,220,0.22)" }}>
            <li style={{ display: "flex", gap: "14px", padding: "14px 0", borderBottom: "1px solid rgba(195,208,220,0.22)", fontSize: "16px", lineHeight: "1.55", color: "#E3E9EE" }}>
              <span aria-hidden="true" style={{ color: "#A9C9DB" }}>
                {"✓"}
              </span>
              {"Run a conflict check before anything else"}
            </li>
            <li style={{ display: "flex", gap: "14px", padding: "14px 0", borderBottom: "1px solid rgba(195,208,220,0.22)", fontSize: "16px", lineHeight: "1.55", color: "#E3E9EE" }}>
              <span aria-hidden="true" style={{ color: "#A9C9DB" }}>
                {"✓"}
              </span>
              {"Explain the range a court would be likely to consider reasonable"}
            </li>
            <li style={{ display: "flex", gap: "14px", padding: "14px 0", borderBottom: "1px solid rgba(195,208,220,0.22)", fontSize: "16px", lineHeight: "1.55", color: "#E3E9EE" }}>
              <span aria-hidden="true" style={{ color: "#A9C9DB" }}>
                {"✓"}
              </span>
              {"Set out your routes to a final settlement, and what each involves"}
            </li>
            <li style={{ display: "flex", gap: "14px", padding: "14px 0", borderBottom: "1px solid rgba(195,208,220,0.22)", fontSize: "16px", lineHeight: "1.55", color: "#E3E9EE" }}>
              <span aria-hidden="true" style={{ color: "#A9C9DB" }}>
                {"✓"}
              </span>
              {"Tell you how our fees work, and put an estimate in writing"}
            </li>
          </ul>
          <PhoneLink office="sydney" location="body" position="contact" style={{ display: "inline-block", fontFamily: "var(--font-serif)", fontSize: "30px", color: "#FFFFFF", marginBottom: "10px" }}>
            {offices.sydney.phoneDisplay}
          </PhoneLink>
          <div style={{ fontSize: "15px", lineHeight: "1.65", color: "#C3D0DC" }}>
            {offices.sydney.addressDisplay}
            <br />
            {"In person, by phone or by video"}
          </div>
        </div>
        <div data-reveal="true" data-form-card="true" style={{ minWidth: "0", background: "#FEFDFB", borderRadius: "3px", padding: "40px" }}>
          <div data-form-success="" hidden>
            <div role="status" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0" }}>
                {"Thank you. We have your message."}
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0" }}>
                {"A member of our Sydney team will contact you within one business day, using the method you chose. If something is urgent, please call us."}
              </p>
              <button type="button" data-action="resetForm" data-press="true" style={{ alignSelf: "flex-start", minHeight: "48px", padding: "0 22px", border: "1px solid #BFC8D2", borderRadius: "2px", background: "transparent", color: "#1A2E40", fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>
                {"Send another enquiry"}
              </button>
            </div>
          </div>
          <div data-form-wrap="">
            <EnquiryForm office="sydney" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "24px", lineHeight: "1.3", color: "#1A2E40" }}>
                {"Send us a confidential enquiry"}
              </div>
              <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"What should we call you? "}
                <input data-field="true" type="text" required autoComplete="name" style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: "400", color: "#1A2E40", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "2px", padding: "14px 16px", minHeight: "22px" }} name="name" />
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: "20px" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#1A2E40", minWidth: "0" }}>
                  {"Phone "}
                  <input data-field="true" type="tel" autoComplete="tel" style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: "400", color: "#1A2E40", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "2px", padding: "14px 16px", minWidth: "0" }} name="phone" />
                </label>
                {" "}
                <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#1A2E40", minWidth: "0" }}>
                  {"Email "}
                  <input data-field="true" type="email" autoComplete="email" style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: "400", color: "#1A2E40", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "2px", padding: "14px 16px", minWidth: "0" }} name="email" />
                </label>
              </div>
              <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"What would you like to talk about?"}
                <select data-field="true" name="topic" style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: "400", color: "#1A2E40", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "2px", padding: "14px 16px", minHeight: "52px" }}>
                  <option value="entitlement">
                    {"What I am entitled to"}
                  </option>
                  <option value="consent">
                    {"Consent orders or a financial agreement"}
                  </option>
                  <option value="complex">
                    {"A business, trust or self managed super fund"}
                  </option>
                  <option value="stuck">
                    {"We cannot reach agreement"}
                  </option>
                  <option value="fees">
                    {"Fees and how this works"}
                  </option>
                  <option value="other">
                    {"Something else"}
                  </option>
                </select>
              </label>
              <fieldset style={{ border: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <legend style={{ padding: "0", marginBottom: "10px", fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                  {"Where are you up to?"}
                </legend>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", fontSize: "15px", color: "#2C3E50", cursor: "pointer" }}>
                    <input type="radio" name="stage" value="recent" style={{ width: "18px", height: "18px", accentColor: "#1A2E40", margin: "0" }} />
                    {"Recently separated"}
                  </label>
                  {" "}
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", fontSize: "15px", color: "#2C3E50", cursor: "pointer" }}>
                    <input type="radio" name="stage" value="agreed" style={{ width: "18px", height: "18px", accentColor: "#1A2E40", margin: "0" }} />
                    {"We agree in principle"}
                  </label>
                  {" "}
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", fontSize: "15px", color: "#2C3E50", cursor: "pointer" }}>
                    <input type="radio" name="stage" value="unsure" defaultChecked style={{ width: "18px", height: "18px", accentColor: "#1A2E40", margin: "0" }} />
                    {"Not sure yet"}
                  </label>
                </div>
              </fieldset>
              <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                <span>
                  {"Anything you would like us to know? "}
                  <span style={{ fontWeight: "400", color: "#4A5A66" }}>
                    {"Optional. Share only what you are comfortable with."}
                  </span>
                </span>
                <textarea data-field="true" rows={4} style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: "400", lineHeight: "1.55", color: "#1A2E40", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "2px", padding: "14px 16px", resize: "vertical" }} name="message" />
              </label>
              <fieldset style={{ border: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <legend style={{ padding: "0", marginBottom: "10px", fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                  {"Is it safe for us to leave a message?"}
                </legend>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", fontSize: "15px", color: "#2C3E50", cursor: "pointer" }}>
                    <input type="radio" name="safe" value="yes" defaultChecked style={{ width: "18px", height: "18px", accentColor: "#1A2E40", margin: "0" }} />
                    {"Yes"}
                  </label>
                  {" "}
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", fontSize: "15px", color: "#2C3E50", cursor: "pointer" }}>
                    <input type="radio" name="safe" value="no" style={{ width: "18px", height: "18px", accentColor: "#1A2E40", margin: "0" }} />
                    {"No, please only speak to me"}
                  </label>
                </div>
              </fieldset>
              <button type="submit" data-press="true" style={{ minHeight: "56px", padding: "18px 34px", border: "none", borderRadius: "2px", background: "#B4552F", color: "#FFFFFF", fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", cursor: "pointer" }}>
                {"Send confidentially"}
              </button>
              <p style={{ fontSize: "14px", lineHeight: "1.55", color: "#4A5A66", margin: "0" }}>
                {"Your enquiry is confidential and goes only to our Sydney team. Sending it does not commit you or the other party to anything."}
              </p>
            </EnquiryForm>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
