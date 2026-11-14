/**
 * Photos and badges used by more than one page, so each is named once.
 * Responsive entries are made with tools/make-responsive-image.mjs.
 */
import type { ImageAsset } from '@/components/Picture';

export const images = {
  // People
  tashHero: { name: 'tash-nolan-principal', widths: [320, 450], width: 450, height: 450 },
  jessica: { name: 'jessica-swain-partner', widths: [160, 400], width: 400, height: 400 },
  tashSmall: { src: '/images/tash-nolan-principal-d4d3b561.webp', width: 400, height: 400 },
  anastasia: { src: '/images/anastasia-simes-partner-who-leads-nolan-family-l-51ac1b30.webp', width: 450, height: 450 },

  // Accreditation badges (optimised WebP)
  doyles: { src: '/images/doyle-s-guide-to-the-australian-legal-profession-58751f82.webp', width: 716, height: 156 },
  lawSocietyNsw: { src: '/images/member-of-the-law-society-of-new-south-wales-bfd9c30a.webp', width: 300, height: 128 },
  lawCouncil: { src: '/images/law-council-of-australia-85fce8e6.webp', width: 200, height: 200 },
  familyLawSection: { src: '/images/family-law-section-law-council-of-australia-325d03d2.webp', width: 300, height: 111 },
  aacp: { src: '/images/australian-association-of-collaborative-professi-1aeae6fe.webp', width: 216, height: 70 },
  collabNswAct: { src: '/images/collaborative-professionals-nsw-act-inc-f740a8a4.webp', width: 408, height: 156 },
} satisfies Record<string, ImageAsset>;

/** Each accreditation badge with its alt text and display height (px), as on the hubs. */
export const badges = {
  doyles: { img: images.doyles, alt: "Doyle's Guide to the Australian Legal Profession", height: 34 },
  lawSocietyNsw: { img: images.lawSocietyNsw, alt: 'Member of the Law Society of New South Wales', height: 56 },
  lawCouncil: { img: images.lawCouncil, alt: 'Law Council of Australia', height: 72 },
  familyLawSection: { img: images.familyLawSection, alt: 'Family Law Section, Law Council of Australia', height: 48 },
  aacp: { img: images.aacp, alt: 'Australian Association of Collaborative Professionals', height: 44 },
  collabNswAct: { img: images.collabNswAct, alt: 'Collaborative Professionals (NSW & ACT) Inc', height: 56 },
};
export type Badge = (typeof badges)[keyof typeof badges];
