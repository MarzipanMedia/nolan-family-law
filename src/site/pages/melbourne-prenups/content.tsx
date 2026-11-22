/**
 * Page sections for "melbourne-prenups", converted from export/prenuptial-agreements-melbourne.html
 * by tools/convert-prototype.mjs --notes and then maintained by hand (shared MidPrompt and
 * CtaBand, the hub's photo files). The copy is the approved copy:
 * change wording only with Ben's sign-off. URLs come from the routes file and office details
 * from the office config, never from this file.
 */
import { url, isLive } from '@/config/routes';
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
            {"Melbourne · Prenups and BFAs"}
          </div>
          <h1 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(40px, 5.4vw, 72px)", lineHeight: "1.06", letterSpacing: "-0.015em", color: "#1A2E40", margin: "0 0 26px", maxWidth: "17ch", textWrap: "pretty" }}>
            {"Prenups and binding financial agreements in Melbourne"}
          </h1>
          <p data-reveal="true" style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0 0 20px", textWrap: "pretty" }}>
            {"You are planning a life together, and somewhere between the venue and the guest list one of you has raised the question of a prenup. Perhaps there is a home you bought on your own, a share in a family business, or an inheritance your parents would like kept in the family."}
          </p>
          <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "0 0 38px", maxWidth: "56ch" }}>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"It is an awkward conversation, and it is easy to put off. Yet leaving it late is exactly what puts an agreement at risk, and leaving it out altogether means that, if the relationship ever ends, the Family Law Act and possibly a court decide what happens to everything you have built."}
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0", textWrap: "pretty" }}>
              {"A binding financial agreement lets the two of you decide those questions now, on your own terms. Our Melbourne office helps couples put agreements in place properly, with enough time, clear advice and a document built to hold."}
            </p>
          </div>
          <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <a href="#book" data-press="true" data-pick-topic="bfa" data-cta-position="hero" style={{ background: "#B4552F", color: "#FFFFFF", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", textDecoration: "none" }}>
              {"Talk to us"}
            </a>
            {" "}
            <PhoneLink office="melbourne" location="body" position="hero" data-click-location="body" data-cta-position="hero" data-press="true" style={{ border: "1px solid #BFC8D2", color: "#1A2E40", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", background: "rgba(248,246,242,0.6)", textDecoration: "none" }}>
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
                {"Before or after the wedding"}
              </div>
            </div>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"De facto couples too"}
              </div>
            </div>
            <div style={{ background: "#FEFDFB", padding: "16px 18px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A2E40" }}>
                {"Bourke Street or by video"}
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
          <a href={url("melbourneHub")} style={{ color: "#4A5A66" }}>
            {"Melbourne"}
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
            {"Written with "}
            <a href={url("profile:anastasia-simes")} style={{ color: "#1A2E40", fontWeight: "600" }}>
              {"Anastasia Simes"}
            </a>
            {", Partner · Reviewed by "}
            <a href={url("profile:tash-nolan")} style={{ color: "#1A2E40", fontWeight: "600" }}>
              {"Tash Nolan"}
            </a>
            {", Principal · Updated November 2026"}
          </span>
        </nav>
        <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(26px, 3.2vw, 36px)", lineHeight: "1.2", color: "#1A2E40", margin: "0 0 40px", maxWidth: "30ch", textWrap: "pretty" }}>
          {"Agreeing now, calmly, on what happens to your property if things change."}
        </h2>
        <aside aria-labelledby="quick-answer" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "20px 56px", padding: "40px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <div>
            <div id="quick-answer" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "14px" }}>
              {"Quick answer"}
            </div>
          </div>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0", maxWidth: "62ch", textWrap: "pretty" }}>
            {"In Victoria, a prenup is a binding financial agreement made under the federal Family Law Act 1975. It records how property, money and superannuation will be divided if a marriage or de facto relationship ends. It is binding only if both partners receive independent legal advice from separate lawyers before signing and the other formal requirements of the Act are met. Signing well before a wedding, with full financial disclosure, makes an agreement far harder to challenge. A prenup does not cover parenting arrangements and it does not take the place of a will."}
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ReviewNote>{"BEN · Q-16 (Q-12 in the design log): the Law Institute of Victoria badge goes in only once membership is confirmed (you believe both the firm and Anastasia are members, 22 Nov). Official artwork needed."}</ReviewNote>
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
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0", maxWidth: "24ch", textWrap: "pretty" }}>
            {"Where are you starting from?"}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "24px" }}>
          <a href="#binding" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"We're getting married"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"You want an agreement in place well before the day."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#defacto" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"We live together, or are about to"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"De facto and registered relationships."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#wills" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"A second marriage, with children of our own"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Keeping what you meant for them safe."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#property" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"A family business, farm or trust"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"Protecting what the wider family relies on."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#asked" data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"My partner has asked me to sign one"}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"You need your own lawyer, and we can be it."}
            </span>
            {" "}
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href="#book" data-card="true" data-reveal="true" data-pick-topic="bfa" style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "22px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Not sure where to start"}
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
            <a href="#who" data-toc-link="who" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Who it is for"}
            </a>
            {" "}
            <a href="#what" data-toc-link="what" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"What it is"}
            </a>
            {" "}
            <a href="#binding" data-toc-link="binding" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"What makes it binding"}
            </a>
            {" "}
            <a href="#defacto" data-toc-link="defacto" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"De facto and registered relationships"}
            </a>
            {" "}
            <a href="#wills" data-toc-link="wills" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Your will and estate"}
            </a>
            {" "}
            <a href="#property" data-toc-link="property" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Property and duty"}
            </a>
            {" "}
            <a href="#limits" data-toc-link="limits" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"What it can't do"}
            </a>
            {" "}
            <a href="#asked" data-toc-link="asked" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"If you've been asked to sign one"}
            </a>
            {" "}
            <a href="#process" data-toc-link="process" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"How it works with us"}
            </a>
            {" "}
            <a href="#challenge" data-toc-link="challenge" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"If an agreement is challenged"}
            </a>
            {" "}
            <a href="#talking" data-toc-link="talking" style={{ padding: "7px 0 7px 14px", fontSize: "14.5px", lineHeight: "1.4", color: "#4A5A66" }}>
              {"Raising it with your partner"}
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
              <a href="#who" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Who it is for"}
              </a>
              {" "}
              <a href="#what" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"What it is"}
              </a>
              {" "}
              <a href="#binding" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"What makes it binding"}
              </a>
              {" "}
              <a href="#defacto" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"De facto and registered relationships"}
              </a>
              {" "}
              <a href="#wills" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Your will and estate"}
              </a>
              {" "}
              <a href="#property" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Property and duty"}
              </a>
              {" "}
              <a href="#limits" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"What it can't do"}
              </a>
              {" "}
              <a href="#asked" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"If you've been asked to sign one"}
              </a>
              {" "}
              <a href="#process" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"How it works with us"}
              </a>
              {" "}
              <a href="#challenge" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"If an agreement is challenged"}
              </a>
              {" "}
              <a href="#talking" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Raising it with your partner"}
              </a>
              {" "}
              <a href="#faq" style={{ padding: "9px 0", fontSize: "15px", color: "#4A5A66", borderTop: "1px solid #E8E4DC" }}>
                {"Questions"}
              </a>
            </nav>
          </details>

          {/* ── Who it is for ── */}
          <section id="who" data-screen-label="Who it is for" data-toc-section="true" style={{ padding: "72px 0" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Is a prenup worth having, and who is it for?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Most couples never need to rely on a financial agreement. Its value lies in the certainty it gives while the relationship is going well, and in the time and cost it saves if it is ever needed."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"The couples who come to our Melbourne office usually have something specific they want to look after. One partner may own a home bought before the relationship, or be the next generation in a family farm in regional Victoria. A couple marrying for the second time may want to make sure their adult children still inherit what was always meant for them. Someone may hold an interest in a family trust that the wider family would like kept separate. Others have moved to Melbourne from overseas with an agreement signed elsewhere and want to know whether it still works here."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 0px", textWrap: "pretty" }}>
              {"None of these situations means a relationship is expected to fail. They mean there is something one or both of you are responsible for beyond the two of you, and an agreement is a way of honouring that."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"A prenup is most useful where there is a home, business, farm, trust or inheritance to protect, or children from an earlier relationship. It is about clarity, not mistrust."}
              </p>
            </div>
          </section>

          {/* ── What it is ── */}
          <section id="what" data-screen-label="What it is" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What is a binding financial agreement?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"\"Prenup\" is the everyday word. The legal term in Australia is a financial agreement, often called a binding financial agreement or BFA. It is a private contract made under the Family Law Act 1975, which is federal law, so the same rules apply in Melbourne as anywhere else in Australia. What changes from state to state is the law that sits around the agreement, such as wills, estates and duty, and that is where much of this page focuses."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 28px", textWrap: "pretty" }}>
              {"An agreement can be made at four points in a relationship:"}
            </p>
            <div data-reveal="true" style={{ overflowX: "auto", marginBottom: "28px", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
              <table style={{ width: "100%", minWidth: "560px", borderCollapse: "collapse", fontSize: "16px", background: "#FEFDFB" }}>
                <caption style={{ captionSide: "top", textAlign: "left", padding: "18px 22px 0", fontSize: "14px", color: "#4A5A66" }}>
                  {"When a financial agreement can be made, and the section of the Family Law Act that applies"}
                </caption>
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: "left", padding: "16px 22px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3A6D8C", borderBottom: "1px solid #E8E4DC" }}>
                      {"When"}
                    </th>
                    <th scope="col" style={{ textAlign: "left", padding: "16px 22px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3A6D8C", borderBottom: "1px solid #E8E4DC" }}>
                      {"Married couples"}
                    </th>
                    <th scope="col" style={{ textAlign: "left", padding: "16px 22px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3A6D8C", borderBottom: "1px solid #E8E4DC" }}>
                      {"De facto couples"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style={{ textAlign: "left", padding: "15px 22px", fontWeight: "600", color: "#1A2E40", borderBottom: "1px solid #E8E4DC", verticalAlign: "top" }}>
                      {"Before the relationship formally begins"}
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
                      {"During the relationship"}
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
                      {"After separation"}
                    </th>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", verticalAlign: "top" }}>
                      {"Section 90D (after a divorce order)"}
                    </td>
                    <td style={{ padding: "15px 22px", color: "#2C3E50", verticalAlign: "top" }}>
                      {"Section 90UD"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 0px", textWrap: "pretty" }}>
              {"Each can deal with property, financial resources and superannuation, and can address maintenance of one partner by the other. A well-drafted agreement also records the reasons behind its terms, which helps if anyone later has to interpret it."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"A prenup is a federal financial agreement that can be signed before, during or after a marriage or de facto relationship. Victorian law matters for what surrounds it."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: the six sections and how the table frames them (90D after a divorce order; 90C also covers after separation but before divorce); superannuation splitting under an agreement."}</ReviewNote>
          </section>

          {/* ── What makes it binding ── */}
          <section id="binding" data-screen-label="What makes it binding" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What makes a prenup binding, and what gets one set aside?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"An agreement only binds you if the Family Law Act's formal steps are followed exactly. Under section 90G, both of you must sign it. Before signing, each of you must receive independent legal advice from your own lawyer about how the agreement affects your rights and its advantages and disadvantages to you at that time. Each lawyer gives their client a signed statement confirming that advice was given, and a copy of each statement goes to the other partner or their lawyer. After signing, each of you receives the original or a copy. The Act does not require the agreement to be witnessed, and it is not filed with a court."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Even an agreement that ticks every box can be set aside in the circumstances listed in section 90K. They include fraud, which covers failing to disclose something material about your finances; an agreement made under duress, undue influence or through unconscionable conduct; an agreement that has become impracticable to carry out; and a material change relating to the care of a child that would cause hardship if the agreement stood."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 0px", textWrap: "pretty" }}>
              {"The case that shapes how we time agreements is "}
              <span style={{ fontWeight: "600", color: "#1A2E40" }}>
                {"Thorne v Kennedy [2017] HCA 49"}
              </span>
              {". The High Court set aside agreements that one partner signed in the days around her wedding, after her own lawyer had advised her not to, because of the pressure she was under at the time. The lesson is simple: an agreement signed under the weight of a looming wedding date is vulnerable, however carefully it is drafted."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Separate lawyers, signed advice statements, full disclosure and time without pressure are what make an agreement hold. Thorne v Kennedy is why the week before a wedding is never enough."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 90G elements, including 90G(1)(ca); \"not witnessed\" and \"not filed with a court\" wording; the section 90K grounds as listed; the Thorne v Kennedy summary (timing, independent advice against signing, undue influence and unconscionable conduct)."}</ReviewNote>
          </section>

          {/* ── De facto and registered relationships ── */}
          <section id="defacto" data-screen-label="De facto and registered relationships" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Do de facto couples in Victoria need a prenup?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Many people searching for a prenup in Melbourne are not planning to marry. They are moving in together, buying a first home, or have been together for years without seeing the need for a wedding."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Victoria referred its powers over de facto property matters to the Commonwealth, so de facto couples who separated on or after 1 March 2009 are covered by the Family Law Act in much the same way as married couples. A de facto couple makes a financial agreement under Part VIIIAB of the Act, not under a state law, and the requirements for it to be binding are in section 90UJ, which mirrors section 90G."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 0px", textWrap: "pretty" }}>
              {"Victoria also allows couples to register their relationship under the Relationships Act 2008. Registration matters more than many people realise. Ordinarily, a de facto partner can apply for a property order only if the relationship lasted at least two years, or another condition applies, such as having a child together. A relationship registered under a state law like Victoria's can meet that threshold on its own. If you are registering, it is a natural moment to think about an agreement as well."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"De facto couples in Victoria use the same federal agreements as married couples. Registering your relationship can bring you within the Family Law Act sooner, so plan both together."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: the 1 March 2009 wording (matches the hub); Part VIIIAB and section 90UJ; section 90SB and whether Victorian registration satisfies it; whether to name Births, Deaths and Marriages Victoria."}</ReviewNote>
          </section>

          {/* ── Your will and estate ── */}
          <section id="wills" data-screen-label="Your will and estate" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"Does a prenup affect my will in Victoria?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"This is the part of the picture couples most often miss."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              <span style={{ fontWeight: "600", color: "#1A2E40" }}>
                {"Marriage can cancel your will."}
              </span>
              {" Under section 13 of the Wills Act 1997 (Vic), a will made before a marriage is generally revoked by that marriage, unless it was made in contemplation of it. If you have a will that leaves your home or business to your children from an earlier relationship and you then marry, that will may no longer stand. Divorce has its own effect: it generally revokes gifts to a former spouse and their appointment as executor, unless the will shows a different intention."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              <span style={{ fontWeight: "600", color: "#1A2E40" }}>
                {"An agreement deals with separation, not with death."}
              </span>
              {" A financial agreement sets out what happens if the relationship ends. The Family Law Act provides that an agreement continues to operate if one of you dies, but it does not stop a family provision claim under Part IV of the Administration and Probate Act 1958 (Vic), a separate system that lets certain people ask the Supreme Court for a share of an estate. What you have agreed may be relevant to such a claim, but it does not decide it."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 0px", textWrap: "pretty" }}>
              {"The practical answer is to treat the agreement and your wills as one piece of planning. Anastasia drafts wills as well as financial agreements, so the two can be looked at side by side, with each of you still taking your own independent advice on the agreement."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"In Victoria, getting married can revoke your existing will, and a prenup does not prevent an estate claim. Update your wills when you sign your agreement."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 13 and the \"in contemplation\" exception; the divorce effect (section 14); section 90H; how far an agreement can bear on a Part IV claim. CHECK · Ben: Anastasia is happy to be named for wills."}</ReviewNote>
          </section>

          {/* ── Mid-page prompt ── (shared with the hubs, D-31) */}
          <MidPrompt office="melbourne" img={images.anastasia} objectPosition="50% 12%" heading="Thinking about an agreement before a wedding or a move?" text="The earlier we talk, the more options you have." cta="Talk to us" topic="bfa" />

          {/* ── Property and duty ── */}
          <section id="property" data-screen-label="Property and duty" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How does a prenup deal with property, and is duty payable?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Most agreements centre on property: a home owned before the relationship, a property bought together, a family business, or land that has been in one family for generations. A good agreement says plainly who keeps what, how any increase in value is treated, and what happens if one of you contributes to a property the other owns. Where a family trust or company is involved, the agreement needs to deal with your interest in it carefully, and the wider family's advisers may need to be involved."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 0px", textWrap: "pretty" }}>
              {"If an agreement is ever carried out, property may need to change hands. In Victoria, a transfer made solely because a marriage or domestic relationship has broken down can be exempt from land transfer duty. The State Revenue Office explains that the exemption covers transfers to either partner, to dependent children, or to a trustee for any of them, where no-one else takes an interest. Whether it applies to your transfer depends on the facts, so treat this as general information and confirm it with the State Revenue Office at the time."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Your agreement should be clear about each property and business interest. If property later changes hands because the relationship has ended, Victorian duty may not apply, but check with the State Revenue Office."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: Duties Act 2000 (Vic) section 44, and that a transfer under a financial agreement (not only court orders) can qualify; the trust and company sentence."}</ReviewNote>
          </section>

          {/* ── What it can't do ── */}
          <section id="limits" data-screen-label="What it can't do" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What can't a prenup do?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"A financial agreement can't decide where your children live or how much time they spend with each of you. Parenting arrangements are always worked out separately, based on the children's best interests at the time."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 0px", textWrap: "pretty" }}>
              {"Child support is also dealt with separately from a financial agreement, through Services Australia and the child support legislation. And an agreement that tries to rule out spousal maintenance has a limit built into the Act: such a provision has no effect if, when it comes into play, the partner concerned could not support themselves without an income-tested government payment."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Prenups cover money and property between the two of you. Children's arrangements and child support sit outside them."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: section 90F wording; child support kept to \"dealt with separately\"."}</ReviewNote>
          </section>

          {/* ── If you've been asked to sign one ── */}
          <section id="asked" data-screen-label="If you've been asked to sign one" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"My partner has asked me to sign a prenup. What should I do?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Being handed an agreement can feel unsettling, especially if a wedding is close. You are not expected to sign anything you do not understand, and the law requires you to have your own lawyer, at a different firm from your partner's, before you sign."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 0px", textWrap: "pretty" }}>
              {"Your lawyer's job is to explain what the agreement means for you, whether it is fair to you, and what you might ask to change. Many agreements are improved by that conversation. If you feel rushed or pressured, say so: time is one of the things that protects you both. Our Melbourne team regularly acts for the partner who receives an agreement, as well as the one who proposes it."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Take your time, get your own lawyer, and ask questions. A fair agreement is one you both understand."}
              </p>
            </div>
            <ReviewNote>{"CHECK · Ben: confirm the last sentence (\"regularly acts for the partner who receives an agreement\") with Anastasia, or soften to \"can act for\"."}</ReviewNote>
          </section>

          {/* ── How it works with us ── */}
          <section id="process" data-screen-label="How it works with us" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How does the process work with our Melbourne office?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Every agreement is different, but the stages are much the same."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"It starts with a confidential first conversation, at Bourke Street or by video if you are elsewhere in Victoria. We talk through what you want to protect and why, and what your partner is likely to need to feel the agreement is fair to them. Your partner will need their own lawyer at a different firm. That is a legal requirement, and it is also what protects you both."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"Next comes disclosure. Each of you sets out your assets, debts, income and superannuation, along with anything you expect to receive. It does not need to be sworn, but leaving something out is one of the most common reasons an agreement is later challenged, so we encourage complete, documented disclosure."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"We then draft the agreement and your partner's lawyer reviews it. There is usually some negotiation, which is healthy: an agreement both of you understand and accept is much stronger than one presented as final. Once the terms are settled, each of you receives your independent advice, signs, and keeps a copy, and we hold the original safely."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"How long it takes depends on how complex your finances are and how quickly disclosure comes together, so we will not promise a timeframe. The agreement should be finished well before the wedding, not in its final weeks. If you have set a date, the best time to call is now."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 0px", textWrap: "pretty" }}>
              {"Our approach to costs is simple: clear costs from day one, explained in your first conversation. "}
              <a href="#book" data-pick-topic="fees" style={{ fontWeight: "600" }}>
                {"Talk to us about costs"}
              </a>
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"First conversation, disclosure, drafting, review by your partner's lawyer, advice and signing. Start months before a wedding, not weeks."}
              </p>
            </div>
          </section>

          {/* ── If an agreement is challenged ── */}
          <section id="challenge" data-screen-label="If an agreement is challenged" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"What happens if an agreement is ever challenged?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 0px", textWrap: "pretty" }}>
              {"Most agreements are never tested. If one is, the application is heard in the Federal Circuit and Family Court of Australia, which sits in Melbourne at the Owen Dixon Commonwealth Law Courts Building on William Street and also has a registry in Dandenong. A carefully made agreement, with full disclosure, proper advice and plenty of time, is the best protection against ever needing to go there."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Challenges are heard by the federal family court in Melbourne or Dandenong. Doing it properly the first time is what keeps you out of court."}
              </p>
            </div>
            <ReviewNote>{"LEGAL REVIEW · Tash: registry wording, matching the hub (305 William Street, Owen Dixon Commonwealth Law Courts Building; Dandenong)."}</ReviewNote>
          </section>

          {/* ── Raising it with your partner ── */}
          <section id="talking" data-screen-label="Raising it with your partner" data-toc-section="true" style={{ padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
            <h2 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0 0 24px", maxWidth: "26ch", textWrap: "pretty" }}>
              {"How do I raise a prenup with my partner?"}
            </h2>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"For many people this is the hardest part. It can feel as if suggesting an agreement means you are planning for the worst."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 18px", textWrap: "pretty" }}>
              {"It helps to start from the reason, not the document. \"Mum and Dad want the farm to stay in the family\" or \"I want my kids to know the house is theirs one day\" is easier to hear than \"I think we need a prenup\". It also helps to raise it early, long before anything is booked, so it is a conversation rather than a condition."}
            </p>
            <p data-reveal="true" style={{ fontSize: "18px", lineHeight: "1.7", color: "#2C3E50", maxWidth: "62ch", margin: "0 0 0px", textWrap: "pretty" }}>
              {"Many couples find the process brings them closer. Talking openly about money, debts and expectations is something most relationships benefit from, and each of you has your own lawyer to make sure your interests are looked after."}
            </p>
            <div data-reveal="true" style={{ marginTop: "32px", padding: "24px 26px", background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", maxWidth: "64ch" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A2E40", marginBottom: "10px" }}>
                {"In short"}
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#2C3E50", margin: "0", textWrap: "pretty" }}>
                {"Start with why it matters to you, raise it early, and let the process do the rest."}
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
            {"Your Melbourne lawyer"}
          </h2>
        </div>
        <div data-person="true" data-reveal="true" style={{ display: "grid", gridTemplateColumns: "148px minmax(0,1fr)", gap: "32px", alignItems: "start", maxWidth: "860px", padding: "34px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <img src={images.anastasia.src} width={images.anastasia.width} height={images.anastasia.height} alt="Anastasia Simes, Partner at Nolan Family Law and Mediation in Melbourne" loading="lazy" style={{ display: "block", width: "148px", height: "148px", borderRadius: "3px", objectFit: "cover", objectPosition: "50% 15%", background: "#DCE9F0" }} decoding="async" />
          <div style={{ minWidth: "0" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", lineHeight: "1.25", color: "#1A2E40", margin: "0 0 6px" }}>
              {"Anastasia Simes"}
            </h3>
            <div style={{ fontSize: "15px", fontWeight: "600", color: "#3A6D8C", marginBottom: "18px" }}>
              {"Partner · Melbourne"}
            </div>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 14px", maxWidth: "58ch" }}>
              {"Anastasia leads our Melbourne practice at "}
              {offices.melbourne.streetShort}
              {". She has practised family law for more than a decade, with experience in complex financial matters, and she also drafts wills, which makes her well placed to look at an agreement alongside your estate planning."}
            </p>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0" }}>
              <a href={url("profile:anastasia-simes")} style={{ fontWeight: "600" }}>
                {"Read Anastasia's profile"}
              </a>
            </p>
          </div>
        </div>
        <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "72px minmax(0,1fr)", gap: "22px", alignItems: "center", maxWidth: "860px", marginTop: "20px", padding: "24px 34px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px" }}>
          <img src={images.tashSmall.src} width={images.tashSmall.width} height={images.tashSmall.height} alt="Tash Nolan, Principal" loading="lazy" style={{ display: "block", width: "72px", height: "72px", borderRadius: "3px", objectFit: "cover", objectPosition: "50% 15%", background: "#DCE9F0" }} decoding="async" />
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#2C3E50", margin: "0" }}>
            <a href={url("profile:tash-nolan")} style={{ fontWeight: "600" }}>
              {"Tash Nolan"}
            </a>
            {", Principal, who reviewed this page. Doyle's Guide has recognised the firm every year since 2023."}
          </p>
        </div>
        <ReviewNote>{"CHECK · Ben: \"more than a decade\" follows the hub's rule until her years are confirmed (her live profile says 11)."}</ReviewNote>
      </div>
    </section>

    {/* ── Sydney toggle and related reading ── */}
    <section data-screen-label="Sydney toggle and related reading" data-section="true" style={{ background: "#F8F6F2", borderTop: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 24px" }}>
        <a href={url("sydneyPrenups")} data-card="true" data-reveal="true" data-location-toggle="true" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "18px 32px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px 34px", color: "#1A2E40", textDecoration: "none", marginBottom: "56px" }}>
          <span style={{ minWidth: "0" }}>
            <span style={{ display: "block", fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "8px" }}>
              {"In New South Wales instead?"}
            </span>
            {" "}
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "24px", lineHeight: "1.3", color: "#1A2E40" }}>
              {"Our Sydney team also prepares prenups and binding financial agreements."}
            </span>
          </span>
          {" "}
          <span data-arrow="true" aria-hidden="true" style={{ fontSize: "20px", color: "#3A6D8C" }}>
            {"→"}
          </span>
        </a>
        <div data-reveal="true" style={{ marginBottom: "32px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "0" }}>
            {"Related reading"}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "24px" }}>
          <a href={url("melbourneHub")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Family law in Melbourne"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          <a href={url("melbourneProperty")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Property settlement in Melbourne"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
          {" "}
          {isLive("articleDeFactoVictoria") && (<a href={url("articleDeFactoVictoria")} data-card="true" data-reveal="true" data-live-only="articleDeFactoVictoria" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"De facto property rights in Victoria"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>)}
          {" "}
          <a href={url("profile:anastasia-simes")} data-card="true" data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "30px", color: "#1A2E40", textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "21px", lineHeight: "1.3" }}>
              {"Anastasia's profile"}
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ marginTop: "auto", paddingTop: "8px", fontSize: "18px", color: "#3A6D8C" }}>
              {"→"}
            </span>
          </a>
        </div>
        <ReviewNote>{"BEN · The \"De facto property rights in Victoria\" card (D-28 article) is in the markup but hidden until the article is live. Its URL is the proposal in REDIRECT-MAP.csv."}</ReviewNote>
      </div>
    </section>

    {/* ── FAQ ── */}
    <section id="faq" data-screen-label="FAQ" data-section="true" data-toc-section="true" style={{ background: "#FEFDFB", borderTop: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "120px 24px" }}>
        <div data-reveal="true" style={{ marginBottom: "40px", maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A6D8C", marginBottom: "0" }}>
            {"Questions people ask us"}
          </div>
        </div>
        <div style={{ maxWidth: "860px", borderTop: "1px solid #E8E4DC" }}>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Is a prenup legally binding in Victoria?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p data-faq-answer="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes, if it meets the requirements of the Family Law Act. Both partners must sign, each must receive independent legal advice from their own lawyer before signing, and the lawyers' signed statements must be exchanged. Because the law is federal, the rules are the same in Victoria as in the rest of Australia."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Do de facto couples in Victoria need one?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p data-faq-answer="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Not every de facto couple needs an agreement, but the Family Law Act applies to Victorian de facto couples much as it does to married couples. If you have significant assets or are buying property together, an agreement gives you the same certainty a married couple can have."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Does registering our relationship change anything?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p data-faq-answer="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"It can. A relationship registered under the Relationships Act 2008 (Vic) can allow either partner to seek property orders without waiting for the relationship to reach two years. If you are planning to register, consider an agreement at the same time."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Does getting married cancel my will?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p data-faq-answer="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"In Victoria, marriage generally revokes a will made before it, unless the will was made in contemplation of that marriage. Anyone signing a prenup should review their will at the same time."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Can my partner still make a claim on my estate?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p data-faq-answer="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Possibly. A financial agreement deals with separation. A family provision claim under Victorian law is a separate process, and an agreement does not automatically prevent one. Plan your wills and your agreement together."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"How close to the wedding is too close?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p data-faq-answer="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"There is no fixed cut-off, but an agreement signed shortly before a wedding is more open to challenge, as the High Court's decision in Thorne v Kennedy showed. Aim to have it finished well before the date, ideally before major arrangements are locked in."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Can we use the same lawyer?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p data-faq-answer="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"No. Each of you must receive independent legal advice, which in practice means separate lawyers at separate firms."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Is an overseas prenup valid here?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p data-faq-answer="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Not automatically. An agreement made overseas may not meet the Family Law Act's requirements, so have it reviewed by an Australian family lawyer. Often the answer is a new Australian agreement."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Is duty payable if property changes hands under the agreement?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p data-faq-answer="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"In Victoria, a transfer made solely because a marriage or domestic relationship has ended can be exempt from land transfer duty. Whether it applies depends on the transfer, so check with the State Revenue Office at the time."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Can an agreement be changed later?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p data-faq-answer="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"Yes. You can make a new agreement that replaces the old one, or end it with a termination agreement, following the same formal steps. Many couples review their agreement after major events such as children or an inheritance."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"Does a prenup cover our children?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p data-faq-answer="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"No. Parenting arrangements and child support are dealt with separately from a financial agreement."}
            </p>
          </details>
          <details data-reveal="true" style={{ borderBottom: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0", fontSize: "18px", fontWeight: "600", color: "#1A2E40" }}>
              {"What happens if we never sign one?"}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#3A6D8C", transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}>
                {"+"}
              </span>
            </summary>
            <p data-faq-answer="true" style={{ fontSize: "17px", lineHeight: "1.7", color: "#2C3E50", margin: "0 0 24px", maxWidth: "62ch" }}>
              {"If the relationship ends, property is divided under the Family Law Act, by agreement between you or, if you can't agree, by the court, looking at contributions and future needs."}
            </p>
          </details>
        </div>
        <ReviewNote>{"LEGAL REVIEW · Tash: every answer, especially registration, estate claims, overseas agreements, termination (section 90J) and duty. SEO · All 12 questions are in FAQPage schema, worded exactly as on the page."}</ReviewNote>
      </div>
    </section>

    {/* ── Consultation CTA ── (the shared band: topic BFA, no stage question) */}
    <CtaBand office="melbourne" heading={"Talk it through with someone who has seen it before."} lede={`A first conversation is confidential and there is no obligation. Visit us at ${offices.melbourne.streetShort}, Melbourne, or meet by video from anywhere in Victoria.`} topic="bfa" submitLabel="Book a consultation" />
    </>
  );
}
