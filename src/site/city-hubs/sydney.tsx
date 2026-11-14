/**
 * Sydney hub: /sydney/family-law/ (D-24). The second city hub, positioned on separation
 * (D-41): "family lawyers sydney" and the brand stay with the homepage. It takes over from
 * /family-lawyer/ and /family-law-services/ (single 301s, REDIRECT-MAP.csv).
 * Prototype: export/sydney-family-law.html. Notes: BUILD-NOTES "Sydney hub".
 *
 * Rules for this page (do not undo): the divorce section stays short and links out (D-43);
 * Parramatta appears only as a court registry, in the court section and one FAQ, never as an
 * office or in schema (D-44); Tash is author and reviewer, Jessica the second card (D-45);
 * no fees (D-02), never "specialist" (D-05), no quick exit (D-07).
 * Legal review by Tash is still open on several sections (BUILD-NOTES, Sydney hub open items).
 */
import { offices } from '@/config/offices';
import { badges, images } from '@/site/images';
import { L, CostsLink } from '@/site/templates/CityHubTemplate';
import type { CityHubConfig } from './types';

const syd = offices.sydney;
const mel = offices.melbourne;

export const sydney: CityHubConfig = {
  route: 'sydneyHub',
  office: 'sydney',
  title: 'Separation Lawyers Sydney | Nolan Family Law & Mediation',
  description: 'Separated, or thinking about it? Early decisions are hard to undo and time limits apply. Our Sydney family lawyers can guide you through each step.',
  dateModified: '2026-11-14',
  cta: 'Talk to our Sydney team',

  author: 'tash',
  reviewer: 'tash',
  employees: ['tash', 'jessica'],
  leadPerson: { key: 'tash', overrides: { knowsAbout: ['Separation', 'Property settlement', 'Parenting arrangements', 'Family law mediation'] } },
  offers: [
    { name: 'Child custody and parenting arrangements', to: 'sydneyChildCustody' },
    { name: 'Property settlement', to: 'sydneyProperty' },
    { name: 'Family law mediation', to: 'sydneyMediation' },
    { name: 'Divorce', to: 'sydneyDivorce' },
    { name: 'Prenuptial and binding financial agreements', to: 'sydneyPrenups' },
    { name: 'De facto relationships', to: 'sydneyDeFacto' },
  ],

  hero: {
    eyebrow: 'Sydney · Separation and divorce',
    h1: 'Separation lawyers in Sydney',
    lede: 'When a relationship ends, the questions arrive all at once: where everyone will live, the children, the money, and what you are allowed to do next.',
    paragraphs: [
      'It is easy to act before you know where you stand. Time limits run from separation and divorce, arrangements made in the first few weeks tend to stick, and informal agreements are rarely binding.',
      'Our Sydney office on Bligh Street, led by Principal Tash Nolan, guides people across New South Wales through separation: parenting arrangements, dividing property, divorce and mediation. We work towards agreement first, and go to the Federal Circuit and Family Court of Australia when that is what it takes.',
    ],
    // 450px JPEG on a white ground, blended into the panel (BUILD-NOTES). A larger original is an open item.
    portrait: { img: images.tashHero, alt: "Tash Nolan, Principal, who leads Nolan Family Law and Mediation's Sydney office", width: '92%', maxWidth: '500px', blend: true },
    nameCard: { name: 'Tash Nolan', role: 'Principal · Sydney' },
    facts: [
      { title: syd.streetShort, text: 'Sydney CBD, or by video' },
      { title: 'Accredited mediators', text: 'Agreement before court' },
      { title: "Doyle's Guide 2026", text: 'Tash recognised in three categories' },
    ],
  },
  byline: { prefix: 'Written and reviewed by', person: 'profile:tash-nolan', name: 'Tash Nolan', role: 'Principal', updated: 'November 2026' },
  subheading: 'Separation in New South Wales, explained plainly, with a Sydney team beside you.',
  quickAnswer: {
    question: 'What happens legally when you separate in NSW?',
    answer: <>{'Separation needs no paperwork and no court. It happens when one of you ends the relationship and acts on it, and you can be separated while still living together. The date matters: divorce is available after 12 months apart, and the time limits for property and spousal maintenance run from divorce for married couples, or from separation for de facto couples. Parenting arrangements, property and divorce are separate processes under the federal Family Law Act 1975, which covers married couples and NSW de facto couples who separated on or after 1 March 2009. Most families settle by agreement or mediation. Nolan Family Law & Mediation advises from '}{syd.streetShort}{', Sydney.'}</>,
  },

  badges: [badges.doyles, badges.lawSocietyNsw, badges.lawCouncil, badges.familyLawSection, badges.aacp, badges.collabNswAct],
  badgeRowWidth: '1100px',

  helpLede: 'Each of these leads to a page written for families in New South Wales, with the same Sydney team behind it.',
  routingCards: [
    { title: 'Protecting my children', text: 'Child custody and parenting arrangements in Sydney', to: 'sydneyChildCustody' },
    { title: 'Dividing property and assets', text: 'Property settlement, superannuation and consent orders in NSW', to: 'sydneyProperty' },
    { title: 'Resolving it without court', text: 'Family law mediation in Sydney, for property and parenting', to: 'sydneyMediation' },
    { title: 'Applying for divorce', text: 'How divorce works in NSW, and what it does not settle', to: 'sydneyDivorce' },
    { title: 'Protecting what I have', text: 'Prenuptial and binding financial agreements in Sydney', to: 'sydneyPrenups' },
    { title: 'I am not sure where to start', text: 'Tell us a little and we will point you the right way', to: '#book' },
  ],

  sections: [
    {
      id: 'separation', toc: 'Separating', label: 'Separating',
      h2: 'What should I do first after separating in Sydney?',
      body: [
        'Separation happens when one of you decides the relationship is over and acts on it. There is no form to file and nobody you have to notify. The date still matters a great deal, because your eligibility for divorce and the time limits for property and maintenance all flow from it, or from what follows it.',
        'You can be separated while still living under the same roof, and many Sydney couples are, often because of housing costs or the children. What counts is whether the relationship has ended in substance: separate rooms, separate finances, telling family and friends. If that is your situation, write down the date and how things changed.',
        <>{'The first few weeks are when people make the decisions that are hardest to undo. Get advice before you move money, sign anything or agree to a care arrangement for the children, and start gathering bank, superannuation and mortgage statements. Our '}<L to="article:your-essential-checklist-when-getting-a-divorce">separation and divorce checklist</L>{' sets out what to collect, and '}<L to="article:11-questions-to-ask-your-divorce-lawyer-at-your-first-meeting">11 questions to ask at your first meeting</L>{' helps you get the most from that first conversation.'}</>,
      ],
      inShort: 'Separation needs no paperwork, but its date starts important clocks. You can be separated under one roof. Get advice early, and gather your financial documents before agreeing to anything.',
    },
    {
      // New on the Sydney hub (D-43). Legal review by Tash open.
      id: 'timelimits', toc: 'Time limits', label: 'Time limits',
      h2: 'What time limits apply after separation in NSW?',
      body: [
        'Separating does not start a deadline for parenting arrangements. Matters about children can be raised at any time while they are under 18, though agreeing early usually serves them best.',
        "Property and spousal maintenance are different. If you were married, you generally have 12 months from the date your divorce order takes effect to apply to the court. If you were in a de facto relationship, you have two years from the date you separated. After that you need the court's permission to apply late, which is not guaranteed.",
        'An agreement can be made binding through consent orders within the same period, which is how most Sydney couples finalise things. If a deadline is close, tell us when you first get in touch.',
      ],
      inShort: "There is no time limit for parenting matters. For property and maintenance, married couples have 12 months from divorce and de facto couples two years from separation, and late applications need the court's permission.",
    },
    {
      // Deliberately short; the divorce page is /sydney/divorce-lawyer/ (D-43).
      id: 'divorce', toc: 'Divorce', label: 'Divorce',
      h2: 'When can I apply for divorce in NSW?',
      body: [
        'Divorce is the formal end of a marriage, and that is all it does. The only ground is that the marriage has broken down irretrievably, shown by at least 12 months of separation, and who was to blame plays no part. If you have been married for less than two years, you generally need to have considered reconciliation with a family counsellor first.',
        <>{'Applications are made online to the Federal Circuit and Family Court of Australia, jointly or by one of you alone, and a divorce order takes effect one month and one day after it is made. Divorce does not divide property or settle arrangements for children, and you do not need to be divorced to deal with either. Our page for '}<L to="sydneyDivorce">Sydney divorce lawyers</L>{' explains the application step by step.'}</>,
      ],
      inShort: 'You can apply after 12 months of separation, and fault is irrelevant. Divorce does not deal with property or children, and it starts the 12 month clock for property claims.',
    },
    {
      id: 'children', toc: 'Children', label: 'Children',
      h2: 'How are parenting arrangements decided in NSW?',
      body: [
        "Parenting law is the same across Australia. Every decision turns on what is in your children's best interests, and since 6 May 2024 the law no longer starts from a presumption that parents share equal parental responsibility. The court considers what keeps the children and their carers safe, the children's views, their developmental, emotional and cultural needs, each parent's capacity to meet those needs, and the benefit of relationships with both parents where that is safe.",
        'Most parents agree arrangements themselves. A parenting plan is a written, signed agreement that is flexible but not enforceable. Consent orders are approved by the court and are binding. Before applying to the court for parenting orders, you generally need to attempt family dispute resolution, a form of mediation, unless there is family violence, a risk of abuse or genuine urgency.',
        <>{'Our page on '}<L to="sydneyChildCustody">child custody and parenting arrangements in Sydney</L>{' explains each step, and our article on '}<L to="article:family-law-and-dads-understanding-your-rights">family law and dads</L>{' answers the questions fathers most often ask us.'}</>,
      ],
      inShort: 'Decisions about children turn on their best interests, and there is no longer a presumption of equal shared parental responsibility. Parents can agree a parenting plan or consent orders, and mediation usually comes before court.',
    },
    {
      id: 'property', toc: 'Property', label: 'Property',
      h2: 'How is property divided after separation in NSW?',
      body: [
        "A property settlement covers everything you own and owe, together or separately: the home, savings, superannuation, businesses, shares, vehicles and debts. Property in one person's name is still part of the picture.",
        <>{'There is no automatic 50/50 split. The court identifies the property, looks at what each of you contributed, financially and otherwise, then at your current and future circumstances, such as the care of children, earning capacity, health and age. The result has to be just and equitable. Since 10 June 2025 the law also says expressly that the economic effect of family violence, and the wasting of assets, can be taken into account. Our article on '}<L to="article:family-law-property-settlements-is-a-50-50-split-the-starting-point">whether a 50/50 split is the starting point</L>{' explains why.'}</>,
        <>{'Most Sydney couples settle by agreement and make it binding through consent orders or a binding financial agreement. Spousal maintenance, which is support for a former partner who cannot meet their reasonable needs, follows the same time limits: see '}<L to="article:understanding-spousal-maintenance">understanding spousal maintenance</L>{' and '}<L to="article:do-i-have-to-pay-spousal-maintenance">do I have to pay spousal maintenance?</L>{' Our '}<L to="sydneyProperty">Sydney property settlement</L>{' page goes further.'}</>,
      ],
      inShort: 'Everything either of you owns or owes is considered, and there is no automatic equal split. Most settlements are agreed and made binding by consent orders or a financial agreement, within strict time limits.',
    },
    {
      id: 'defacto', toc: 'De facto couples', label: 'De facto couples',
      h2: 'Do de facto couples in NSW have the same rights as married couples?',
      body: [
        'Largely, yes. New South Wales referred its powers over de facto financial matters to the Commonwealth, so for couples who separated on or after 1 March 2009, de facto property settlements and maintenance are dealt with under the Family Law Act, by the same court and on the same principles as for married couples. The same applies to same sex couples. Couples who separated before then fall under the NSW Property (Relationships) Act 1984.',
        'To apply, you generally need to show one of the following: the relationship lasted at least two years in total, you have a child together, one of you made substantial contributions and it would be a serious injustice not to make orders, or the relationship was registered under the NSW Relationships Register Act 2010. The relationship also needs a sufficient connection with New South Wales or another participating jurisdiction.',
        <>{'The time limit is two years from separation, and there is no divorce to wait for. Our page for '}<L to="sydneyDeFacto">de facto relationship lawyers in Sydney</L>{' explains eligibility and the exceptions, and our article on '}<L to="article:the-family-court-and-de-facto-relationships">the Family Court and de facto relationships</L>{' covers how cases run.'}</>,
      ],
      inShort: 'De facto couples in NSW who separated on or after 1 March 2009 have broadly the same property and maintenance rights as married couples, under federal law. Eligibility rules apply, and the deadline is two years from separation.',
    },
    {
      id: 'mediation', toc: 'Mediation', label: 'Mediation',
      h2: 'Can we resolve this without going to court?',
      body: [
        'Usually, yes. Most family law matters in Sydney are settled by negotiation or mediation rather than decided by a judge, and the court expects you to try. Mediation brings you both, with or without lawyers, into a structured conversation led by a neutral mediator. It is generally quicker, less costly and more private than court, and you keep control of the outcome.',
        // D-13: both are Nationally Accredited Mediators; no claim to issue section 60I certificates.
        'Tash Nolan and Jessica Swain, both Nationally Accredited Mediators, offer family law mediation for property and parenting matters at our Bligh Street office or by video. Where there has been family violence or there is a serious imbalance of power, mediation may not be appropriate, and nobody should feel pressured into it. For parenting matters, a certificate from a registered family dispute resolution practitioner is generally needed before you can apply to the court.',
        <>{'Read more about '}<L to="sydneyMediation">family law mediation in Sydney</L>{'.'}</>,
      ],
      inShort: 'Most matters settle without a trial. Our Sydney mediators help with property and parenting disputes, in person or by video. Parenting cases generally need a dispute resolution certificate before court.',
    },
    {
      // Parramatta is a court registry only (D-44).
      id: 'court', toc: 'Going to court', label: 'Going to court',
      h2: 'What happens if your matter goes to court in Sydney?',
      body: [
        'Family law cases in New South Wales are heard by the Federal Circuit and Family Court of Australia. Its Sydney registry is in the Lionel Bowen Commonwealth Law Courts Building at 97-99 Goulburn Street, a short trip from our Bligh Street office. There is also a registry in the Garfield Barwick Commonwealth Law Courts Building at 1-3 George Street, Parramatta, and depending on the matter, your case may be managed there.',
        'Starting proceedings does not mean a trial. Most cases still settle along the way, and the court runs them through conferences and dispute resolution before any final hearing. Where a child or property is at immediate risk, urgent applications can be heard quickly.',
        'Apprehended violence orders are separate. In New South Wales they are made by the Local Court under state law, and an apprehended domestic violence order can sit alongside a family law case. If you need one, or have been served with one, tell us early, because it shapes how everything else is handled, including whether mediation is suitable.',
      ],
      inShort: 'NSW family law cases go to the Federal Circuit and Family Court in Goulburn Street, Sydney, or at Parramatta, and most still settle before a final hearing. Apprehended violence orders are made separately by the Local Court.',
    },
    {
      id: 'costs', toc: 'What it costs', label: 'What it costs',
      h2: 'What does a separation lawyer in Sydney cost?',
      body: [
        'It depends on what your matter needs, so we do not publish a price list. Cost is shaped by whether you and your former partner can agree, how complex your finances are, and whether valuations, mediation or court are involved.',
        <>{'We explain how our fees work at the first meeting, put an estimate in writing and keep you updated as things move. Reaching agreement, through negotiation or mediation, is almost always the less costly path, and we will tell you honestly when we think it is open to you. '}<CostsLink />{'.'}</>,
      ],
      inShort: 'There are no fixed fees. We explain how fees work at the start, give you a written estimate and keep you updated.',
    },
  ],
  midAfter: 'defacto',
  mid: {
    text: 'The general rules only go so far. A short conversation with our Sydney team will tell you where you stand, what your options are and what to do first. It is confidential, and it commits you to nothing.',
    img: images.tashHero,
    objectPosition: '50% 18%',
  },

  lawyer: {
    h2: 'Your separation lawyer in Sydney',
    lead: {
      img: images.tashHero,
      alt: 'Tash Nolan, Principal at Nolan Family Law and Mediation in Sydney',
      name: 'Tash Nolan',
      role: 'Principal · Sydney office',
      // Doyle's wording as Ben supplied it (D-45).
      body: [
        <>{"Tash is the firm's Principal and leads our Sydney office at "}{syd.streetShort}{'. She holds a Master of Applied Law (Family Law), is a Nationally Accredited Mediator, and acts in parenting matters, property settlements and complex financial cases.'}</>,
        "She has been recognised as a Recommended Lawyer in Doyle's List of Family & Divorce Lawyers, Sydney, every year since 2023. In 2026 she is individually recognised, for the fourth year in a row, in three categories:",
        { list: ['Leading Family & Divorce Lawyers, Sydney', "Leading Parenting & Children's Matters", 'Leading Family Lawyers, High Net-Worth and Complex Financial Matters'] },
        <><L to="profile:tash-nolan">{"Read Tash's full profile"}</L>{', or see '}<L to="team">everyone at the firm</L>{'.'}</>,
      ],
    },
    second: {
      img: images.jessica,
      alt: 'Jessica Swain, Partner',
      // Open item: Jessica to confirm this summary.
      body: <><L to="profile:jessica-swain">Jessica Swain</L>{', Partner, works alongside Tash in Sydney. A Nationally Accredited Mediator with a background in psychology, she acts in complex property matters, including those involving trusts, and in parenting matters.'}</>,
    },
  },
  reviewsHeading: 'What clients say about working with us',

  toggle: {
    to: 'melbourneHub',
    eyebrow: 'In Victoria instead?',
    title: <>{'Our Melbourne family lawyers are at '}{mel.streetShort}</>,
    text: 'The same firm and the same approach, with a Melbourne team and Victorian registries',
  },
  guides: {
    label: 'Melbourne toggle and Sydney guides',
    eyebrow: 'Sydney guides',
    h2: 'Reading for families in New South Wales',
    cards: [
      { title: 'Your separation and divorce checklist', text: 'What to gather, and in what order', to: 'article:your-essential-checklist-when-getting-a-divorce' },
      { title: '11 questions to ask your lawyer', text: 'Getting the most from a first meeting', to: 'article:11-questions-to-ask-your-divorce-lawyer-at-your-first-meeting' },
      { title: 'Is a 50/50 split the starting point?', text: 'Why property is rarely divided equally by default', to: 'article:family-law-property-settlements-is-a-50-50-split-the-starting-point' },
      { title: 'Dividing your assets during a separation', text: 'What the law looks at, and what it does not', to: 'article:thats-not-fair-the-truth-about-dividing-your-assets-during-a-separation' },
      { title: 'Understanding spousal maintenance', text: 'Who qualifies, and how long it lasts', to: 'article:understanding-spousal-maintenance' },
      { title: 'Family law and dads', text: 'Your rights and responsibilities as a father', to: 'article:family-law-and-dads-understanding-your-rights' },
    ],
  },

  faqHeading: 'Separation in Sydney, answered plainly',
  faq: [
    { q: 'What does a separation lawyer do?', a: 'A separation lawyer is a family lawyer who helps you through the legal side of ending a relationship: parenting arrangements, dividing property and superannuation, spousal maintenance and, if you were married, divorce. Most of the work is advice and negotiation, so that you can reach an agreement and make it binding without going to court.' },
    { q: 'How much does a family lawyer cost in Sydney?', a: <>{'It depends on what your matter needs, so we do not publish a price list. Cost is shaped by whether you and your former partner can agree, how complex your finances are, and whether valuations, mediation or court are involved. We explain how our fees work at the first meeting and put an estimate in writing. '}<CostsLink />{'.'}</> },
    { q: 'Do I need to register or file anything when we separate?', a: 'No. There is no legal process for separating in Australia. You separate, and the date you did so becomes important. It helps to note the date and to tell your former partner clearly, in writing if it is safe to do so.' },
    { q: 'Can we be separated but still live together?', a: 'Yes. Separation under one roof is recognised, and many couples live together for a while after separating. What matters is that the relationship has ended in substance. Keep a note of the date and how your living arrangements changed, in case it is questioned later.' },
    { q: 'How long do I have to sort out property after separating in NSW?', a: "Married couples generally have 12 months from when a divorce order takes effect to apply to the court for property orders. De facto couples have two years from separation. After that you need the court's permission, which is not guaranteed, so it is best to act well before either deadline." },
    { q: 'How soon after separating can I apply for divorce in NSW?', a: 'You need to have been separated for at least 12 months. If you have been married for less than two years, you generally also need to have considered reconciliation with a family counsellor. Applications are made online to the Federal Circuit and Family Court of Australia, and an order takes effect one month and one day after it is made.' },
    { q: 'Is property always split 50/50 in NSW?', a: 'No. There is no presumption of an equal split. The court looks at what each of you contributed, financially and otherwise, and at your current and future circumstances, and the result has to be just and equitable in your situation. Some settlements end up close to equal and many do not.' },
    { q: 'Do de facto couples have the same property rights as married couples in NSW?', a: 'Broadly, yes. For couples who separated on or after 1 March 2009, de facto property and maintenance claims are dealt with under the Family Law Act in the same court and on the same principles. You generally need a relationship of at least two years, a child together, substantial contributions, or a registered relationship, and you must apply within two years of separating.' },
    { q: 'Is mediation compulsory before going to court in NSW?', a: 'For parenting matters, you generally need to attempt family dispute resolution and obtain a certificate before applying to the court, unless there is family violence, a risk of abuse or urgency. For property matters, the court expects you to make genuine attempts to resolve things first, and mediation is the usual way to do that.' },
    { q: 'What is the difference between a parenting plan and consent orders?', a: 'A parenting plan is a written, signed agreement between parents. It is flexible but not legally enforceable. Consent orders are approved by the Federal Circuit and Family Court and are binding, so they suit families who want certainty.' },
    // The one FAQ that names Parramatta, as a registry (D-44).
    { q: 'Where is the Family Court in Sydney?', a: 'Family law cases are heard by the Federal Circuit and Family Court of Australia. Its Sydney registry is in the Lionel Bowen Commonwealth Law Courts Building at 97-99 Goulburn Street. There is also a registry in the Garfield Barwick Commonwealth Law Courts Building at 1-3 George Street, Parramatta.' },
    { q: 'Who will I work with at your Sydney office, and can we meet by video?', a: <>{'Our Sydney office is led by Tash Nolan, Principal, with Jessica Swain, Partner, and the wider Nolan team. You can meet us at '}{syd.streetShort}{', or by phone or video if that is easier, including from regional New South Wales.'}</> },
  ],

  contact: {
    lede: 'You do not need to have everything worked out before you call. Tell us a little about your situation and we will explain your options in New South Wales, and what each would involve.',
    // As the prototype shows it: the street line and postcode, from the office config.
    address: `${syd.street}, ${syd.suburb} ${syd.state} ${syd.postcode}`,
  },
};
