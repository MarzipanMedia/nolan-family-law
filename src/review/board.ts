/**
 * THE REVIEW BOARD LIST (staging only, served at /review/).
 *
 * Most of the board is read straight from the routes file, so it can never drift from the build:
 *   a designed page (one with an entry in src/site/registry.ts)  → "Ready for your review"
 *   a page still in the temporary carry-over layout, an article
 *   or a profile (every one of them will be designed)            → "Still to be designed"
 *   a route that is still 'planned'                               → "Coming next"
 *
 * The only things written by hand here are:
 *   NOTES             what to look at on a page, and who should look (shown on its card);
 *   QUESTIONS         open questions from export/DECISIONS.md that only Chad or Tash can answer;
 *   ASSUME_DESIGNED   pages being built right now, shown as ready for review ahead of the build.
 *                     Remove a key once its page is in src/site/registry.ts (it is then redundant).
 * When a question is answered, remove it from QUESTIONS and record the answer in DECISIONS.md.
 *
 * Item ids are stored with every tick and note, so never rename one once feedback exists.
 */
import { allRoutes, type City, type RouteKey, type StaticRouteKey } from '@/config/routes';
import { pages } from '@/site/registry';

export type Reviewer = 'Tash' | 'Chad' | 'Ben';
export const REVIEWERS: Reviewer[] = ['Tash', 'Chad', 'Ben'];

export type Stage = 'general' | 'review' | 'design' | 'coming';
export type Group = 'General' | 'Pages' | 'Team profiles' | 'Articles' | 'Questions';

export interface BoardItem {
  id: string;
  title: string;
  group: Group;
  stage: Stage;
  city: City;
  /** Path on this staging site, when the page exists. */
  path?: string;
  /** Designed for the new site, or still in the temporary carry-over layout until it is designed. */
  origin?: 'designed' | 'temporary';
  /** What to look at, and who should look. */
  note?: string;
  who?: Reviewer[];
}

/** Pages being built now, shown as designed before they reach the registry. */
const ASSUME_DESIGNED: StaticRouteKey[] = ['sydneyPrenups'];

/** What to look at on a page. Keyed by route key. Keep each note to a sentence or two. */
const NOTES: Partial<Record<RouteKey, { note: string; who: Reviewer[] }>> = {
  home: { note: 'The first page most people see. Please check the overall feel, the wording about the firm and both offices, and that the Doyle\'s recognition reads correctly.', who: ['Chad', 'Tash'] },
  sydneyHub: { note: 'The new Sydney landing page. A few legal points are flagged for Tash, and the Sydney registry address needs confirming.', who: ['Tash', 'Chad'] },
  sydneyChildCustody: { note: 'Legal review notes are open on this page. Please read it through for accuracy and tone.', who: ['Tash'] },
  sydneyProperty: { note: 'The property settlement guide. Nine legal points are flagged for Tash on the page itself.', who: ['Tash'] },
  sydneyMediation: { note: 'Legal review notes are open. Please check the description of how mediation works at Nolan.', who: ['Tash'] },
  melbourneHub: { note: 'The new Melbourne landing page. Legal points are flagged for Tash, and the Melbourne mediator still needs confirming (see the questions below).', who: ['Tash', 'Chad'] },
  sydneyPrenups: { note: 'New page for Sydney prenups and binding financial agreements, written for NSW. Tash is named as author and reviewer. Yellow notes on the page mark the legal points to check, plus Tash\'s title (Principal or Director) and years of practice.', who: ['Tash', 'Chad'] },
  melbournePrenups: { note: 'Anastasia is named as author and Tash as legal reviewer. Yellow notes on the page mark the points to check.', who: ['Tash'] },
  melbourneMediation: { note: 'A simple page for launch, to be fully designed in January. It carries a note until we know who mediates in Melbourne.', who: ['Chad'] },
  team: { note: 'The Our People page. Please check everyone is listed, in the right order, with the right titles.', who: ['Chad'] },
  contact: { note: 'Please check both offices, phone numbers, addresses and opening details.', who: ['Chad'] },
  resources: { note: 'The articles index. A quick look to make sure nothing is missing or out of date is all that is needed.', who: ['Chad'] },
  sydneyDomesticViolence: { note: 'To be designed with particular care for tone, given who may be reading it.', who: ['Tash'] },
};

/** Open questions only Chad or Tash can answer (from export/DECISIONS.md). */
const QUESTIONS: Array<{ id: string; title: string; note: string; who: Reviewer[]; city: City }> = [
  { id: 'q-6', title: 'Shuttle mediation, and acting after mediating', note: 'Does Nolan offer shuttle mediation? And does the firm decline to act for either party after mediating? This changes a few lines on the mediation pages.', who: ['Tash'], city: 'sydney' },
  { id: 'q-11', title: 'Who mediates in Melbourne?', note: 'Who mediates at the Melbourne office, and what accreditations do they hold? The Melbourne mediation page and hub are waiting on this.', who: ['Chad'], city: 'melbourne' },
  { id: 'q-16', title: 'Law Institute of Victoria membership', note: 'Is the firm, or Anastasia, a member of the Law Institute of Victoria? If so, its logo can go on the Melbourne pages.', who: ['Chad'], city: 'melbourne' },
];

export function buildBoard(): BoardItem[] {
  const items: BoardItem[] = [
    { id: 'general', title: 'Anything else', group: 'General', stage: 'general', city: null, note: 'Anything that is not about one page: the site as a whole, something missing, or a question for Ben.' },
  ];
  for (const { key, def, path } of allRoutes()) {
    if (!def.indexable) continue; // the ads landing page and thank-you page need no review
    const group: Group = def.kind === 'profile' ? 'Team profiles' : def.kind === 'article' ? 'Articles' : 'Pages';
    const designed = def.kind === 'page' && (key in pages || (ASSUME_DESIGNED as string[]).includes(key));
    const live = def.status === 'live' || designed;
    const stage: Stage = !live ? 'coming' : designed ? 'review' : 'design';
    const extra = NOTES[key];
    items.push({
      id: key,
      title: def.label,
      group,
      stage,
      city: def.city,
      path: live ? path : undefined,
      origin: live ? (designed ? 'designed' : 'temporary') : undefined,
      note: extra?.note,
      who: extra?.who,
    });
  }
  for (const q of QUESTIONS) items.push({ id: q.id, title: q.title, group: 'Questions', stage: 'review', city: q.city, note: q.note, who: q.who });
  return items;
}

export const boardIds = (): Set<string> => new Set(buildBoard().map((i) => i.id));

/** Key dates, shown at the top of the board (from export/LAUNCH-PLAN.md). */
export const DATES = [
  { label: 'Content freeze and Tash\'s final sign-off', date: 'Wednesday 9 December' },
  { label: 'Go or no-go', date: 'Friday 11 December' },
  { label: 'Launch', date: 'Tuesday 15 December' },
];
