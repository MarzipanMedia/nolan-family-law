# Sydney divorce page: copy draft v1, laid out against the service page template

**27 Nov 2026 · First draft. A rewrite on current law, not a tidy-up of page 8327 or draft 16051**

Template: DESIGN.md §8 inner-page template, forked from `prenuptial-agreements-sydney.html` (built 23 Nov), which is itself the property settlement fork. Header with the phone strip, Sydney first (D-30), Sydney nav (D-49), the same components, accreditations and footer. Only the copy, anchors, routing cards and schema below are new. No new components. No location toggle (there is no Melbourne divorce twin).

| Item | Value |
|---|---|
| URL | `/sydney/divorce-lawyer/` (routes file). 301s from `/divorce-lawyer/` (WP 8327) and `/divorce/` (already a 301 to `/divorce-lawyer/`; recreate as one hop). Both are in `REDIRECT-MAP.csv`, option B |
| Canonical | `https://www.nolanlawyers.com.au/sydney/divorce-lawyer/` (self-referential) |
| Title tag | `Divorce Lawyers Sydney \| Nolan Family Law & Mediation` (52 characters, Ben 27 Nov) |
| Meta description | `Divorce ends a marriage but settles nothing else, and it starts a 12 month clock on property claims. Our Sydney family lawyers help you with both.` (PAS, 146 characters) |
| H1 | `Divorce lawyers in Sydney` |
| Author / reviewer | Tash Nolan, Principal (author and reviewedBy, as on the property and prenup pages; Ben 27 Nov). Chad and Tash review the whole page before launch |
| Homepage change | The homepage "Separation & Divorce" card keeps its "Learn more" link to the Sydney hub and gains a second link to this page, "Divorce lawyers in Sydney →" (the homepage has no separate divorce card; Ben, 27 Nov). The homepage title and H1 are not changed (D-33) |

**Section map (`data-screen-label` → anchor id):** Navigation (phone strip, Sydney first) · Hero · Breadcrumb and byline · Quick answer · Accreditations · How can we help you (`#help`) · Guide wrapper with sticky "On this page" · What a divorce does (`#what`) · Who can apply (`#eligible`) · Separated under one roof (`#oneroof`) · Married less than two years (`#short`) · Applying together or alone (`#apply`) · Mid-page prompt · Children (`#children`) · The hearing and the order (`#hearing`) · The deadline that follows (`#clock`) · Do I need a lawyer (`#lawyer`) · How we help (`#how`) · Your lawyer · Related reading · Rooms image · FAQ (`#faq`) · Consultation CTA (`#book`) · Trust ribbon · Footer.

Yellow review notes (`showReviewNotes`) carry every LEGAL REVIEW and CHECK below, as on the prenup page. Chad and Tash review all of them before launch.

**Current law, important.** The Family Law Amendment Act 2024 changed divorce from 10 June 2025. It repealed section 44(1B) and (1C), so couples married less than two years no longer need a counselling certificate or the court's permission, and it amended section 98A, so a sole applicant no longer has to attend the hearing just because there are children under 18. The hand-off brief, page 8327, draft 16051 and both city hubs still describe the old rules. This draft follows the current law. See D-59 in `DECISIONS-additions-divorce.md`.

---

## [Hero]

**Eyebrow:** Sydney · Divorce

**H1:** Divorce lawyers in Sydney

**Sub-heading:** Ending the marriage properly, with your property, your children and your deadlines looked after alongside it.

**Lede (PAS):**
You have been apart for a year or more, and the marriage is over in every way except on paper. Perhaps you want to remarry, or simply to close the chapter, and you are not sure whether a divorce will also sort out the house, the super and the children.

It won't. A divorce order ends the marriage and nothing more. Worse, the day it takes effect starts a 12 month clock on property and spousal maintenance claims, and people who think the divorce has dealt with everything sometimes find that clock has run out.

We help you apply in the right way, alone or together, and make sure the questions a divorce leaves open are settled too. Our Sydney team works from Bligh Street, led by Principal Tash Nolan, who is recognised in Doyle's Guide 2026 among the Leading Family & Divorce Lawyers in Sydney.

