/**
 * Page sections for "home", converted from export/homepage.html
 * by tools/convert-prototype.mjs and then maintained by hand. The copy is the approved copy:
 * change wording only with Ben's sign-off. URLs come from the routes file and office details
 * from the office config, never from this file.
 */
import { url } from '@/config/routes';
import { offices } from '@/config/offices';
import { PhoneLink } from '@/components/PhoneLink';
import { ReviewProof } from '@/components/ReviewProof';

export function Content() {
  return (
    <>

    {/* ── Hero ── */}
    <section data-screen-label="Hero" data-hero="true" style={{ position: "relative", background: "#F8F6F2", overflow: "hidden", borderBottom: "1px solid #E8E4DC" }}>
      <div data-hero-grid="true" style={{ maxWidth: "1240px", margin: "0px auto", padding: "88px 24px", display: "flex", flexDirection: "column", gap: "56px", minWidth: "0px" }}>
        <div style={{ maxWidth: "720px" }}>
          <div data-reveal="true" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "26px" }}>
            {"Sydney & Melbourne · Family law and mediation"}
          </div>
          {/* D-33: the live H1, word for word, as the page's one H1. The prototype's headline below
              stays as the large display line but is not the H1. Revisit in January. */}
          <h1 data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(19px, 1.9vw, 23px)", lineHeight: "1.4", color: "#1A2E40", margin: "0px 0px 18px", maxWidth: "40ch", textWrap: "pretty" }}>
            {"Nolan Family Lawyers & Mediation is an award-winning family law firm in Sydney."}
          </h1>
          <p data-display-headline="true" data-reveal="true" style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(40px, 5.4vw, 72px)", lineHeight: "1.06", letterSpacing: "-0.015em", color: "#1A2E40", margin: "0px 0px 26px", textWrap: "pretty" }}>
            {"Navigating family change with complete clarity."}
          </p>
          <p data-reveal="true" style={{ fontSize: "19px", lineHeight: "1.65", color: "#3F5060", maxWidth: "52ch", margin: "0px 0px 38px", textWrap: "pretty" }}>
            {"Family law is personal. So is our approach. We provide experienced legal guidance and practical advice with clarity, compassion and care."}
          </p>
          <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <a href={url("contact")} data-press="true" style={{ background: "var(--cta)", color: "#FFFFFF", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px" }}>
              {"Book a consultation"}
            </a>
            {" "}
            <a href="#help" data-press="true" style={{ border: "1px solid #BFC8D2", color: "#1A2E40", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px", background: "rgba(248, 246, 242, 0.6)" }}>
              {"How can we help you?"}
            </a>
          </div>
        </div>
        <div data-hero-figure="true" data-zoom="true" style={{ width: "100%", minWidth: "0px", height: "clamp(320px, 40vw, 540px)", borderRadius: "3px" }}>
          <img id="hero-photo" data-placeholder="true" fetchPriority="high" src="/images/calm-natural-light-image-not-a-full-team-group-s-eb0a6510.webp" width={1200} height={675} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: "3px" }} decoding="async" />
        </div>
      </div>
    </section>

    {/* ── Accolades ── */}
    <section data-screen-label="Accolades" data-section="true" style={{ background: "#FEFDFB", borderBottom: "1px solid #E8E4DC" }}>
      <div style={{ maxWidth: "1240px", margin: "0px auto", padding: "72px 24px" }}>
        <div data-reveal="true" style={{ textAlign: "center", fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "40px" }}>
          {"Recognised and accredited"}
        </div>
        <div data-badge-grid="true" style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0px, 1fr))", alignItems: "center", gap: "32px 40px" }}>
          <div data-reveal="true" data-badge="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0px" }}>
            <img src="/images/doyle-s-guide-to-the-australian-legal-profession-58751f82.webp" width={716} height={156} alt="Doyle’s Guide to the Australian Legal Profession" loading="lazy" style={{ display: "block", height: "34px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" data-badge="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0px" }}>
            <img src="/images/member-of-the-law-society-of-new-south-wales-bfd9c30a.webp" width={300} height={128} alt="Member of the Law Society of New South Wales" loading="lazy" style={{ display: "block", height: "56px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" data-badge="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0px" }}>
            <img src="/images/law-council-of-australia-85fce8e6.webp" width={200} height={200} alt="Law Council of Australia" loading="lazy" style={{ display: "block", height: "72px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" data-badge="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0px" }}>
            <img src="/images/family-law-section-law-council-of-australia-325d03d2.webp" width={300} height={111} alt="Family Law Section, Law Council of Australia" loading="lazy" style={{ display: "block", height: "48px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" data-badge="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0px" }}>
            <img src="/images/australian-association-of-collaborative-professi-1aeae6fe.webp" width={216} height={70} alt="Australian Association of Collaborative Professionals" loading="lazy" style={{ display: "block", height: "44px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
          <div data-reveal="true" data-badge="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80px", minWidth: "0px" }}>
            <img src="/images/collaborative-professionals-nsw-act-inc-f740a8a4.webp" width={408} height={156} alt="Collaborative Professionals (NSW & ACT) Inc, Member 2026–2027" loading="lazy" style={{ display: "block", height: "56px", width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} decoding="async" />
          </div>
        </div>
      </div>
    </section>

    {/* ── Split hero gateway ── */}
    <section id="offices" data-screen-label="Split hero gateway" data-section="true" style={{ background: "#F8F6F2", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ maxWidth: "1240px", margin: "0px auto", padding: "96px 24px" }}>
        <div data-reveal="true" style={{ maxWidth: "620px", margin: "0px 0px 44px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
            {"Two offices, two local teams"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 42px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px", textWrap: "pretty" }}>
            {"Start where you are."}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          <a href={url("sydneyHub")} data-reveal="true" data-gate="true" data-press="true" style={{ display: "block", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden", background: "#FEFDFB", textDecoration: "none", color: "#1A2E40" }}>
            <div data-gate-img="true" data-zoom="true" style={{ height: "260px" }}>
              <img id="gate-sydney" src="/images/entrance-to-25-bligh-street-sydney-552a47f9.webp" width={768} height={512} alt={`Entrance to ${offices.sydney.streetShort}, Sydney`} loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: "0px" }} decoding="async" />
            </div>
            <div style={{ padding: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", color: "#1A2E40", margin: "0px 0px 12px" }}>
                {"Sydney"}
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.62", color: "#4A5A66", margin: "0px 0px 24px" }}>
                {"Experienced family lawyers providing personalised advice and representation across Sydney and greater New South Wales."}
              </p>
              <span style={{ fontSize: "16px", fontWeight: "600", color: "#1A2E40", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {"Meet our Sydney Team "}
                <span data-arrow="true" style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                  {"→"}
                </span>
              </span>
            </div>
          </a>
          {" "}
          <a href={url("melbourneHub")} data-reveal="true" data-gate="true" data-press="true" style={{ display: "block", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden", background: "#FEFDFB", textDecoration: "none", color: "#1A2E40" }}>
            <div data-gate-img="true" data-zoom="true" style={{ height: "260px" }}>
              <img id="gate-melbourne" src="/images/entrance-to-385-bourke-street-melbourne-d25a221d.webp" width={1600} height={1067} alt={`Entrance to ${offices.melbourne.streetShort}, Melbourne`} loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: "0px" }} decoding="async" />
            </div>
            <div style={{ padding: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "28px", color: "#1A2E40", margin: "0px 0px 12px" }}>
                {"Melbourne"}
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.62", color: "#4A5A66", margin: "0px 0px 24px" }}>
                {"Experienced family lawyers offering thoughtful, practical guidance to clients across Melbourne and Victoria."}
              </p>
              <span style={{ fontSize: "16px", fontWeight: "600", color: "#1A2E40", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {"Meet our Melbourne Team "}
                <span data-arrow="true" style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                  {"→"}
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>

    {/* ── Recognition ── */}
    <section data-screen-label="Recognition" data-section="true" style={{ background: "var(--deep)" }}>
      <div style={{ maxWidth: "1240px", margin: "0px auto", padding: "120px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "64px" }}>
        <div data-reveal="true">
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--soft)", marginBottom: "18px" }}>
            {"Recognition"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#FFFFFF", margin: "0px 0px 22px", textWrap: "pretty" }}>
            {"Recognised by our peers."}
          </h2>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#D9E1E8", margin: "0px 0px 18px", maxWidth: "54ch", textWrap: "pretty" }}>
            {"Our commitment to excellence in family law has been recognised by Doyle's Guide, which identifies leading law firms and practitioners through independent research and feedback from members of the legal profession."}
          </p>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#D9E1E8", margin: "0px 0px 40px", maxWidth: "54ch", textWrap: "pretty" }}>
            {"Both Nolan Family Law & Mediation and Tash Nolan have received recognition in Doyle's Guide, reflecting the firm's standing within the family law profession and its commitment to providing high-quality, personalised legal services."}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <img id="tash-portrait" src="/images/tash-nolan-principal-d4d3b561.webp" width={400} height={400} alt="Tash Nolan, Principal" loading="lazy" style={{ display: "block", width: "72px", height: "72px", flex: "0 0 auto", objectFit: "cover", borderRadius: "50%", boxShadow: "0 0 0 2px var(--soft)" }} decoding="async" />
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#FFFFFF" }}>
                  {"Tash Nolan"}
                </div>
                <div style={{ fontSize: "14px", color: "var(--soft)", margin: "2px 0px 6px" }}>
                  {"Principal | Nolan Family Law & Mediation"}
                </div>
                <div style={{ fontSize: "15px", lineHeight: "1.6", color: "#D9E1E8", maxWidth: "44ch" }}>
                  {"Individually recognised by Doyle's Guide for her work in family law."}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div aria-hidden="true" style={{ width: "72px", height: "72px", flex: "0 0 auto", borderRadius: "50%", background: "rgba(169, 201, 219, 0.16)", boxShadow: "0 0 0 2px var(--soft)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-serif)", fontSize: "30px", color: "#FFFFFF" }}>
                {"N"}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#FFFFFF", marginBottom: "6px" }}>
                  {"Nolan Family Law & Mediation"}
                </div>
                <div style={{ fontSize: "15px", lineHeight: "1.6", color: "#D9E1E8", maxWidth: "44ch" }}>
                  {"Recognised by Doyle's Guide as a family law practice."}
                </div>
              </div>
            </div>
          </div>
          <a href={url("about")} style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            {"View our recognition "}
            <span data-arrow="true" style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
              {"→"}
            </span>
          </a>
        </div>
        <div data-reveal="true" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "24px", padding: "22px 0px", borderTop: "1px solid rgba(169, 201, 219, 0.42)" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "28px", color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}>
              {"2026"}
            </span>
            {" "}
            <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C3D0DC", textAlign: "right" }}>
              {"Recommended, family and parenting law"}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "24px", padding: "22px 0px", borderTop: "1px solid rgba(169, 201, 219, 0.42)" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "28px", color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}>
              {"2025"}
            </span>
            {" "}
            <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C3D0DC", textAlign: "right" }}>
              {"Leading, parenting and children's matters"}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "24px", padding: "22px 0px", borderTop: "1px solid rgba(169, 201, 219, 0.42)" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "28px", color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}>
              {"2024"}
            </span>
            {" "}
            <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C3D0DC", textAlign: "right" }}>
              {"Leading, family law, Sydney"}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "24px", padding: "22px 0px", borderTop: "1px solid rgba(169, 201, 219, 0.42)", borderBottom: "1px solid rgba(169, 201, 219, 0.42)" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "28px", color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}>
              {"2023"}
            </span>
            {" "}
            <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C3D0DC", textAlign: "right" }}>
              {"Recommended, family law, Sydney"}
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* ── Review proof ── rating, count and reviews are loaded live; never written (D-37) */}
    <ReviewProof office="sydney" />

    {/* ── FAQ ── */}
    <section id="faq" data-screen-label="FAQ" data-section="true" style={{ background: "#F8F6F2" }}>
      <div style={{ maxWidth: "900px", margin: "0px auto", padding: "112px 24px" }}>
        <div data-reveal="true" style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
            {"Common questions"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 42px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px", textWrap: "pretty" }}>
            {"What people most want to know first."}
          </h2>
        </div>
        <div data-reveal="true">
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", minHeight: "28px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Does getting divorced sort out our property and children? "}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"No. A divorce only ends the marriage legally. Dividing property and agreeing parenting arrangements are separate processes, and you do not need to wait for the divorce to start on either. Time limits apply to property claims after a divorce, so early advice matters."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", minHeight: "28px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Do I have to wait 12 months after separating? "}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"Only to apply for the divorce itself. Parenting and financial arrangements can be worked out as soon as you separate, and settling them early often makes the year ahead calmer."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", minHeight: "28px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"What is a BFA, and is it the same as a prenup? "}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"A binding financial agreement (BFA) sets out how property and finances would be divided if a relationship ends. A “prenup” is simply a BFA made before marriage. BFAs can also be made during a relationship or after separation, and each person needs independent legal advice for it to be binding."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", minHeight: "28px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"What should I do first after separating? "}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"Make sure you and your children are safe, keep a record of key finances, and get advice before signing anything. In a first conversation we help you sort what is urgent from what can wait."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid #E8E4DC" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", minHeight: "28px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"Do we have to go to court? "}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"Most matters resolve without a final hearing. Mediation, negotiation and consent orders settle the large majority of separations we see. We prepare as though court is possible, which is often what makes an agreement possible instead."}
            </p>
          </details>
          <details style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "24px 0px", minHeight: "28px", fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40" }}>
              {"How long does a property settlement take? "}
              <span data-faq-plus="true" aria-hidden="true" style={{ flex: "0 0 auto", fontFamily: "var(--font-sans)", fontSize: "24px", color: "var(--accent)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"+"}
              </span>
            </summary>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 26px", maxWidth: "62ch" }}>
              {"A straightforward settlement formalised by consent orders commonly takes three to six months. Matters involving businesses, trusts or a disputed valuation take longer. We give you a realistic timeline at the first meeting rather than an optimistic one."}
            </p>
          </details>
        </div>
      </div>
    </section>

    {/* ── How we can help ── */}
    <section id="help" data-screen-label="How we can help" data-section="true" style={{ background: "#FEFDFB", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ maxWidth: "1240px", margin: "0px auto", padding: "120px 24px" }}>
        <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "48px" }}>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
              {"How we can help"}
            </div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 42px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px", textWrap: "pretty", maxWidth: "22ch" }}>
              {"Start with what you are facing."}
            </h2>
          </div>
          <a href={url("contact")} style={{ fontSize: "16px", fontWeight: "600" }}>
            {"Not sure where you fit? Talk to us →"}
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "20px" }}>
          <div data-reveal="true" data-card="true" style={{ background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", display: "flex", flexDirection: "column", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 220ms cubic-bezier(0.23, 1, 0.32, 1), border-color 220ms, opacity 520ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px 0px 14px" }}>
              {"Parenting & Children"}
            </h3>
            <p style={{ flex: "1 1 0%", fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px 0px 24px" }}>
              {"Practical, considered advice on parenting arrangements, parental responsibility and your children's wellbeing."}
            </p>
            <a href={url("sydneyChildCustody")} style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", gap: "8px" }}>
              {"Learn more "}
              <span data-arrow="true" style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"→"}
              </span>
            </a>
          </div>
          <div data-reveal="true" data-card="true" style={{ background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", display: "flex", flexDirection: "column", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 220ms cubic-bezier(0.23, 1, 0.32, 1), border-color 220ms, opacity 520ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px 0px 14px" }}>
              {"Property & Financial Settlements"}
            </h3>
            <p style={{ flex: "1 1 0%", fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px 0px 24px" }}>
              {"Strategic guidance on dividing property, protecting financial interests and achieving fair outcomes."}
            </p>
            <a href={url("sydneyProperty")} style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", gap: "8px" }}>
              {"Learn more "}
              <span data-arrow="true" style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"→"}
              </span>
            </a>
          </div>
          <div data-reveal="true" data-card="true" style={{ background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", display: "flex", flexDirection: "column", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 220ms cubic-bezier(0.23, 1, 0.32, 1), border-color 220ms, opacity 520ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px 0px 14px" }}>
              {"Separation & Divorce"}
            </h3>
            <p style={{ flex: "1 1 0%", fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px 0px 24px" }}>
              {"Clear, compassionate legal advice to help you navigate separation and divorce with confidence."}
            </p>
            <a href={url("sydneyHub")} style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", gap: "8px" }}>
              {"Learn more "}
              <span data-arrow="true" style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"→"}
              </span>
            </a>
          </div>
          <div data-reveal="true" data-card="true" style={{ background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", display: "flex", flexDirection: "column", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 220ms cubic-bezier(0.23, 1, 0.32, 1), border-color 220ms, opacity 520ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px 0px 14px" }}>
              {"Family Law Mediation"}
            </h3>
            <p style={{ flex: "1 1 0%", fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px 0px 24px" }}>
              {"A constructive approach to resolving family law disputes with the guidance of an accredited mediator."}
            </p>
            <a href={url("sydneyMediation")} style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", gap: "8px" }}>
              {"Learn more "}
              <span data-arrow="true" style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"→"}
              </span>
            </a>
          </div>
          <div data-reveal="true" data-card="true" style={{ background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", display: "flex", flexDirection: "column", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 220ms cubic-bezier(0.23, 1, 0.32, 1), border-color 220ms, opacity 520ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px 0px 14px" }}>
              {"Collaborative Family Law"}
            </h3>
            <p style={{ flex: "1 1 0%", fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px 0px 24px" }}>
              {"A respectful, solutions-focused approach to resolving family matters without going to court."}
            </p>
            <a href={url("sydneyCollaborative")} style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", gap: "8px" }}>
              {"Learn more "}
              <span data-arrow="true" style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"→"}
              </span>
            </a>
          </div>
          <div data-reveal="true" data-card="true" style={{ background: "#F8F6F2", border: "1px solid #E8E4DC", borderRadius: "3px", padding: "34px", display: "flex", flexDirection: "column", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 220ms cubic-bezier(0.23, 1, 0.32, 1), border-color 220ms, opacity 520ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px 0px 14px" }}>
              {"Binding Financial Agreements"}
            </h3>
            <p style={{ flex: "1 1 0%", fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px 0px 24px" }}>
              {"Tailored advice on financial agreements before, during or after a relationship, including following separation."}
            </p>
            <a href={url("sydneyPrenups")} style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", gap: "8px" }}>
              {"Learn more "}
              <span data-arrow="true" style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"→"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ── Who we act for ── */}
    <section data-screen-label="Who we act for" data-section="true" style={{ maxWidth: "1240px", margin: "0px auto", padding: "120px 24px" }}>
      <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 64px", margin: "0px 0px 48px" }}>
        <div style={{ flex: "1 1 420px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
            {"Who we act for"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 42px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px", textWrap: "pretty" }}>
            {"Every family is different."}
            <br />
            {"So is our approach."}
          </h2>
        </div>
        <p style={{ flex: "0 1 420px", fontSize: "16px", lineHeight: "1.7", color: "#4A5A66", margin: "0px", textWrap: "pretty" }}>
          {"We act for individuals, couples and families across Sydney and Melbourne, providing tailored advice and support through every stage of separation and family change."}
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "24px" }}>
        <div data-reveal="true" style={{ background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div data-clip="true" data-zoom="true" style={{ height: "320px" }}>
            <img id="people-parents" data-placeholder="true" src="/images/parent-and-child-in-natural-light-an-everyday-mo-0327a2e5.webp" width={640} height={800} alt="" loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} decoding="async" />
          </div>
          <div style={{ padding: "28px 32px 32px", display: "flex", flexDirection: "column", flex: "1 1 0%" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px 0px 10px" }}>
              {"Parents navigating change"}
            </h3>
            <p style={{ flex: "1 1 0%", fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px 0px 22px", maxWidth: "52ch" }}>
              {"Supporting parents through separation, parenting arrangements and the decisions that shape their children's future."}
            </p>
            <a href="#help" style={{ alignSelf: "flex-start", fontSize: "16px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px", paddingBottom: "4px", borderBottom: "1px solid var(--soft)" }}>
              {"How we can help "}
              <span data-arrow="true" style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"→"}
              </span>
            </a>
          </div>
        </div>
        <div data-reveal="true" style={{ background: "#FEFDFB", border: "1px solid #E8E4DC", borderRadius: "3px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div data-clip="true" data-zoom="true" style={{ height: "320px" }}>
            <img id="people-partners" data-placeholder="true" src="/images/calm-interior-with-city-view-0c2ed990.webp" width={640} height={800} alt="" loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} decoding="async" />
          </div>
          <div style={{ padding: "28px 32px 32px", display: "flex", flexDirection: "column", flex: "1 1 0%" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "500", fontSize: "24px", lineHeight: "1.25", color: "#1A2E40", margin: "0px 0px 10px" }}>
              {"Individuals and couples navigating separation"}
            </h3>
            <p style={{ flex: "1 1 0%", fontSize: "16px", lineHeight: "1.65", color: "#4A5A66", margin: "0px 0px 22px", maxWidth: "52ch" }}>
              {"Providing considered legal advice on separation, property settlements and financial arrangements, with a focus on protecting your future."}
            </p>
            <a href="#help" style={{ alignSelf: "flex-start", fontSize: "16px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px", paddingBottom: "4px", borderBottom: "1px solid var(--soft)" }}>
              {"How we can help "}
              <span data-arrow="true" style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {"→"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ── Fee transparency ── */}
    <section data-screen-label="Fee transparency" data-section="true" style={{ background: "#FEFDFB", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ maxWidth: "1240px", margin: "0px auto", padding: "104px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "56px", alignItems: "center" }}>
        <div data-reveal="true">
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "18px" }}>
            {"Our fees"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.16", color: "#1A2E40", margin: "0px 0px 22px", textWrap: "pretty" }}>
            {"Clear costs from day one."}
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#3A4A56", maxWidth: "52ch", margin: "0px 0px 30px", textWrap: "pretty" }}>
            {"We believe that understanding the likely costs of your legal matter is an important part of making informed decisions. From your initial consultation, we provide clear information about our fees, explain how legal costs are calculated and keep you informed as your matter progresses."}
          </p>
          <a href={url("contact")} style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            {"Talk to us about fees "}
            <span data-arrow="true" style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
              {"→"}
            </span>
          </a>
        </div>
        <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <div data-fee-row="true" style={{ background: "#F8F6F2", padding: "26px 28px", borderLeft: "2px solid var(--soft)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40", marginBottom: "6px" }}>
              {"Transparent fee structures"}
            </div>
            <div style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"We explain our hourly rates, billing arrangements and anticipated legal costs so you understand how fees are calculated."}
            </div>
          </div>
          <div data-fee-row="true" style={{ background: "#F8F6F2", padding: "26px 28px", borderLeft: "2px solid var(--soft)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40", marginBottom: "6px" }}>
              {"Costs discussed from the outset"}
            </div>
            <div style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"We provide an initial estimate of likely legal costs based on your circumstances, the complexity of your matter and the work anticipated."}
            </div>
          </div>
          <div data-fee-row="true" style={{ background: "#F8F6F2", padding: "26px 28px", borderLeft: "2px solid var(--soft)", transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 220ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "21px", color: "#1A2E40", marginBottom: "6px" }}>
              {"Clear communication throughout"}
            </div>
            <div style={{ fontSize: "16px", lineHeight: "1.6", color: "#4A5A66" }}>
              {"We keep you informed about costs as your matter progresses and advise you of material changes to estimates as they arise."}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── The Firm ── */}
    <section id="team" data-screen-label="The Firm" data-section="true" style={{ background: "#FEFDFB", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ maxWidth: "1240px", margin: "0px auto", padding: "120px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "64px", alignItems: "center", minWidth: "0px" }}>
        <div data-reveal="true">
          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "20px" }}>
            {"The Firm"}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.18", color: "#1A2E40", margin: "0px 0px 24px", textWrap: "pretty" }}>
            {"Behind every matter is a person."}
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 20px", maxWidth: "52ch", textWrap: "pretty" }}>
            {"We understand that family law is about much more than legal outcomes. It is about people, relationships and the decisions that shape their future."}
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 20px", maxWidth: "52ch", textWrap: "pretty" }}>
            {"At Nolan Family Law & Mediation, we combine experienced legal advice with a genuinely personal approach. We provide clear, practical advice, thoughtful guidance and strong representation, always with an understanding of what matters most to you."}
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#4A5A66", margin: "0px 0px 32px", maxWidth: "52ch", textWrap: "pretty" }}>
            {"Whether your matter is resolved through negotiation, mediation or litigation, you can be confident that we will approach it with care, preparation and a commitment to achieving the best possible outcome."}
          </p>
          <a href={url("team")} style={{ fontSize: "16px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            {"Meet our team "}
            <span data-arrow="true" style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
              {"→"}
            </span>
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", minWidth: "0px" }}>
          <figure data-reveal="true" style={{ margin: "0px" }}>
            <div data-placeholder="true" role="img" aria-label="Photo of the four partners (to come)" style={{ height: "320px", borderRadius: "3px", background: "#EEF4F7", border: "1.5px dashed var(--soft)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center" }}>
              <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "0.03em", lineHeight: "1.5", color: "#3A6D8C", maxWidth: "28ch" }}>
                {"Photo of the four partners (to come)"}
              </span>
            </div>
          </figure>
          <div data-reveal="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "20px" }}>
            <div data-zoom="true" style={{ height: "200px", borderRadius: "3px" }}>
              <img id="firm-sydney" src="/images/lobby-of-25-bligh-street-sydney-b488661d.webp" width={1436} height={1337} alt={`Lobby of ${offices.sydney.streetShort}, Sydney`} loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: "3px" }} decoding="async" />
            </div>
            <div data-zoom="true" style={{ height: "200px", borderRadius: "3px" }}>
              <img id="firm-melbourne" src="/images/entrance-to-385-bourke-street-melbourne-d25a221d.webp" width={1600} height={1067} alt={`Entrance to ${offices.melbourne.streetShort}, Melbourne`} loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: "3px" }} decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Consultation CTA ── */}
    <section id="book" data-screen-label="Consultation CTA" data-section="true" style={{ position: "relative", background: "#F8F6F2", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: "0px" }}>
        <img id="cta-sydney" data-placeholder="true" src="/images/a-city-at-dusk-or-a-family-walking-away-together-571f102c.webp" width={1200} height={520} alt="" loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: "0px" }} decoding="async" />
      </div>
      <div style={{ position: "absolute", inset: "0px", background: "linear-gradient(90deg, rgba(248, 246, 242, 0.97) 0%, rgba(248, 246, 242, 0.92) 52%, rgba(248, 246, 242, 0.58) 100%)" }} />
      <div data-reveal="true" style={{ position: "relative", maxWidth: "1240px", margin: "0px auto", padding: "112px 24px" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: "400", fontSize: "clamp(32px, 4.6vw, 48px)", lineHeight: "1.14", color: "#1A2E40", margin: "0px 0px 22px", maxWidth: "20ch", textWrap: "pretty" }}>
          {"Talk it through with someone who has seen it before."}
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#3A4A56", maxWidth: "52ch", margin: "0px 0px 36px", textWrap: "pretty" }}>
          {"You will leave your first consultation with answers specific to your situation, a clear view of timelines and costs, and a plan for what comes next."}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
          <a href={url("contact")} data-press="true" style={{ background: "var(--cta)", color: "#FFFFFF", fontSize: "16px", fontWeight: "600", letterSpacing: "0.02em", padding: "18px 34px", borderRadius: "2px" }}>
            {"Book a consultation"}
          </a>
          {" "}
          <PhoneLink office="sydney" location="body" position="contact" data-press="true" style={{ display: "inline-flex", alignItems: "center", border: "1px solid #BFC8D2", color: "#1A2E40", fontSize: "16px", fontWeight: "600", padding: "18px 28px", borderRadius: "2px" }}>
            {"Sydney "}
            {offices.sydney.phoneDisplay}
          </PhoneLink>
          {" "}
          <PhoneLink office="melbourne" location="body" position="contact" data-press="true" style={{ display: "inline-flex", alignItems: "center", border: "1px solid #BFC8D2", color: "#1A2E40", fontSize: "16px", fontWeight: "600", padding: "18px 28px", borderRadius: "2px" }}>
            {"Melbourne "}
            {offices.melbourne.phoneDisplay}
          </PhoneLink>
        </div>
      </div>
    </section>
    </>
  );
}
