# Melbourne prenuptial agreements page: copy draft v2, laid out against the service page template

**22 Nov 2026 · Replaces v1 (same copy, now slotted into the template, plus the missing court section and fixes)**

Template: DESIGN.md §8 inner-page template, forked from `property-settlement-sydney.html` (approved 12 Nov). Header with the phone strip (D-30), Melbourne-first nav (D-34), Melbourne-specific components and accreditations from `melbourne-family-law.html`. Only the copy, anchors, routing cards and schema below are new. No new components.

| Item | Value |
|---|---|
| URL | `/melbourne/prenuptial-agreements/` (routes file). 301s from `/melbourne-family-law/prenuptial-agreement-melbourne/` (WP 15889) and `/prenuptial-agreement-melbourne/` |
| Canonical | `https://www.nolanlawyers.com.au/melbourne/prenuptial-agreements/` (self-referential) |
| Title tag | `Prenup Lawyers Melbourne \| Binding Financial Agreements \| Nolan` (61 characters) |
| Meta description | `Bringing a home, business or inheritance into a relationship? Without a valid agreement, a court decides who keeps what. Talk to our Melbourne team.` (PAS, 152 characters) |
| H1 | `Prenups and binding financial agreements in Melbourne` |
| Author / reviewer | Anastasia Simes, Partner (author) · Tash Nolan, Principal (reviewedBy, Q-13 confirmed 22 Nov) |
| Hub change | On `/melbourne/family-law/` the prenup routing card uses the anchor "binding financial agreements in Melbourne". This page owns that term (Ben, 22 Nov) |

**Section map (`data-screen-label` → anchor id):** Navigation (phone strip, Melbourne first) · Hero · Breadcrumb and byline · Quick Answer · Accreditations · How can we help you (`#help`) · Guide wrapper with sticky "On this page" · Who it is for (`#who`) · What it is (`#what`) · What makes it binding (`#binding`) · De facto and registered relationships (`#defacto`) · Your will and estate (`#wills`) · Mid-page prompt · Property and duty (`#property`) · What it can't do (`#limits`) · If you've been asked to sign one (`#asked`) · How it works with us (`#process`) · If an agreement is challenged (`#challenge`) · Raising it with your partner (`#talking`) · Your Melbourne lawyer · Sydney toggle and related reading · FAQ (`#faq`) · Consultation CTA (`#book`) · Trust ribbon · Footer.

Yellow review notes (`showReviewNotes`) carry every LEGAL REVIEW and CHECK below, as on the property page.

---

## [Hero]

**Eyebrow:** Melbourne · Prenups and BFAs

**H1:** Prenups and binding financial agreements in Melbourne

**Sub-heading:** Agreeing now, calmly, on what happens to your property if things change.

**Lede (PAS):**
You are planning a life together, and somewhere between the venue and the guest list one of you has raised the question of a prenup. Perhaps there is a home you bought on your own, a share in a family business, or an inheritance your parents would like kept in the family.

It is an awkward conversation, and it is easy to put off. Yet leaving it late is exactly what puts an agreement at risk, and leaving it out altogether means that, if the relationship ever ends, the Family Law Act and possibly a court decide what happens to everything you have built.

A binding financial agreement lets the two of you decide those questions now, on your own terms. Our Melbourne office helps couples put agreements in place properly, with enough time, clear advice and a document built to hold.

**Buttons:** [Talk to us] (primary, to `#book` with topic BFA) · [(03) 9088 8889] (PhoneLink, `click_location=body`)

**Image:** Anastasia's portrait with name card, as on the hub (`melbourne-assets/anastasia-simes-hub-live.png`).

**Fact strip (three cells):** Before or after the wedding · De facto couples too · Bourke Street or by video

## [Breadcrumb and byline]

Home / Melbourne / Prenups and binding financial agreements
Written with Anastasia Simes, Partner · Reviewed by Tash Nolan, Principal · Updated November 2026

## [Quick Answer]

**Quick answer:** In Victoria, a prenup is a binding financial agreement made under the federal Family Law Act 1975. It records how property, money and superannuation will be divided if a marriage or de facto relationship ends. It is binding only if both partners receive independent legal advice from separate lawyers before signing and the other formal requirements of the Act are met. Signing well before a wedding, with full financial disclosure, makes an agreement far harder to challenge. A prenup does not cover parenting arrangements and it does not take the place of a will.

## [Accreditations]

The Melbourne hub's four badges: Doyle's, Law Council of Australia, Family Law Section, AACP. Add the Law Institute of Victoria only once Q-12 is confirmed (Ben believes both the firm and Anastasia are members, 22 Nov).