**Buttons:** [Talk to us] (primary, to `#book` with topic Divorce) · [Call (02) 8014 5885] (PhoneLink, `click_location=body`)

**Image:** the lobby of 25 Bligh Street (`public/images/lobby-of-25-bligh-street-sydney-b488661d.webp`, already used on the homepage). Alt: "The lobby of 25 Bligh Street, Sydney, where our Sydney office is". Tash's portrait is only 360px, too small for the hero, and the property page's hero is a rooms photo, not a portrait.

**Fact strip (three cells):** Sole or joint applications · Property and parenting alongside · Bligh Street or by video

## [Breadcrumb and byline]

Home / Sydney / Divorce
Written and reviewed by Tash Nolan, Principal · Updated November 2026

## [Quick answer]

**Quick answer:** In NSW, divorce comes under the federal Family Law Act 1975 and is granted by the Federal Circuit and Family Court of Australia. Either spouse, or both together, can apply once you have been separated for more than 12 months and the marriage has broken down with no reasonable likelihood of you getting back together. One of you must be an Australian citizen, regard Australia as your home, or have lived here for the 12 months before applying. Who was to blame plays no part. A divorce does not divide property or decide arrangements for children, and once the order takes effect, one month and one day after it is made, you generally have 12 months to apply for property or spousal maintenance orders. Nolan Family Law & Mediation advises from 25 Bligh Street, Sydney.

> LEGAL REVIEW (Tash): every sentence, especially the section 39(3) wording (citizen, domiciled, ordinarily resident for one year immediately before filing), section 48, section 55 and the section 44(3) time limit.

## [Accreditations]

As the prenup page: Doyle's Guide, Law Society of NSW, Law Council of Australia, Family Law Section, Collaborative Professionals (NSW & ACT), Australian Association of Collaborative Professionals.

## [How can we help you] `#help`

**H2:** Where are you up to?

**Intro:** Choose whichever sounds most like you. Each one takes you to the part of this page that matters most right now.

Six routing cards, same component as the prenup page:

1. **I'm ready to apply** · What you need before you file. → `#eligible`
2. **We still live under the same roof** · The extra evidence the court asks for. → `#oneroof`
3. **We have children under 18** · What the court checks, and what it doesn't decide. → `#children`
4. **My spouse has applied and I've been served** · What you need to do, and when. → `#apply`
5. **Our divorce is already final** · The deadline you may not know about. → `#clock`
6. **I'd rather talk it through** · Tell us a little and we will call you. → `#book` (topic Divorce)

---

## [Guide, with sticky "On this page"]

### What does a divorce actually do? `#what`

The most common misunderstanding we hear at Bligh Street is that a divorce is where everything gets sorted out. In law it is the opposite. A divorce order does one thing: it formally ends a marriage, so that each of you is free to marry again. It says nothing about who keeps the home, how superannuation is split, whether anyone pays maintenance, or where the children live.

Those questions are dealt with through separate processes under the same Act. Property and spousal maintenance are settled by agreement and made binding with consent orders or a financial agreement, or decided by the court. Parenting arrangements are agreed in a parenting plan or consent orders, or decided by the court. None of this has to wait for a divorce. Many people settle their property and parenting arrangements in the year before they are even eligible to apply, and that is often the calmer order in which to do things.

The reverse is also true. Being divorced does not mean your financial ties are cut. Until property is formally settled, either of you can still bring a claim within the time allowed, and assets acquired after separation can still be part of the picture.

If you were never married, there is nothing to divorce. De facto couples deal with property and children under the same Act, with a different time limit: see [de facto relationships in Sydney](/sydney/de-facto-relationship-lawyer/).

> LEGAL REVIEW (Tash): "assets acquired after separation can still be part of the picture" (the post-separation property point under section 79 as amended); whether to mention binding child support agreements here or leave them out.

> **In short:** A divorce ends the marriage and nothing else. Property, maintenance and parenting are separate, and you can settle them before or after the divorce.

### Who can apply for a divorce in Australia? `#eligible`

