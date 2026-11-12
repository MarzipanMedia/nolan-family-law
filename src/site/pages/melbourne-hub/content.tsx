/**
 * Page sections for "melbourne-hub", converted from export/melbourne-family-law.html
 * by tools/convert-prototype.mjs and then maintained by hand. The copy is the approved copy:
 * change wording only with Ben's sign-off. URLs come from the routes file and office details
 * from the office config, never from this file.
 */
import { url, isLive } from '@/config/routes';
import { offices } from '@/config/offices';
import { PhoneLink } from '@/components/PhoneLink';
import { EnquiryForm } from '@/components/EnquiryForm';
import { Reviews } from '@/components/Reviews';

export function Content() {
  return (
    <>

    {/* ── Hero ── */}
    <section data-screen-label="Hero" style={{ background: "#F8F6F2" }}>
      <div data-hero-grid="true" style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 24px 72px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "64px", alignItems: "start" }}>
        <div style={{ minWidth: "0" }}>
          <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "26px" }}>
            {"Melbourne · Family law and mediation"}
          </div>
          <h1 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(40px, 5.4vw, 72px)", lineHeight: "1.06", letterSpacing: "-0.015em", color: "#1A2E40", margin: "0 0 26px", maxWidth: "16ch", textWrap: "pretty" }}>
            {"Family lawyers and mediation in Melbourne"}
          </h1>
          <p data-reveal="true" style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0 0 20px", textWrap: "pretty" }}>
            {"When a relationship ends, the questions arrive all at once: the children, the home, the money, and what happens next."}
          </p>
          <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "0 0 38px", maxWidth: "56ch" }}>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"Left alone, they rarely get easier. Time limits run from separation and divorce, informal arrangements are seldom binding, and decisions made in the first few weeks have a way of sticking."}
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"Our Melbourne office on Bourke Street, led by Partner Anastasia Simes, helps Victorian families settle parenting, property and financial matters. We work towards agreement first, through negotiation and mediation, and go to the Federal Circuit and Family Court of Australia when that is what it takes."}
            </p>
          </div>
          <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <a href="#book" data-press="true" style={{ background: "#B4552F", color: "#FFFFFF", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", textDecoration: "none" }}>
              {"Talk to our Melbourne team"}
            </a>
            {" "}
            <PhoneLink office="melbourne" location="body" position="hero" data-press="true" style={{ border: "1px solid #BFC8D2", color: "#1A2E40", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", background: "rgba(248,246,242,0.6)", textDecoration: "none" }}>
              {"Call "}
              {offices.melbourne.phoneDisplay}
            </PhoneLink>
          </div>
        </div>
        <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div data-clip="true" style={{ position: "relative", overflow: "hidden", borderRadius: "3px", aspectRatio: "4 / 4.2", maxHeight: "560px", background: "linear-gradient(180deg, #DCE9F0 0%, #E8E4DC 100%)" }}>
            <img data-hero-img="true" src="/images/anastasia-simes-partner-who-leads-nolan-family-l-51ac1b30.webp" width={450} height={450} alt="Anastasia Simes, Partner, who leads Nolan Family Law and Mediation's Melbourne office" style={{ position: "absolute", left: "50%", bottom: "0", transformOrigin: "50% 100%", width: "88%", maxWidth: "470px", height: "auto", translate: "-50% 0" }} fetchPriority="high" decoding="async" />
            <div style={{ position: "absolute", left: "18px", bottom: "18px", background: "rgba(254,253,251,0.94)", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "12px 16px" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "19px", color: "#1A2E40" }}>
                {"Anastasia Simes"}
              </div>
              <div style={{ fontSize: "14px", color: "#4A5A66" }}>
                {"Partner · Melbourne"}
              </div>
            </div>
          </div>
          <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 100px), 1fr))", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {offices.melbourne.streetShort}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"Melbourne CBD, or by video"}
              </div>
            </div>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Mediation in Melbourne"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"Agreement before court"}
              </div>
            </div>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Doyle's Guide"}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5A66" }}>
                {"Recognised every year since 2023"}
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
          <span aria-current="page" style={{ color: "#1A2E40" }}>
            {"Melbourne family law"}
          </span>
          {" "}
          <span style={{ flex: "1 1 auto" }} />
          {" "}
          <span style={{ color: "#4A5A66" }}>
            {"Reviewed by "}
            <a href={url("profile:anastasia-simes")} style={{ color: "#1A2E40", fontWeight: "600" }}>
              {"Anastasia Simes"}
            </a>
            {", Partner · Updated November 2026"}
          </span>
        </nav>
        <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(26px, 3.2vw, 36px)", lineHeight: "1.2", color: "#1A2E40", margin: "0 0 40px", maxWidth: "30ch", textWrap: "pretty" }}>
          {"Family law in Victoria, explained plainly, with a Melbourne team beside you."}
        </h2>
        <aside aria-labelledby="quick-answer" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "20px 56px", padding: "40px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "14px" }}>
              {"Quick answer"}
            </div>
            <h3 id="quick-answer" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0", textWrap: "pretty" }}>
              {"How does family law work in Melbourne?"}
            </h3>
          </div>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "62ch", textWrap: "pretty" }}>
            {"Family law in Victoria is federal. The Family Law Act 1975 governs divorce, parenting arrangements, property settlement and spousal maintenance for married couples, and for de facto couples who separated on or after 1 March 2009. Cases are heard by the Federal Circuit and Family Court of Australia, whose Melbourne registry is at 305 William Street. Most families never reach a trial: they agree through negotiation or mediation, then make it binding with consent orders or a financial agreement. Time limits apply to property claims. Nolan Family Law & Mediation advises Victorian families from "}
            {offices.melbourne.streetShort}
            {", Melbourne."}
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
        <div data-badge-grid="true" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", alignItems: "center", gap: "32px 32px", maxWidth: "860px", margin: "0 auto" }}>
          <div data-reveal="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0" }}>
            <img src="/images/doyle-s-guide-to-the-australian-legal-profession-58751f82.webp" width={716} height={156} alt="Doyle's Guide to the Australian Legal Profession" loading="lazy" style={{ display: "block", height: "34px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
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
        </div>
        <div style={{ textAlign: "center" }}>
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
            {"Whatever brought you here, start with what matters most."}
          </h2>
          <p style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0", textWrap: "pretty" }}>
            {"Each of these leads to a page written for families in Victoria, with the same Melbourne team behind it."}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "24px" }}>
          <a href={url("melbourneChildCustody")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Protecting my children"}
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Child custody and parenting arrangements in Melbourne"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("melbourneProperty")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Dividing property and assets"}
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Property settlement, superannuation and debts in Victoria"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("melbourneMediation")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Resolving it without court"}
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Family law mediation in Melbourne, for property and parenting"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#separation" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Separating or divorcing"}
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"What to do first, and how divorce works in Victoria"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("melbournePrenups")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Protecting what I have"}
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Prenuptial and binding financial agreements in Melbourne"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#book" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"I am not sure where to start"}
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Tell us a little and we will point you the right way"}
            </span>
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
            <a href="#separation" data-toc-link="separation" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Separating"}
            </a>
            <a href="#divorce" data-toc-link="divorce" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Divorce"}
            </a>
            <a href="#children" data-toc-link="children" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Children"}
            </a>
            <a href="#property" data-toc-link="property" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Property"}
            </a>
            <a href="#defacto" data-toc-link="defacto" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"De facto couples"}
            </a>
            <a href="#mediation" data-toc-link="mediation" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Mediation"}
            </a>
            <a href="#court" data-toc-link="court" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Going to court"}
            </a>
            <a href="#costs" data-toc-link="costs" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"What it costs"}
            </a>
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
              <a href="#separation" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Separating"}
              </a>
              <a href="#divorce" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Divorce"}
              </a>
              <a href="#children" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Children"}
              </a>
              <a href="#property" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Property"}
              </a>
              <a href="#defacto" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"De facto couples"}
              </a>
              <a href="#mediation" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Mediation"}
              </a>
              <a href="#court" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Going to court"}
              </a>
              <a href="#costs" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"What it costs"}
              </a>
              <a href="#faq" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Questions"}
              </a>
            </nav>
          </details>

          {/* ── Separating ── */}
          <section id="separation" data-screen-label="Separating" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What should I do first after separating in Victoria?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Separation happens when one of you decides the relationship is over and acts on it. There is no form to file and nobody to notify. The date still matters a great deal, because your eligibility for divorce and the time limits for property and maintenance all flow from it or from what follows it."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"You can be separated while still living under the same roof, and many Melbourne couples are, for financial reasons or for the children. What counts is whether the relationship has ended in substance: separate rooms, separate finances, telling family and friends. If that is your situation, write down the date and how things changed."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The first few weeks are when people make the decisions that are hardest to undo. Get advice before you move money, sign anything or agree to a care arrangement for the children, and start gathering bank, superannuation and mortgage statements. Our "}
              <a href={url("article:separation-checklist-melbourne")} style={{ fontWeight: "600" }}>
                {"separation checklist for Melbourne"}
              </a>
              {" and our guide to "}
              <a href={url("article:prepare-financially-for-separation-in-melbourne")} style={{ fontWeight: "600" }}>
                {"preparing financially for separation"}
              </a>
              {" go through it step by step."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Separation needs no paperwork, but its date starts important clocks. You can be separated under one roof. Get advice early, and gather your financial documents before agreeing to anything."}
              </p>
            </div>
          </section>

          {/* ── Divorce ── */}
          <section id="divorce" data-screen-label="Divorce" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How does divorce work in Victoria?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Divorce is the formal end of a marriage, and that is all it does. Australia has no-fault divorce: the only ground is that the marriage has broken down irretrievably, shown by at least 12 months of separation. Who was to blame plays no part. If you have been married for less than two years, you generally need to have considered reconciliation with a family counsellor before applying."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Applications are made online through the Commonwealth Courts Portal to the Federal Circuit and Family Court of Australia, jointly or by one of you alone. If there are children under 18, the court must be satisfied that proper arrangements have been made for them. A divorce order takes effect one month and one day after it is made."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Divorce does not divide property or settle arrangements for children. Those are separate, and you do not need to be divorced to deal with them. Once a divorce order takes effect, you generally have 12 months to apply to the court for property orders or spousal maintenance, so it is wise to have your finances resolved, or at least underway, before then. Our guide to "}
              <a href={url("articleSeparationVsDivorceVictoria")} style={{ fontWeight: "600" }}>
                {"separation and divorce in Victoria"}
              </a>
              {" covers the detail."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"You can apply for divorce after 12 months of separation, and fault is irrelevant. A divorce does not deal with property or children. Once it takes effect, you generally have 12 months to apply for property orders."}
              </p>
            </div>
          </section>

          {/* ── Children ── */}
          <section id="children" data-screen-label="Children" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How are parenting arrangements decided in Victoria?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Parenting law is the same across Australia. Every decision turns on what is in your children's best interests, and since 6 May 2024 the law no longer starts from a presumption that parents share equal parental responsibility. The court considers what keeps the children and their carers safe, the children's views, their developmental, emotional and cultural needs, each parent's capacity to meet those needs, and the benefit of relationships with both parents where that is safe."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Most parents agree arrangements themselves. A parenting plan is a written, signed agreement that is flexible but not enforceable. Consent orders are approved by the court and are binding. Before applying to the court for parenting orders, you generally need to attempt family dispute resolution, a form of mediation, unless there is family violence, a risk of abuse or genuine urgency."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Our page on "}
              <a href={url("melbourneChildCustody")} style={{ fontWeight: "600" }}>
                {"child custody and parenting arrangements in Melbourne"}
              </a>
              {" explains each step, including what happens when a parent wants to relocate."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Decisions about children turn on their best interests, and there is no longer a presumption of equal shared parental responsibility. Parents can agree a parenting plan or consent orders, and mediation usually comes before court."}
              </p>
            </div>
          </section>

          {/* ── Property ── */}
          <section id="property" data-screen-label="Property" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How is property divided after separation in Victoria?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"A property settlement covers everything you own and owe, together or separately: the home, savings, superannuation, businesses, shares, vehicles and debts. Property in one person's name is still part of the picture."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"There is no automatic 50/50 split. The court identifies the property, looks at what each of you contributed, financially and otherwise, then at your current and future circumstances, such as the care of children, earning capacity, health and age. The result has to be just and equitable. Since 10 June 2025 the law also says expressly that the economic effect of family violence, and the wasting of assets, can be taken into account."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Most Melbourne couples settle by agreement and make it binding through consent orders or a binding financial agreement. Married couples generally have 12 months from when a divorce order takes effect to apply to the court, and de facto couples two years from separation. Spousal maintenance, which is support for a former partner who cannot meet their reasonable needs, follows the same time limits and is covered in our guide to "}
              <a href={url("articleSpousalMaintenanceMelbourne")} style={{ fontWeight: "600" }}>
                {"spousal maintenance in Melbourne"}
              </a>
              {". Our "}
              <a href={url("melbourneProperty")} style={{ fontWeight: "600" }}>
                {"Melbourne property settlement"}
              </a>
              {" page goes further."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Everything either of you owns or owes is considered, and there is no automatic equal split. Most settlements are agreed and made binding by consent orders or a financial agreement, within strict time limits."}
              </p>
            </div>
          </section>

          {/* ── De facto couples ── */}
          <section id="defacto" data-screen-label="De facto couples" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Do de facto couples in Victoria have the same rights as married couples?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Largely, yes. Victoria referred its powers over de facto financial matters to the Commonwealth, so for couples who separated on or after 1 March 2009, de facto property settlements and maintenance are dealt with under the Family Law Act, by the same court and on the same principles as for married couples. The same applies to same sex couples."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"To apply, you generally need to show one of the following: the relationship lasted at least two years in total, you have a child together, one of you made substantial contributions and it would be a serious injustice not to make orders, or the relationship was registered under Victoria's Relationships Act 2008. There is also a requirement that the relationship has a connection with Victoria or another participating state."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The time limit is two years from separation, and there is no divorce to wait for. Our guide to "}
              <a href={url("articleDeFactoVictoria")} style={{ fontWeight: "600" }}>
                {"de facto property rights in Victoria"}
              </a>
              {" explains eligibility and the exceptions."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"De facto couples in Victoria who separated after 1 March 2009 have broadly the same property and maintenance rights as married couples, under federal law. Eligibility rules apply, and the deadline is two years from separation."}
              </p>
            </div>
          </section>
          <aside aria-labelledby="mid-cta-title" data-mid-cta="true" data-reveal="true" style={{ margin: "8px 0 0", padding: "40px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "22px", maxWidth: "760px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <img src="/images/anastasia-simes-partner-who-leads-nolan-family-l-51ac1b30.webp" width={450} height={450} alt="" style={{ flex: "none", width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover", objectPosition: "50% 12%", background: "#DCE9F0" }} loading="lazy" decoding="async" />
              <div style={{ minWidth: "0" }}>
                <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "6px" }}>
                  {"Every situation is different"}
                </div>
                <h2 id="mid-cta-title" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0", textWrap: "pretty" }}>
                  {"Not sure how this applies to you?"}
                </h2>
              </div>
            </div>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "58ch", textWrap: "pretty" }}>
              {"The general rules only go so far. A short conversation with our Melbourne team will tell you where you stand, what your options are and what to do first. It is confidential, and it commits you to nothing."}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 28px" }}>
              <a href="#book" data-press="true" data-cta-position="mid" style={{ background: "#B4552F", color: "#FFFFFF", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", textDecoration: "none" }}>
                {"Talk to our Melbourne team"}
              </a>
              {" "}
              <PhoneLink office="melbourne" location="body" position="mid" data-cta-position="mid" style={{ fontSize: "16px", fontWeight: "600", color: "#1A2E40" }}>
                {"or call "}
                {offices.melbourne.phoneDisplay}
              </PhoneLink>
            </div>
          </aside>

          {/* ── Mediation ── */}
          <section id="mediation" data-screen-label="Mediation" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Can we resolve this without going to court?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Usually, yes. Most family law matters in Melbourne are settled by negotiation or mediation rather than decided by a judge, and the court expects you to try. Mediation brings you both, with or without lawyers, into a structured conversation led by a neutral mediator. It is generally quicker, less costly and more private than court, and you keep control of the outcome."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Our Melbourne office offers family law mediation for property and parenting matters, in person at Bourke Street or by video. Where there has been family violence or there is a serious imbalance of power, mediation may not be appropriate, and nobody should feel pressured into it. For parenting matters, a certificate from a registered family dispute resolution practitioner is generally needed before you can apply to the court."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Read more about "}
              <a href={url("melbourneMediation")} style={{ fontWeight: "600" }}>
                {"family law mediation in Melbourne"}
              </a>
              {", or how mediation works at our "}
              <a href={url("sydneyMediation")} style={{ fontWeight: "600" }}>
                {"Sydney office"}
              </a>
              {"."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Most matters settle without a trial. Our Melbourne office offers mediation for property and parenting disputes, in person or by video. Parenting cases generally need a dispute resolution certificate before court."}
              </p>
            </div>
          </section>

          {/* ── Going to court ── */}
          <section id="court" data-screen-label="Going to court" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What happens if your matter goes to court in Melbourne?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Family law cases in Victoria are heard by the Federal Circuit and Family Court of Australia. Its Melbourne registry is in the Owen Dixon Commonwealth Law Courts Building at 305 William Street, beside Flagstaff Station and a short walk from our Bourke Street office. There is also a family law registry in Dandenong."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Starting proceedings does not mean a trial. Most cases still settle along the way, and the court runs them through conferences and dispute resolution before any final hearing. Where a child or property is at immediate risk, urgent applications can be heard quickly."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Family violence intervention orders are separate. They are made by the Magistrates' Court of Victoria under state law, and they sit alongside any family law case. If you need one, or have been served with one, tell us early, because it shapes how everything else is handled. Our guide to "}
              <a href={url("articleFamilyViolencePropertyVictoria")} style={{ fontWeight: "600" }}>
                {"family violence and property settlements in Victoria"}
              </a>
              {" explains how the two interact."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Victorian family law cases go to the Federal Circuit and Family Court in William Street, Melbourne, and most still settle before a final hearing. Family violence intervention orders are made separately by the Magistrates' Court."}
              </p>
            </div>
          </section>

          {/* ── What it costs ── */}
          <section id="costs" data-screen-label="What it costs" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What does a family lawyer in Melbourne cost?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"It depends on what your matter needs, so we do not publish a price list. Cost is shaped by whether you and your former partner can agree, how complex your finances are, and whether valuations, mediation or court are involved."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"We explain how our fees work at the first meeting, put an estimate in writing and keep you updated as things move. Reaching agreement, through negotiation or mediation, is almost always the less costly path, and we will tell you honestly when we think it is open to you. "}
              <a href="#book" style={{ fontWeight: "600" }} data-pick-topic="fees">
                {"Talk to us about costs"}
              </a>
              {"."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"There are no fixed fees. We explain how fees work at the start, give you a written estimate and keep you updated."}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>

    {/* ── Your Melbourne lawyer ── */}
    <section data-screen-label="Your Melbourne lawyer" data-section="true" style={{ background: "#F8F6F2" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "120px 24px" }}>
        <div data-reveal="true" style={{ marginBottom: "48px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
            {"Who you would be working with"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0", maxWidth: "24ch", textWrap: "pretty" }}>
            {"Your family lawyer in Melbourne"}
          </h2>
        </div>
        <div data-person="true" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "148px minmax(0,1fr)", gap: "32px", alignItems: "start", maxWidth: "860px", padding: "34px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <img src="/images/anastasia-simes-partner-who-leads-nolan-family-l-51ac1b30.webp" width={450} height={450} alt="Anastasia Simes, Partner at Nolan Family Law and Mediation in Melbourne" loading="lazy" style={{ display: "block", width: "148px", height: "148px", borderRadius: "3px", objectFit: "cover", objectPosition: "50% 15%", background: "#DCE9F0" }} decoding="async" />
          <div style={{ minWidth: "0" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 6px" }}>
              {"Anastasia Simes"}
            </h3>
            <div style={{ fontSize: "15px", fontWeight: "600", color: "#3A6D8C", marginBottom: "18px" }}>
              {"Partner · Melbourne office"}
            </div>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 14px", maxWidth: "58ch" }}>
              {"Anastasia leads our Melbourne office at "}
              {offices.melbourne.streetShort}
              {". She has more than a decade of experience in family law, acting in complex financial matters, parenting disputes and divorce, and she takes a practical, meticulous approach to every matter."}
            </p>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 14px", maxWidth: "58ch" }}>
              {"She works to resolve matters through negotiation and dispute resolution wherever she can, and she has extensive court experience for when that is not possible. Behind her is the whole Nolan team, recognised by Doyle's Guide every year since 2023."}
            </p>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0" }}>
              <a href={url("profile:anastasia-simes")} style={{ fontWeight: "600" }}>
                {"Read Anastasia's full profile"}
              </a>
              {", or see "}
              <a href={url("team")} style={{ fontWeight: "600" }}>
                {"everyone at the firm"}
              </a>
              {"."}
            </p>
          </div>
        </div>
        <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "72px minmax(0,1fr)", gap: "22px", alignItems: "center", maxWidth: "860px", marginTop: "20px", padding: "24px 34px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <img src="/images/tash-nolan-principal-d4d3b561.webp" width={400} height={400} alt="Tash Nolan, Principal" loading="lazy" style={{ display: "block", width: "72px", height: "72px", borderRadius: "3px", objectFit: "cover", objectPosition: "50% 15%", background: "#DCE9F0" }} decoding="async" />
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#2C3E50", margin: "0" }}>
            {"The firm's Principal, "}
            <a href={url("profile:tash-nolan")} style={{ fontWeight: "600" }}>
              {"Tash Nolan"}
            </a>
            {", has been individually recognised in Doyle's Guide every year since 2023, including in 2026 as a leading family lawyer for high net-worth and complex financial matters."}
          </p>
        </div>
      </div>
    </section>

    {/* ── Reviews ── loaded live from the Google Business Profile; never written (D-37) */}
    <Reviews office="melbourne" heading="What clients say about working with us" />

    {/* ── Sydney toggle and Melbourne guides ── */}
    <section data-screen-label="Sydney toggle and Melbourne guides" data-section="true" style={{ background: "#F8F6F2", borderTop: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 24px" }}>
        <a href={url("sydneyHub")} data-card="true" data-reveal="true" data-location-toggle="true" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "18px 32px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px 34px", color: "#1A2E40", textDecoration: "none", marginBottom: "56px" }}>
          <span style={{ minWidth: "0" }}>
            <span style={{ display: "block", fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
              {"In New South Wales instead?"}
            </span>
            {" "}
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "24px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Our Sydney family lawyers are at "}
              {offices.sydney.streetShort}
            </span>
            {" "}
            <span style={{ display: "block", fontSize: "16px", lineHeight: "1.6", color: "#4A5A66", marginTop: "6px" }}>
              {"The same firm and the same approach, with a Sydney team and Sydney registries"}
            </span>
          </span>
          {" "}
          <span data-arrow="true" aria-hidden="true" style={{ fontSize: "20px", color: "#3A6D8C" }}>
            {"→"}
          </span>
        </a>
        <div data-reveal="true" style={{ marginBottom: "32px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
            {"Melbourne guides"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(28px, 3.4vw, 38px)", lineHeight: "1.2", color: "#1A2E40", margin: "0", maxWidth: "24ch", textWrap: "pretty" }}>
            {"Reading for families in Victoria"}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "24px" }}>
          <a href={url("article:separation-checklist-melbourne")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Separation checklist for Melbourne"}
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"What to do, and in what order"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("article:prepare-financially-for-separation-in-melbourne")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Preparing financially for separation"}
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Documents, accounts and the early decisions"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          {isLive("articleSeparationVsDivorceVictoria") && (<a href={url("articleSeparationVsDivorceVictoria")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Separation and divorce in Victoria"}
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Two processes, two sets of time limits"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>)}
          {" "}
          {isLive("articleDeFactoVictoria") && (<a href={url("articleDeFactoVictoria")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"De facto property rights in Victoria"}
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Eligibility, the two year rule and its exceptions"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>)}
          {" "}
          {isLive("articleSpousalMaintenanceMelbourne") && (<a href={url("articleSpousalMaintenanceMelbourne")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Spousal maintenance in Melbourne"}
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Who qualifies, and how long it lasts"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>)}
          {" "}
          {isLive("articleFamilyViolencePropertyVictoria") && (<a href={url("articleFamilyViolencePropertyVictoria")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Family violence and property in Victoria"}
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"How safety and settlement interact"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>)}
        </div>
      </div>
    </section>

    {/* ── FAQ ── */}
    <section id="faq" data-screen-label="FAQ" data-section="true" data-toc-section="true" style={{ background: "#FEFDFB", borderTop: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "120px 24px" }}>
        <div data-reveal="true" style={{ marginBottom: "40px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "18px" }}>
            {"Questions people ask us"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0", maxWidth: "24ch", textWrap: "pretty" }}>
            {"Family law in Melbourne, answered plainly"}
          </h2>
        </div>
        <div style={{ maxWidth: "860px", borderTop: "1px solid #E8E4DC" }}>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"How much does a family lawyer cost in Melbourne?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"It depends on what your matter needs, so we do not publish a price list. Cost is shaped by whether you and your former partner can agree, how complex your finances are, and whether valuations, mediation or court are involved. We explain how our fees work at the first meeting and put an estimate in writing. "}
              <a href="#book" style={{ fontWeight: "600" }} data-pick-topic="fees">
                {"Talk to us about costs"}
              </a>
              {"."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"How soon after separating can I apply for divorce in Victoria?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"You need to have been separated for at least 12 months. If you have been married for less than two years, you generally also need to have considered reconciliation with a family counsellor. Applications are made online to the Federal Circuit and Family Court of Australia, and an order takes effect one month and one day after it is made."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Do I have to go to court to get divorced?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Often not. If you apply jointly, or there are no children under 18, you usually do not need to attend. If you apply on your own and there are children under 18, you will generally need to attend the hearing, which is often held by video."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Where is the Family Court in Melbourne?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Family law cases are heard by the Federal Circuit and Family Court of Australia. Its Melbourne registry is in the Owen Dixon Commonwealth Law Courts Building at 305 William Street, beside Flagstaff Station. There is also a family law registry in Dandenong."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Is mediation compulsory before going to court in Victoria?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"For parenting matters, you generally need to attempt family dispute resolution and obtain a certificate before applying to the court, unless there is family violence, a risk of abuse or urgency. For property matters, the court expects you to make genuine attempts to resolve things first, and mediation is the usual way to do that."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Do de facto couples have the same property rights as married couples in Victoria?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Broadly, yes. For couples who separated on or after 1 March 2009, de facto property and maintenance claims are dealt with under the Family Law Act in the same court and on the same principles. You generally need a relationship of at least two years, a child together, substantial contributions, or a registered relationship, and you must apply within two years of separating."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"How long do I have to sort out property after separating?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Married couples generally have 12 months from when a divorce order takes effect to apply to the court for property orders. De facto couples have two years from separation. After that you need the court's permission, which is not guaranteed, so it is best to act well before either deadline."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Is property always split 50/50 in Victoria?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"No. There is no presumption of an equal split. The court looks at what each of you contributed, financially and otherwise, and at your current and future circumstances, and the result has to be just and equitable in your situation. Some settlements end up close to equal and many do not."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Can we be separated but still live together?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes. Separation under one roof is recognised, and many couples live together for a while after separating. What matters is that the relationship has ended in substance. Keep a note of the date and how your living arrangements changed, in case it is questioned later."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"What is the difference between a parenting plan and consent orders?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"A parenting plan is a written, signed agreement between parents. It is flexible but not legally enforceable. Consent orders are approved by the Federal Circuit and Family Court and are binding, so they suit families who want certainty."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Does your Melbourne office offer mediation?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes. Our Melbourne office offers family law mediation for property and parenting matters, in person at "}
              {offices.melbourne.streetShort}
              {" or by video. Mediation is not appropriate in every case, particularly where there has been family violence, and we will talk that through with you first."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Who will I work with at your Melbourne office, and can we meet by video?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Our Melbourne office is led by Anastasia Simes, Partner, with the support of the wider Nolan team. You can meet us at "}
              {offices.melbourne.streetShort}
              {", or by phone or video if that is easier, including from regional Victoria."}
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
            {"Talk to our Melbourne team."}
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#E3E9EE", maxWidth: "50ch", margin: "0 0 36px", textWrap: "pretty" }}>
            {"You do not need to have everything worked out before you call. Tell us a little about your situation and we will explain your options in Victoria, and what each would involve."}
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
              {"Listen first, then explain where you stand under the law"}
            </li>
            <li style={{ display: "flex", gap: "14px", padding: "14px 0", borderBottom: "1px solid rgba(195,208,220,0.22)", fontSize: "16px", lineHeight: "1.55", color: "#E3E9EE" }}>
              <span aria-hidden="true" style={{ color: "#A9C9DB" }}>
                {"✓"}
              </span>
              {"Set out your options, from mediation to court, and what each involves"}
            </li>
            <li style={{ display: "flex", gap: "14px", padding: "14px 0", borderBottom: "1px solid rgba(195,208,220,0.22)", fontSize: "16px", lineHeight: "1.55", color: "#E3E9EE" }}>
              <span aria-hidden="true" style={{ color: "#A9C9DB" }}>
                {"✓"}
              </span>
              {"Tell you how our fees work, and put an estimate in writing"}
            </li>
          </ul>
          <PhoneLink office="melbourne" location="body" position="contact" style={{ display: "inline-block", fontFamily: "var(--font-serif)", fontSize: "30px", color: "#FFFFFF", marginBottom: "10px" }}>
            {offices.melbourne.phoneDisplay}
          </PhoneLink>
          <div style={{ fontSize: "15px", lineHeight: "1.65", color: "#C3D0DC" }}>
            {offices.melbourne.addressDisplay}
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
                {"A member of our Melbourne team will contact you within one business day, using the method you chose. If something is urgent, please call us."}
              </p>
              <button type="button" data-action="resetForm" data-press="true" style={{ alignSelf: "flex-start", minHeight: "48px", padding: "0 22px", border: "1px solid #BFC8D2", borderRadius: "2px", background: "transparent", color: "#1A2E40", fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>
                {"Send another enquiry"}
              </button>
            </div>
          </div>
          <div data-form-wrap="">
            <EnquiryForm office="melbourne" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
                  <option value="children">
                    {"Arrangements for my children"}
                  </option>
                  <option value="property">
                    {"Property and finances"}
                  </option>
                  <option value="divorce">
                    {"Separation or divorce"}
                  </option>
                  <option value="mediation">
                    {"Mediation"}
                  </option>
                  <option value="bfa">
                    {"A prenup or financial agreement"}
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
                    <input type="radio" name="stage" value="thinking" style={{ width: "18px", height: "18px", accentColor: "#1A2E40", margin: "0" }} />
                    {"Thinking about separating"}
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
                {"Your enquiry is confidential and goes only to our Melbourne team. Sending it does not commit you or the other party to anything."}
              </p>
            </EnquiryForm>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
