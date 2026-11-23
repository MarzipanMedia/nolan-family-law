# Sydney prenuptial agreements page: copy draft v1, laid out against the service page template

**23 Nov 2026 · First draft. A NSW rewrite, not a tidy-up of page 8427 or the March "Prenups" brief**

Template: DESIGN.md §8 inner-page template, forked from `property-settlement-sydney.html` (approved 12 Nov). Header with the phone strip, Sydney first (D-30), Sydney nav (D-34), the property page's components, accreditations and footer. Only the copy, anchors, routing cards and schema below are new. No new components.

| Item | Value |
|---|---|
| URL | `/sydney/prenuptial-agreements/` (routes file). 301s from `/prenuptial-agreement-sydney/` (WP 8427) and `/prenuptial-agreements/` (already a 301 to 8427; recreate as one hop). Both are in `REDIRECT-MAP.csv`, option B |
| Canonical | `https://www.nolanlawyers.com.au/sydney/prenuptial-agreements/` (self-referential) |
| Title tag | `Prenup Lawyers Sydney \| Prenuptial Agreements & BFAs \| Nolan` (60 characters, Ben 23 Nov) |
| Meta description | `Bringing a home, business or family trust into a marriage? In NSW, marrying can also cancel your will. Our Sydney team helps you plan both properly.` (PAS, 148 characters) |
| H1 | `Prenups and binding financial agreements in Sydney` |
| Author / reviewer | Tash Nolan, Principal (author and reviewedBy, as on the property page). Chad and Tash review the whole page before launch (Ben, 23 Nov) |
| Homepage change | The homepage prenup card links here with the anchor "prenup lawyers in Sydney" (Ben, 23 Nov). The homepage title is not changed |

**Section map (`data-screen-label` → anchor id):** Navigation (phone strip, Sydney first) · Hero · Breadcrumb and byline · Quick Answer · Accreditations · How can we help you (`#help`) · Guide wrapper with sticky "On this page" · When it makes sense (`#when`) · How the law treats it (`#law`) · What makes it hold (`#hold`) · Your will in NSW (`#will`) · Notional estate (`#notional`) · Mid-page prompt · De facto and registered couples (`#defacto`) · Trusts, companies and practices (`#trusts`) · Transfer duty (`#duty`) · What sits outside it (`#outside`) · Being handed one to sign (`#handed`) · What affects the cost (`#cost`) · Working with us at Bligh Street (`#process`) · If it is ever challenged (`#court`) · Your lawyers · Melbourne toggle and related reading · Rooms image · FAQ (`#faq`) · Consultation CTA (`#book`) · Trust ribbon · Footer.

Yellow review notes (`showReviewNotes`) carry every LEGAL REVIEW and CHECK below, as on the property page. Chad and Tash review all of them before launch.

---

## [Hero]

**Eyebrow:** Sydney · Prenups and BFAs

**H1:** Prenups and binding financial agreements in Sydney

**Sub-heading:** Settling the money questions while things are good, so they never have to be fought over.

**Lede (PAS):**
One of you owns the apartment you will be living in, or a share of the family company, or a practice built over twenty years. Someone has said the word "prenup", and now neither of you quite knows how to talk about it.

Leave it, and the decision is made for you. If the relationship ends, property is divided under the Family Law Act, and in NSW marriage can also cancel the will you made to look after your children. Leave it until the last few weeks before a wedding, and an agreement may not survive a challenge.

A binding financial agreement lets you settle these questions together, calmly and in good time, alongside your wills. Our Sydney team at Bligh Street prepares agreements for couples marrying for the first or second time, for de facto partners, and for families with trusts and companies to think about. Our Principal, Tash Nolan, is recognised in Doyle's Guide 2026 for high net-worth and complex financial matters.

**Buttons:** [Talk to us] (primary, to `#book` with topic BFA) · [Call (02) 8014 5885] (PhoneLink, `click_location=body`)