## [How can we help you] `#help`

**H2:** Where are you starting from?

Six routing cards, same component as the property page:

1. **We're getting married** · You want an agreement in place well before the day. → `#binding`
2. **We live together, or are about to** · De facto and registered relationships. → `#defacto`
3. **A second marriage, with children of our own** · Keeping what you meant for them safe. → `#wills`
4. **A family business, farm or trust** · Protecting what the wider family relies on. → `#property`
5. **My partner has asked me to sign one** · You need your own lawyer, and we can be it. → `#asked`
6. **Not sure where to start** · Tell us a little and we will call you. → `#book` (topic BFA)

---

## [Guide, with sticky "On this page"]

### Is a prenup worth having, and who is it for? `#who`

Most couples never need to rely on a financial agreement. Its value lies in the certainty it gives while the relationship is going well, and in the time and cost it saves if it is ever needed.

The couples who come to our Melbourne office usually have something specific they want to look after. One partner may own a home bought before the relationship, or be the next generation in a family farm in regional Victoria. A couple marrying for the second time may want to make sure their adult children still inherit what was always meant for them. Someone may hold an interest in a family trust that the wider family would like kept separate. Others have moved to Melbourne from overseas with an agreement signed elsewhere and want to know whether it still works here.

None of these situations means a relationship is expected to fail. They mean there is something one or both of you are responsible for beyond the two of you, and an agreement is a way of honouring that.

> **In short:** A prenup is most useful where there is a home, business, farm, trust or inheritance to protect, or children from an earlier relationship. It is about clarity, not mistrust.

### What is a binding financial agreement? `#what`

"Prenup" is the everyday word. The legal term in Australia is a financial agreement, often called a binding financial agreement or BFA. It is a private contract made under the Family Law Act 1975, which is federal law, so the same rules apply in Melbourne as anywhere else in Australia. What changes from state to state is the law that sits around the agreement, such as wills, estates and duty, and that is where much of this page focuses.

An agreement can be made at four points in a relationship:

| When | Married couples | De facto couples |
|---|---|---|
| Before the relationship formally begins | Section 90B | Section 90UB |
| During the relationship | Section 90C | Section 90UC |
| After separation | Section 90D (after a divorce order) | Section 90UD |

