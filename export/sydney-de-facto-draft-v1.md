# Sydney de facto relationships page: copy draft v1, laid out against the service page template

**27 Nov 2026 · First draft. A rewrite on current law, not a tidy-up of page 8287**

Template: DESIGN.md §8 inner-page template, forked from `sydney-divorce-lawyer.html` (27 Nov), which is itself the prenup and property fork. Header with the phone strip, Sydney first (D-30), Sydney nav (D-49), the same components, accreditations, Tash's and Jessica's real photos, and footer. Only the copy, anchors, routing cards, location toggle target and schema below are new. No new components: the location toggle is the hubs' existing "In Victoria instead?" card.

| Item | Value |
|---|---|
| URL | `/sydney/de-facto-relationship-lawyer/` (`sydneyDeFacto` in the routes file). 301 from `/de-facto-relationship-lawyer/` (WP 8287), one hop, already in `REDIRECT-MAP.csv`, option B |
| Canonical | `https://www.nolanlawyers.com.au/sydney/de-facto-relationship-lawyer/` (self-referential) |
| Title tag | `De Facto Relationship Lawyers Sydney \| Nolan Family Law` (55 characters, Ben 27 Nov) |
| Meta description | `Separated, never married, and unsure what you're entitled to? A two year time limit applies. Our Sydney de facto lawyers explain where you stand.` (PAS, 145 characters) |
| H1 | `De facto relationship lawyers in Sydney` |
| Alternate names (Service schema) | "De facto lawyers", "Defacto lawyers", "De facto separation lawyers" |
| Author / reviewer | Tash Nolan, Principal (author and `reviewedBy`), Jessica Swain, Partner, as the second lawyer card (Ben 27 Nov, as the divorce page). Chad and Tash review the whole page before launch |
| Homepage change | The "Separation & Divorce" card gains a third link, "De facto relationship lawyers in Sydney →", to this page, beside "Learn more" (hub) and the divorce link (D-58). Homepage title and H1 unchanged (D-33) |
| Location toggle | "In Victoria instead?" card to `articleDeFactoVictoria` (`/de-facto-property-rights-victoria/`, D-28), rendered only when that route is live (Ben 27 Nov) |

**Section map (`data-screen-label` → anchor id):** Navigation (phone strip, Sydney first) · Hero · Breadcrumb and byline · Quick answer · Accreditations · How can we help you (`#help`) · Guide wrapper with sticky "On this page" · Are we de facto (`#status`) · Which law applies (`#whichlaw`) · Can I make a claim (`#claim`) · Proving it and the dates (`#evidence`) · Mid-page prompt · Property (`#property`) · The deadline (`#deadline`) · Maintenance (`#maintenance`) · Children (`#children`) · Agreements (`#agreements`) · Wills (`#wills`) · How we help (`#how`) · Your lawyers · Location toggle · Related reading · Rooms image · FAQ (`#faq`) · Consultation CTA (`#book`) · Trust ribbon · Footer.

Yellow review notes (`showReviewNotes`) carry every LEGAL REVIEW and CHECK below, as on the divorce page. Chad and Tash review all of them before launch.

**Current law, important.** Property and maintenance for de facto couples changed on 10 June 2025 (Family Law Amendment Act 2024): the economic effect of family violence, children's housing needs, companion animals and the statutory duty of disclosure all apply to de facto couples under Part VIIIAB, as they do to married couples. Page 8287 predates this and none of the competitors checked on 27 Nov mention it. The 10 June 2025 divorce changes (D-59) don't affect this page.

---

## [Hero]

**Eyebrow:** Sydney · De facto relationships

**H1:** De facto relationship lawyers in Sydney

**Sub-heading:** Clear answers on where you stand when a relationship ends without a marriage.

**Lede (PAS):**
You lived together, built a home and perhaps a family, but you never married. Now the relationship is over and you are not sure what the law sees: whether you count as a couple at all, what you might be entitled to, or what your former partner could claim from you.

The uncertainty is understandable, and it can be costly. Whether you were in a de facto relationship is a question of evidence, not paperwork, and a property or maintenance claim generally has to be made within two years of separating. People who wait for things to settle down sometimes find that the time has gone.

