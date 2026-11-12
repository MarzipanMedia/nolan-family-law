/**
 * Page sections for "sydney-child-custody", converted from export/child-custody-sydney.html
 * by tools/convert-prototype.mjs and then maintained by hand. The copy is the approved copy:
 * change wording only with Ben's sign-off. URLs come from the routes file and office details
 * from the office config, never from this file.
 */
import { url } from '@/config/routes';
import { offices } from '@/config/offices';
import { PhoneLink } from '@/components/PhoneLink';
import { EnquiryForm } from '@/components/EnquiryForm';
import { Reviews } from '@/components/Reviews';

export function Content() {
  return (
    <>

    {/* ── Hero ── */}
    <section data-screen-label="Hero" style={{ background: "#F8F6F2" }}>
      <div data-hero-grid="true" style={{ maxWidth: "1240px", margin: "0px auto", padding: "88px 24px 72px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "64px", alignItems: "start" }}>
        <div style={{ minWidth: "0px" }}>
          <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "26px" }}>
            {"Sydney · Parenting and children"}
          </div>
          <h1 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(40px, 5.4vw, 72px)", lineHeight: "1.06", letterSpacing: "-0.015em", color: "#1A2E40", margin: "0px 0px 26px", maxWidth: "16ch", textWrap: "pretty" }}>
            {"Child custody lawyer Sydney & parenting agreements"}
          </h1>
          <p data-reveal="true" style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0px 0px 20px", textWrap: "pretty" }}>
            {"Separating from your partner is difficult enough. When children are involved, the stakes can feel impossibly high."}
          </p>
          <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "0px 0px 38px", maxWidth: "56ch" }}>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px", textWrap: "pretty" }}>
              {"You might be worried about how often you will see your children, whether you will reach an agreement, or what happens if you cannot. These concerns are valid, and you do not have to work through them alone."}
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px", textWrap: "pretty" }}>
              {"We help Sydney families reach parenting arrangements that put children's wellbeing first. No false promises, just clear guidance on what to expect and how to move forward."}
            </p>
          </div>
          <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <a href="#book" data-press="true" style={{ background: "var(--cta)", color: "#FFFFFF", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px" }}>
              {"Book a consultation"}
            </a>
            {" "}
            <PhoneLink office="sydney" location="body" position="hero" data-press="true" style={{ border: "1px solid #BFC8D2", color: "#1A2E40", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", background: "rgba(248, 246, 242, 0.6)" }}>
              {"Call "}
              {offices.sydney.phoneDisplay}
            </PhoneLink>
          </div>
        </div>
        <div style={{ minWidth: "0px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div data-clip="true" style={{ overflow: "hidden", borderRadius: "3px", aspectRatio: "4 / 4.4", maxHeight: "600px", background: "#E8E4DC" }}>
            <img data-hero-img="true" data-placeholder="true" src="/images/parent-and-child-in-natural-light-an-everyday-mo-0327a2e5.webp" width={640} height={800} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} fetchPriority="high" decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px 24px", padding: "18px 20px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: "0px" }}>
              <img src="/images/tash-nolan-principal-d4d3b561.webp" width={400} height={400} alt="Tash Nolan, Principal" style={{ display: "block", width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover", flex: "0 0 auto" }} fetchPriority="high" decoding="async" />
              <div style={{ minWidth: "0px" }}>
                <div style={{ fontSize: "15px", fontWeight: "600", color: "#1A2E40" }}>
                  {"Tash Nolan, Principal"}
                </div>
                <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                  {"Recognised by Doyle's Guide every year since 2023"}
                </div>
              </div>
            </div>
            <img src="/images/doyle-s-guide-to-the-australian-legal-profession-58751f82.webp" width={716} height={156} alt="Doyle's Guide" style={{ display: "block", height: "28px", width: "auto", mixBlendMode: "multiply" }} fetchPriority="high" decoding="async" />
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1240px", margin: "0px auto", padding: "0px 24px 72px" }}>
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
            {"Child custody lawyer"}
          </span>
        </nav>
        <aside aria-labelledby="quick-answer" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "20px 56px", padding: "40px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>
              {"Quick answer"}
            </div>
            <h2 id="quick-answer" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0px", textWrap: "pretty" }}>
              {"What does a child custody lawyer in Sydney do?"}
            </h2>
          </div>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0px", maxWidth: "62ch", textWrap: "pretty" }}>
            {"A child custody lawyer helps parents set up parenting arrangements after separation: where children live, how much time they spend with each parent, and who makes major decisions. In NSW this usually means a parenting plan or consent orders approved by the Federal Circuit and Family Court of Australia. Parents must attempt Family Dispute Resolution before applying to court, except where there is family violence, a risk of abuse or genuine urgency."}
          </p>
        </aside>
      </div>
    </section>

    {/* ── Accreditations ── */}
    <section data-screen-label="Accreditations" style={{ background: "#FEFDFB", borderTop: "1px solid #E8E4DC", borderBottom: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0px auto", padding: "56px 24px" }}>
        <div data-reveal="true" style={{ textAlign: "center", fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "32px" }}>
          {"Recognised and accredited"}
        </div>
        <div data-badge-grid="true" style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0px, 1fr))", alignItems: "center", gap: "32px 40px" }}>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0px" }}>
            <img src="/images/doyle-s-guide-to-the-australian-legal-profession-58751f82.webp" width={716} height={156} alt="Doyle's Guide to the Australian Legal Profession" loading="lazy" style={{ display: "block", height: "34px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0px" }}>
            <img src="/images/member-of-the-law-society-of-new-south-wales-bfd9c30a.webp" width={300} height={128} alt="Member of the Law Society of New South Wales" loading="lazy" style={{ display: "block", height: "56px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0px" }}>
            <img src="/images/law-council-of-australia-85fce8e6.webp" width={200} height={200} alt="Law Council of Australia" loading="lazy" style={{ display: "block", height: "72px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0px" }}>
            <img src="/images/family-law-section-law-council-of-australia-325d03d2.webp" width={300} height={111} alt="Family Law Section, Law Council of Australia" loading="lazy" style={{ display: "block", height: "48px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0px" }}>
            <img src="/images/australian-association-of-collaborative-professi-1aeae6fe.webp" width={216} height={70} alt="Australian Association of Collaborative Professionals" loading="lazy" style={{ display: "block", height: "44px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0px" }}>
            <img src="/images/collaborative-professionals-nsw-act-inc-f740a8a4.webp" width={408} height={156} alt="Collaborative Professionals (NSW & ACT) Inc" loading="lazy" style={{ display: "block", height: "56px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
        </div>
      </div>
    </section>

    {/* ── How can we help you ── */}
    <section id="help" data-screen-label="How can we help you" data-section="true" style={{ background: "#F8F6F2" }}>
      <div style={{ maxWidth: "1240px", margin: "0px auto", padding: "120px 24px" }}>
        <div data-reveal="true" style={{ marginBottom: "48px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
            {"How can we help you?"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px 0px 20px", maxWidth: "24ch", textWrap: "pretty" }}>
            {"Every family arrives somewhere different. Start with where things are up to."}
          </h2>
          <p style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0px", textWrap: "pretty" }}>
            {"Choose the situation closest to yours. Each one takes you to the part of this page that matters most right now."}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "24px" }}>
          <a href="#options" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"We mostly agree and want it in writing"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Parenting plans and consent orders"}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "var(--accent)" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#process" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"We are struggling to agree"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Mediation and negotiation through solicitors"}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "var(--accent)" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <PhoneLink office="sydney" location="body" position="body" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"I am worried about my children's safety"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Call us today to talk through urgent options. In an emergency, call 000."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "var(--accent)" }}>
              {"→"}
            </span>
          </PhoneLink>
          {" "}
          <a href="#process" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Court papers have been filed"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"What happens in parenting proceedings"}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "var(--accent)" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#faq-grandparents" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"I am a grandparent or carer"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Staying part of a child's life after separation"}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "var(--accent)" }}>
              {"→"}
            </span>
          </a>
        </div>
      </div>
    </section>

    {/* ── Guide ── */}
    <div data-screen-label="Guide" style={{ background: "#FEFDFB", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div data-article-grid="true" style={{ maxWidth: "1240px", margin: "0px auto", padding: "48px 24px 72px", display: "grid", gap: "64px", alignItems: "start" }}>
        <aside data-toc-aside="true" aria-label="On this page" style={{ position: "sticky", top: "112px", flexDirection: "column", gap: "18px", paddingTop: "72px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>
            {"On this page"}
          </div>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            <a href="#understanding" data-toc-link="understanding" style={{ padding: "7px 0px 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Understanding custody in NSW"}
            </a>
            {" "}
            <a href="#options" data-toc-link="options" style={{ padding: "7px 0px 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Your agreement options"}
            </a>
            {" "}
            <a href="#arrangements" data-toc-link="arrangements" style={{ padding: "7px 0px 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Common arrangements"}
            </a>
            {" "}
            <a href="#process" data-toc-link="process" style={{ padding: "7px 0px 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"The process, step by step"}
            </a>
            {" "}
            <a href="#courts" data-toc-link="courts" style={{ padding: "7px 0px 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"What courts consider"}
            </a>
            {" "}
            <a href="#rights" data-toc-link="rights" style={{ padding: "7px 0px 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Children's rights"}
            </a>
            {" "}
            <a href="#why" data-toc-link="why" style={{ padding: "7px 0px 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Why families choose us"}
            </a>
            {" "}
            <a href="#choosing" data-toc-link="choosing" style={{ padding: "7px 0px 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Choosing a lawyer"}
            </a>
            {" "}
            <a href="#costs" data-toc-link="costs" style={{ padding: "7px 0px 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Costs"}
            </a>
            {" "}
            <a href="#faq" data-toc-link="faq" style={{ padding: "7px 0px 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Common questions"}
            </a>
          </nav>
          <a href="#book" style={{ fontSize: "15px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px", paddingTop: "6px" }}>
            {"Talk to a lawyer "}
            <span data-arrow="true">
              {"→"}
            </span>
          </a>
        </aside>
        <article style={{ minWidth: "0px" }}>
          <details data-toc-inline="true" style={{ marginTop: "24px", border: "1px solid #E8E4DC", borderRadius: "3px", background: "#F8F6F2" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "56px", padding: "0px 20px", fontSize: "15px", fontWeight: "600", color: "#1A2E40" }}>
              {"On this page "}
              <span data-faq-plus="true" aria-hidden="true" style={{ fontSize: "22px", fontWeight: "400", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <div style={{ padding: "0px 20px 16px", display: "flex", flexDirection: "column" }}>
              <a href="#understanding" style={{ padding: "10px 0px", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"Understanding custody in NSW"}
              </a>
              {" "}
              <a href="#options" style={{ padding: "10px 0px", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"Your agreement options"}
              </a>
              {" "}
              <a href="#arrangements" style={{ padding: "10px 0px", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"Common arrangements"}
              </a>
              {" "}
              <a href="#process" style={{ padding: "10px 0px", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"The process, step by step"}
              </a>
              {" "}
              <a href="#courts" style={{ padding: "10px 0px", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"What courts consider"}
              </a>
              {" "}
              <a href="#rights" style={{ padding: "10px 0px", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"Children's rights"}
              </a>
              {" "}
              <a href="#why" style={{ padding: "10px 0px", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"Why families choose us"}
              </a>
              {" "}
              <a href="#choosing" style={{ padding: "10px 0px", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"Choosing a lawyer"}
              </a>
              {" "}
              <a href="#costs" style={{ padding: "10px 0px", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"Costs"}
              </a>
              {" "}
              <a href="#faq" style={{ padding: "10px 0px", fontSize: "15px", borderTop: "1px solid #E8E4DC" }}>
                {"Common questions"}
              </a>
            </div>
          </details>

          {/* ── Understanding custody ── */}
          <section id="understanding" data-screen-label="Understanding custody" data-toc-section="true" style={{ padding: "72px 0px" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
              {"01 · Understanding child custody in NSW"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px 0px 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"What does \"child custody\" actually mean?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0px 0px 32px", textWrap: "pretty" }}>
              {"Australian law no longer uses the word \"custody\". The Family Law Act talks about parenting arrangements and parental responsibility instead. Most people still search for child custody, so here is what it covers."}
            </p>
            <dl data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "0px 40px", margin: "0px 0px 32px", borderTop: "1px solid #E8E4DC" }}>
              <div style={{ padding: "22px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Parental responsibility"}
                </dt>
                <dd style={{ margin: "0px", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"Who makes major long-term decisions about education, health, religion and culture."}
                </dd>
              </div>
              <div style={{ padding: "22px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Lives with"}
                </dt>
                <dd style={{ margin: "0px", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"Where your child mainly lives."}
                </dd>
              </div>
              <div style={{ padding: "22px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Spends time with"}
                </dt>
                <dd style={{ margin: "0px", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"How much time your child spends with each parent."}
                </dd>
              </div>
              <div style={{ padding: "22px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1A2E40", marginBottom: "6px" }}>
                  {"Communication"}
                </dt>
                <dd style={{ margin: "0px", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
                  {"How your child stays in touch with both parents and extended family."}
                </dd>
              </div>
            </dl>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0px 0px 32px", textWrap: "pretty" }}>
              {"Since May 2024, the law no longer starts from a presumption of equal shared parental responsibility. Parents who can work together are still encouraged to make major decisions jointly, and the court can order joint or sole decision-making depending on what suits the child. Shared decision-making has never meant equal time."}
            </p>
            <div data-reveal="true" style={{ maxWidth: "720px", padding: "28px 30px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#2C3E50", margin: "0px", textWrap: "pretty" }}>
                {"Under the Family Law Act 1975, parental responsibility means all the duties, powers and authority parents have for their children. Since May 2024 there is no presumption of equal shared parental responsibility. Courts decide who makes major long-term decisions based on the child's best interests, with particular regard to safety and any history of family violence or abuse."}
              </p>
            </div>
          </section>

          {/* ── Agreement options ── */}
          <section id="options" data-screen-label="Agreement options" data-toc-section="true" style={{ padding: "72px 0px", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
              {"02 · Parenting agreements in Sydney"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px 0px 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"Your options for putting arrangements in place."}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0px 0px 36px", textWrap: "pretty" }}>
              {"After separation there are four ways to settle parenting arrangements in NSW. They differ mainly in how formal they are and whether they can be enforced."}
            </p>
            <div role="list" aria-label="Comparing parenting arrangement options" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "16px", marginBottom: "36px" }}>
              <div role="listitem" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "26px 24px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                <div style={{ fontSize: "13px", fontWeight: "600", color: "#4A5A66" }}>
                  {"1"}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.25", color: "#1A2E40", margin: "0px" }}>
                  {"Informal arrangement"}
                </h3>
                <dl style={{ margin: "0px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px", lineHeight: "1.5" }}>
                  <div>
                    <dt style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5A66" }}>
                      {"Enforceable"}
                    </dt>
                    <dd style={{ margin: "2px 0px 0px", color: "#1A2E40" }}>
                      {"No"}
                    </dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5A66" }}>
                      {"Involves the court"}
                    </dt>
                    <dd style={{ margin: "2px 0px 0px", color: "#1A2E40" }}>
                      {"No"}
                    </dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5A66" }}>
                      {"Suits parents who"}
                    </dt>
                    <dd style={{ margin: "2px 0px 0px", color: "#1A2E40" }}>
                      {"Cooperate closely and rarely disagree"}
                    </dd>
                  </div>
                </dl>
              </div>
              <div role="listitem" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "26px 24px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                <div style={{ fontSize: "13px", fontWeight: "600", color: "#4A5A66" }}>
                  {"2"}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.25", color: "#1A2E40", margin: "0px" }}>
                  {"Parenting plan"}
                </h3>
                <dl style={{ margin: "0px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px", lineHeight: "1.5" }}>
                  <div>
                    <dt style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5A66" }}>
                      {"Enforceable"}
                    </dt>
                    <dd style={{ margin: "2px 0px 0px", color: "#1A2E40" }}>
                      {"No"}
                    </dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5A66" }}>
                      {"Involves the court"}
                    </dt>
                    <dd style={{ margin: "2px 0px 0px", color: "#1A2E40" }}>
                      {"No"}
                    </dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5A66" }}>
                      {"Suits parents who"}
                    </dt>
                    <dd style={{ margin: "2px 0px 0px", color: "#1A2E40" }}>
                      {"Work well together and want flexibility"}
                    </dd>
                  </div>
                </dl>
              </div>
              <div role="listitem" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "26px 24px", background: "#FEFDFB", border: "1px solid var(--accent)", borderRadius: "3px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#4A5A66" }}>
                    {"3"}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#1A2E40", background: "var(--tint)", padding: "4px 8px", borderRadius: "2px" }}>
                    {"Most common"}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.25", color: "#1A2E40", margin: "0px" }}>
                  {"Consent orders"}
                </h3>
                <dl style={{ margin: "0px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px", lineHeight: "1.5" }}>
                  <div>
                    <dt style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5A66" }}>
                      {"Enforceable"}
                    </dt>
                    <dd style={{ margin: "2px 0px 0px", color: "#1A2E40" }}>
                      {"Yes"}
                    </dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5A66" }}>
                      {"Involves the court"}
                    </dt>
                    <dd style={{ margin: "2px 0px 0px", color: "#1A2E40" }}>
                      {"Approval only, no hearing"}
                    </dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5A66" }}>
                      {"Suits parents who"}
                    </dt>
                    <dd style={{ margin: "2px 0px 0px", color: "#1A2E40" }}>
                      {"Have agreed and want certainty"}
                    </dd>
                  </div>
                </dl>
              </div>
              <div role="listitem" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "26px 24px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                <div style={{ fontSize: "13px", fontWeight: "600", color: "#4A5A66" }}>
                  {"4"}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "22px", lineHeight: "1.25", color: "#1A2E40", margin: "0px" }}>
                  {"Parenting orders"}
                </h3>
                <dl style={{ margin: "0px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px", lineHeight: "1.5" }}>
                  <div>
                    <dt style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5A66" }}>
                      {"Enforceable"}
                    </dt>
                    <dd style={{ margin: "2px 0px 0px", color: "#1A2E40" }}>
                      {"Yes"}
                    </dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5A66" }}>
                      {"Involves the court"}
                    </dt>
                    <dd style={{ margin: "2px 0px 0px", color: "#1A2E40" }}>
                      {"Yes, decided by a judge"}
                    </dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5A66" }}>
                      {"Suits parents who"}
                    </dt>
                    <dd style={{ margin: "2px 0px 0px", color: "#1A2E40" }}>
                      {"Cannot agree despite genuine effort"}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div data-reveal="true" style={{ maxWidth: "760px", marginBottom: "36px", borderBottom: "1px solid #E8E4DC" }}>
              <details style={{ borderTop: "1px solid #E8E4DC" }}>
                <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "20px 0px", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#1A2E40" }}>
                  {"More about informal arrangements"}
                  <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                    {"+"}
                  </span>
                </summary>
                <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 22px", maxWidth: "62ch" }}>
                  {"Some parents manage arrangements verbally or in a written note without legal documentation. This offers flexibility, but it is not legally enforceable and can cause problems if circumstances change or disagreements arise."}
                </p>
              </details>
              <details style={{ borderTop: "1px solid #E8E4DC" }}>
                <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "20px 0px", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#1A2E40" }}>
                  {"More about parenting plans"}
                  <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                    {"+"}
                  </span>
                </summary>
                <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 14px", maxWidth: "62ch" }}>
                  {"A parenting plan is a written agreement between parents about how they will care for and make decisions about their children. It must be in writing, dated and signed by both parents, and it can cover living arrangements, time with each parent, communication, schooling, health and how you will resolve future disagreements."}
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 22px", maxWidth: "62ch" }}>
                  {"Plans can be changed by mutual agreement, which makes them useful for cooperative parents. If one parent stops following the plan, though, the court cannot enforce it. You would then need to apply for consent orders or parenting orders."}
                </p>
              </details>
              <details style={{ borderTop: "1px solid #E8E4DC" }}>
                <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "20px 0px", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#1A2E40" }}>
                  {"More about consent orders"}
                  <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                    {"+"}
                  </span>
                </summary>
                <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 14px", maxWidth: "62ch" }}>
                  {"Consent orders are parenting agreements approved by the Federal Circuit and Family Court of Australia. Once approved they are legally binding, and a breach can have consequences. They can only be changed by a new agreement filed with the court or by a further application."}
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 22px", maxWidth: "62ch" }}>
                  {"We usually recommend consent orders when you have reached agreement but want certainty. They give you peace of mind that arrangements will be followed, without the cost and stress of a contested hearing."}
                </p>
              </details>
              <details style={{ borderTop: "1px solid #E8E4DC" }}>
                <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "20px 0px", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#1A2E40" }}>
                  {"More about parenting orders through court"}
                  <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                    {"+"}
                  </span>
                </summary>
                <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 22px", maxWidth: "62ch" }}>
                  {"When parents cannot agree, the court can make parenting orders after hearing evidence from both sides. This is usually the last resort once mediation and negotiation have been tried. Court proceedings are costly, slow and emotionally draining, so we always pursue a negotiated solution first."}
                </p>
              </details>
            </div>
            <div data-reveal="true" style={{ maxWidth: "720px", padding: "28px 30px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#2C3E50", margin: "0px", textWrap: "pretty" }}>
                {"In NSW, parents can formalise parenting arrangements through a parenting plan (a signed written agreement that is not enforceable), consent orders (an agreement approved by the court and legally binding) or parenting orders (made by the court after a contested hearing). Consent orders are the most common, giving legal certainty without litigation. Every arrangement must be in the child's best interests under section 60CC of the Family Law Act 1975."}
              </p>
            </div>
          </section>

          {/* ── Common arrangements ── */}
          <section id="arrangements" data-screen-label="Common arrangements" data-toc-section="true" style={{ padding: "72px 0px", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
              {"03 · Common parenting arrangements"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px 0px 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"What a fortnight can look like."}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0px 0px 24px", textWrap: "pretty" }}>
              {"Every family is different, but most arrangements we help put in place start from one of these patterns. Each square is one night."}
            </p>
            <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", gap: "10px 28px", marginBottom: "28px", fontSize: "14px", color: "#4A5A66" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "14px", height: "14px", borderRadius: "2px", background: "#1A2E40" }} />
                {"With one parent"}
              </span>
              {" "}
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "14px", height: "14px", borderRadius: "2px", background: "#A9C9DB" }} />
                {"With the other parent"}
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "24px", marginBottom: "32px" }}>
              <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "30px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", minWidth: "0px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px" }}>
                  {"Equal shared care"}
                </h3>
                <div style={{ fontSize: "14px", fontWeight: "500", color: "#4A5A66" }}>
                  {"Week about, seven nights each"}
                </div>
                <div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "repeat(14, minmax(0px, 1fr))", gap: "3px", fontSize: "11px", color: "#4A5A66", textAlign: "center", marginTop: "6px" }}>
                  <span>
                    {"M"}
                  </span>
                  <span>
                    {"T"}
                  </span>
                  <span>
                    {"W"}
                  </span>
                  <span>
                    {"T"}
                  </span>
                  <span>
                    {"F"}
                  </span>
                  <span>
                    {"S"}
                  </span>
                  <span>
                    {"S"}
                  </span>
                  <span>
                    {"M"}
                  </span>
                  <span>
                    {"T"}
                  </span>
                  <span>
                    {"W"}
                  </span>
                  <span>
                    {"T"}
                  </span>
                  <span>
                    {"F"}
                  </span>
                  <span>
                    {"S"}
                  </span>
                  <span>
                    {"S"}
                  </span>
                </div>
                <div role="img" aria-label="Seven nights with one parent, then seven nights with the other" style={{ display: "grid", gridTemplateColumns: "repeat(14, minmax(0px, 1fr))", gap: "3px" }}>
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  {" "}
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                </div>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "6px 0px 0px", textWrap: "pretty" }}>
                  {"Tends to work when you live reasonably close to each other, are both closely involved, can communicate about the children, and the handovers do not disrupt school or routine."}
                </p>
              </div>
              <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "30px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", minWidth: "0px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px" }}>
                  {"One main home, with regular time"}
                </h3>
                <div style={{ fontSize: "14px", fontWeight: "500", color: "#4A5A66" }}>
                  {"Alternate weekends and a midweek overnight, about five nights a fortnight"}
                </div>
                <div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "repeat(14, minmax(0px, 1fr))", gap: "3px", fontSize: "11px", color: "#4A5A66", textAlign: "center", marginTop: "6px" }}>
                  <span>
                    {"M"}
                  </span>
                  <span>
                    {"T"}
                  </span>
                  <span>
                    {"W"}
                  </span>
                  <span>
                    {"T"}
                  </span>
                  <span>
                    {"F"}
                  </span>
                  <span>
                    {"S"}
                  </span>
                  <span>
                    {"S"}
                  </span>
                  <span>
                    {"M"}
                  </span>
                  <span>
                    {"T"}
                  </span>
                  <span>
                    {"W"}
                  </span>
                  <span>
                    {"T"}
                  </span>
                  <span>
                    {"F"}
                  </span>
                  <span>
                    {"S"}
                  </span>
                  <span>
                    {"S"}
                  </span>
                </div>
                <div role="img" aria-label="Nine nights in the main home and five with the other parent across a fortnight" style={{ display: "grid", gridTemplateColumns: "repeat(14, minmax(0px, 1fr))", gap: "3px" }}>
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  {" "}
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                </div>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "6px 0px 0px", textWrap: "pretty" }}>
                  {"Often suits families where one parent has been the primary carer, you live further apart in Sydney or NSW, work makes equal time impractical, or younger children need the stability of one home."}
                </p>
              </div>
              <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "30px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", minWidth: "0px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px" }}>
                  {"A customised schedule"}
                </h3>
                <div style={{ fontSize: "14px", fontWeight: "500", color: "#4A5A66" }}>
                  {"For example 2-2-5-5, equal time with shorter gaps"}
                </div>
                <div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "repeat(14, minmax(0px, 1fr))", gap: "3px", fontSize: "11px", color: "#4A5A66", textAlign: "center", marginTop: "6px" }}>
                  <span>
                    {"M"}
                  </span>
                  <span>
                    {"T"}
                  </span>
                  <span>
                    {"W"}
                  </span>
                  <span>
                    {"T"}
                  </span>
                  <span>
                    {"F"}
                  </span>
                  <span>
                    {"S"}
                  </span>
                  <span>
                    {"S"}
                  </span>
                  <span>
                    {"M"}
                  </span>
                  <span>
                    {"T"}
                  </span>
                  <span>
                    {"W"}
                  </span>
                  <span>
                    {"T"}
                  </span>
                  <span>
                    {"F"}
                  </span>
                  <span>
                    {"S"}
                  </span>
                  <span>
                    {"S"}
                  </span>
                </div>
                <div role="img" aria-label="Two nights, two nights, then five nights with each parent in turn" style={{ display: "grid", gridTemplateColumns: "repeat(14, minmax(0px, 1fr))", gap: "3px" }}>
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  {" "}
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#1A2E40" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                  <span style={{ aspectRatio: "1 / 1", borderRadius: "2px", background: "#A9C9DB" }} />
                </div>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "6px 0px 0px", textWrap: "pretty" }}>
                  {"Many families build a schedule around their own lives: alternating weeks in term with different holiday arrangements, or term time with one parent and school holidays with the other."}
                </p>
              </div>
            </div>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0px", textWrap: "pretty" }}>
              {"The right arrangement depends on your children's ages, where they go to school, both parents' work commitments and what is practical day to day. We can help you design one that works, and that your children can settle into."}
            </p>
          </section>

          {/* ── Process ── */}
          <section id="process" data-screen-label="Process" data-toc-section="true" style={{ padding: "72px 0px", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
              {"04 · The child custody process in Sydney"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px 0px 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"What happens, step by step."}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0px 0px 40px", textWrap: "pretty" }}>
              {"Most families never reach step five. Knowing the whole path in advance tends to make each stage feel more manageable."}
            </p>
            <ol style={{ listStyle: "none", margin: "0px 0px 40px", padding: "0px", maxWidth: "760px" }}>
              <li data-reveal="true" style={{ display: "grid", gridTemplateColumns: "44px minmax(0px, 1fr)", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #1A2E40", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#1A2E40", flex: "0 0 auto" }}>
                    {"1"}
                  </span>
                  <span style={{ flex: "1 1 0%", width: "1px", background: "#E8E4DC", margin: "8px 0px" }} />
                </div>
                <div style={{ padding: "8px 0px 36px" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px 0px 10px" }}>
                    {"Your first consultation"}
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px", maxWidth: "62ch" }}>
                    {"We start by understanding your family, your concerns and what you are hoping for. You leave knowing your options, what outcomes are realistic, how we would charge, and a plan with timeframes for what happens next."}
                  </p>
                </div>
              </li>
              <li data-reveal="true" style={{ display: "grid", gridTemplateColumns: "44px minmax(0px, 1fr)", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #1A2E40", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#1A2E40", flex: "0 0 auto" }}>
                    {"2"}
                  </span>
                  <span style={{ flex: "1 1 0%", width: "1px", background: "#E8E4DC", margin: "8px 0px" }} />
                </div>
                <div style={{ padding: "8px 0px 36px" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px 0px 10px" }}>
                    {"Family Dispute Resolution (mediation)"}
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px 0px 12px", maxWidth: "62ch" }}>
                    {"Before applying to court for parenting orders, you must genuinely attempt Family Dispute Resolution with an accredited practitioner. A trained mediator helps you and your former partner work through arrangements in a structured, neutral setting."}
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px 0px 20px", maxWidth: "62ch" }}>
                    {"You may not need to attend if there has been family violence or child abuse, if the matter is urgent, if one of you is unable to take part effectively, or if the application concerns a serious breach of orders made in the last 12 months."}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "12px", marginBottom: "18px" }}>
                    <div style={{ padding: "18px 20px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                      <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40", marginBottom: "4px" }}>
                        {"If mediation succeeds"}
                      </div>
                      <div style={{ fontSize: "15px", lineHeight: "1.55", color: "#4A5A66" }}>
                        {"We formalise your agreement as a parenting plan or consent orders."}
                      </div>
                    </div>
                    <div style={{ padding: "18px 20px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                      <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40", marginBottom: "4px" }}>
                        {"If it does not"}
                      </div>
                      <div style={{ fontSize: "15px", lineHeight: "1.55", color: "#4A5A66" }}>
                        {"The practitioner issues a section 60I certificate, which you need to apply for parenting orders."}
                      </div>
                    </div>
                  </div>
                  <a href={url("sydneyMediation")} style={{ fontSize: "15px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    {"See whether our mediation service suits you "}
                    <span data-arrow="true">
                      {"→"}
                    </span>
                  </a>
                </div>
              </li>
              <li data-reveal="true" style={{ display: "grid", gridTemplateColumns: "44px minmax(0px, 1fr)", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #1A2E40", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#1A2E40", flex: "0 0 auto" }}>
                    {"3"}
                  </span>
                  <span style={{ flex: "1 1 0%", width: "1px", background: "#E8E4DC", margin: "8px 0px" }} />
                </div>
                <div style={{ padding: "8px 0px 36px" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px 0px 10px" }}>
                    {"Negotiating through solicitors"}
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px", maxWidth: "62ch" }}>
                    {"If mediation is not suitable or has not worked, we can negotiate directly with your former partner's lawyer. Many matters settle this way. It saves time and money, reduces the strain on your family, and leaves room for arrangements a court would be unlikely to design."}
                  </p>
                </div>
              </li>
              <li data-reveal="true" style={{ display: "grid", gridTemplateColumns: "44px minmax(0px, 1fr)", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #1A2E40", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#1A2E40", flex: "0 0 auto" }}>
                    {"4"}
                  </span>
                  <span style={{ flex: "1 1 0%", width: "1px", background: "#E8E4DC", margin: "8px 0px" }} />
                </div>
                <div style={{ padding: "8px 0px 36px" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px 0px 10px" }}>
                    {"Formalising your agreement"}
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px", maxWidth: "62ch" }}>
                    {"However you reach agreement, we put it in writing as a parenting plan for flexibility or consent orders for enforceable certainty. We prepare the documents, liaise with the court and make sure nothing important is left vague."}
                  </p>
                </div>
              </li>
              <li data-reveal="true" style={{ display: "grid", gridTemplateColumns: "44px minmax(0px, 1fr)", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", background: "#1A2E40", fontFamily: "var(--font-serif)", fontSize: "19px", color: "#FFFFFF", flex: "0 0 auto" }}>
                    {"5"}
                  </span>
                </div>
                <div style={{ padding: "8px 0px 0px" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px 0px 10px" }}>
                    {"Court proceedings, if needed"}
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px 0px 12px", maxWidth: "62ch" }}>
                    {"If agreement is not possible, we guide you through an application to the Federal Circuit and Family Court of Australia: your affidavit and evidence, interim hearings, family reports, preparation for a final hearing, and representation in court."}
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px", maxWidth: "62ch" }}>
                    {"We are experienced in court, and we prepare every matter as though a judge will read it. Court is still the last resort, for when a child's safety is at risk or agreement is genuinely out of reach."}
                  </p>
                </div>
              </li>
            </ol>
            <div data-reveal="true" style={{ maxWidth: "720px", padding: "28px 30px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#2C3E50", margin: "0px", textWrap: "pretty" }}>
                {"In Sydney, parents must attempt Family Dispute Resolution before filing for parenting orders, except in urgent matters or those involving family violence or abuse. An agreement can then be formalised as consent orders (legally binding) or a parenting plan (not enforceable). If mediation fails, a section 60I certificate allows an application to the Federal Circuit and Family Court of Australia. Most matters settle through mediation or negotiation rather than a contested hearing."}
              </p>
            </div>
          </section>

          {/* ── What courts consider ── */}
          <section id="courts" data-screen-label="What courts consider" data-toc-section="true" style={{ padding: "72px 0px", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
              {"05 · How courts decide"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px 0px 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"What do courts consider in child custody cases?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0px 0px 32px", textWrap: "pretty" }}>
              {"When a court makes parenting orders, the child's best interests are the paramount consideration. Section 60CC of the Family Law Act sets out what the court must weigh."}
            </p>
            <div data-reveal="true" style={{ maxWidth: "760px", margin: "0px 0px 32px", borderTop: "1px solid #E8E4DC" }}>
              <div style={{ display: "grid", gridTemplateColumns: "32px minmax(0px, 1fr)", gap: "16px", padding: "18px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "19px", color: "var(--accent)" }}>
                  {"a"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#2C3E50" }}>
                  {"The safety of the child and of each person who cares for them, including any history of family violence, abuse or neglect, and any family violence orders."}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "32px minmax(0px, 1fr)", gap: "16px", padding: "18px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "19px", color: "var(--accent)" }}>
                  {"b"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#2C3E50" }}>
                  {"Any views the child has expressed, given weight according to their age and maturity."}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "32px minmax(0px, 1fr)", gap: "16px", padding: "18px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "19px", color: "var(--accent)" }}>
                  {"c"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#2C3E50" }}>
                  {"The child's developmental, psychological, emotional and cultural needs."}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "32px minmax(0px, 1fr)", gap: "16px", padding: "18px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "19px", color: "var(--accent)" }}>
                  {"d"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#2C3E50" }}>
                  {"Each person's capacity to meet those needs."}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "32px minmax(0px, 1fr)", gap: "16px", padding: "18px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "19px", color: "var(--accent)" }}>
                  {"e"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#2C3E50" }}>
                  {"The benefit to the child of a relationship with each parent and other significant people, where it is safe."}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "32px minmax(0px, 1fr)", gap: "16px", padding: "18px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "19px", color: "var(--accent)" }}>
                  {"f"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#2C3E50" }}>
                  {"Anything else relevant to the child's circumstances, such as practical travel between homes."}
                </span>
              </div>
            </div>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0px 0px 32px", textWrap: "pretty" }}>
              {"For Aboriginal and Torres Strait Islander children, the court must also consider the child's right to enjoy their culture. Courts do not favour mothers or fathers, and there is no presumption of 50/50 care. Every case turns on its own circumstances."}
            </p>
            <div data-reveal="true" style={{ maxWidth: "720px", padding: "28px 30px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#2C3E50", margin: "0px", textWrap: "pretty" }}>
                {"Courts decide parenting arrangements on the best interests of the child under section 60CC of the Family Law Act 1975. They consider the child's safety, the child's views, their developmental, emotional and cultural needs, each parent's capacity to meet them, and the benefit of relationships with parents and others where safe. There is no presumption in favour of equal time or either parent."}
              </p>
            </div>
          </section>

          {/* ── Children's rights ── */}
          <section id="rights" data-screen-label="Children's rights" data-toc-section="true" style={{ padding: "72px 0px", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
              {"06 · Children's rights in parenting matters"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px 0px 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"Your children have rights of their own."}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0px 0px 36px", textWrap: "pretty" }}>
              {"Parenting matters are decided around the child, not between the adults. The law recognises that children have their own interests in what happens next."}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "16px", marginBottom: "36px" }}>
              <div data-reveal="true" style={{ padding: "26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px 0px 8px" }}>
                  {"To know and be cared for by both parents"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"Unless it is unsafe, children can keep a relationship with each parent after separation."}
                </p>
              </div>
              <div data-reveal="true" style={{ padding: "26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px 0px 8px" }}>
                  {"To keep family relationships"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"Grandparents, aunts, uncles and cousins matter. Extended family can apply for time if parents will not make it possible."}
                </p>
              </div>
              <div data-reveal="true" style={{ padding: "26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px 0px 8px" }}>
                  {"To be heard"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"Children's views are weighed according to age and maturity. In complex matters an Independent Children's Lawyer may represent their interests."}
                </p>
              </div>
              <div data-reveal="true" style={{ padding: "26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px 0px 8px" }}>
                  {"To be protected"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"From physical, psychological and emotional harm, family violence, abuse and neglect."}
                </p>
              </div>
              <div data-reveal="true" style={{ padding: "26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px 0px 8px" }}>
                  {"To cultural connection"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"Aboriginal and Torres Strait Islander children have the right to enjoy their culture and stay connected to community."}
                </p>
              </div>
            </div>
            <div data-reveal="true" style={{ maxWidth: "720px", padding: "28px 30px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#2C3E50", margin: "0px", textWrap: "pretty" }}>
                {"Under Australian family law, children have rights independent of their parents: to relationships with both parents and extended family where safe, to have their views heard, to protection from harm and family violence, and to cultural connection. In complex NSW matters an Independent Children's Lawyer can be appointed to represent the child's interests."}
              </p>
            </div>
          </section>

          {/* ── Why choose Nolan ── */}
          <section id="why" data-screen-label="Why choose Nolan" data-toc-section="true" style={{ padding: "72px 0px", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
              {"07 · Why families choose Nolan"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px 0px 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"This is about your children's future, not just legal procedure."}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0px 0px 36px", textWrap: "pretty" }}>
              {"You need experienced family lawyers who understand what is at stake for your family. Here is what that looks like in practice."}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "0px 40px", borderTop: "1px solid #E8E4DC" }}>
              <div data-reveal="true" style={{ padding: "24px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px 0px 8px" }}>
                  {"Recognised by our peers"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"Doyle's Guide has recognised the firm every year since 2023. "}
                  <a href={url("about")} style={{ fontWeight: "600" }}>
                    {"About the firm"}
                  </a>
                </p>
              </div>
              <div data-reveal="true" style={{ padding: "24px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px 0px 8px" }}>
                  {"Agreement before argument"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"We look for a workable agreement first, and are ready for court when it is genuinely needed."}
                </p>
              </div>
              <div data-reveal="true" style={{ padding: "24px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px 0px 8px" }}>
                  {"Clear, honest advice"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"What to expect and what is realistic, without sugar-coating or false promises."}
                </p>
              </div>
              <div data-reveal="true" style={{ padding: "24px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px 0px 8px" }}>
                  {"You always know where things stand"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"Regular updates and prompt replies, so you never feel like a file number."}
                </p>
              </div>
              <div data-reveal="true" style={{ padding: "24px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px 0px 8px" }}>
                  {"A plan built for your family"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"Tailored to your children's needs and your circumstances, not a template."}
                </p>
              </div>
              <div data-reveal="true" style={{ padding: "24px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px 0px 8px" }}>
                  {"In the Sydney CBD, or by video"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {offices.sydney.streetShort}
                  {", close to public transport, with phone and video meetings when easier."}
                </p>
              </div>
            </div>
          </section>

          {/* ── Choosing a lawyer ── */}
          <section id="choosing" data-screen-label="Choosing a lawyer" data-toc-section="true" style={{ padding: "72px 0px 0px", borderTop: "1px solid #E8E4DC" }}>
            <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
              {"08 · Choosing the right lawyer"}
            </div>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px 0px 24px", maxWidth: "24ch", textWrap: "pretty" }}>
              {"What to look for in a child custody lawyer."}
            </h2>
            <p data-reveal="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0px 0px 32px", textWrap: "pretty" }}>
              {"Whoever you choose, these are the questions worth asking in a first meeting."}
            </p>
            <div data-reveal="true" style={{ maxWidth: "760px", borderTop: "1px solid #E8E4DC" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "6px 32px", padding: "20px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px" }}>
                  {"Experience in NSW family law"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"Procedures and court practice matter. Look for deep experience with the Federal Circuit and Family Court in Sydney."}
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "6px 32px", padding: "20px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px" }}>
                  {"Negotiation before litigation"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"The best outcomes usually happen outside court. Choose someone who treats court as the last resort."}
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "6px 32px", padding: "20px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px" }}>
                  {"Openness about costs"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"You should get a clear estimate up front and understand how billing works for each approach."}
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "6px 32px", padding: "20px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px" }}>
                  {"Availability"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"This is one of the hardest times of your life. Calls and emails should be answered promptly."}
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "6px 32px", padding: "20px 0px", borderBottom: "1px solid #E8E4DC" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "20px", lineHeight: "1.3", color: "#1A2E40", margin: "0px" }}>
                  {"Compassionate but realistic"}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5A66", margin: "0px" }}>
                  {"Empathy matters, and so does honesty about likely outcomes and the best path for your family."}
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>

    {/* ── Google reviews ── loaded live from the Google Business Profile; never written (D-37) */}
    <Reviews office="sydney" heading="In the words of parents we have helped." background="#F8F6F2" />

    {/* ── Costs ── */}
    <section id="costs" data-screen-label="Costs" data-section="true" data-toc-section="true" style={{ background: "#FEFDFB", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ maxWidth: "1240px", margin: "0px auto", padding: "104px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "56px", alignItems: "center" }}>
        <div data-reveal="true">
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
            {"Costs"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.16", color: "#1A2E40", margin: "0px 0px 22px", textWrap: "pretty" }}>
            {"Clear costs from day one."}
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#3A4A56", maxWidth: "52ch", margin: "0px 0px 30px", textWrap: "pretty" }}>
            {"Parenting matters vary enormously, so a published price list would mislead more than it helped. Instead we talk openly about cost from the very first conversation, and give you a written estimate for your situation before any work begins."}
          </p>
          <a href="#book" data-pick-topic="costs" style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            {"Talk to us about costs "}
            <span data-arrow="true">
              {"→"}
            </span>
          </a>
        </div>
        <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <div data-fee-row="true" style={{ background: "#F8F6F2", padding: "26px 28px", borderLeft: "2px solid var(--soft)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40", marginBottom: "6px" }}>
              {"Costs discussed up front"}
            </div>
            <div style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"You know how we charge before any work begins."}
            </div>
          </div>
          <div data-fee-row="true" style={{ background: "#F8F6F2", padding: "26px 28px", borderLeft: "2px solid var(--soft)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40", marginBottom: "6px" }}>
              {"An estimate for each path"}
            </div>
            <div style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Agreement through mediation costs far less than court. We show you both."}
            </div>
          </div>
          <div data-fee-row="true" style={{ background: "#F8F6F2", padding: "26px 28px", borderLeft: "2px solid var(--soft)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40", marginBottom: "6px" }}>
              {"No surprise invoices"}
            </div>
            <div style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"We flag any change in scope before the work begins."}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── FAQ ── */}
    <section id="faq" data-screen-label="FAQ" data-section="true" data-toc-section="true" style={{ background: "#F8F6F2" }}>
      <div style={{ maxWidth: "900px", margin: "0px auto", padding: "112px 24px" }}>
        <div data-reveal="true" style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
            {"Common questions"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 42px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px", textWrap: "pretty" }}>
            {"Questions parents often ask us."}
          </h2>
        </div>
        <div data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"How long does the child custody process take in Sydney?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"If you reach agreement through mediation or negotiation, consent orders can often be approved within two to four months. Contested court cases commonly take 12 to 18 months from filing to final hearing, though urgent matters can be heard sooner. Most matters settle before a final hearing."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Do courts favour mothers in child custody cases in NSW?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"No. The law does not favour either parent because of gender. The court looks only at the child's best interests, and many fathers in Sydney have equal or primary care of their children."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Can I stop my ex-partner from seeing our children?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"Only in limited circumstances where there are serious safety concerns. The law recognises the benefit to children of a relationship with each parent, where that is safe. To limit or supervise the other parent's time, you would generally need evidence of family violence, abuse, substance misuse or another serious risk. If you are worried right now, call us and we will talk you through the options."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"What if my ex-partner will not follow our parenting agreement?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"If you have consent orders or parenting orders, you can apply to the court. Options include make-up time, fines, costs orders or, in serious cases, changes to the orders. A parenting plan on its own is not enforceable, so you would need to apply for consent orders or parenting orders."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"How much does a child custody lawyer cost in Sydney?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <div style={{ margin: "0px 0px 26px" }}>
              <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 14px", maxWidth: "62ch" }}>
                {"It depends mostly on how your matter is resolved. An agreement reached through mediation or negotiation costs far less than contested court proceedings, and every family's circumstances differ. We explain how we charge at your first consultation and give you a written estimate for your situation before any work begins."}
              </p>
              <a href="#book" data-pick-topic="costs" style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {"Talk to us about costs "}
                <span data-arrow="true">
                  {"→"}
                </span>
              </a>
            </div>
          </details>
          <details id="faq-grandparents" style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Can grandparents apply to see their grandchildren in NSW?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"Yes. Grandparents and other people significant to a child can apply for parenting orders under the Family Law Act, provided spending time with them is in the child's best interests. We regularly help Sydney grandparents stay part of their grandchildren's lives after a family separates."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"At what age can a child decide which parent to live with in NSW?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"There is no set age. Courts consider children's views and weigh them according to maturity and understanding, so a teenager's views generally carry more weight than a young child's. Even so, the court makes the decision based on best interests, not preference alone."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Do I need to go to mediation before going to court in Sydney?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"In most cases, yes. You must attend Family Dispute Resolution and make a genuine effort to resolve things before filing for parenting orders. Exceptions include family violence, child abuse, urgency, or where one of you cannot take part effectively."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Can I move away with my children after separating?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"If a move would make it harder for your children to spend time with their other parent, you need that parent's agreement or a court order first. Moving without either can lead to an order for the children's return. Speak to us before you make firm plans."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Do I need a lawyer for consent orders?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"You can apply without one, but the court must be satisfied the orders are in your children's best interests, and vague orders are hard to rely on later. We draft orders that are clear, practical and still work when circumstances change."}
            </p>
          </details>
        </div>
      </div>
    </section>

    {/* ── Consultation CTA ── */}
    <section id="book" data-screen-label="Consultation CTA" data-section="true" data-deep="true" style={{ background: "var(--deep)" }}>
      <div style={{ maxWidth: "1240px", margin: "0px auto", padding: "120px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: "56px 80px", alignItems: "start" }}>
        <div data-reveal="true" style={{ minWidth: "0px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--soft)", marginBottom: "18px" }}>
            {"Book a consultation"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(32px, 4.6vw, 48px)", lineHeight: "1.14", color: "#FFFFFF", margin: "0px 0px 22px", maxWidth: "18ch", textWrap: "pretty" }}>
            {"Book your child custody consultation in Sydney."}
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#E3E9EE", maxWidth: "50ch", margin: "0px 0px 36px", textWrap: "pretty" }}>
            {"Working out parenting arrangements after separation is hard, but you do not have to do it alone. We will listen, explain your options clearly and give you a practical plan forward."}
          </p>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C3D0DC", marginBottom: "14px" }}>
            {"You will leave your consultation with"}
          </div>
          <ul style={{ listStyle: "none", margin: "0px 0px 40px", padding: "0px", display: "flex", flexDirection: "column", borderTop: "1px solid rgba(195, 208, 220, 0.22)" }}>
            <li style={{ display: "flex", gap: "14px", padding: "14px 0px", borderBottom: "1px solid rgba(195, 208, 220, 0.22)", fontSize: "16px", lineHeight: "1.55", color: "#E3E9EE" }}>
              <span aria-hidden="true" style={{ color: "var(--soft)" }}>
                {"✓"}
              </span>
              {"Clear answers to questions about your family"}
            </li>
            <li style={{ display: "flex", gap: "14px", padding: "14px 0px", borderBottom: "1px solid rgba(195, 208, 220, 0.22)", fontSize: "16px", lineHeight: "1.55", color: "#E3E9EE" }}>
              <span aria-hidden="true" style={{ color: "var(--soft)" }}>
                {"✓"}
              </span>
              {"Realistic expectations about outcomes and timeframes"}
            </li>
            <li style={{ display: "flex", gap: "14px", padding: "14px 0px", borderBottom: "1px solid rgba(195, 208, 220, 0.22)", fontSize: "16px", lineHeight: "1.55", color: "#E3E9EE" }}>
              <span aria-hidden="true" style={{ color: "var(--soft)" }}>
                {"✓"}
              </span>
              {"A clear view of likely costs, so you can budget"}
            </li>
            <li style={{ display: "flex", gap: "14px", padding: "14px 0px", borderBottom: "1px solid rgba(195, 208, 220, 0.22)", fontSize: "16px", lineHeight: "1.55", color: "#E3E9EE" }}>
              <span aria-hidden="true" style={{ color: "var(--soft)" }}>
                {"✓"}
              </span>
              {"A written plan for your next steps"}
            </li>
          </ul>
          <PhoneLink office="sydney" location="body" position="contact" style={{ display: "inline-block", fontFamily: "var(--font-serif)", fontSize: "30px", color: "#FFFFFF", marginBottom: "10px" }}>
            {offices.sydney.phoneDisplay}
          </PhoneLink>
          <div style={{ fontSize: "15px", lineHeight: "1.65", color: "#C3D0DC" }}>
            {offices.sydney.addressDisplay}
            <br />
            {"Phone and video consultations available"}
          </div>
        </div>
        <div data-reveal="true" data-form-card="true" style={{ minWidth: "0px", background: "#FEFDFB", borderRadius: "3px", padding: "40px" }}>
          <EnquiryForm office="sydney" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "24px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Send us a confidential enquiry"}
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
              {"What should we call you? "}
              <input data-field="true" type="text" autoComplete="name" style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: "400", color: "#1A2E40", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "2px", padding: "14px 16px", minHeight: "22px" }} name="name" />
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: "20px" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#1A2E40", minWidth: "0px" }}>
                {"Phone "}
                <input data-field="true" type="tel" autoComplete="tel" style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: "400", color: "#1A2E40", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "2px", padding: "14px 16px", minWidth: "0px" }} name="phone" />
              </label>
              {" "}
              <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#1A2E40", minWidth: "0px" }}>
                {"Email "}
                <input data-field="true" type="email" autoComplete="email" style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: "400", color: "#1A2E40", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "2px", padding: "14px 16px", minWidth: "0px" }} name="email" />
              </label>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
              {"What would you like to talk about?"}
              <select data-field="true" style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: "400", color: "#1A2E40", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "2px", padding: "14px 16px", minHeight: "52px" }}>
                <option value="arrangements">
                  {"Parenting arrangements"}
                </option>
                <option value="consent">
                  {"Putting an agreement in writing"}
                </option>
                <option value="mediation">
                  {"Mediation"}
                </option>
                <option value="court">
                  {"Court proceedings"}
                </option>
                <option value="costs">
                  {"Costs and how we charge"}
                </option>
                <option value="other">
                  {"Something else"}
                </option>
              </select>
            </label>
            {" "}
            <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
              <span>
                {"Anything you would like us to know? "}
                <span style={{ fontWeight: "400", color: "#4A5A66" }}>
                  {"Optional. Share only what you are comfortable with."}
                </span>
              </span>
              <textarea data-field="true" rows={4} style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: "400", lineHeight: "1.55", color: "#1A2E40", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "2px", padding: "14px 16px", resize: "vertical" }} name="message" />
            </label>
            <fieldset style={{ borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", margin: "0px", padding: "0px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <legend style={{ padding: "0px", marginBottom: "10px", fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Is it safe for us to leave a message?"}
              </legend>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
                <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", fontSize: "15px", color: "#2C3E50", cursor: "pointer" }}>
                  <input type="radio" name="safe" value="yes" defaultChecked style={{ width: "18px", height: "18px", accentColor: "#1A2E40", margin: "0px" }} />
                  {"Yes"}
                </label>
                {" "}
                <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", fontSize: "15px", color: "#2C3E50", cursor: "pointer" }}>
                  <input type="radio" name="safe" value="no" style={{ width: "18px", height: "18px", accentColor: "#1A2E40", margin: "0px" }} />
                  {"No, please only speak to me"}
                </label>
              </div>
            </fieldset>
            <button type="submit" data-press="true" style={{ minHeight: "56px", padding: "18px 34px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", borderRadius: "2px", background: "var(--cta)", color: "#FFFFFF", fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", cursor: "pointer" }}>
              {"Send confidentially"}
            </button>
            <p style={{ fontSize: "14px", lineHeight: "1.55", color: "#4A5A66", margin: "0px" }}>
              {"Your enquiry is confidential and goes only to our Sydney legal team. Sending it does not commit you to anything."}
            </p>
          </EnquiryForm>
        </div>
      </div>
    </section>
    </>
  );
}
