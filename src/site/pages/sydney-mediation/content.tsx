/**
 * Page sections for "sydney-mediation", converted from export/mediation-sydney.html
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
            {"Sydney · Family law mediation"}
          </div>
          <h1 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(40px, 5.4vw, 72px)", lineHeight: "1.06", letterSpacing: "-0.015em", color: "#1A2E40", margin: "0 0 26px", maxWidth: "16ch", textWrap: "pretty" }}>
            {"Family law mediation in Sydney"}
          </h1>
          <p data-reveal="true" style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0 0 20px", textWrap: "pretty" }}>
            {"Most separating couples agree on more than they realise. The trouble is that every conversation seems to end in the same place."}
          </p>
          <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "0 0 38px", maxWidth: "56ch" }}>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"Left unresolved, disagreements about children and property tend to drift towards court, where months pass, costs climb and a judge makes the decisions for you."}
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"Mediation gives you a private, structured way to reach your own agreement instead. Our sessions are led by Nationally Accredited Mediators who are also experienced family lawyers, in calm rooms at our Bligh Street offices or by video."}
            </p>
          </div>
          <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <a href="#book" data-press="true" style={{ background: "#B4552F", color: "#FFFFFF", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", textDecoration: "none" }}>
              {"Enquire about mediation"}
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
            <img data-hero-img="true" src="/images/a-quiet-lounge-with-a-soft-sofa-and-armchair-at--d6160027.webp" width={1300} height={650} alt="A quiet lounge with a soft sofa and armchair at our Bligh Street offices, next to a mediation room" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "30% 50%" }} fetchPriority="high" decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 100px), 1fr))", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Half or full day"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"Sessions sized to your matter"}
              </div>
            </div>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Private rooms"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"25 Bligh St, Sydney CBD"}
              </div>
            </div>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Or by video"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"From wherever you are"}
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
            {"Family law mediation"}
          </span>
          {" "}
          <span style={{ flex: "1 1 auto" }} />
          {" "}
          <span style={{ color: "#4A5A66" }}>
            {"Reviewed by "}
            <a href={url("profile:tash-nolan")} style={{ color: "#1A2E40", fontWeight: "600" }}>
              {"Tash Nolan"}
            </a>
            {", Principal · Updated November 2026"}
          </span>
        </nav>
        <aside aria-labelledby="quick-answer" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "20px 56px", padding: "40px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "14px" }}>
              {"Quick answer"}
            </div>
            <h2 id="quick-answer" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0", textWrap: "pretty" }}>
              {"What is family law mediation?"}
            </h2>
          </div>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "62ch", textWrap: "pretty" }}>
            {"Family law mediation is a confidential meeting where a neutral mediator helps separated couples reach their own agreement about children, property or both, without a judge deciding for them. At Nolan Family Law & Mediation, sessions are led by Principal Tash Nolan and Partner Jessica Swain, both Nationally Accredited Mediators and experienced family lawyers, at "}
            {offices.sydney.streetShort}
            {", Sydney, or by video, as a half-day or full-day session. An agreement reached at mediation can then be made legally binding through consent orders or a binding financial agreement."}
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
        <div data-badge-grid="true" style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0,1fr))", alignItems: "center", gap: "32px 32px" }}>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0" }}>
            <img src="/images/australian-institute-of-family-law-arbitrators-a-1c373627.webp" width={188} height={75} alt="Australian Institute of Family Law Arbitrators and Mediators, accredited mediator member" loading="lazy" style={{ display: "block", height: "52px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
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
            {"People come to mediation from different places. Start with yours."}
          </h2>
          <p style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0", textWrap: "pretty" }}>
            {"Choose the situation closest to yours. Each one takes you to the part of this page that matters most right now."}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "24px" }}>
          <a href="#process" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"We both want to try mediation"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"How booking works and what happens on the day"}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#what" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"My former partner has suggested it"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"What mediation is, and what it is not"}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#suitable" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"I am not sure it is safe for me"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"When mediation may not be right, and what else can help"}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#book" data-pick-topic="lawyer" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"I am a lawyer booking for a client"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Check availability and room bookings"}
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
              {"What mediation is"}
            </a>
            {" "}
            <a href="#suitable" data-toc-link="suitable" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Is it right for you?"}
            </a>
            {" "}
            <a href="#matters" data-toc-link="matters" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"What we mediate"}
            </a>
            {" "}
            <a href="#process" data-toc-link="process" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"How it works"}
            </a>
            {" "}
            <a href="#compulsory" data-toc-link="compulsory" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Is mediation compulsory?"}
            </a>
            {" "}
            <a href="#prepare" data-toc-link="prepare" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"How to prepare"}
            </a>
            {" "}
            <a href="#mediators" data-toc-link="mediators" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Your mediators"}
            </a>
            {" "}
            <a href="#day" data-toc-link="day" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"The day itself"}
            </a>
            {" "}
            <a href="#fees" data-toc-link="fees" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Fees"}
            </a>
            {" "}
            <a href="#faq" data-toc-link="faq" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Common questions"}
            </a>
          </nav>
          <a href="#book" style={{ fontSize: "15px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px", paddingTop: "6px" }}>
            {"Talk to a mediator "}
            <span data-arrow="true">
              {"→"}
            </span>
          </a>
        </aside>
        <article style={{ minWidth: "0" }}>
          <details data-toc-inline="true" style={{ marginTop: "24px", border: "1px solid #E8E4DC", borderRadius: "3px", background: "#F8F6F2" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "56px", padding: "0 20px", fontSize: "15px", fontWeight: "600", color: "#1A2E40" }}>
              {"On this page "}
              <span data-faq-plus="true" aria-hidden="true" style={{ fontSize: "22px", fontWeight: "400", color: "#3A6D8C", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <div style={{ padding: "0 20px 16px", display: "flex", flexDirection: "column" }}>
              <a href="#what" style={{ padding: "10px 0", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"What mediation is"}
              </a>
              {" "}
              <a href="#suitable" style={{ padding: "10px 0", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"Is it right for you?"}
              </a>
              {" "}
              <a href="#matters" style={{ padding: "10px 0", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"What we mediate"}
              </a>
              {" "}
              <a href="#process" style={{ padding: "10px 0", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"How it works"}
              </a>
              {" "}
              <a href="#compulsory" style={{ padding: "10px 0", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"Is mediation compulsory?"}
              </a>
              {" "}
              <a href="#prepare" style={{ padding: "10px 0", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"How to prepare"}
              </a>
              {" "}
              <a href="#mediators" style={{ padding: "10px 0", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"Your mediators"}
              </a>
              {" "}
              <a href="#day" style={{ padding: "10px 0", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"The day itself"}
              </a>
              {" "}
              <a href="#fees" style={{ padding: "10px 0", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"Fees"}
              </a>
              {" "}
              <a href="#faq" style={{ padding: "10px 0", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"Common questions"}
              </a>
            </div>
          </details>

          {/* ── What mediation is ── */}
          <section id="what" data-screen-label="What mediation is" data-toc-section="true" style={{ padding: "72px 0" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
              {"01 · What family law mediation is"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"What does a family law mediator do?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 32px", textWrap: "pretty" }}>
              {"A family law mediator runs a structured conversation between separated partners, with the outcome left in your hands. In court, a judge decides what happens to your children and your property. In mediation, the two of you decide. The mediator keeps the conversation safe, fair and focused, makes sure you are each heard, and helps you test which options could really work. "}
              <a href={url("article:role-of-the-mediator")} style={{ fontWeight: "600" }}>
                {"Read more about the role of the mediator"}
              </a>
              {"."}
            </p>
            <dl data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "0 40px", margin: "0 0 32px", borderTop: "1px solid #E8E4DC" }}>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"A neutral mediator"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"They do not take sides, and they cannot give either of you legal advice."}
                </dd>
              </div>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"You decide"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"Nothing is imposed. Any agreement is one you have both chosen."}
                </dd>
              </div>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Confidential"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"What you say stays in the room, with limited exceptions set by law, such as a risk to a child."}
                </dd>
              </div>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Lawyers welcome"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"You can bring your own lawyer, though you do not have to."}
                </dd>
              </div>
            </dl>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 32px", textWrap: "pretty" }}>
              {"Because our mediators are experienced family lawyers, the conversation stays grounded in how family law actually works. That tends to make agreements more realistic, and more likely to hold once they are put in writing."}
            </p>
            <div data-reveal="true" style={{ maxWidth: "720px", padding: "28px 30px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Family law mediation is a voluntary, confidential process in which a neutral mediator helps separated parties negotiate their own agreement about parenting, property or both. The mediator cannot impose a decision or advise either party. It is usually faster, less expensive and less adversarial than court proceedings."}
              </p>
            </div>
          </section>

          {/* ── Is mediation right for you ── */}
          <section id="suitable" data-screen-label="Is mediation right for you" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
              {"02 · Is mediation right for you?"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"Is family mediation right for you?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 36px", textWrap: "pretty" }}>
              {"Family mediation works best when both of you can speak freely. It does not require you to get along. It does require that you can both take part safely and honestly. Before any session, we speak with each of you separately to check that it suits your situation."}
            </p>
            <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "16px", marginBottom: "32px" }}>
              <div style={{ padding: "28px 30px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40", margin: "0 0 14px" }}>
                  {"Mediation tends to work when"}
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0 0 10px" }}>
                  {"You are both willing to take part in good faith."}
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0 0 10px" }}>
                  {"There are no safety concerns or serious imbalances of power between you."}
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0" }}>
                  {"You can communicate reasonably, with some help."}
                </p>
              </div>
              <div style={{ padding: "28px 30px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40", margin: "0 0 14px" }}>
                  {"It may not be right when"}
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0 0 10px" }}>
                  {"There has been family violence or abuse."}
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0 0 10px" }}>
                  {"One of you cannot take part meaningfully."}
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0" }}>
                  {"The matter is urgent and needs a court's help now."}
                </p>
              </div>
            </div>
            <div data-reveal="true" style={{ maxWidth: "720px", padding: "26px 30px", background: "#FEFDFB", border: "1px solid #3A6D8C", borderRadius: "3px" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40", margin: "0 0 10px" }}>
                {"If you are worried about your safety"}
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#2C3E50", margin: "0 0 12px", maxWidth: "60ch" }}>
                {"You do not have to sit in a room with someone you are afraid of. Call us and we will talk you through other ways forward, including negotiation through lawyers or urgent court orders."}
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#2C3E50", margin: "0", maxWidth: "60ch" }}>
                {"In an emergency, call "}
                <a href="tel:000" style={{ fontWeight: "600" }}>
                  {"000"}
                </a>
                {". For confidential support at any hour, call 1800RESPECT on "}
                <a href="tel:1800737732" style={{ fontWeight: "600" }}>
                  {"1800 737 732"}
                </a>
                {"."}
              </p>
            </div>
          </section>

          {/* ── What we mediate ── */}
          <section id="matters" data-screen-label="What we mediate" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
              {"03 · What we mediate"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"What can be resolved through mediation?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 32px", textWrap: "pretty" }}>
              {"Children, property, or both at once. We mediate everyday disagreements and genuinely complex ones. Many couples deal with parenting and property in the same session, because the two are often connected."}
            </p>
            <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "0 40px", borderTop: "1px solid #E8E4DC" }}>
              <div style={{ padding: "26px 0", borderBottom: "1px solid #E8E4DC" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 12px" }}>
                  {"Parenting arrangements"}
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0 0 14px", maxWidth: "46ch" }}>
                  {"Who your children live with and how they spend time with each of you, overseas travel, and interstate or international relocation."}
                </p>
                <a href={url("sydneyChildCustody")} style={{ fontSize: "15px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  {"Parenting arrangements in Sydney "}
                  <span data-arrow="true">
                    {"→"}
                  </span>
                </a>
              </div>
              <div style={{ padding: "26px 0", borderBottom: "1px solid #E8E4DC" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 12px" }}>
                  {"Property and finances"}
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0 0 14px", maxWidth: "46ch" }}>
                  {"Dividing the family home, savings and super, as well as multi-asset portfolios, business valuations, family companies and trust structures."}
                </p>
                <a href={url("sydneyProperty")} style={{ fontSize: "15px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  {"Property settlement in Sydney "}
                  <span data-arrow="true">
                    {"→"}
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* ── Process ── */}
          <section id="process" data-screen-label="Process" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
              {"04 · How mediation works"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"How does family law mediation work?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 40px", textWrap: "pretty" }}>
              {"Knowing the whole path in advance makes the day itself feel far less daunting. Here is how it runs, from first call to signed agreement."}
            </p>
            <ol style={{ listStyle: "none", margin: "0 0 40px", padding: "0", maxWidth: "760px" }}>
              <li data-reveal="true" style={{ display: "grid", gridTemplateColumns: "44px minmax(0,1fr)", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #1A2E40", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#1A2E40", flex: "none" }}>
                    {"1"}
                  </span>
                  <span style={{ flex: "1", width: "1px", background: "#E8E4DC", margin: "8px 0" }} />
                </div>
                <div style={{ padding: "8px 0 36px" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 10px" }}>
                    {"Your enquiry and a conflict check"}
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", maxWidth: "62ch" }}>
                    {"Either of you, or your lawyer, can contact us. We first check that we have not acted for either of you, so our mediator can be genuinely neutral."}
                  </p>
                </div>
              </li>
              <li data-reveal="true" style={{ display: "grid", gridTemplateColumns: "44px minmax(0,1fr)", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #1A2E40", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#1A2E40", flex: "none" }}>
                    {"2"}
                  </span>
                  <span style={{ flex: "1", width: "1px", background: "#E8E4DC", margin: "8px 0" }} />
                </div>
                <div style={{ padding: "8px 0 36px" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 10px" }}>
                    {"Agreeing a date"}
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", maxWidth: "62ch" }}>
                    {"We confirm availability with everyone involved, settle on a half-day or full-day session, and confirm the date once fees are paid."}
                  </p>
                </div>
              </li>
              <li data-reveal="true" style={{ display: "grid", gridTemplateColumns: "44px minmax(0,1fr)", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #1A2E40", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#1A2E40", flex: "none" }}>
                    {"3"}
                  </span>
                  <span style={{ flex: "1", width: "1px", background: "#E8E4DC", margin: "8px 0" }} />
                </div>
                <div style={{ padding: "8px 0 36px" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 10px" }}>
                    {"A pre-mediation conference with each of you"}
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", maxWidth: "62ch" }}>
                    {"The mediator speaks with each of you separately, for about 30 minutes, the day before. It is a chance to explain how the session will run, confirm it suits you, and raise anything you would rather say privately first."}
                  </p>
                </div>
              </li>
              <li data-reveal="true" style={{ display: "grid", gridTemplateColumns: "44px minmax(0,1fr)", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #1A2E40", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#1A2E40", flex: "none" }}>
                    {"4"}
                  </span>
                  <span style={{ flex: "1", width: "1px", background: "#E8E4DC", margin: "8px 0" }} />
                </div>
                <div style={{ padding: "8px 0 36px" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 10px" }}>
                    {"The mediation session"}
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", maxWidth: "62ch" }}>
                    {"A structured discussion, guided by the mediator, focused on practical solutions that work for everyone, and above all for any children. If being in the same room is hard, you can sit in separate rooms while the mediator moves between you."}
                  </p>
                </div>
              </li>
              <li data-reveal="true" style={{ display: "grid", gridTemplateColumns: "44px minmax(0,1fr)", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", background: "#1A2E40", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#FFFFFF", flex: "none" }}>
                    {"5"}
                  </span>
                </div>
                <div style={{ padding: "8px 0 0" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 10px" }}>
                    {"Putting your agreement in writing"}
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0 0 20px", maxWidth: "62ch" }}>
                    {"What you agree can be formalised as consent orders, or a binding financial agreement for property, prepared by an experienced family lawyer. Partial agreement is common, and still valuable. It narrows what is left to resolve."}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "12px" }}>
                    <div style={{ padding: "18px 20px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                      <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40", marginBottom: "4px" }}>
                        {"If you reach agreement"}
                      </div>
                      <div style={{ fontSize: "15px", lineHeight: "1.55", color: "#4A5A66" }}>
                        {"It is written up so it can be made legally binding."}
                      </div>
                    </div>
                    <div style={{ padding: "18px 20px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                      <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40", marginBottom: "4px" }}>
                        {"If some issues remain"}
                      </div>
                      <div style={{ fontSize: "15px", lineHeight: "1.55", color: "#4A5A66" }}>
                        {"They can be resolved through further negotiation or, if needed, court."}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
            <div data-reveal="true" style={{ maxWidth: "720px", padding: "28px 30px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Family law mediation in Sydney with Nolan follows five steps: an enquiry and conflict check, agreeing a date and session length, a short private conference with each party, the mediation session itself, and formalising any agreement as consent orders or a binding financial agreement."}
              </p>
            </div>
          </section>

          {/* ── Is mediation compulsory ── */}
          <section id="compulsory" data-screen-label="Is mediation compulsory" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
              {"05 · Family Dispute Resolution in NSW"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"Is mediation compulsory before going to court?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 32px", textWrap: "pretty" }}>
              {"For parenting matters, usually yes. Under "}
              <a href="https://classic.austlii.edu.au/au/legis/cth/consol_act/fla1975114/s60i.html" target="_blank" rel="noopener" style={{ fontWeight: "600" }}>
                {"section 60I of the Family Law Act 1975"}
              </a>
              {", separated parents generally need to make a genuine attempt at Family Dispute Resolution before asking a court for parenting orders. Family Dispute Resolution, or FDR, is mediation run by a practitioner accredited by the Australian Government's Attorney-General's Department."}
            </p>
            <dl data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "0 40px", margin: "0 0 32px", borderTop: "1px solid #E8E4DC" }}>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"The section 60I certificate"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"An accredited FDR practitioner issues it when parenting issues are not resolved, or mediation is not appropriate. The court generally needs it before accepting a parenting application."}
                </dd>
              </div>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"When it is not required"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"Where there has been family violence or there is a risk of child abuse, where the matter is urgent, or where someone cannot take part effectively."}
                </dd>
              </div>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Property matters"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"There is no certificate, but the court's rules expect you to have genuinely tried to resolve things first. Mediation is the usual way to do that."}
                </dd>
              </div>
            </dl>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 32px", textWrap: "pretty" }}>
              {"Not sure whether your matter needs a certificate? Ask us when you get in touch, and we will explain what applies to you."}
            </p>
            <div data-reveal="true" style={{ maxWidth: "720px", padding: "28px 30px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"In New South Wales, as across Australia, separated parents must usually attempt Family Dispute Resolution and obtain a section 60I certificate before applying for parenting orders, unless there is family violence, a risk of abuse or urgency. Property disputes have no certificate requirement, but courts expect parties to attempt resolution, usually through mediation, before filing."}
              </p>
            </div>
          </section>

          {/* ── How to prepare ── */}
          <section id="prepare" data-screen-label="How to prepare" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
              {"06 · Before your mediation"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"How to prepare for mediation"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 32px", textWrap: "pretty" }}>
              {"A little preparation makes the day calmer and far more productive. These four steps make the biggest difference."}
            </p>
            <dl data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "0 40px", margin: "0 0 32px", borderTop: "1px solid #E8E4DC" }}>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Get independent advice"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"Understand your legal position before the day, from your own lawyer."}
                </dd>
              </div>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Gather your documents"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"Recent bank, superannuation and loan statements, tax returns and any valuations."}
                </dd>
              </div>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Know your priorities"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"What matters most to you, where you can be flexible, and what you cannot accept."}
                </dd>
              </div>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Think about the children"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"Their routines, school calendar and what a good week looks like for them."}
                </dd>
              </div>
            </dl>
            <a href={url("article:how-to-prepare-for-mediation")} data-reveal="true" style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              {"Read our full guide to preparing for mediation "}
              <span data-arrow="true">
                {"→"}
              </span>
            </a>
          </section>

          {/* ── Your mediators ── */}
          <section id="mediators" data-screen-label="Your mediators" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
              {"07 · Your mediators"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"Who will mediate my matter?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 40px", textWrap: "pretty" }}>
              {"Both of our Sydney mediators are Nationally Accredited Mediators and experienced family lawyers, working in a neutral role. You will know who is leading your session before you arrive. Each brings years of family law practice, and a steady, practical approach to difficult conversations."}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div data-person="true" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "148px minmax(0,1fr)", gap: "32px", alignItems: "start", padding: "32px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                <img src="/images/tash-nolan-principal-d4d3b561.webp" width={400} height={400} alt="Tash Nolan, Principal" loading="lazy" style={{ display: "block", width: "148px", height: "148px", objectFit: "cover", borderRadius: "3px", background: "#FFFFFF" }} decoding="async" />
                <div style={{ minWidth: "0" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "26px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 4px" }}>
                    {"Tash Nolan"}
                  </h3>
                  <div style={{ fontSize: "15px", fontWeight: "600", color: "#3A6D8C", marginBottom: "16px" }}>
                    {"Principal · Nationally Accredited Mediator"}
                  </div>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0 0 12px", maxWidth: "62ch" }}>
                    {"Tash is a Nationally Accredited Mediator, having completed her mediation training through the Australian Institute of Family Law Arbitrators and Mediators (AIFLAM) in 2025. She brings 16 years of legal experience and a Master of Applied Law (Family Law), and has worked across every kind of relationship breakdown, from modest property settlements to complex matters involving family companies and trusts, and high-conflict parenting disputes."}
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0 0 12px", maxWidth: "62ch" }}>
                    {"Doyle's Guide has recognised Tash every year since 2023. In 2026, for the fourth year running, she is listed in three categories: Leading Family & Divorce Lawyers (Sydney), Leading Parenting & Children's Matters, and Leading Family Lawyers for High Net-Worth and Complex Financial Matters."}
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0 0 16px", maxWidth: "62ch" }}>
                    {"Her background in commercial law and litigation helps her find the real issues quickly. She is a firm believer that a well-run negotiation should be tried before anyone goes near a courtroom."}
                  </p>
                  <a href={url("profile:tash-nolan")} style={{ fontSize: "15px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    {"About Tash "}
                    <span data-arrow="true">
                      {"→"}
                    </span>
                  </a>
                </div>
              </div>
              <div data-person="true" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "148px minmax(0,1fr)", gap: "32px", alignItems: "start", padding: "32px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                <img src="/images/jessica-swain-partner-7a082fba.webp" width={400} height={400} alt="Jessica Swain, Partner" loading="lazy" style={{ display: "block", width: "148px", height: "148px", objectFit: "cover", borderRadius: "3px", background: "#FFFFFF" }} decoding="async" />
                <div style={{ minWidth: "0" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "26px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 4px" }}>
                    {"Jessica Swain"}
                  </h3>
                  <div style={{ fontSize: "15px", fontWeight: "600", color: "#3A6D8C", marginBottom: "16px" }}>
                    {"Partner · Nationally Accredited Mediator"}
                  </div>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0 0 12px", maxWidth: "62ch" }}>
                    {"Jessica is a Nationally Accredited Mediator and a member of AIFLAM. She has 10 years of experience in family law, with particular depth in complex property matters, high-net-worth cases and matters involving corporate and trust structures. She is pragmatic and encourages negotiated resolution, and when court is genuinely needed she is an experienced courtroom advocate, so she knows exactly what the alternative to agreement looks like."}
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0 0 12px", maxWidth: "62ch" }}>
                    {"She also holds a degree in psychology, and understands the emotional impact separation has. That insight helps people stay in the conversation when it gets hard, and work towards the best possible outcome."}
                  </p>
                  <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0 0 16px", maxWidth: "62ch" }}>
                    {"Member of the Australian Institute of Family Law Arbitrators and Mediators (AIFLAM), the Law Society of New South Wales, the Family Law Section of the Law Council of Australia, and the Women Lawyers Association of NSW."}
                  </p>
                  <a href={url("profile:jessica-swain")} style={{ fontSize: "15px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    {"About Jessica "}
                    <span data-arrow="true">
                      {"→"}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── The day itself ── */}
          <section id="day" data-screen-label="The day itself" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
              {"08 · The day itself"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"Where does mediation take place?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 32px", textWrap: "pretty" }}>
              {"In a calm room, with nothing left to chance. Our offices on Level 22 of "}
              {offices.sydney.streetShort}
              {" have dedicated rooms set up for mediation. They are included when you book your mediation with us."}
            </p>
            <div data-clip="true" style={{ overflow: "hidden", borderRadius: "3px", aspectRatio: "2 / 1", margin: "0 0 36px", background: "#E8E4DC" }}>
              <img src="/images/a-mediation-room-at-nolan-family-law-mediation-w-096990bb.webp" width={1300} height={650} alt="A mediation room at Nolan Family Law & Mediation, with a long timber table and city views over the Sydney CBD" loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} decoding="async" />
            </div>
            <dl data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "0 40px", margin: "0", borderTop: "1px solid #E8E4DC" }}>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"How long it takes"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"A half-day session of up to four hours suits most matters. A full day, from 10am to 5pm, suits complex disputes."}
                </dd>
              </div>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Refreshments"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"Light refreshments and catering are provided on full-day sessions."}
                </dd>
              </div>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"By video"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"Mediation can also run by video conference, if travelling or sharing a room is difficult."}
                </dd>
              </div>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Your lawyer"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"Welcome but not required. We recommend independent legal advice before you attend."}
                </dd>
              </div>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Getting here"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"Martin Place Station and the light rail are a short walk, at the corner of Castlereagh and Hunter Streets."}
                </dd>
              </div>
              <div style={{ padding: "22px 0", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Parking"}
                </dt>
                <dd style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"Wilson Parking at the Sofitel Sydney Wentworth is directly across the road."}
                </dd>
              </div>
            </dl>
          </section>
        </article>
      </div>
    </div>

    {/* ── Fees ── */}
    <section id="fees" data-screen-label="Fees" data-section="true" data-toc-section="true" style={{ background: "#F8F6F2" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "104px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "56px", alignItems: "center" }}>
          <div data-reveal="true">
            <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
              {"Fees"}
            </div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.16", color: "#1A2E40", margin: "0 0 22px", textWrap: "pretty" }}>
              {"Clear costs from day one."}
            </h2>
            <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#3A4A56", maxWidth: "52ch", margin: "0 0 30px", textWrap: "pretty" }}>
              {"The cost of mediation depends on the length of the session and the complexity of your matter. We talk it through openly from the first conversation, and confirm it in writing before you book."}
            </p>
            <a href="#book" data-pick-topic="fees" style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              {"Talk to us about costs "}
              <span data-arrow="true">
                {"→"}
              </span>
            </a>
          </div>
          <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <div data-fee-row="true" style={{ background: "#FEFDFB", padding: "26px 28px", borderLeft: "2px solid #A9C9DB", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1)" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40", marginBottom: "6px" }}>
                {"Costs discussed up front"}
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                {"You know what to expect before the day."}
              </div>
            </div>
            <div data-fee-row="true" style={{ background: "#FEFDFB", padding: "26px 28px", borderLeft: "2px solid #A9C9DB", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1)" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40", marginBottom: "6px" }}>
                {"Rooms included"}
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                {"No venue hire when you book your mediation with us."}
              </div>
            </div>
            <div data-fee-row="true" style={{ background: "#FEFDFB", padding: "26px 28px", borderLeft: "2px solid #A9C9DB", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1)" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40", marginBottom: "6px" }}>
                {"Far less than court"}
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                {"One well-run day can save months of proceedings."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── FAQ ── */}
    <section id="faq" data-screen-label="FAQ" data-section="true" data-toc-section="true" style={{ background: "#FEFDFB", borderTop: "1px solid #CFE0EA" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "112px 24px" }}>
        <div data-reveal="true" style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
            {"Common questions"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 42px)", lineHeight: "1.18", color: "#1A2E40", margin: "0", textWrap: "pretty" }}>
            {"Questions people often ask before mediation."}
          </h2>
        </div>
        <div data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
          <details open style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Do I need a lawyer present during mediation?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontFamily: "var(--font-sans)", fontSize: "24px", color: "#3A6D8C", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0 0 26px", maxWidth: "62ch" }}>
              {"No, but you should get independent legal advice before you attend, so you understand your position and can make informed decisions on the day. If you do not have a family lawyer, we can suggest experienced lawyers elsewhere."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Can the mediator give me legal advice?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontFamily: "var(--font-sans)", fontSize: "24px", color: "#3A6D8C", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0 0 26px", maxWidth: "62ch" }}>
              {"No. A mediator is neutral and cannot advise either of you. They help you both explore options and test what might work, but advice about your own position should come from your own lawyer."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"How confidential is mediation?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontFamily: "var(--font-sans)", fontSize: "24px", color: "#3A6D8C", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0 0 26px", maxWidth: "62ch" }}>
              {"Very. What is said in mediation is generally kept confidential and cannot be used as evidence if your matter later goes to court. There are limited exceptions set by law, for example where there is a risk of harm to a child."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"How much does family mediation cost in Sydney?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontFamily: "var(--font-sans)", fontSize: "24px", color: "#3A6D8C", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <div style={{ margin: "0 0 26px" }}>
              <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0 0 14px", maxWidth: "62ch" }}>
                {"It depends on the length of the session, the complexity of your matter and whether lawyers attend. Mediation usually costs a small fraction of contested court proceedings, which can run for well over a year. We talk through the cost openly and confirm it in writing before you book."}
              </p>
              <a href="#book" data-pick-topic="fees" style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {"Talk to us about costs "}
                <span data-arrow="true">
                  {"→"}
                </span>
              </a>
            </div>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"What happens if we do not reach full agreement?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontFamily: "var(--font-sans)", fontSize: "24px", color: "#3A6D8C", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0 0 26px", maxWidth: "62ch" }}>
              {"Partial agreements are common and still worthwhile, because they narrow what is left to resolve. Any remaining issues can be worked through by further negotiation or, if necessary, court proceedings."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Can a mediation agreement be made legally binding?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontFamily: "var(--font-sans)", fontSize: "24px", color: "#3A6D8C", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0 0 26px", maxWidth: "62ch" }}>
              {"Yes. An agreement reached at mediation can be formalised as consent orders or, for property, a binding financial agreement, prepared by an experienced family lawyer."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Do we have to try mediation before going to court?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontFamily: "var(--font-sans)", fontSize: "24px", color: "#3A6D8C", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0 0 26px", maxWidth: "62ch" }}>
              {"Usually, yes. For parenting matters you generally need to attempt Family Dispute Resolution before applying for orders, unless there is family violence, a risk of abuse or genuine urgency. For property matters, the court expects you to have made a genuine attempt to resolve things first, and mediation is the most common way to do that."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"What is a section 60I certificate?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontFamily: "var(--font-sans)", fontSize: "24px", color: "#3A6D8C", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0 0 26px", maxWidth: "62ch" }}>
              {"It is a certificate issued by an accredited Family Dispute Resolution practitioner when parenting issues are not resolved through Family Dispute Resolution, or when it is not appropriate. The court generally requires one before it will accept an application for parenting orders."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"What should I bring to mediation?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontFamily: "var(--font-sans)", fontSize: "24px", color: "#3A6D8C", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0 0 26px", maxWidth: "62ch" }}>
              {"For property matters, bring recent bank, superannuation and loan statements, tax returns and any valuations. For parenting matters, bring the children's current routines and school calendar. In every case, bring a note of your priorities and the advice your lawyer has given you."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"How long does family law mediation take?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontFamily: "var(--font-sans)", fontSize: "24px", color: "#3A6D8C", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0 0 26px", maxWidth: "62ch" }}>
              {"Most matters suit a half-day session of up to four hours. Complex property matters may need a full day, from 10am to 5pm. The pre-mediation conferences take about 30 minutes each, the day before."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Can we mediate by video?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontFamily: "var(--font-sans)", fontSize: "24px", color: "#3A6D8C", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0 0 26px", maxWidth: "62ch" }}>
              {"Yes. Mediation can take place by video conference, which can help if one of you lives elsewhere or would find it hard to be in the same room."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Is parking available near your office?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontFamily: "var(--font-sans)", fontSize: "24px", color: "#3A6D8C", transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <div style={{ margin: "0 0 26px" }}>
              <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0 0 14px", maxWidth: "62ch" }}>
                {"Yes. Wilson Parking at the Sofitel Sydney Wentworth is directly across the road from "}
                {offices.sydney.streetShort}
                {"."}
              </p>
              <a href="https://www.wilsonparking.com.au/parking-locations/new-south-wales/sydney-cbd/sofitel-sydney-wentworth-car-park/" target="_blank" rel="noopener" style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {"Wilson Parking details "}
                <span data-arrow="true">
                  {"→"}
                </span>
              </a>
            </div>
          </details>
        </div>
      </div>
    </section>

    {/* ── Consultation CTA ── */}
    <section id="book" data-screen-label="Consultation CTA" data-section="true" data-deep="true" style={{ background: "#1C2F40" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "120px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: "56px 80px", alignItems: "start" }}>
        <div data-reveal="true" style={{ minWidth: "0" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#A9C9DB", marginBottom: "18px" }}>
            {"Arrange a mediation"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(32px, 4.6vw, 48px)", lineHeight: "1.14", color: "#FFFFFF", margin: "0 0 22px", maxWidth: "18ch", textWrap: "pretty" }}>
            {"Book your family law mediation in Sydney."}
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#E3E9EE", maxWidth: "50ch", margin: "0 0 36px", textWrap: "pretty" }}>
            {"Reaching agreement after separation is hard, but it does not have to happen in a courtroom. Tell us a little about your situation and we will explain the next steps, check availability and confirm the fee."}
          </p>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C3D0DC", marginBottom: "14px" }}>
            {"When you get in touch, we will"}
          </div>
          <ul style={{ listStyle: "none", margin: "0 0 40px", padding: "0", display: "flex", flexDirection: "column", borderTop: "1px solid rgba(195,208,220,0.22)" }}>
            <li style={{ display: "flex", gap: "14px", padding: "14px 0", borderBottom: "1px solid rgba(195,208,220,0.22)", fontSize: "16px", lineHeight: "1.55", color: "#E3E9EE" }}>
              <span aria-hidden="true" style={{ color: "#A9C9DB" }}>
                {"✓"}
              </span>
              {"Explain how mediation would work for your matter"}
            </li>
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
              {"Offer dates that suit everyone involved"}
            </li>
            <li style={{ display: "flex", gap: "14px", padding: "14px 0", borderBottom: "1px solid rgba(195,208,220,0.22)", fontSize: "16px", lineHeight: "1.55", color: "#E3E9EE" }}>
              <span aria-hidden="true" style={{ color: "#A9C9DB" }}>
                {"✓"}
              </span>
              {"Confirm the cost in writing before you book"}
            </li>
          </ul>
          <PhoneLink office="sydney" location="body" position="contact" style={{ display: "inline-block", fontFamily: "var(--font-serif)", fontSize: "30px", color: "#FFFFFF", marginBottom: "10px" }}>
            {offices.sydney.phoneDisplay}
          </PhoneLink>
          <div style={{ fontSize: "15px", lineHeight: "1.65", color: "#C3D0DC" }}>
            {offices.sydney.addressDisplay}
            <br />
            {"Mediation in person or by video"}
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
                  <option value="book">
                    {"Booking a mediation"}
                  </option>
                  <option value="suitable">
                    {"Whether mediation suits us"}
                  </option>
                  <option value="lawyer">
                    {"I am a lawyer arranging mediation for a client"}
                  </option>
                  <option value="fees">
                    {"Fees and availability"}
                  </option>
                  <option value="other">
                    {"Something else"}
                  </option>
                </select>
              </label>
              <fieldset style={{ border: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <legend style={{ padding: "0", marginBottom: "10px", fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                  {"Has the other party agreed to mediate?"}
                </legend>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", fontSize: "15px", color: "#2C3E50", cursor: "pointer" }}>
                    <input type="radio" name="agreed" value="yes" style={{ width: "18px", height: "18px", accentColor: "#1A2E40", margin: "0" }} />
                    {"Yes"}
                  </label>
                  {" "}
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", fontSize: "15px", color: "#2C3E50", cursor: "pointer" }}>
                    <input type="radio" name="agreed" value="not-yet" style={{ width: "18px", height: "18px", accentColor: "#1A2E40", margin: "0" }} />
                    {"Not yet"}
                  </label>
                  {" "}
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", fontSize: "15px", color: "#2C3E50", cursor: "pointer" }}>
                    <input type="radio" name="agreed" value="unsure" defaultChecked style={{ width: "18px", height: "18px", accentColor: "#1A2E40", margin: "0" }} />
                    {"Not sure"}
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