We help you work out where you stand and settle things properly, by agreement wherever possible. Our Sydney team works from Bligh Street, led by Principal Tash Nolan, who is recognised in Doyle's Guide 2026 among the Leading Family & Divorce Lawyers in Sydney.

**Buttons:** [Talk to us] (primary, to `#book` with topic De facto) · [Call (02) 8014 5885] (PhoneLink, `click_location=body`)

**Image:** the entrance to 25 Bligh Street (`public/images/entrance-to-25-bligh-street-sydney-552a47f9.webp`, used today only in the homepage's Sydney card, never as a hero). Alt: "The entrance to 25 Bligh Street, Sydney, where our Sydney office is". Not the lobby (divorce) or the glass-walled rooms (property).

> CHECK (Ben): the source file is 768 × 512, so it may look soft at hero size on large screens. Send a larger original if one exists; the build swaps it in place.

**Fact strip (three cells):** Same court, same principles · Two years from separation to apply · Bligh Street or by video

> LEGAL REVIEW (Tash): "two years from separation" in the strip (section 44(5), which runs from the end of the relationship).

## [Breadcrumb and byline]

Home / Sydney / De facto relationships
Written and reviewed by Tash Nolan, Principal · Updated November 2026

## [Quick answer]

**Quick answer:** In NSW, a de facto relationship is a couple who are not married to each other and not related by family, living together on a genuine domestic basis. There is no minimum period to be de facto, but to apply for property or maintenance orders you generally need a relationship of at least two years in total, a child together, substantial contributions that would otherwise go unrecognised, or a relationship registered in NSW. For couples who separated on or after 1 March 2009, these claims are decided under the federal Family Law Act 1975 by the Federal Circuit and Family Court of Australia, on the same principles as for married couples. An application must generally be made within two years of separating. Nolan Family Law & Mediation advises from 25 Bligh Street, Sydney.

> LEGAL REVIEW (Tash): every sentence, especially section 4AA(1) as paraphrased, section 90SB as summarised ("substantial contributions that would otherwise go unrecognised" for 90SB(c)), the 1 March 2009 start, and section 44(5).

## [Accreditations]

As the divorce page: Doyle's Guide, Law Society of NSW, Law Council of Australia, Family Law Section, Collaborative Professionals (NSW & ACT), Australian Association of Collaborative Professionals.

## [How can we help you] `#help`

**H2:** Where are you up to?

**Intro:** Choose whichever sounds most like you. Each one takes you to the part of this page that matters most right now.

Six routing cards, same component as the divorce page:

1. **I'm not sure we count as de facto** · What the court looks at, and what it doesn't. → `#status`
2. **We were together less than two years** · The exceptions to the two year rule. → `#claim`
3. **We've separated and need to sort out property** · How it works, and what changed in 2025. → `#property`
4. **My former partner says we were never a couple** · Proving the relationship and the dates. → `#evidence`
5. **I'm leaving a relationship that doesn't feel safe** · In an emergency, call 000. Then talk to us in confidence. → `#book` (topic De facto)
6. **I'd rather talk it through** · Tell us a little and we will call you. → `#book` (topic De facto)

> CHECK (Ben): card 5 follows the child custody page's safety card ("In an emergency, call 000"). If Chad would like 1800RESPECT (1800 737 732) named as well, it fits the same line.

---

## [Guide, with sticky "On this page"]

### Are we in a de facto relationship? `#status`

De facto, sometimes written defacto, is the law's word for a couple who live together without marrying. Many matters begin with the question of whether you were one, and it often surprises people that the law has no simple test. Under section 4AA of the Family Law Act, you are in a de facto relationship if you are not married to each other, are not related by family, and, having regard to all the circumstances, have a relationship as a couple living together on a genuine domestic basis.

To decide that, the court looks at the whole of the relationship. The Act lists the circumstances it may weigh: how long you were together; whether and how you lived together; whether there was a sexual relationship; how financially dependent or interdependent you were, and how you supported each other; how you owned, used and bought property; how committed you were to a shared life; whether the relationship was registered; whether you cared for children together; and how you presented yourselves to family, friends and the wider world. No single factor decides it, and none is essential. A couple who kept separate bank accounts can still be de facto, and so can a couple who spent some weeks apart for work.

Two points catch people out. You do not need to have been together for two years to be in a de facto relationship; two years matters for whether you can apply to the court, which is a separate question (see below). And you can be in a de facto relationship with one person while still legally married to someone else, or while in another de facto relationship. The law applies equally to same sex and opposite sex couples.

The Family Law Act test is also not the only one. Centrelink, the immigration system and the NSW laws on wills and estates each use their own rules, so being treated as a couple by one does not settle the question for another. Where the existence of the relationship is in dispute, the court can make a declaration that it did or did not exist, and for how long.

> LEGAL REVIEW (Tash): section 4AA(1), (2) and (3) as paraphrased (the nine circumstances, "no particular finding ... is necessary"); section 4AA(5) on same sex couples and on a concurrent marriage or other de facto relationship; the separate tests (Social Security Act 1991 section 4(3), Migration Regulations 1994 regulation 1.09A, the NSW Interpretation Act 1987 section 21C and the Property (Relationships) Act 1984); declarations under section 90RD. "A couple who spent some weeks apart for work" should not overstate the cases.

> **In short:** De facto status depends on the whole relationship, not one fact. There is no minimum period to be de facto, and the Family Law Act test differs from Centrelink's and immigration's.

### Which law applies to us in New South Wales? `#whichlaw`

For almost every couple who separates today, the answer is the federal Family Law Act 1975. New South Wales referred its powers over the financial side of de facto relationships to the Commonwealth, and from 1 March 2009 de facto property and maintenance claims have been heard in the same federal court, and decided on the same principles, as claims between married couples. Parenting matters were already federal before then.

If you separated before 1 March 2009, your claim falls under the NSW Property (Relationships) Act 1984 instead, unless you both chose in writing to come under the federal Act. That Act also still covers some relationships the federal law does not, such as close personal relationships between two adults who live together where one cares for the other.

The federal Act also asks for a connection with a participating state or territory, which NSW is. In practice that is met if either of you lives here when the application is made and either you both lived in a participating jurisdiction for at least a third of the relationship, the applicant made substantial contributions in one, or you were living in one when the relationship broke down. If one of you has moved interstate or overseas, it is worth checking this early.

> LEGAL REVIEW (Tash): the referral (Commonwealth Powers (De Facto Relationships) Act 2003 (NSW)) and the 1 March 2009 commencement; the Property (Relationships) Act 1984 (NSW) for earlier separations and the opt-in under section 86A of the Family Law Act; close personal relationships under the NSW Act; section 90SK(1) and (1A) as paraphrased (and section 90SD for maintenance).

> **In short:** If you separated on or after 1 March 2009, federal law applies, with a connection to NSW or another participating state. Earlier separations fall under NSW law.

### Can I make a claim if we were together less than two years? `#claim`

Often, yes. Before the court can make property or maintenance orders, section 90SB of the Act requires at least one of four things:

The relationship lasted at least two years in total. Separate periods together can be added up, so a break and a reconciliation does not necessarily restart the count.

There is a child of the relationship.

You made substantial contributions, financial or otherwise, including as a homemaker or parent, and failing to make an order would result in serious injustice.

The relationship was registered under a law of a state or territory, such as the NSW Relationships Register Act 2010. In NSW, registration is made through NSW Registry of Births, Deaths and Marriages.

If none of these applies, the court cannot divide property under the Family Law Act, however unfair the result may feel, although other legal routes may sometimes be available, such as a claim to jointly owned property under general law. If one of them does apply, it opens the door; it does not say what the outcome will be. That is decided separately (see the next section on property).

> LEGAL REVIEW (Tash): section 90SB(a) to (d), including the "period, or the total of the periods" wording and the "serious injustice" test in (c); NSW registration through Births, Deaths and Marriages; the general law sentence (trusts, partition of jointly owned land); whether to add that the gateways also apply to maintenance and to sections 90SL and 90SM. Format: the four gateways are four short paragraphs rather than bullets (house style); the build can set each with a small numeral.

> **In short:** You need two years together in total, a child, substantial contributions with serious injustice, or a registered relationship. Meeting one opens the door, not the outcome.

### How do we prove the relationship, and when it ended? `#evidence`

When couples disagree about whether they were de facto, or for how long, it is the dates that usually matter most. The start date decides whether you reach two years in total. The end date starts the two year time limit for applying to the court. A difference of a few months either way can decide whether a claim can be made at all.

The evidence people gather is usually ordinary: leases and mortgage documents in both names, joint bank accounts and shared bills, insurance and superannuation nominations, Centrelink or tax records that list a partner, travel and photographs, messages and cards, and the accounts of family and friends who saw you as a couple. No single document proves a de facto relationship, and none is required. What persuades the court is a consistent picture over time.

Separation is proven the same way. It happens when one of you decides the relationship is over and makes that clear, by words or actions, and it can happen while you still live under one roof. If you are separating now, note the date, keep a copy of any message that marks it, and record changes such as moving to a separate room or separating your finances.

> LEGAL REVIEW (Tash): the examples of evidence; superannuation and Centrelink records as evidence; separation under one roof for de facto couples (the end of the relationship under section 4AA and the case law); "no single document ... none is required".

> **In short:** The dates decide eligibility and the deadline, so gather consistent, everyday evidence of when the relationship began and ended.

## [Mid-page prompt] (D-31, one per page, `data-cta-position="mid"`)

Tash's photo · **Not sure how this applies to you?** A first conversation can show you whether you have a claim, and how long you have to make it. [Talk to us] · (02) 8014 5885

### How is property divided when a de facto relationship ends? `#property`

In the same way as for married couples. The court identifies everything you own and owe, together and separately, including superannuation, which can be split for de facto couples too. It then looks at what each of you contributed, financially and otherwise, during the relationship and since; at your current and future circumstances, such as age, health, earning capacity and the care of children; and at whether the overall result is just and equitable. There is no automatic equal split, and who holds legal title to an asset does not decide who keeps it.

The law changed on 10 June 2025, for de facto couples as much as married ones. The court must now consider the economic effect of family violence, including financial abuse, on each person's contributions and circumstances. It can take into account the need to provide a home for children under 18. Family pets are now treated as companion animals, with their own list of considerations. And the duty to give full and frank financial disclosure is written into the Act itself.

Our page on [property settlement in Sydney](/sydney/property-settlement/) explains the process in detail, including valuations, superannuation splitting and consent orders.

> LEGAL REVIEW (Tash): section 90SM as amended by the Family Law Amendment Act 2024 (the four considerations in place of the old steps); section 90SM(4) contributions including the express reference to family violence; section 90SF(3) as now framed, including housing needs of children; the companion animal provisions as they apply to de facto parties; the statutory duty of disclosure (section 71B and the de facto equivalent); superannuation splitting for de facto couples in participating jurisdictions (Part VIIIB).

> **In short:** De facto property is divided on the same principles as for married couples, including the June 2025 changes on family violence, children's housing and pets.

### How long do we have to apply? `#deadline`

Generally two years from the end of the relationship, for both property and maintenance. After that you need the court's permission to apply, which is given only in limited circumstances, so it is far safer to settle well before the deadline or to file in time. Our Sydney hub explains [how the time limits work after separation](/sydney/family-law/#timelimits), including the different rule for married couples.

> LEGAL REVIEW (Tash): section 44(5) and leave under section 44(6) (hardship to the applicant or a child, or, for maintenance, inability to support oneself); "only in limited circumstances". The anchor `#timelimits` matches the Sydney hub's section id.

> **In short:** You generally have two years from separation to apply, and late applications need the court's permission.

### Can a former de facto partner be asked to support the other? `#maintenance`

Yes, in some cases. If one of you cannot adequately support yourself, for example because you are caring for a young child, because of your age or health, or because you left paid work during the relationship, the court can order the other to contribute to your support, provided they can reasonably afford it. The same gateway requirements and the same two year time limit apply.

Maintenance is separate from child support, which is usually assessed by Services Australia. Our articles on [understanding spousal maintenance](/understanding-spousal-maintenance/) and [whether you have to pay it](/do-i-have-to-pay-spousal-maintenance/) explain more.

> LEGAL REVIEW (Tash): section 90SE and the matters in section 90SF(3); section 90SB applying to maintenance; the two year limit in section 44(5)(b); child support through Services Australia under the Child Support (Assessment) Act 1989.

> **In short:** A former partner who can afford it may have to help support one who cannot. The same two year limit applies.

### What about our children? `#children`

Nothing about parenting depends on whether you were married. The same law applies to every child, with the child's best interests as the paramount consideration, and the two year rule does not apply: parenting arrangements can be agreed or decided at any time while a child is under 18. Most separated parents agree arrangements in a parenting plan or consent orders, often with the help of mediation. Our page on [child custody in Sydney](/sydney/child-custody-lawyer/) explains how parenting arrangements are made and made formal.

> LEGAL REVIEW (Tash): Part VII applying regardless of the parents' relationship; section 60CA; no time limit for parenting matters.

> **In short:** Parenting arrangements work the same way whether or not you were married, and have no two year deadline.

### Can we agree without going to court? `#agreements`

Yes, and most couples do. An agreement about property becomes binding in one of two ways. You can apply to the court for consent orders, which a registrar approves if the arrangement is just and equitable. Or you can sign a financial agreement under Part VIIIAB of the Act, which requires each of you to receive independent legal advice before signing. Agreements reached informally, or by an exchange of emails, are not binding and can leave both of you exposed.

Couples who are moving in together, or already living together, can also make a financial agreement before or during the relationship. Our page on [prenups and binding financial agreements in Sydney](/sydney/prenuptial-agreements/#defacto) explains how that works for de facto couples, and how it fits with registering your relationship.

> LEGAL REVIEW (Tash): consent orders under section 90SM; financial agreements under sections 90UB to 90UD, and section 90UJ (independent advice and the statements of advice); "not binding" for informal agreements. Link anchor `#defacto` matches the Sydney prenup page's section id.

> **In short:** Make an agreement binding by consent orders or a financial agreement. Informal agreements leave you exposed.

### Does separating change my will? `#wills`

Not automatically. In New South Wales, the end of a de facto relationship does not revoke a will or cancel a gift to a former partner, so a will made during the relationship can still leave everything to them. When you separate, review your will, your superannuation death benefit nominations and any powers of attorney.

> LEGAL REVIEW (Tash): Succession Act 2006 (NSW): section 12 (marriage) and section 13 (divorce and annulment only), and no equivalent for the end of a de facto relationship; superannuation nominations and enduring powers of attorney as practical reminders.

> **In short:** In NSW, separating from a de facto partner does not change your will. Update it yourself.

### How do we help de facto couples? `#how`

Most of our de facto work begins with the questions on this page: whether a relationship counts, whether a claim can be made, and how long is left to make it. We look at the facts and the documents with you, give you a clear view of where you stand, and then help you settle property, superannuation and any maintenance, by negotiation or mediation wherever possible.

Where agreement is reached, we make it binding with consent orders or a financial agreement. Where the existence or length of the relationship is disputed, or a deadline is close, we prepare the evidence and, if it comes to it, the court application. We also act for people whose former partner has made a claim against them.

If you are leaving a relationship that doesn't feel safe, you can talk to us in confidence, and we will move at a pace that suits you. You will know from the start what we recommend, what it involves, and how our fees work.

> LEGAL REVIEW (Tash): the list of services; "we also act for people whose former partner has made a claim". CHECK (Ben, Chad): the safety sentence and its tone; that the firm acts for respondents in de facto disputes. No fees or figures (D-02).

> **In short:** We help you find out where you stand, then settle things by agreement first, and go to court only when that is what it takes.

---

## [Your lawyers] (divorce page component)

**Kicker:** Who you would be working with
**H2:** Your de facto relationship lawyers in Sydney

**Tash Nolan, Principal.** As the divorce page, word for word (D-45, her live profile, Doyle's Guide 2026). [Read Tash's profile] · [See everyone at the firm]

**Jessica Swain, Partner** (second card). As the divorce page, word for word (her live profile, page 12740, and D-13). [Read Jessica's profile]

> CHECK (Ben, Chad): both cards reuse the divorce page's wording unchanged, which the twin test excludes as a shared template block. Jessica's card wording is still open on the divorce page; settle it once for both. Never "specialist" (D-05).

## [Location toggle]

The hubs' "In Victoria instead?" card: **In Victoria instead?** De facto property claims work the same way under federal law, but some Victorian rules differ. [Read about de facto property rights in Victoria →] (`articleDeFactoVictoria`, `/de-facto-property-rights-victoria/`)

> CHECK (Ben): rendered only when `articleDeFactoVictoria` is live (D-28; draft 15996 is still being reworked and the slug is "proposed, confirm" in `REDIRECT-MAP.csv`). About 730 impressions a year on this page are Melbourne suburb searches at positions 25 to 75; this sends them to their own page rather than chasing them here.

## [Related reading]

Card row, same component as the divorce page.

- [The Family Court and de facto relationships](/the-family-court-and-de-facto-relationships/) (existing article, URL unchanged)
- [Understanding spousal maintenance](/understanding-spousal-maintenance/) (existing article, URL unchanged)
- [Separation and family law in Sydney](/sydney/family-law/)
- [Property settlement in Sydney](/sydney/property-settlement/)
- [Child custody in Sydney](/sydney/child-custody-lawyer/)
- [Family law mediation in Sydney](/sydney/mediation/)

> CHECK (Ben): `/the-family-court-and-de-facto-relationships/` gets one link back to this page with the anchor "de facto relationship lawyers in Sydney" (D-12 pattern), added by Claude Code during import. It ranks for informational searches ("definition of de facto incapacity", "opposite of de facto"); this page takes the commercial ones.

## [Rooms image]

As the divorce and prenup pages: the Bligh Street meeting rooms. Alt: "Meeting rooms at 25 Bligh Street, Sydney, where clients meet with us about separation and de facto relationships".

## [FAQ] `#faq` (all 12 in FAQPage schema, wording exact)

**How long do you have to live together to be de facto in NSW?**
There is no minimum period. Whether you were de facto depends on the whole relationship. Two years matters for a different question: it is one of the ways to qualify to apply to the court for property or maintenance orders.

**We were together for less than two years. Can I still make a claim?**
Possibly. You can still apply if you have a child together, if you made substantial contributions and it would be a serious injustice not to make orders, or if your relationship was registered in NSW. Periods together can also be added up.

**Is my former partner entitled to half of everything?**
No. There is no automatic equal split for de facto or married couples. The court looks at what each of you contributed and at your future needs, and the result must be just and equitable, which may or may not be close to half.

**Can we be de facto if we didn't always live together?**
Sometimes. Living together is one of several circumstances the court weighs, and short periods apart, for work or family reasons, do not necessarily end a relationship. Couples who never shared a home at all will usually find it much harder to show a de facto relationship.

**Can I be in a de facto relationship while still married to someone else?**
Yes. The Family Law Act allows a de facto relationship to exist even if one of you is still legally married to another person, or in another de facto relationship at the same time.

**My former partner says we were never a couple. What happens now?**
The court decides on the evidence, and it can declare whether a de facto relationship existed and for how long. Gather documents that show a shared life over time, and keep a note of the dates it began and ended.

**Does registering our relationship in NSW make a difference?**
Yes. A relationship registered under the NSW Relationships Register Act 2010 meets the requirement to apply for property orders, however long it lasted. Registration is made through NSW Registry of Births, Deaths and Marriages.

**Is the Centrelink definition of de facto the same?**
No. Centrelink, immigration and the Family Law Act each apply their own test. Being treated as a couple by Centrelink can be useful evidence, but it does not decide the question under family law.

**Do I have to support my former de facto partner?**
Only if they cannot adequately support themselves and you can reasonably afford to contribute. The court must make the order, and the application must generally be made within two years of separating.

**Who keeps the dog when a de facto couple separates?**
Since 10 June 2025, the court treats family pets as companion animals, with their own considerations, such as each person's and the children's attachment to the animal and any history of cruelty. It cannot order shared ownership.

**Does separating from my de facto partner cancel my will in NSW?**
No. In NSW only marriage, divorce and annulment change a will automatically. A gift to a former de facto partner stays in place until you change it, so review your will and superannuation nominations when you separate.

**What does a de facto lawyer cost?**
It depends on what you need, from advice on whether you have a claim to a full property settlement, so we do not publish a price list. We explain how our fees work at the first meeting and confirm them in writing before we start. Talk to us about costs.

> LEGAL REVIEW (Tash): every answer, especially "periods together can be added up" (90SB(a)), living apart (4AA and case law), concurrent relationships (4AA(5)(b)), declarations (90RD), NSW registration (90SB(d)), Centrelink as evidence, maintenance (90SE, 44(5)), companion animals (the factors and the bar on joint ownership or shared possession, per the Attorney-General's fact sheet), and the will answer (Succession Act sections 12 and 13). No dollar figures (D-02). None of the 12 repeats the hub's de facto FAQ ("Do de facto couples have the same property rights as married couples in NSW?") or its time limit FAQ.

## [Consultation CTA] `#book`

**H2:** Know where you stand, and how long you have.
**Lede:** Whether you have just separated, are not sure you count as a couple, or have received a claim from a former partner, a first conversation will show you where you stand. It is confidential, with no obligation.

When you get in touch, we will:
✓ Run a conflict check before anything else
✓ Look at whether you were de facto, and whether a claim can be made
✓ Check the dates, and the two year deadline
✓ Tell you how our fees work, and put an estimate in writing

(02) 8014 5885 · Suite 3, Level 22, 25 Bligh Street, Sydney NSW 2000 · In person, by phone or by video

Same form as the divorce page. Topic pre-selected to De facto. Delivers to the Sydney team.

## [Trust ribbon] and [Footer]

As the divorce page, including the general-information disclaimer.

---

## Schema (JSON-LD)

`WebPage` (author and `reviewedBy` Tash, same `@id` as the property, mediation, prenup and divorce pages; `dateModified`) · `BreadcrumbList` (Home > Sydney > De facto relationships) · `Service` "De facto relationships" (alternateName "De facto lawyers", "Defacto lawyers", "De facto separation lawyers"; `serviceType` "Family law"; `areaServed` New South Wales) with `provider` the Sydney `LegalService` by `@id` (`/sydney/family-law/#office`) · `Person` Tash by `@id` (`/our-team/tash-nolan/#person`, `knowsAbout` led by "De facto relationships") · `Person` Jessica by `@id` (`/our-team/jessica-swain/#person`) · `FAQPage` with the 12 questions worded exactly. No `priceRange`, no `alumniOf` (D-53). Office details and URLs come from the office config and routes file.

## Images

Hero: the 25 Bligh Street entrance (see Hero; CHECK on resolution). Mid-page prompt and lawyer card: Tash's portrait. Second lawyer card: Jessica's portrait (`jessica-swain-partner-160`). Rooms image: Bligh Street, as the divorce and prenup pages, with the alt text above. No new images and no placeholders, so this page adds nothing to the production-build block.

## For the build notes

- Dropped from page 8287: "Specialists" in the SEO title (D-05); "de facto family law experts with extensive experience" and "expert family lawyers" (unverified); "fighting for an outcome"; "Since no two divorce cases are the same" (wrong page); "you have the same rights as married couples" stated without the gateways or the 1 March 2009 condition; the list of six court factors (incomplete against section 4AA's nine); the stock photo of a woman at a window; the five-star image; the two YouTube client videos (as on divorce, no video component and consent unknown); the "30-minute consultation" link; every em dash and curly bullet list.
- Added that the old page never had: the section 4AA test in full, concurrent relationships, the separate Centrelink and immigration tests, declarations, the NSW referral and the Property (Relationships) Act, the geographic requirement, the four gateways, evidence and dates, the 10 June 2025 property changes, maintenance, children, binding agreements, and NSW wills.
- Kept short and linked out, so the hub, prenup and property pages and this page don't compete: time limits (one paragraph, links to `/sydney/family-law/#timelimits`), property process detail (links to `/sydney/property-settlement/`), agreements for couples moving in (links to `/sydney/prenuptial-agreements/#defacto`), parenting (links to `/sydney/child-custody-lawyer/`).
- "Defacto" (one word) appears once in the copy, in the first sentence of `#status` ("De facto, sometimes written defacto, ..."), and once in the Service schema's alternate names. Everywhere else the page uses "de facto", as the live site does in every heading and line of copy (Ben, 27 Nov: one word once is fine).
- Twin check on draft v1 (main content, city names neutralised, five-word shingles, Jaccard, review notes excluded): 2.5% against the Sydney hub, 1.4% against the Sydney prenup page, 1.3% against Sydney property, 6.8% against the Sydney divorce draft (mostly the shared CTA and lawyer-card wording). Limit 30% (D-51). Rerun with `npm run test:twins` once built.
- Search basis (Search Console, 27 Nov 2025 to 26 Nov 2026): see D-60 and `sydney-de-facto-gsc-baseline.csv`.