There is only one ground for divorce in Australia: the marriage has broken down irretrievably. You show that by having been separated for at least 12 months, with no reasonable likelihood of getting back together. Fault, affairs and who left are not part of the application, and the court does not ask about them.

The 12 months run from the day you separated, and the court's guidance is that you can file from the day after the first anniversary of that date. Separation does not need paperwork. It happens when at least one of you decides the marriage is over and makes that clear to the other, by words or by actions. If you tried to reconcile and lived together again for a single period of up to three months, that does not restart the count, although the time you spent back together is not counted in the 12 months.

At least one of you also needs a connection to Australia on the day you apply. You qualify if either of you is an Australian citizen, by birth, descent or grant; regards Australia as home and intends to live here indefinitely; or has ordinarily lived in Australia for the 12 months before applying. Where you married does not matter. A marriage celebrated overseas can be ended in Australia, and a marriage celebrated here can be ended even if neither of you lives here any longer, provided one of those tests is met. If your marriage certificate is not in English, you will need a translation.

There is no separate NSW divorce. Because divorce is federal law, the rules are the same across Australia, and applications from Sydney are filed online through the Commonwealth Courts Portal.

> LEGAL REVIEW (Tash): section 48(2) and the "12 months and one day" filing guidance (court's apply page); section 50 (one resumption of cohabitation of up to three months, periods before and after aggregated); section 39(3) and the three tests, including the domicile wording; "a marriage celebrated here can be ended even if neither of you lives here" (citizenship test only; check the wording doesn't overreach).

> **In short:** You need 12 months of separation, a marriage that has broken down for good, and one of you with a citizenship, home or residence connection to Australia. Fault is irrelevant.

### We separated but still live together. Does that count? `#oneroof`

Yes. Plenty of couples separate while still sharing a home, often for the children's sake or because neither can yet afford to move out. The law treats that as separation if the marriage has genuinely ended, even though you are under one roof.

Because the court cannot see the change from the outside, it asks for more evidence. If you lived in the same home for any part of the 12 months, the court requires an affidavit explaining how your relationship changed: for example, that you moved into separate rooms, stopped sharing meals or household tasks, separated your finances, stopped going out as a couple, and told family, friends or government agencies that you had separated. In a joint application you each file an affidavit. In a sole application the court's guidance also recommends an affidavit from someone else, such as a friend or relative, who can confirm what they observed.

This is one of the points where applications most often run into trouble, so it is worth taking care with the detail and the dates. It can also be worth attending the hearing, so that you can answer any questions the registrar has.