**Image:** Tash's portrait, as on the property page (`mediation-assets/tash-nolan.png`).

**Fact strip (three cells):** Married or de facto · Planned with your wills · Bligh Street or by video

## [Breadcrumb and byline]

Home / Sydney / Prenups and binding financial agreements
Written and reviewed by Tash Nolan, Principal · Updated November 2026

## [Quick Answer]

**Quick answer:** A prenup in NSW is a binding financial agreement under the Family Law Act 1975, a federal law that applies to married and de facto couples. It sets out how property, money and superannuation would be divided if the relationship ended. To be binding, each partner must get independent legal advice from a separate lawyer before signing, and the Act's other formal steps must be followed. An agreement finished well before the wedding, after full financial disclosure, is much harder to overturn. In NSW, marriage generally revokes an existing will, and an agreement does not stop a family provision claim against an estate, so plan the agreement and your wills together.

> LEGAL REVIEW (Tash): every sentence. CHECK (Ben): the on-screen label stays "Quick answer", as on the hub and property page.

## [Accreditations]

As the property page: Doyle's Guide, Law Society of NSW, Law Council of Australia, Family Law Section, Collaborative Professionals (NSW & ACT), Australian Association of Collaborative Professionals.

## [How can we help you] `#help`

**H2:** What brings you here?

**Intro:** Pick whichever is closest. Each one opens the part of this page that matters most to you right now.

Six routing cards, same component as the property page:

1. **The wedding date is set** · Why time matters more than anything else. → `#hold`
2. **We're moving in, or registering our relationship** · How NSW treats de facto couples. → `#defacto`
3. **I want my children to inherit** · Wills, estates and notional estate in NSW. → `#notional`
4. **There's a family trust, company or practice** · Protecting structures others rely on. → `#trusts`
5. **I've been handed an agreement to sign** · Your own lawyer, your own pace. → `#handed`
6. **I'd rather talk it through** · Tell us a little and we will call you. → `#book` (topic BFA)

---

## [Guide, with sticky "On this page"]

### When does a prenup make sense for a Sydney couple? `#when`

A prenup is not a forecast. Most couples who sign one never look at it again. What it gives you is an answer, agreed in advance, to the questions that are hardest to discuss once a relationship is under strain.

In our Sydney practice, the people who ask about agreements tend to have one of a handful of things in common. One partner owns property bought before the relationship, often a home in which the other partner will now live. Someone runs a business or a professional practice, or holds shares in a family company that a parent or sibling also depends on. A family trust sits behind the family's wealth, and the trustee or the wider family would like it kept out of any future dispute. One partner is marrying for the second time and has adult children who expect to inherit. And some couples arrive from overseas with an agreement signed in another country and want to know whether it still means anything here.

It also tends to suit couples where one partner has much more than the other, because a clear agreement protects the partner with less as well. Knowing what you would each receive, rather than hoping, is a form of security in its own right.

If you are unsure how to raise it, start with the reason rather than the document, and start early. A conversation about why the agreement matters to you is far easier than a conversation about a draft.

> LEGAL REVIEW (Tash): the "protects the partner with less" framing.

> **In short:** A prenup earns its keep where there is property from before the relationship, a business, a family trust or company, a second family, or an overseas agreement. It is about certainty for both of you.

### How does Australian law treat a prenup? `#law`

Australian law does not use the word "prenup". The Family Law Act 1975 calls it a financial agreement, and lawyers usually say binding financial agreement, or BFA. Because the Act is Commonwealth law, the rules for making a valid agreement are the same in Sydney as in Perth or Hobart. What differs in NSW is the state law around the agreement: wills, family provision claims, relationship registration and duty. Those are the sections that follow.

You can sign an agreement at any of three stages, and the Act has a separate section for each:

| Stage | If you are, or will be, married | If you are de facto partners |
|---|---|---|
| Before you marry or start living together | Section 90B | Section 90UB |
| While you are together | Section 90C | Section 90UC |
| Once you have separated | Section 90D, after a divorce order | Section 90UD |