(Uses the property page's comparison table component: scrolls sideways in its own container on phones.)

Each can deal with property, financial resources and superannuation, and can address maintenance of one partner by the other. A well-drafted agreement also records the reasons behind its terms, which helps if anyone later has to interpret it.

> LEGAL REVIEW (Tash): the six sections and how the table frames them (90D after a divorce order; 90C also covers after separation but before divorce); superannuation splitting under an agreement.

> **In short:** A prenup is a federal financial agreement that can be signed before, during or after a marriage or de facto relationship. Victorian law matters for what surrounds it.

### What makes a prenup binding, and what gets one set aside? `#binding`

An agreement only binds you if the Family Law Act's formal steps are followed exactly. Under section 90G, both of you must sign it. Before signing, each of you must receive independent legal advice from your own lawyer about how the agreement affects your rights and its advantages and disadvantages to you at that time. Each lawyer gives their client a signed statement confirming that advice was given, and a copy of each statement goes to the other partner or their lawyer. After signing, each of you receives the original or a copy. The Act does not require the agreement to be witnessed, and it is not filed with a court.

Even an agreement that ticks every box can be set aside in the circumstances listed in section 90K. They include fraud, which covers failing to disclose something material about your finances; an agreement made under duress, undue influence or through unconscionable conduct; an agreement that has become impracticable to carry out; and a material change relating to the care of a child that would cause hardship if the agreement stood.

The case that shapes how we time agreements is **Thorne v Kennedy [2017] HCA 49**. The High Court set aside agreements that one partner signed in the days around her wedding, after her own lawyer had advised her not to, because of the pressure she was under at the time. The lesson is simple: an agreement signed under the weight of a looming wedding date is vulnerable, however carefully it is drafted.

> LEGAL REVIEW (Tash): section 90G elements, including 90G(1)(ca); "not witnessed" and "not filed with a court" wording; the section 90K grounds as listed; the Thorne v Kennedy summary (timing, independent advice against signing, undue influence and unconscionable conduct).

> **In short:** Separate lawyers, signed advice statements, full disclosure and time without pressure are what make an agreement hold. Thorne v Kennedy is why the week before a wedding is never enough.

### Do de facto couples in Victoria need a prenup? `#defacto`

Many people searching for a prenup in Melbourne are not planning to marry. They are moving in together, buying a first home, or have been together for years without seeing the need for a wedding.

Victoria referred its powers over de facto property matters to the Commonwealth, so de facto couples who separated on or after 1 March 2009 are covered by the Family Law Act in much the same way as married couples. A de facto couple makes a financial agreement under Part VIIIAB of the Act, not under a state law, and the requirements for it to be binding are in section 90UJ, which mirrors section 90G.

Victoria also allows couples to register their relationship under the Relationships Act 2008. Registration matters more than many people realise. Ordinarily, a de facto partner can apply for a property order only if the relationship lasted at least two years, or another condition applies, such as having a child together. A relationship registered under a state law like Victoria's can meet that threshold on its own. If you are registering, it is a natural moment to think about an agreement as well.

> LEGAL REVIEW (Tash): the 1 March 2009 wording (matches the hub); Part VIIIAB and section 90UJ; section 90SB and whether Victorian registration satisfies it; whether to name Births, Deaths and Marriages Victoria.

> **In short:** De facto couples in Victoria use the same federal agreements as married couples. Registering your relationship can bring you within the Family Law Act sooner, so plan both together.

### Does a prenup affect my will in Victoria? `#wills`

This is the part of the picture couples most often miss.

**Marriage can cancel your will.** Under section 13 of the Wills Act 1997 (Vic), a will made before a marriage is generally revoked by that marriage, unless it was made in contemplation of it. If you have a will that leaves your home or business to your children from an earlier relationship and you then marry, that will may no longer stand. Divorce has its own effect: it generally revokes gifts to a former spouse and their appointment as executor, unless the will shows a different intention.

**An agreement deals with separation, not with death.** A financial agreement sets out what happens if the relationship ends. The Family Law Act provides that an agreement continues to operate if one of you dies, but it does not stop a family provision claim under Part IV of the Administration and Probate Act 1958 (Vic), a separate system that lets certain people ask the Supreme Court for a share of an estate. What you have agreed may be relevant to such a claim, but it does not decide it.

The practical answer is to treat the agreement and your wills as one piece of planning. Anastasia drafts wills as well as financial agreements, so the two can be looked at side by side, with each of you still taking your own independent advice on the agreement.

> LEGAL REVIEW (Tash): section 13 and the "in contemplation" exception; the divorce effect (section 14); section 90H; how far an agreement can bear on a Part IV claim. CHECK (Ben): Anastasia is happy to be named for wills.

> **In short:** In Victoria, getting married can revoke your existing will, and a prenup does not prevent an estate claim. Update your wills when you sign your agreement.

## [Mid-page prompt] (D-31, one per page, `data-cta-position="mid"`)

Anastasia's photo · **Thinking about an agreement before a wedding or a move?** The earlier we talk, the more options you have. [Talk to us] · (03) 9088 8889

### How does a prenup deal with property, and is duty payable? `#property`

Most agreements centre on property: a home owned before the relationship, a property bought together, a family business, or land that has been in one family for generations. A good agreement says plainly who keeps what, how any increase in value is treated, and what happens if one of you contributes to a property the other owns. Where a family trust or company is involved, the agreement needs to deal with your interest in it carefully, and the wider family's advisers may need to be involved.

If an agreement is ever carried out, property may need to change hands. In Victoria, a transfer made solely because a marriage or domestic relationship has broken down can be exempt from land transfer duty. The State Revenue Office explains that the exemption covers transfers to either partner, to dependent children, or to a trustee for any of them, where no-one else takes an interest. Whether it applies to your transfer depends on the facts, so treat this as general information and confirm it with the State Revenue Office at the time.

> LEGAL REVIEW (Tash): Duties Act 2000 (Vic) section 44, and that a transfer under a financial agreement (not only court orders) can qualify; the trust and company sentence.

> **In short:** Your agreement should be clear about each property and business interest. If property later changes hands because the relationship has ended, Victorian duty may not apply, but check with the State Revenue Office.

### What can't a prenup do? `#limits`

A financial agreement can't decide where your children live or how much time they spend with each of you. Parenting arrangements are always worked out separately, based on the children's best interests at the time.

Child support is also dealt with separately from a financial agreement, through Services Australia and the child support legislation. And an agreement that tries to rule out spousal maintenance has a limit built into the Act: such a provision has no effect if, when it comes into play, the partner concerned could not support themselves without an income-tested government payment.

> LEGAL REVIEW (Tash): section 90F wording; child support kept to "dealt with separately".

> **In short:** Prenups cover money and property between the two of you. Children's arrangements and child support sit outside them.

### My partner has asked me to sign a prenup. What should I do? `#asked`

Being handed an agreement can feel unsettling, especially if a wedding is close. You are not expected to sign anything you do not understand, and the law requires you to have your own lawyer, at a different firm from your partner's, before you sign.

Your lawyer's job is to explain what the agreement means for you, whether it is fair to you, and what you might ask to change. Many agreements are improved by that conversation. If you feel rushed or pressured, say so: time is one of the things that protects you both. Our Melbourne team regularly acts for the partner who receives an agreement, as well as the one who proposes it.

> CHECK (Ben): confirm the last sentence ("regularly acts for the partner who receives an agreement") with Anastasia, or soften to "can act for".

> **In short:** Take your time, get your own lawyer, and ask questions. A fair agreement is one you both understand.

### How does the process work with our Melbourne office? `#process`

Every agreement is different, but the stages are much the same.

It starts with a confidential first conversation, at Bourke Street or by video if you are elsewhere in Victoria. We talk through what you want to protect and why, and what your partner is likely to need to feel the agreement is fair to them. Your partner will need their own lawyer at a different firm. That is a legal requirement, and it is also what protects you both.

Next comes disclosure. Each of you sets out your assets, debts, income and superannuation, along with anything you expect to receive. It does not need to be sworn, but leaving something out is one of the most common reasons an agreement is later challenged, so we encourage complete, documented disclosure.

We then draft the agreement and your partner's lawyer reviews it. There is usually some negotiation, which is healthy: an agreement both of you understand and accept is much stronger than one presented as final. Once the terms are settled, each of you receives your independent advice, signs, and keeps a copy, and we hold the original safely.

How long it takes depends on how complex your finances are and how quickly disclosure comes together, so we will not promise a timeframe. The agreement should be finished well before the wedding, not in its final weeks. If you have set a date, the best time to call is now.

Our approach to costs is simple: clear costs from day one, explained in your first conversation. [Talk to us about costs] (sets topic=fees, scrolls to `#book`)

> **In short:** First conversation, disclosure, drafting, review by your partner's lawyer, advice and signing. Start months before a wedding, not weeks.

### What happens if an agreement is ever challenged? `#challenge`

Most agreements are never tested. If one is, the application is heard in the Federal Circuit and Family Court of Australia, which sits in Melbourne at the Owen Dixon Commonwealth Law Courts Building on William Street and also has a registry in Dandenong. A carefully made agreement, with full disclosure, proper advice and plenty of time, is the best protection against ever needing to go there.

> LEGAL REVIEW (Tash): registry wording, matching the hub (305 William Street, Owen Dixon Commonwealth Law Courts Building; Dandenong).

> **In short:** Challenges are heard by the federal family court in Melbourne or Dandenong. Doing it properly the first time is what keeps you out of court.

### How do I raise a prenup with my partner? `#talking`

For many people this is the hardest part. It can feel as if suggesting an agreement means you are planning for the worst.

It helps to start from the reason, not the document. "Mum and Dad want the farm to stay in the family" or "I want my kids to know the house is theirs one day" is easier to hear than "I think we need a prenup". It also helps to raise it early, long before anything is booked, so it is a conversation rather than a condition.

Many couples find the process brings them closer. Talking openly about money, debts and expectations is something most relationships benefit from, and each of you has your own lawyer to make sure your interests are looked after.

> **In short:** Start with why it matters to you, raise it early, and let the process do the rest.

---

## [Your Melbourne lawyer] (hub's city lead card plus the slim Principal card)

**Anastasia Simes, Partner, Melbourne.** Anastasia leads our Melbourne practice at 385 Bourke Street. She has practised family law for more than a decade, with experience in complex financial matters, and she also drafts wills, which makes her well placed to look at an agreement alongside your estate planning. [Read Anastasia's profile]

**Slim card:** Tash Nolan, Principal, who reviewed this page. Doyle's Guide has recognised the firm every year since 2023.

> CHECK (Ben): "more than a decade" follows the hub's rule until her years are confirmed (her live profile says 11).

## [Sydney toggle and related reading]

**Location toggle:** In New South Wales instead? Our Sydney team also prepares prenups and binding financial agreements. → `/sydney/prenuptial-agreements/`

**Related reading:** Family law in Melbourne (`/melbourne/family-law/`) · Property settlement in Melbourne (`/melbourne/property-settlement/`) · De facto property rights in Victoria (D-28 article; hide the card until it is live) · Anastasia's profile.

## [FAQ] `#faq` (all 12 in FAQPage schema, wording exact)

**Is a prenup legally binding in Victoria?**
Yes, if it meets the requirements of the Family Law Act. Both partners must sign, each must receive independent legal advice from their own lawyer before signing, and the lawyers' signed statements must be exchanged. Because the law is federal, the rules are the same in Victoria as in the rest of Australia.

**Do de facto couples in Victoria need one?**
Not every de facto couple needs an agreement, but the Family Law Act applies to Victorian de facto couples much as it does to married couples. If you have significant assets or are buying property together, an agreement gives you the same certainty a married couple can have.

**Does registering our relationship change anything?**
It can. A relationship registered under the Relationships Act 2008 (Vic) can allow either partner to seek property orders without waiting for the relationship to reach two years. If you are planning to register, consider an agreement at the same time.

**Does getting married cancel my will?**
In Victoria, marriage generally revokes a will made before it, unless the will was made in contemplation of that marriage. Anyone signing a prenup should review their will at the same time.

**Can my partner still make a claim on my estate?**
Possibly. A financial agreement deals with separation. A family provision claim under Victorian law is a separate process, and an agreement does not automatically prevent one. Plan your wills and your agreement together.

**How close to the wedding is too close?**
There is no fixed cut-off, but an agreement signed shortly before a wedding is more open to challenge, as the High Court's decision in Thorne v Kennedy showed. Aim to have it finished well before the date, ideally before major arrangements are locked in.

**Can we use the same lawyer?**
No. Each of you must receive independent legal advice, which in practice means separate lawyers at separate firms.

**Is an overseas prenup valid here?**
Not automatically. An agreement made overseas may not meet the Family Law Act's requirements, so have it reviewed by an Australian family lawyer. Often the answer is a new Australian agreement.

**Is duty payable if property changes hands under the agreement?**
In Victoria, a transfer made solely because a marriage or domestic relationship has ended can be exempt from land transfer duty. Whether it applies depends on the transfer, so check with the State Revenue Office at the time.

**Can an agreement be changed later?**
Yes. You can make a new agreement that replaces the old one, or end it with a termination agreement, following the same formal steps. Many couples review their agreement after major events such as children or an inheritance.

**Does a prenup cover our children?**
No. Parenting arrangements and child support are dealt with separately from a financial agreement.

**What happens if we never sign one?**
If the relationship ends, property is divided under the Family Law Act, by agreement between you or, if you can't agree, by the court, looking at contributions and future needs.

> LEGAL REVIEW (Tash): every answer, especially registration, estate claims, overseas agreements, termination (section 90J) and duty.

## [Consultation CTA] `#book`

**Talk it through with someone who has seen it before.**
A first conversation is confidential and there is no obligation. Visit us at 385 Bourke Street, Melbourne, or meet by video from anywhere in Victoria.
[Book a consultation] · (03) 9088 8889

Same form as the hub. Topic pre-selected to BFA. Delivers to the Melbourne team.

## [Trust ribbon] and [Footer]

As the hub, including the general-information disclaimer from the property page.

---

## Schema (JSON-LD)

`WebPage` (author Anastasia `/our-team/anastasia-simes/#person`, `reviewedBy` Tash's `@id` as on the Sydney pages, `dateModified`) · `BreadcrumbList` (Home > Melbourne > Prenups and binding financial agreements) · `Service` "Binding financial agreements" with `provider` `/melbourne/family-law/#office` and `areaServed` Victoria · `Person` Anastasia by `@id` · `FAQPage` with the 12 questions worded exactly. No `priceRange`, no `alumniOf` (D-38). Office and URLs from the office config and routes file.

## Images

Hero and mid-page prompt: Anastasia (`melbourne-assets/anastasia-simes-hub-live.png`; a larger original is still needed). **No rooms image:** the property page's rooms photo is Bligh Street, and there are no Bourke Street photos on file. Leave the slot out unless Ben has one.

## Changes from v1

Slotted into the template with anchors, eyebrow, breadcrumb and byline, fact strip, routing cards and section labels. Section 90 table replaces the only bullet list. Added `#asked` (the partner receiving an agreement) and `#challenge` (the missing registry section from the handoff, item 5). Anastasia's years changed to "more than a decade" to match the hub rule. Copy is otherwise unchanged.

## For the build notes

- Dropped from the brief and live page: 13 em dashes, "specialist" (6), the level (2), "hundreds of couples", the 50% statistic, witnessing, sworn disclosure, the state-law FAQ.
- Sydney twin (own session): same faults, plus nine dollar figures and no Thorne v Kennedy.
- D-36 thresholds confirmed by Ben on 22 Nov: 30% for service pages, 50% for city hubs. Update `DECISIONS.md` when the folder reconnects.
