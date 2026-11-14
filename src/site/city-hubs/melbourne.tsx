/**
 * Melbourne hub: /melbourne/family-law/ (D-23, D-32). The first city hub, and the most
 * valuable page that moves at launch. Prototype: export/melbourne-family-law.html.
 * Notes: BUILD-NOTES "Melbourne hub". The copy is the approved copy: change wording only
 * with Ben's sign-off.
 */
import { offices } from '@/config/offices';
import { badges, images } from '@/site/images';
import { L, LL, CostsLink } from '@/site/templates/CityHubTemplate';
import type { CityHubConfig } from './types';

const mel = offices.melbourne;
const syd = offices.sydney;

export const melbourne: CityHubConfig = {
  route: 'melbourneHub',
  office: 'melbourne',
  title: 'Family Lawyers & Mediation Melbourne | Nolan Family Law',
  description: 'Separating in Victoria and unsure where to start? Time limits run from separation and divorce. Our Melbourne family lawyers and mediators can help you.',
  dateModified: '2026-11-12',
  cta: 'Talk to our Melbourne team',

  reviewer: 'anastasia',
  employees: ['anastasia'],
  leadPerson: { key: 'anastasia' },
  offers: [
    { name: 'Child custody and parenting arrangements', to: 'melbourneChildCustody' },
    { name: 'Property settlement', to: 'melbourneProperty' },
    { name: 'Family law mediation', to: 'melbourneMediation' },
    { name: 'Prenuptial and binding financial agreements', to: 'melbournePrenups' },
    { name: 'Separation and divorce', to: 'melbourneHub', hash: 'divorce' },
    // The article is planned (D-28): listed once its page exists.
    { name: 'Spousal maintenance', to: 'articleSpousalMaintenanceMelbourne', liveOnly: true },
  ],

  hero: {
    eyebrow: 'Melbourne · Family law and mediation',
    h1: 'Family lawyers and mediation in Melbourne',
    lede: 'When a relationship ends, the questions arrive all at once: the children, the home, the money, and what happens next.',
    paragraphs: [
      'Left alone, they rarely get easier. Time limits run from separation and divorce, informal arrangements are seldom binding, and decisions made in the first few weeks have a way of sticking.',
      'Our Melbourne office on Bourke Street, led by Partner Anastasia Simes, helps Victorian families settle parenting, property and financial matters. We work towards agreement first, through negotiation and mediation, and go to the Federal Circuit and Family Court of Australia when that is what it takes.',
    ],
    portrait: { img: images.anastasia, alt: "Anastasia Simes, Partner, who leads Nolan Family Law and Mediation's Melbourne office", width: '88%', maxWidth: '470px' },
    nameCard: { name: 'Anastasia Simes', role: 'Partner · Melbourne' },
    facts: [
      { title: mel.streetShort, text: 'Melbourne CBD, or by video' },
      { title: 'Mediation in Melbourne', text: 'Agreement before court' },
      { title: "Doyle's Guide", text: 'Recognised every year since 2023' },
    ],
  },
  byline: { prefix: 'Reviewed by', person: 'profile:anastasia-simes', name: 'Anastasia Simes', role: 'Partner', updated: 'November 2026' },
  subheading: 'Family law in Victoria, explained plainly, with a Melbourne team beside you.',
  quickAnswer: {
    question: 'How does family law work in Melbourne?',
    answer: <>{'Family law in Victoria is federal. The Family Law Act 1975 governs divorce, parenting arrangements, property settlement and spousal maintenance for married couples, and for de facto couples who separated on or after 1 March 2009. Cases are heard by the Federal Circuit and Family Court of Australia, whose Melbourne registry is at 305 William Street. Most families never reach a trial: they agree through negotiation or mediation, then make it binding with consent orders or a financial agreement. Time limits apply to property claims. Nolan Family Law & Mediation advises Victorian families from '}{mel.streetShort}{', Melbourne.'}</>,
  },

  // The NSW-only logos are left off (BUILD-NOTES, Melbourne hub).
  badges: [badges.doyles, badges.lawCouncil, badges.familyLawSection, badges.aacp],
  badgeRowWidth: '860px',

  helpLede: 'Each of these leads to a page written for families in Victoria, with the same Melbourne team behind it.',
  routingCards: [
    { title: 'Protecting my children', text: 'Child custody and parenting arrangements in Melbourne', to: 'melbourneChildCustody' },
    { title: 'Dividing property and assets', text: 'Property settlement, superannuation and debts in Victoria', to: 'melbourneProperty' },
    { title: 'Resolving it without court', text: 'Family law mediation in Melbourne, for property and parenting', to: 'melbourneMediation' },
    { title: 'Separating or divorcing', text: 'What to do first, and how divorce works in Victoria', to: '#separation' },
    { title: 'Protecting what I have', text: 'Prenuptial and binding financial agreements in Melbourne', to: 'melbournePrenups' },
    { title: 'I am not sure where to start', text: 'Tell us a little and we will point you the right way', to: '#book' },
  ],

  sections: [
    {
      id: 'separation', toc: 'Separating', label: 'Separating',
      h2: 'What should I do first after separating in Victoria?',
      body: [
        'Separation happens when one of you decides the relationship is over and acts on it. There is no form to file and nobody to notify. The date still matters a great deal, because your eligibility for divorce and the time limits for property and maintenance all flow from it or from what follows it.',
        'You can be separated while still living under the same roof, and many Melbourne couples are, for financial reasons or for the children. What counts is whether the relationship has ended in substance: separate rooms, separate finances, telling family and friends. If that is your situation, write down the date and how things changed.',
        <>{'The first few weeks are when people make the decisions that are hardest to undo. Get advice before you move money, sign anything or agree to a care arrangement for the children, and start gathering bank, superannuation and mortgage statements. Our '}<L to="article:separation-checklist-melbourne">separation checklist for Melbourne</L>{' and our guide to '}<L to="article:prepare-financially-for-separation-in-melbourne">preparing financially for separation</L>{' go through it step by step.'}</>,
      ],
      inShort: 'Separation needs no paperwork, but its date starts important clocks. You can be separated under one roof. Get advice early, and gather your financial documents before agreeing to anything.',
    },
    {
      id: 'divorce', toc: 'Divorce', label: 'Divorce',
      h2: 'How does divorce work in Victoria?',
      body: [
        'Divorce is the formal end of a marriage, and that is all it does. Australia has no-fault divorce: the only ground is that the marriage has broken down irretrievably, shown by at least 12 months of separation. Who was to blame plays no part. If you have been married for less than two years, you generally need to have considered reconciliation with a family counsellor before applying.',
        'Applications are made online through the Commonwealth Courts Portal to the Federal Circuit and Family Court of Australia, jointly or by one of you alone. If there are children under 18, the court must be satisfied that proper arrangements have been made for them. A divorce order takes effect one month and one day after it is made.',
        <>{'Divorce does not divide property or settle arrangements for children. Those are separate, and you do not need to be divorced to deal with them. Once a divorce order takes effect, you generally have 12 months to apply to the court for property orders or spousal maintenance, so it is wise to have your finances resolved, or at least underway, before then. Our guide to '}<LL to="articleSeparationVsDivorceVictoria">separation and divorce in Victoria</LL>{' covers the detail.'}</>,
      ],
      inShort: 'You can apply for divorce after 12 months of separation, and fault is irrelevant. A divorce does not deal with property or children. Once it takes effect, you generally have 12 months to apply for property orders.',
    },
    {
      id: 'children', toc: 'Children', label: 'Children',
      h2: 'How are parenting arrangements decided in Victoria?',
      body: [
        "Parenting law is the same across Australia. Every decision turns on what is in your children's best interests, and since 6 May 2024 the law no longer starts from a presumption that parents share equal parental responsibility. The court considers what keeps the children and their carers safe, the children's views, their developmental, emotional and cultural needs, each parent's capacity to meet those needs, and the benefit of relationships with both parents where that is safe.",
        'Most parents agree arrangements themselves. A parenting plan is a written, signed agreement that is flexible but not enforceable. Consent orders are approved by the court and are binding. Before applying to the court for parenting orders, you generally need to attempt family dispute resolution, a form of mediation, unless there is family violence, a risk of abuse or genuine urgency.',
        <>{'Our page on '}<L to="melbourneChildCustody">child custody and parenting arrangements in Melbourne</L>{' explains each step, including what happens when a parent wants to relocate.'}</>,
      ],
      inShort: 'Decisions about children turn on their best interests, and there is no longer a presumption of equal shared parental responsibility. Parents can agree a parenting plan or consent orders, and mediation usually comes before court.',
    },
    {
      id: 'property', toc: 'Property', label: 'Property',
      h2: 'How is property divided after separation in Victoria?',
      body: [
        "A property settlement covers everything you own and owe, together or separately: the home, savings, superannuation, businesses, shares, vehicles and debts. Property in one person's name is still part of the picture.",
        'There is no automatic 50/50 split. The court identifies the property, looks at what each of you contributed, financially and otherwise, then at your current and future circumstances, such as the care of children, earning capacity, health and age. The result has to be just and equitable. Since 10 June 2025 the law also says expressly that the economic effect of family violence, and the wasting of assets, can be taken into account.',
        <>{'Most Melbourne couples settle by agreement and make it binding through consent orders or a binding financial agreement. Married couples generally have 12 months from when a divorce order takes effect to apply to the court, and de facto couples two years from separation. Spousal maintenance, which is support for a former partner who cannot meet their reasonable needs, follows the same time limits and is covered in our guide to '}<LL to="articleSpousalMaintenanceMelbourne">spousal maintenance in Melbourne</LL>{'. Our '}<L to="melbourneProperty">Melbourne property settlement</L>{' page goes further.'}</>,
      ],
      inShort: 'Everything either of you owns or owes is considered, and there is no automatic equal split. Most settlements are agreed and made binding by consent orders or a financial agreement, within strict time limits.',
    },
    {
      id: 'defacto', toc: 'De facto couples', label: 'De facto couples',
      h2: 'Do de facto couples in Victoria have the same rights as married couples?',
      body: [
        'Largely, yes. Victoria referred its powers over de facto financial matters to the Commonwealth, so for couples who separated on or after 1 March 2009, de facto property settlements and maintenance are dealt with under the Family Law Act, by the same court and on the same principles as for married couples. The same applies to same sex couples.',
        "To apply, you generally need to show one of the following: the relationship lasted at least two years in total, you have a child together, one of you made substantial contributions and it would be a serious injustice not to make orders, or the relationship was registered under Victoria's Relationships Act 2008. There is also a requirement that the relationship has a connection with Victoria or another participating state.",
        <>{'The time limit is two years from separation, and there is no divorce to wait for. Our guide to '}<LL to="articleDeFactoVictoria">de facto property rights in Victoria</LL>{' explains eligibility and the exceptions.'}</>,
      ],
      inShort: 'De facto couples in Victoria who separated after 1 March 2009 have broadly the same property and maintenance rights as married couples, under federal law. Eligibility rules apply, and the deadline is two years from separation.',
    },
    {
      id: 'mediation', toc: 'Mediation', label: 'Mediation',
      h2: 'Can we resolve this without going to court?',
      body: [
        'Usually, yes. Most family law matters in Melbourne are settled by negotiation or mediation rather than decided by a judge, and the court expects you to try. Mediation brings you both, with or without lawyers, into a structured conversation led by a neutral mediator. It is generally quicker, less costly and more private than court, and you keep control of the outcome.',
        'Our Melbourne office offers family law mediation for property and parenting matters, in person at Bourke Street or by video. Where there has been family violence or there is a serious imbalance of power, mediation may not be appropriate, and nobody should feel pressured into it. For parenting matters, a certificate from a registered family dispute resolution practitioner is generally needed before you can apply to the court.',
        <>{'Read more about '}<L to="melbourneMediation">family law mediation in Melbourne</L>{', or how mediation works at our '}<L to="sydneyMediation">Sydney office</L>{'.'}</>,
      ],
      inShort: 'Most matters settle without a trial. Our Melbourne office offers mediation for property and parenting disputes, in person or by video. Parenting cases generally need a dispute resolution certificate before court.',
    },
    {
      id: 'court', toc: 'Going to court', label: 'Going to court',
      h2: 'What happens if your matter goes to court in Melbourne?',
      body: [
        'Family law cases in Victoria are heard by the Federal Circuit and Family Court of Australia. Its Melbourne registry is in the Owen Dixon Commonwealth Law Courts Building at 305 William Street, beside Flagstaff Station and a short walk from our Bourke Street office. There is also a family law registry in Dandenong.',
        'Starting proceedings does not mean a trial. Most cases still settle along the way, and the court runs them through conferences and dispute resolution before any final hearing. Where a child or property is at immediate risk, urgent applications can be heard quickly.',
        <>{"Family violence intervention orders are separate. They are made by the Magistrates' Court of Victoria under state law, and they sit alongside any family law case. If you need one, or have been served with one, tell us early, because it shapes how everything else is handled. Our guide to "}<LL to="articleFamilyViolencePropertyVictoria">family violence and property settlements in Victoria</LL>{' explains how the two interact.'}</>,
      ],
      inShort: "Victorian family law cases go to the Federal Circuit and Family Court in William Street, Melbourne, and most still settle before a final hearing. Family violence intervention orders are made separately by the Magistrates' Court.",
    },
    {
      id: 'costs', toc: 'What it costs', label: 'What it costs',
      h2: 'What does a family lawyer in Melbourne cost?',
      body: [
        'It depends on what your matter needs, so we do not publish a price list. Cost is shaped by whether you and your former partner can agree, how complex your finances are, and whether valuations, mediation or court are involved.',
        <>{'We explain how our fees work at the first meeting, put an estimate in writing and keep you updated as things move. Reaching agreement, through negotiation or mediation, is almost always the less costly path, and we will tell you honestly when we think it is open to you. '}<CostsLink />{'.'}</>,
      ],
      inShort: 'There are no fixed fees. We explain how fees work at the start, give you a written estimate and keep you updated.',
    },
  ],
  midAfter: 'defacto',
  mid: {
    text: 'The general rules only go so far. A short conversation with our Melbourne team will tell you where you stand, what your options are and what to do first. It is confidential, and it commits you to nothing.',
    img: images.anastasia,
    objectPosition: '50% 12%',
  },

  lawyer: {
    h2: 'Your family lawyer in Melbourne',
    lead: {
      img: images.anastasia,
      alt: 'Anastasia Simes, Partner at Nolan Family Law and Mediation in Melbourne',
      name: 'Anastasia Simes',
      role: 'Partner · Melbourne office',
      body: [
        <>{'Anastasia leads our Melbourne office at '}{mel.streetShort}{'. She has more than a decade of experience in family law, acting in complex financial matters, parenting disputes and divorce, and she takes a practical, meticulous approach to every matter.'}</>,
        "She works to resolve matters through negotiation and dispute resolution wherever she can, and she has extensive court experience for when that is not possible. Behind her is the whole Nolan team, recognised by Doyle's Guide every year since 2023.",
        <><L to="profile:anastasia-simes">{"Read Anastasia's full profile"}</L>{', or see '}<L to="team">everyone at the firm</L>{'.'}</>,
      ],
    },
    second: {
      img: images.tashSmall,
      alt: 'Tash Nolan, Principal',
      body: <>{"The firm's Principal, "}<L to="profile:tash-nolan">Tash Nolan</L>{", has been individually recognised in Doyle's Guide every year since 2023, including in 2026 as a leading family lawyer for high net-worth and complex financial matters."}</>,
    },
  },
  reviewsHeading: 'What clients say about working with us',

  toggle: {
    to: 'sydneyHub',
    eyebrow: 'In New South Wales instead?',
    title: <>{'Our Sydney family lawyers are at '}{syd.streetShort}</>,
    text: 'The same firm and the same approach, with a Sydney team and Sydney registries',
  },
  guides: {
    label: 'Sydney toggle and Melbourne guides',
    eyebrow: 'Melbourne guides',
    h2: 'Reading for families in Victoria',
    cards: [
      { title: 'Separation checklist for Melbourne', text: 'What to do, and in what order', to: 'article:separation-checklist-melbourne' },
      { title: 'Preparing financially for separation', text: 'Documents, accounts and the early decisions', to: 'article:prepare-financially-for-separation-in-melbourne' },
      // The four new Melbourne articles (D-28) appear once each is imported.
      { title: 'Separation and divorce in Victoria', text: 'Two processes, two sets of time limits', to: 'articleSeparationVsDivorceVictoria', liveOnly: true },
      { title: 'De facto property rights in Victoria', text: 'Eligibility, the two year rule and its exceptions', to: 'articleDeFactoVictoria', liveOnly: true },
      { title: 'Spousal maintenance in Melbourne', text: 'Who qualifies, and how long it lasts', to: 'articleSpousalMaintenanceMelbourne', liveOnly: true },
      { title: 'Family violence and property in Victoria', text: 'How safety and settlement interact', to: 'articleFamilyViolencePropertyVictoria', liveOnly: true },
    ],
  },

  faqHeading: 'Family law in Melbourne, answered plainly',
  faq: [
    { q: 'How much does a family lawyer cost in Melbourne?', a: <>{'It depends on what your matter needs, so we do not publish a price list. Cost is shaped by whether you and your former partner can agree, how complex your finances are, and whether valuations, mediation or court are involved. We explain how our fees work at the first meeting and put an estimate in writing. '}<CostsLink />{'.'}</> },
    { q: 'How soon after separating can I apply for divorce in Victoria?', a: 'You need to have been separated for at least 12 months. If you have been married for less than two years, you generally also need to have considered reconciliation with a family counsellor. Applications are made online to the Federal Circuit and Family Court of Australia, and an order takes effect one month and one day after it is made.' },
    { q: 'Do I have to go to court to get divorced?', a: 'Often not. If you apply jointly, or there are no children under 18, you usually do not need to attend. If you apply on your own and there are children under 18, you will generally need to attend the hearing, which is often held by video.' },
    { q: 'Where is the Family Court in Melbourne?', a: 'Family law cases are heard by the Federal Circuit and Family Court of Australia. Its Melbourne registry is in the Owen Dixon Commonwealth Law Courts Building at 305 William Street, beside Flagstaff Station. There is also a family law registry in Dandenong.' },
    { q: 'Is mediation compulsory before going to court in Victoria?', a: 'For parenting matters, you generally need to attempt family dispute resolution and obtain a certificate before applying to the court, unless there is family violence, a risk of abuse or urgency. For property matters, the court expects you to make genuine attempts to resolve things first, and mediation is the usual way to do that.' },
    { q: 'Do de facto couples have the same property rights as married couples in Victoria?', a: 'Broadly, yes. For couples who separated on or after 1 March 2009, de facto property and maintenance claims are dealt with under the Family Law Act in the same court and on the same principles. You generally need a relationship of at least two years, a child together, substantial contributions, or a registered relationship, and you must apply within two years of separating.' },
    { q: 'How long do I have to sort out property after separating?', a: "Married couples generally have 12 months from when a divorce order takes effect to apply to the court for property orders. De facto couples have two years from separation. After that you need the court's permission, which is not guaranteed, so it is best to act well before either deadline." },
    { q: 'Is property always split 50/50 in Victoria?', a: 'No. There is no presumption of an equal split. The court looks at what each of you contributed, financially and otherwise, and at your current and future circumstances, and the result has to be just and equitable in your situation. Some settlements end up close to equal and many do not.' },
    { q: 'Can we be separated but still live together?', a: 'Yes. Separation under one roof is recognised, and many couples live together for a while after separating. What matters is that the relationship has ended in substance. Keep a note of the date and how your living arrangements changed, in case it is questioned later.' },
    { q: 'What is the difference between a parenting plan and consent orders?', a: 'A parenting plan is a written, signed agreement between parents. It is flexible but not legally enforceable. Consent orders are approved by the Federal Circuit and Family Court and are binding, so they suit families who want certainty.' },
    { q: 'Does your Melbourne office offer mediation?', a: <>{'Yes. Our Melbourne office offers family law mediation for property and parenting matters, in person at '}{mel.streetShort}{' or by video. Mediation is not appropriate in every case, particularly where there has been family violence, and we will talk that through with you first.'}</> },
    { q: 'Who will I work with at your Melbourne office, and can we meet by video?', a: <>{'Our Melbourne office is led by Anastasia Simes, Partner, with the support of the wider Nolan team. You can meet us at '}{mel.streetShort}{', or by phone or video if that is easier, including from regional Victoria.'}</> },
  ],

  contact: {
    lede: 'You do not need to have everything worked out before you call. Tell us a little about your situation and we will explain your options in Victoria, and what each would involve.',
    address: mel.addressDisplay,
  },
};