(The property page's comparison table component: scrolls sideways inside its own container on phones.)

An agreement can deal with any property either of you owns now or acquires later, your superannuation, and whether one of you would support the other financially after separation. A well-written agreement also explains why it says what it says, which helps if anyone has to read it years from now.

People sometimes ask whether a prenup is the same as consent orders. It is not. Consent orders are made by the court, usually after separation, once a judicial officer is satisfied the arrangement is just and equitable. A financial agreement is a private contract that a court never approves. We compare the two in detail on our property settlement page: [Consent orders or a BFA](/sydney/property-settlement/#consent-vs-bfa).

> LEGAL REVIEW (Tash): the six sections and how the table frames them (90C also covers the period after separation but before a divorce order); superannuation splitting under an agreement; the consent orders sentence, matched to the property page's `#consent-vs-bfa` section.

> **In short:** A prenup is a federal financial agreement that can be made before, during or after a marriage or de facto relationship. NSW law shapes what surrounds it.

### What has to happen for a prenup to hold up? `#hold`

The Act is unforgiving about form. Section 90G says an agreement binds you only if all of these happen. You both sign it. Before signing, each of you receives independent legal advice about how the agreement affects your rights, and about its advantages and disadvantages for you at that point. Each lawyer signs a statement saying that advice was given. A copy of each statement is given to the other partner or to their lawyer, which section 90G(1)(ca) adds in its own words. And after signing, the original agreement goes to one of you and a copy to the other. Nothing in the section requires a witness, and the agreement is never lodged with a court.

Getting every step right is necessary but not enough. Section 90K lets a court set aside an agreement that was properly signed, for example where one of you hid assets or debts that mattered, where it was signed under duress, undue influence or unconscionable conduct, where circumstances have made it impracticable to carry out, or where a material change in the care of a child would leave a parent or the child in hardship.

Timing is where agreements most often fail, and the High Court's decision in **Thorne v Kennedy [2017] HCA 49** explains why. Ms Thorne had moved to Australia to marry. With her family already here for the wedding, she was told about eleven days beforehand that there would be no wedding unless she signed. Her solicitor advised her strongly against it, and she signed four days before the ceremony, then signed a second, near-identical agreement after it. The High Court set both aside. An agreement signed with a wedding about to happen, and no real choice, is fragile no matter how well it is drafted.

> LEGAL REVIEW (Tash): the 90G elements, including 90G(1)(ca); "no witness" and "never lodged" wording; the 90K grounds as summarised; the Thorne v Kennedy facts (eleven days' notice, signed four days before, second agreement afterwards, set aside on undue influence by the plurality and unconscionable conduct by Nettle and Gordon JJ). Sources: High Court judgment summary, 8 November 2017.

> **In short:** Two lawyers, signed advice statements exchanged, honest disclosure and time to think. If the wedding is close, the agreement is at risk.

### What does getting married do to my will in NSW? `#will`

Most couples arrive thinking about separation. NSW law makes it just as important to think about death.

**Marriage generally revokes your will.** Under section 12 of the Succession Act 2006 (NSW), a will is revoked when you marry. The main exceptions are a will made in contemplation of that particular marriage, which survives whether or not it says so, and a will that says it is made in contemplation of marriage in general. Some gifts and appointments in favour of the person you marry also survive. So if you made a will years ago leaving your home to your children and you now marry, that will may no longer exist, and the intestacy rules could apply instead.

**Divorce revokes some gifts.** Under section 13, a divorce or annulment generally cancels gifts to your former spouse and their appointment as executor or trustee, unless your will shows you intended otherwise. Separation alone does not, and neither does the end of a de facto relationship, so a will made in favour of a partner you have since separated from can still stand until you change it.

**A promise in your agreement may not be the last word.** Many agreements include a promise not to claim against each other's estate. In NSW, a release of the right to bring a family provision claim binds only if the Supreme Court approves it, under section 95 of the Succession Act. Without that approval, a surviving spouse or de facto partner may still be able to apply. The agreement can still matter as evidence of what you both intended.

For these reasons we look at the agreement and your wills side by side. Tash's practice has long included wills and estates as well as family law, so the two pieces of planning can be done together, while each of you still takes independent advice on the agreement itself.

> LEGAL REVIEW (Tash): section 12 and its exceptions (12(2) to 12(4)); that ending a de facto relationship does not revoke a will in NSW (section 13 covers only divorce and annulment); section 95 and court approval of releases; whether to name intestacy; whether to mention section 90H (an agreement continues to operate after a death). CHECK (Ben): Tash's live profile lists wills, estates and probate among her past work. Confirm she is happy to be named for wills on this page, and whether the firm prepares wills today.

> **In short:** In NSW, marrying usually cancels an existing will, and a promise not to claim on an estate needs the Supreme Court's approval to bind. Update your wills when you sign your agreement.

### What is notional estate, and why does it matter for a prenup? `#notional`

This is the part of NSW law that most often surprises people, and it is one that no other state has in the same form.

When someone dies, certain people close to them can ask the Supreme Court of NSW for a share of the estate, or a larger share, under Chapter 3 of the Succession Act. They include a spouse or de facto partner at the time of death, a former spouse, and children. In most states, the court can only distribute what is actually in the estate. In NSW, it can also reach some property that sits outside it, by designating that property as "notional estate".

That can include assets that pass outside a will, such as a home or account held jointly that passes to the surviving joint owner, and certain gifts or transfers made in the years before death, particularly where they were made to defeat a claim. The rules are detailed and depend heavily on the facts, and the court has a broad discretion in how it applies them.

For anyone using an agreement to keep wealth for their children, the practical lesson is that a financial agreement, a will and the way assets are held all need to work together. Moving property into joint names, into a trust or to a child shortly before death does not necessarily put it beyond a claim in NSW. This is general information only, and not something to rely on without advice about your own estate.

> LEGAL REVIEW (Tash): who is an eligible person (section 57); notional estate orders under Part 3.3 (sections 74 to 80, including the three-year and one-year periods in section 80 and joint tenancy under section 76); "no other state has in the same form". Kept deliberately general, as Ben asked.

> **In short:** In NSW, a family provision claim can reach some property outside the estate, including jointly held assets and some earlier transfers. Plan your agreement, your will and how you hold your assets as one.

## [Mid-page prompt] (D-31, one per page, `data-cta-position="mid"`)

Tash's photo · **Not sure how this applies to your family?** A first conversation can show you which parts matter for you. [Talk to us] · (02) 8014 5885

### We're not married. Does NSW law treat us differently? `#defacto`

For most de facto couples in NSW, the answer is no. NSW referred its powers over de facto property to the Commonwealth, so couples who separated on or after 1 March 2009 generally deal with property under the Family Law Act, much as married couples do. A de facto couple makes their agreement under Part VIIIAB of the Act, and section 90UJ sets out the same formal steps that section 90G sets for married couples.

Two parts of NSW law are worth knowing about.

**Registering your relationship.** NSW lets two adults in a relationship as a couple register it under the Relationships Register Act 2010, through NSW Births, Deaths and Marriages, provided neither is married or already in a registered relationship. A registered relationship is recognised as de facto under NSW law. It also matters under the Family Law Act. A de facto partner can usually seek property orders only if the relationship lasted two years, there is a child, or another condition applies. A relationship registered under a prescribed state law, as NSW's is, meets that requirement by itself. If you are thinking of registering, think about an agreement at the same time.

**Relationships the federal Act does not cover.** The Property (Relationships) Act 1984 (NSW) still applies to some relationships, including close personal relationships between two adults who live together where one cares for the other, and some older separations. If your situation is unusual, ask us which law applies before anything is drafted.

> LEGAL REVIEW (Tash): the 1 March 2009 wording (match the Sydney hub); Part VIIIAB and section 90UJ; that NSW registration satisfies section 90SB(d); the registration eligibility wording (Births, Deaths and Marriages states both partners must be over 18, not married, and not already in a registered relationship; confirm any NSW residence requirement); the Property (Relationships) Act sentence and the examples given.

> **In short:** De facto couples in NSW use the same federal agreements as married couples. Registering your relationship can bring you within the Family Law Act straight away, so plan the two together.

### Can a prenup protect a family trust, company or practice? `#trusts`

Family trusts and private companies are common in Sydney, and they are often the reason an agreement is needed. They are also where agreements most often go wrong.

A family court looks at what you control, not only what you own in your own name. If you are a director of the trustee company, an appointor, or the person who really decides how a trust's income and capital are distributed, the court may treat the trust's assets as yours, or as a financial resource available to you. A good agreement deals with that directly. It identifies the structure, says how your interest in it is to be treated, and is drafted so that it fits with the trust deed, the company constitution and any shareholder or partnership agreement.

Professional practices raise similar questions. A share in a medical, dental, accounting or legal practice may be valued in a way that partners and partnership agreements already dictate. Inherited wealth and gifts from parents, particularly money put towards a first home, are another common theme, along with how any growth in value during the relationship is to be shared.

Where the wider family's structures are involved, their accountant or other advisers often need to be part of the conversation. Tash's work regularly involves family companies, trust structures and superannuation interests, which is why she leads agreements of this kind.

> LEGAL REVIEW (Tash): the control test and "financial resource" wording; the practice examples. CHECK (Ben): "regularly involves family companies, trust structures and superannuation interests" follows her live profile ("matters involving family companies, trust structures and superannuation interests"). Confirm she leads BFAs, since the profile does not say so directly.

> **In short:** If a trust, company or practice is part of the picture, the agreement needs to deal with control as well as ownership, and to fit the documents that already govern the structure.

### Will we pay transfer duty if property changes hands later? `#duty`

If an agreement is ever acted on, a property may need to move from joint names into one name, or from one partner to the other. In NSW, section 68 of the Duties Act 1997 can exempt that transfer from transfer duty, where it happens because a marriage or de facto relationship has broken down and is made under a binding financial agreement or court orders. Revenue NSW makes clear that the exemption is for relationship breakdown: an agreement made while the relationship is continuing does not itself attract it.

Whether it applies to a particular transfer depends on the property, who it moves between, and the documents. Treat this as general information and check with Revenue NSW, or ask us to, when the time comes.

> LEGAL REVIEW (Tash): section 68 (marriage, 68(1); de facto, 68(1A)); that an agreement under sections 90B to 90D or 90UB to 90UD qualifies only once the relationship has ended. Sources: Revenue NSW, "Break-up of marriages and other relationships" and "Marriage or relationship break ups".

> **In short:** Transfers between partners after a breakdown can be exempt from NSW transfer duty if they are made under a binding agreement or court orders. Confirm with Revenue NSW at the time.

### What sits outside a prenup? `#outside`

An agreement deals with money and property between the two of you. It cannot decide where children would live or how much time they would spend with each parent. Those arrangements are always worked out separately, according to the children's best interests at the time.

Child support is also separate. It is assessed through Services Australia under the child support legislation, and an agreement cannot simply contract out of it. And if an agreement says one partner will never pay maintenance to the other, section 90F limits that promise: it does not prevent a court ordering maintenance if, when the time comes, the partner could not support themselves without an income-tested pension, allowance or benefit.

> LEGAL REVIEW (Tash): section 90F wording; child support kept general.

> **In short:** Prenups cover property, money and maintenance between partners. Children's arrangements and child support are dealt with on their own.

### I've been given a prenup to sign. Where do I start? `#handed`

Being presented with an agreement can feel like a verdict on the relationship. It usually isn't. Often it reflects a family business, a trust, or a parent's wishes more than any doubt about you.

Start by giving yourself time. The law requires you to have your own lawyer, at a different firm from your partner's, and that lawyer's job is to look after you. They will explain what you would be giving up and what you would receive, whether the terms are reasonable for someone in your position, and what you might ask to change. A first draft is rarely the final one, and a good agreement often improves when the receiving partner's lawyer asks the right questions.

If you feel rushed, say so. As Thorne v Kennedy shows, pressure and deadlines weaken an agreement for both of you. Our Sydney team can act for you whether you are the partner proposing an agreement or the one asked to sign.

> CHECK (Ben, with Tash): "can act for you whether you are the partner proposing an agreement or the one asked to sign" is a capability statement only. Strengthen to "regularly" only if Tash confirms it.

> **In short:** Take your time, get your own lawyer, and ask about anything you don't understand. Being asked to sign does not mean being asked to agree to everything.

### What affects the cost of a prenup? `#cost`

Many people search for a price before anything else, and it is a fair question. The honest answer is that the cost depends on the work your agreement needs, and that is different for every couple.

The main things that shape it are how many assets and structures are involved, whether there are trusts, companies or overseas assets, how quickly each of you can pull your disclosure together, and how much negotiation there is between the two lawyers. A straightforward agreement about one property is a very different piece of work from one dealing with a family group of companies.

Our approach is clear costs from day one. We explain how our fees work in your first conversation and put an estimate in writing before work begins. Your partner's lawyer charges separately, because they must be independent of us. [Talk to us about costs] (sets topic=fees, scrolls to `#book`)

> CHECK (Chad): this section is new. It answers about 3,000 impressions a year of cost searches (for example "how much does a prenup cost in australia") without any figures (D-02). "Estimate in writing" matches the property page's consultation CTA.

> **In short:** The cost depends on how complex your finances are and how much negotiation is needed. We explain our fees in the first conversation and confirm an estimate in writing.

### How does working with our Bligh Street office work? `#process`

Every agreement follows its own path, but the stages are much the same.

We start with a confidential conversation, at our Bligh Street office in the city or by video if you are elsewhere in NSW or overseas. We talk about what you want to protect, why it matters, and what your partner is likely to need so that the agreement feels fair to them too. Your partner will need their own lawyer at another firm. If they don't have one, we can suggest that they look for an experienced family lawyer, but the choice must be theirs.

Then comes disclosure. Each of you sets out what you own and owe, your income, your superannuation, any interest in a trust or company, and anything you expect to receive, such as an inheritance. It does not have to be sworn. But leaving something out is one of the most common grounds for a later challenge, so we ask for full disclosure with documents to support it.

We prepare a draft, and your partner's lawyer reviews it. There is usually some back and forth. When the terms are agreed, each of you receives independent advice, the advice statements are exchanged, and you both sign. We keep the original safely and make sure each of you has a copy. If your wills need updating, we deal with that at the same stage.

We won't promise a timeframe, because so much depends on disclosure and on the other lawyer. What we can say is that it should be finished well before any wedding, not squeezed into its last weeks. If you have a date in mind, now is the right time to start.

> CHECK (Ben, with Tash): "suggest that they look for an experienced family lawyer" wording (the firm cannot refer in a way that compromises independence); whether the firm holds originals in safe custody.

> **In short:** A first conversation, full disclosure, a draft, review by your partner's lawyer, then advice and signing, with your wills updated alongside. Start months before a wedding.

### Where would a challenge be heard in NSW? `#court`

Very few agreements ever reach a court. If one is challenged in NSW, the case goes to the Federal Circuit and Family Court of Australia, which hears family law matters in Sydney at the Lionel Bowen Commonwealth Law Courts Building at 97 to 99 Goulburn Street, and at the Garfield Barwick Commonwealth Law Courts Building in Parramatta. An agreement made carefully, with full disclosure and plenty of time, is the best way never to go there. A family provision claim against an estate is different: it is heard by the Supreme Court of NSW.

> LEGAL REVIEW (Tash): registry wording, against the court's location pages (Lionel Bowen Building, 97–99 Goulburn Street; Garfield Barwick Commonwealth Law Courts Building, 1–3 George Street, Parramatta). Match the Sydney hub's wording if it names them.

> **In short:** Challenges are heard by the federal family court in Sydney or Parramatta. Estate claims go to the NSW Supreme Court.

---

## [Your lawyers] (property page component)

**Kicker:** Who you would be working with
**H2:** Your prenup lawyer in Sydney

**Tash Nolan, Principal.** Tash has practised for nearly 17 years. Before focusing on family law, her work covered property, commercial matters, wills and estates, which shapes how she approaches an agreement: as one part of a family's wider planning. Her family law work ranges from straightforward property matters to complex, high net-worth financial disputes involving family companies, trust structures and superannuation. She holds a Master of Applied Law in Family Law, is a Nationally Accredited Mediator, and is recognised in Doyle's Guide 2026 as a leading family lawyer for high net-worth and complex financial matters. The firm has been recognised by Doyle's Guide every year since 2023. [Read Tash's profile] · [See everyone at the firm]

> CHECK (Ben, Chad): all claims are taken from Tash's live profile (23 Nov). Three things to settle at review: her title (the profile says "Director", the site rebuild uses "Principal"); "nearly 17 years" (update if the profile changes); the "before focusing on family law" wording, which reads her profile's list of past work as a sequence. Also whether Jessica Swain or another Sydney lawyer appears here beside Tash.

## [Melbourne toggle and related reading]

**Location toggle:** In Victoria instead? Our Melbourne office also prepares prenups and binding financial agreements. → `/melbourne/prenuptial-agreements/`

**Related reading:** Family law in Sydney (`/sydney/family-law/`) · Consent orders or a BFA (`/sydney/property-settlement/#consent-vs-bfa`) · Property settlement in Sydney (`/sydney/property-settlement/`) · Are binding financial agreements worth the paper they're written on? (existing article, URL unchanged; CHECK it is imported, Q-5) · Family law mediation in Sydney (`/sydney/mediation/`) · Tash's profile.

## [Rooms image]

As the property page: the Bligh Street meeting rooms. Alt: "Meeting rooms at 25 Bligh Street, Sydney, where couples meet with us to plan their agreements".

## [FAQ] `#faq` (all 12 in FAQPage schema, wording exact)

**Is a prenup legally binding in NSW?**
Yes, if it follows the Family Law Act's requirements. You both sign, each of you first receives independent legal advice from your own lawyer, and the lawyers' signed advice statements are exchanged. The rules come from federal law, so they are the same in NSW as in every other state.

**Does getting married revoke my will in NSW?**
Generally, yes. Under the Succession Act 2006 (NSW), marriage revokes an existing will unless it was made in contemplation of that marriage, or says it was made in contemplation of marriage generally. Review your will whenever you sign a prenup.

**What is notional estate?**
Notional estate is property outside a deceased person's estate that the Supreme Court of NSW can treat as part of it when deciding a family provision claim. It can include jointly owned assets and some transfers made before death. NSW is unusual in having this power.

**Can a prenup stop my partner claiming on my estate?**
Not on its own in NSW. A promise not to bring a family provision claim binds only if the Supreme Court approves the release. Your agreement can still show what you both intended, so plan it alongside your wills.

**Do de facto couples in NSW need a prenup?**
They don't need one, but many benefit from one. De facto couples in NSW are generally covered by the Family Law Act much as married couples are, so if you are buying property together or bringing significant assets into the relationship, an agreement gives you the same certainty.

**Does registering our relationship in NSW matter?**
Yes, it can. A relationship registered under the Relationships Register Act 2010 (NSW) meets the Family Law Act's threshold for de facto property claims without the usual two years. If you plan to register, consider an agreement at the same time.

**Is transfer duty payable if property changes hands under our agreement?**
Often not, if the transfer happens because the relationship has broken down and is made under a binding financial agreement or court orders. Section 68 of the Duties Act 1997 (NSW) provides the exemption. Check with Revenue NSW before the transfer.

**How close to the wedding is too close?**
There is no fixed deadline, but the closer to the wedding an agreement is signed, the easier it is to challenge. In Thorne v Kennedy, the High Court set aside an agreement signed four days before a wedding. Aim to finish months ahead.

**Can one lawyer act for both of us?**
No. Each partner must receive independent legal advice, so you need separate lawyers at separate firms.

**Will an overseas prenup work in Australia?**
Not necessarily. An agreement signed overseas may not meet the Family Law Act's requirements, so an Australian family lawyer should review it. Often the safest course is to sign a new Australian agreement.

**Can we change or end our agreement later?**
Yes. You can replace it with a new agreement, or end it with a termination agreement, following the same formal steps. Many couples review their agreement after children, an inheritance or a business sale.

**Does a prenup deal with our children?**
No. Arrangements for children and child support are handled separately from a financial agreement.

> LEGAL REVIEW (Tash): every answer, especially notional estate, the section 95 release, registration, duty, overseas agreements and termination (section 90J).

## [Consultation CTA] `#book`

**H2:** Plan it properly, and in good time.
**Lede:** Whether you are proposing an agreement or have been asked to sign one, a first conversation will show you where you stand and what to do next. It is confidential, with no obligation.

When you get in touch, we will:
✓ Run a conflict check before anything else
✓ Explain how an agreement would work for your situation, including your wills
✓ Talk through timing, especially if a wedding is planned
✓ Tell you how our fees work, and put an estimate in writing

(02) 8014 5885 · Suite 3, Level 22, 25 Bligh Street, Sydney NSW 2000 · In person, by phone or by video

Same form as the property page. Topic pre-selected to BFA. Delivers to the Sydney team.

## [Trust ribbon] and [Footer]

As the property page, including the general-information disclaimer.

---

## Schema (JSON-LD)

`WebPage` (author and `reviewedBy` Tash, same `@id` as the property and mediation pages; `dateModified`) · `BreadcrumbList` (Home > Sydney > Prenups and binding financial agreements) · `Service` "Binding financial agreements" (alternateName "Prenuptial agreements") with `provider` the Sydney `LegalService` by `@id` (same as the property and mediation pages) and `areaServed` New South Wales · `Person` Tash by `@id` · `FAQPage` with the 12 questions worded exactly. No `priceRange`, no `alumniOf` (D-38). Office details and URLs come from the office config and routes file.

## Images

Hero: Tash's portrait (`mediation-assets/tash-nolan.png`, the property page crop). Mid-page prompt: the same portrait, small. Rooms image: Bligh Street (`room-1-rgb.jpg` or whichever the property page uses), with the alt text above. No stock imagery of couples or rings.

## For the build notes

- Dropped from page 8427 and the March brief: nine dollar figures (including $6,000, $12,000, $80,000 and $10,000), "specialist" (6), the office level, "hundreds of couples", the 50% statistic, witnessing described as a requirement, sworn disclosure, "Child Support Agency", "different states have different property law rules", consent orders as a public record, the Bondi and Mosman examples, 13 em dashes.
- Added that the live page lacked: Thorne v Kennedy, NSW wills (sections 12 and 13), notional estate, section 95 releases, NSW relationship registration and section 90SB, the Property (Relationships) Act, Duties Act section 68, the Sydney and Parramatta registries, the partner asked to sign, and a costs section without figures.
- Sydney does not reuse Melbourne's H2s, routing cards or FAQ wording. The section 90 table is the same component with new labels.
- Search basis (Search Console, 21 Nov 2025 to 20 Nov 2026): see the D-40 entry in `DECISIONS.md` and `sydney-prenup-gsc-baseline.csv`.