> LEGAL REVIEW (Tash): the affidavit requirement for any period under one roof (court's apply page); the third-party affidavit as recommended rather than mandatory, and whether that applies to joint as well as sole applications; the examples of change.

> **In short:** Separation under one roof counts, but you need affidavits showing how the marriage changed. Detail and dates matter.

### We've been married less than two years. Is there an extra step? `#short`

Not any more. Until 10 June 2025, couples who applied within two years of their wedding had to attend counselling about reconciliation and file a certificate, or ask the court's permission to apply without one. The Family Law Amendment Act 2024 removed that requirement. Today a short marriage is treated the same way as any other: the 12 months of separation and the other requirements above still apply, but there is no counselling certificate to obtain.

You may still find the old rule described on other websites and in older guides. If something you have read says you need a counselling certificate, check its date.

> LEGAL REVIEW (Tash): repeal of section 44(1B) and (1C) from 10 June 2025 (Family Law Amendment Act 2024, Schedule 3 Part 1A; FCFCOA practice and procedure update, 3 June 2025). This replaces item 5 of the hand-off brief, which was written from memory and described the old rule.

> **In short:** Since 10 June 2025 there is no counselling certificate for marriages under two years. The usual requirements still apply.

### Should we apply together, or can I apply on my own? `#apply`

Either. A **joint application** is made by both of you as applicants. You both sign it, and because you are both part of it, nobody has to be served. It suits couples who agree that the marriage is over and are able to cooperate on the paperwork.

A **sole application** is made by one of you alone, and it does not need the other's agreement. Once it is filed, the sealed documents must be served on your spouse at least 28 days before the hearing if they are in Australia, or at least 42 days before if they are overseas. You cannot hand them over yourself, but another adult can, or they can be sent by post, with proof of service filed afterwards. If your spouse cannot be found, or is avoiding service, the court can allow another method, such as email or a message on social media, or in some cases excuse service altogether. That needs a separate application with evidence of what you have tried.

Either way, the supporting affidavit has to be signed in front of a lawyer or a Justice of the Peace before the application is filed, and the court charges a filing fee, which can be reduced in cases of financial hardship.

**If you have been served.** If your spouse has applied and you agree with what the application says, you do not need to do anything more, although returning the acknowledgement of service helps. If some of the facts are wrong but you do not oppose the divorce, you can file a Response to Divorce correcting them. You can oppose a divorce only on limited grounds, for example that you have not in fact been separated for 12 months, or that the court lacks jurisdiction. Unhappiness about property or the children is not a reason the court can refuse a divorce, although it is a very good reason to get advice about those issues now.

> LEGAL REVIEW (Tash): 28 and 42 days (court's serving page); who may serve and the ban on serving it yourself; substituted service and dispensation (practice direction 2.20); the Affidavit for eFiling being signed before a lawyer or JP; reduced fee wording (no figure, D-02); the respondent's options and the limited grounds for opposing.

> **In short:** Apply together and no one needs to be served. Apply alone and your spouse must be served 28 days before the hearing, or 42 if overseas.

## [Mid-page prompt] (D-31, one per page, `data-cta-position="mid"`)

Tash's photo · **Not sure how this applies to you?** A first conversation can show you what to do first, and in what order. [Talk to us] · (02) 8014 5885

### What does the court need to know about our children? `#children`

If there is a child of the marriage under 18, the court cannot make a divorce order unless it is satisfied that proper arrangements are in place for that child, or that there are circumstances which justify making the order anyway. That is section 55A of the Act. The application asks for details of where each child lives, who cares for them, their schooling and health, the time they spend with each parent, and how they are supported financially.

"Child of the marriage" is wider than many people expect. It includes children born before the marriage or after separation, adopted children, and stepchildren or other children who were treated as part of your family before you separated.

What the court is checking is that arrangements exist and are adequate. It is not deciding what those arrangements should be, and a divorce order is not a parenting order. If you and your former partner disagree about the children, the divorce can still usually go ahead, but the arrangements themselves have to be settled separately. Our page on [child custody in Sydney](/sydney/child-custody-lawyer/) explains how parenting arrangements are agreed and made formal.

> LEGAL REVIEW (Tash): section 55A as framed, and whether to mention that the court may adjourn rather than refuse; the definition of child of the marriage (section 55A(4) and the court's guidance); "the divorce can still usually go ahead".

> **In short:** For children under 18, the court checks that proper arrangements are in place. It does not make parenting orders as part of a divorce.

### Do I have to go to court, and when is the divorce final? `#hearing`

Usually you do not have to go anywhere. Divorce hearings are listed before a registrar and held by phone or video unless someone asks to attend in person or the court orders it. Most applications are decided without either of you appearing.

You must attend if you asked to in your application, if your spouse files a response opposing the divorce, if your spouse asks to attend and there are children under 18, or if you applied to serve your spouse another way or to be excused from serving them. Since 10 June 2025 a sole applicant no longer has to attend just because there are children. Attending can still be wise if you separated under one roof or something has changed since you filed, so that you can answer the registrar's questions.

If the registrar is satisfied, the divorce order is made at the hearing. It takes effect one month and one day later, unless the court shortens that period, and the order can then be downloaded from the Commonwealth Courts Portal. You are not free to remarry until it has taken effect.

> LEGAL REVIEW (Tash): the attendance list against rule 15.15 and the current Divorce hearing page; the section 98A amendment from 10 June 2025; "one month and one day" (section 55 and the court's wording); download from the Portal the next working day; whether to mention rescission (section 57) here or only in the FAQ.

> **In short:** Most divorces are granted without anyone attending. The order takes effect one month and one day after it is made.

### What deadline starts when the divorce is final? `#clock`

This is the part of a divorce that costs people the most when it is missed. For married couples, an application to the court for property orders or spousal maintenance must generally be made within 12 months of the divorce order taking effect. After that, you need the court's permission to apply late, and it is not guaranteed.

It is often wiser to settle property before applying for a divorce, or alongside it, rather than afterwards. Our Sydney hub explains [how the time limits work after separation](/sydney/family-law/#timelimits), including the different rule for de facto couples.

> LEGAL REVIEW (Tash): section 44(3) as summarised; the anchor `#timelimits` matches the Sydney hub's section id.

> **In short:** Once your divorce takes effect, you generally have 12 months to apply for property or maintenance orders.

### Do I need a lawyer for a divorce? `#lawyer`

Not always, and we would rather tell you that honestly. If you have been apart for well over a year, you agree that the marriage is over, you can apply jointly, and your property and parenting arrangements are already settled, the application itself is something many people complete on their own through the Commonwealth Courts Portal.

A lawyer earns their place in the situations around the application. Separation under one roof needs careful affidavits. A spouse who cannot be found, or who will not engage, means applications for substituted service. Overseas marriages and documents bring their own questions. And above all, the divorce is usually the moment to check that property, superannuation, maintenance and parenting are properly settled, because the deadline begins the day the order takes effect.

If you do meet with a lawyer, go in prepared. Our article on [11 questions to ask your divorce lawyer at your first meeting](/11-questions-to-ask-your-divorce-lawyer-at-your-first-meeting/) covers what to ask about experience, approach, communication and costs, so that you can judge whether the fit is right.

> LEGAL REVIEW (Tash): the honest-answer framing, and whether the firm will still prepare a simple joint application for a client who asks.

> **In short:** A simple joint divorce often needs no lawyer. Property, parenting, one roof cases and the 12 month deadline usually do.

### How do we help around a divorce? `#how`

Some clients come to us only for the divorce itself. More often the divorce is one step in a wider separation, and we look after it as part of the whole. We can prepare and file the application, joint or sole; arrange service and deal with a spouse who is hard to reach; prepare the affidavits needed when you separated under one roof; and attend the hearing where that is needed.

Around it, we help you settle property and superannuation and make the agreement binding, put parenting arrangements on a formal footing, and, where it suits you, resolve matters through mediation rather than court. We will also remind you of the practical things a divorce changes, such as reviewing your will and your superannuation nominations, since in NSW a divorce generally cancels gifts to a former spouse in a will but separation alone does not.

Our approach is to work towards agreement first, and to go to court when that is what it takes. You will know from the start what we recommend, what it involves, and how our fees work.

> LEGAL REVIEW (Tash): section 13 of the Succession Act 2006 (NSW) as summarised; the list of services. CHECK (Ben): the firm acts on simple divorce applications as well as the wider matters.

> **In short:** We handle the application itself and everything a divorce leaves open, working towards agreement first.

---

## [Your lawyers] (property page component)

**Kicker:** Who you would be working with
**H2:** Your divorce lawyers in Sydney

**Tash Nolan, Principal.** Tash has practised for nearly 17 years and leads the firm's Sydney office at 25 Bligh Street. Her family law work runs from straightforward divorce and property matters to complex, high net-worth financial disputes involving family companies, trusts and superannuation, as well as parenting matters. She holds a Master of Applied Law in Family Law and is a Nationally Accredited Mediator. In Doyle's Guide 2026 she is recognised, for the fourth year running, among the Leading Family & Divorce Lawyers in Sydney, and in two further categories: Leading Parenting & Children's Matters and Leading Family Lawyers for High Net-Worth and Complex Financial Matters. [Read Tash's profile] · [See everyone at the firm]

**Jessica Swain, Partner** (second card, the Sydney hub's component). Jessica works alongside Tash in Sydney, where she has practised family law since 2016. Her work covers complex property and parenting matters, spousal maintenance and child support, and she is a Nationally Accredited Mediator. Her psychology degree helps her guide clients through the emotional side of separation as well as the legal one. [Read Jessica's profile]

> CHECK (Ben, Chad): Tash's wording follows D-45, her live profile and the Sydney hub card ("leads our Sydney office" is already approved there). Jessica added by Ben, 27 Nov. Her wording comes from her live profile (page 12740: Sydney CBD since 2016, property, parenting, spouse maintenance and child support, psychology degree) and D-13 (Nationally Accredited Mediator); it differs from the hub's card on purpose. Never "specialist" (D-05).

## [Related reading]

Card row, same component as the prenup page's related reading (no location toggle above it).

- [The divorce process explained](/the-divorce-process-explained/) (existing article, URL unchanged)
- [Your essential checklist when getting a divorce](/your-essential-checklist-when-getting-a-divorce/) (existing article, URL unchanged; the old PDF's 301 lands here, Q-10)
- [11 questions to ask your divorce lawyer at your first meeting](/11-questions-to-ask-your-divorce-lawyer-at-your-first-meeting/) (existing article, URL unchanged)
- [Separation and family law in Sydney](/sydney/family-law/)
- [Property settlement in Sydney](/sydney/property-settlement/)
- [Family law mediation in Sydney](/sydney/mediation/)

> CHECK (Ben): card titles are short labels; check them against each article's H1 after import. Each of the three articles gets a link back to this page with the anchor "divorce lawyers in Sydney" (D-12 pattern), added by Claude Code during import.

## [Rooms image]

As the prenup page: the Bligh Street meeting rooms. Alt: "Meeting rooms at 25 Bligh Street, Sydney, where clients meet with us about divorce and separation".

## [FAQ] `#faq` (all 12 in FAQPage schema, wording exact)

**How long does a divorce take in NSW?**
Once you are eligible, it usually takes a few months. You choose a hearing date from those available when you file, a sole application must be served at least 28 days before it, and the order takes effect one month and one day after it is made. Delays usually come from service or missing evidence.

**Can I get a divorce if my spouse doesn't want one?**
Yes. A sole application does not need your spouse's agreement. They can oppose it only on limited grounds, such as that you have not been separated for 12 months, and disagreement about property or children is not one of them.

**Do I have to be divorced before we settle property?**
No. You can settle property and superannuation at any time after separating, and many couples do so before the divorce. Once a divorce takes effect, you generally have 12 months to apply to the court.

**Does a divorce decide who the children live with?**
No. The court only checks that proper arrangements are in place for children under 18. Parenting arrangements are agreed or decided separately, through a parenting plan, consent orders or parenting orders.

**We married overseas. Can we get divorced in Sydney?**
Yes, if one of you is an Australian citizen, regards Australia as home, or has lived here for the 12 months before applying. You will need your marriage certificate, with a translation if it is not in English.

**Is there a different divorce law in NSW?**
No. Divorce is governed by the federal Family Law Act 1975, so the rules are the same in every state. Applications are filed online with the Federal Circuit and Family Court of Australia.

**We've been married less than two years. Do we need counselling first?**
Not since 10 June 2025. The requirement to file a counselling certificate, or get the court's permission, was repealed. You still need 12 months of separation.

**What if I can't find my spouse to serve them?**
You can ask the court for permission to serve them another way, such as by email, through a relative or on social media, or to excuse service altogether. You will need to show the court what you have already tried.

**Will I have to attend a court hearing?**
Usually not. Most divorces are decided without anyone attending, by a registrar, and hearings are held by phone or video. You must attend if your spouse opposes the application, if you asked to attend, or in a few other situations.

**When can I remarry?**
Once your divorce order has taken effect, one month and one day after it is made. Until then you are still legally married, and a new marriage would not be valid.

**Does divorce affect my will in NSW?**
Yes, in part. Under the Succession Act 2006 (NSW), divorce generally cancels gifts to a former spouse in your will and their appointment as executor, unless the will shows otherwise. Separation alone does not, so review your will when you separate.

**What does a divorce cost?**
The court charges a filing fee, which can be reduced in cases of financial hardship. Our own fees depend on what you need, from the application alone to a full property settlement, and we confirm them in writing before we start. Talk to us about costs.

> LEGAL REVIEW (Tash): every answer, especially timing ("a few months", no figure given, unlike draft 16051), the limited grounds for opposing, overseas marriages, the repeal date, substituted service methods, attendance, remarriage, and Succession Act section 13. No dollar figures (D-02).

## [Consultation CTA] `#book`

**H2:** End the marriage well, and leave nothing unfinished.
**Lede:** Whether you are ready to apply, have just been served, or are not yet sure what comes first, a first conversation will show you where you stand. It is confidential, with no obligation.

When you get in touch, we will:
✓ Run a conflict check before anything else
✓ Confirm whether you can apply now, and whether jointly or alone
✓ Check that property, parenting and the 12 month deadline are covered
✓ Tell you how our fees work, and put an estimate in writing

(02) 8014 5885 · Suite 3, Level 22, 25 Bligh Street, Sydney NSW 2000 · In person, by phone or by video

Same form as the prenup page. Topic pre-selected to Divorce. Delivers to the Sydney team.

## [Trust ribbon] and [Footer]

As the prenup page, including the general-information disclaimer.

---

## Schema (JSON-LD)

`WebPage` (author and `reviewedBy` Tash, same `@id` as the property, mediation and prenup pages; `dateModified`) · `BreadcrumbList` (Home > Sydney > Divorce) · `Service` "Divorce" (alternateName "Divorce applications") with `provider` the Sydney `LegalService` by `@id` (`/sydney/family-law/#office`, as the other Sydney service pages) and `areaServed` New South Wales · `Person` Tash by `@id` (`/our-team/tash-nolan/#person`) · `Person` Jessica by `@id` (`/our-team/jessica-swain/#person`, the node from the Sydney mediation page) · `FAQPage` with the 12 questions worded exactly. No `priceRange`, no `alumniOf` (D-53). Office details and URLs come from the office config and routes file.

## Images

Hero: the 25 Bligh Street lobby (see Hero). Mid-page prompt and lawyer card: Tash's portrait. Second lawyer card: Jessica's portrait (`jessica-swain-partner-160`). Rooms image: Bligh Street, as the prenup page, with the alt text above. No new images, no placeholders, so this page adds nothing to the production-build block.

## For the build notes

- Dropped from page 8327 and draft 16051: "hundreds of Sydney families" (unverified), "specialists" and "Accredited Family Law Specialists" (D-05), the "IKEA furniture in a hurricane" line, the counselling requirement for short marriages and the sole-applicant-with-children attendance rule (both repealed 10 June 2025), "both of you must have lived in Australia for 12 months" (wrong: one of three tests, for either spouse), the four-step property process (restructured by the 2024 Act; left to the property page), fixed timeframes ("4 to 6 months", "12 to 18 months"), the "Quick Answer for AI/LLM" labels (D-56), the stock photo, the two YouTube embeds, the link to the 404 checklist PDF, and every em dash.
- CHECK (Ben): the live page embeds two client videos (`ZFQrcfl246g`, `o1epiemgRKc`). They are left out here because the template has no video component and the clients' consent and the videos' currency are unknown. Say if you want them back.
- Added that neither source had: the 10 June 2025 changes, section 50 (resumed cohabitation), the 12 months and one day filing guidance, the domicile test in plain words, service periods and substituted service, the respondent's side, the wider meaning of "child of the marriage", hearing by phone or video, Succession Act section 13, and an honest "do I need a lawyer" answer.
- Kept short and linked out, so the hub and this page don't compete: time limits (one paragraph, links to `/sydney/family-law/#timelimits`), separation itself, property detail, parenting detail.
- Twin check against the Sydney hub's main content (five-word shingles, city names neutralised): see the D-58 entry. Rerun with `npm run test:twins` once built.
- Search basis (Search Console, 27 Nov 2025 to 26 Nov 2026): see D-58 and `sydney-divorce-gsc-baseline.csv`.
