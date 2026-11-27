/**
 * Corrections to imported articles, applied by scripts/import-wordpress.mjs after each article
 * is cleaned, so a re-import cannot bring the old wording back (D-35). Use only for copy that
 * breaks a decision: the law has changed (D-59) or a rule is broken (D-02). Everything else in
 * an article stays as WordPress has it.
 *
 * Each fix replaces `find` (exact HTML) with `replace`. Its `note` is shown at the top of the
 * article on staging only, so the change can be reviewed. Applying a fix twice changes nothing;
 * a fix whose text can no longer be found (the article changed in WordPress) is reported.
 * Where possible the new wording is the approved copy of the Sydney divorce page.
 */

export const ARTICLE_FIXES = {
  'the-divorce-process-explained': [
    {
      find: '<p>Parties married less than two years who want to divorce must attend counselling with a family counsellor or nominated counsellor to discuss the possibility of reconciliation with their spouse before applying for a divorce. A copy of the counselling certificate will need to be filed with the application.</p>',
      replace: '<p>Not any more. Until 10 June 2025, couples who applied within two years of their wedding had to attend counselling about reconciliation and file a certificate, or ask the court’s permission to apply without one. The Family Law Amendment Act 2024 removed that requirement. Today a short marriage is treated the same way as any other: the 12 months of separation and the other requirements still apply, but there is no counselling certificate to obtain.</p>',
      note: 'LEGAL REVIEW · Tash (D-59, 27 Nov): "Married less than 2 years?" rewritten. It said couples married less than two years must attend counselling and file a counselling certificate (section 44(1B) and (1C), repealed from 10 June 2025). New wording is the Sydney divorce page\'s #short section.',
    },
    {
      find: '<p>There are circumstances where the parties do not need to attend Court. The party applying for a divorce must attend the divorce hearing where they made the Application for divorce themselves and/or where they have children who are under 18 years of age.</p>\n<p>If the parties do not have children under 18, or if they made a joint Application for divorce, they can both choose not to attend your divorce hearing.</p>',
      replace: '<p>Usually you do not have to go anywhere. Divorce hearings are listed before a registrar and held by phone or video unless someone asks to attend in person or the court orders it. Most applications are decided without either of you appearing.</p>\n<p>You must attend if you asked to in your application, if your spouse files a response opposing the divorce, if your spouse asks to attend and there are children under 18, or if you applied to serve your spouse another way or to be excused from serving them. Since 10 June 2025 a sole applicant no longer has to attend just because there are children.</p>',
      note: 'LEGAL REVIEW · Tash (D-59, 27 Nov): two paragraphs on attending the hearing rewritten. They said a sole applicant, or anyone with children under 18, must attend (section 98A, amended from 10 June 2025). New wording is the Sydney divorce page\'s #hearing section. Also check, unchanged: "a Divorce Order will be sent to you" (orders are now downloaded from the Commonwealth Courts Portal).',
    },
    {
      find: '<p>The current filing fee for an application for divorce is $865.00.</p>',
      replace: '<p>The court charges a filing fee, which can be reduced in cases of financial hardship. Our own fees depend on what you need, from the application alone to a full property settlement, and we confirm them in writing before we start.</p>',
      note: 'CHECK · Ben (D-02, 27 Nov): "The current filing fee for an application for divorce is $865.00." replaced with the Sydney divorce page\'s cost answer. No figures on the site.',
    },
  ],
  'separation-checklist-melbourne': [
    {
      find: '<p>At least 12 months and one day. If you were married for less than two years, you’ll also need to show that you attempted reconciliation.</p>',
      replace: '<p>At least 12 months and one day. Since 10 June 2025, there is no extra step for marriages of less than two years.</p>',
      note: 'LEGAL REVIEW · Tash (D-59, 27 Nov): FAQ "How long do we need to be separated before we can divorce in Victoria?" said couples married less than two years must show they attempted reconciliation (repealed from 10 June 2025). Second sentence replaced with the hubs\' wording.',
    },
  ],
};

/** Returns { html, missed, notes }: the corrected article, fixes that could not be placed, and their notes. */
export function fixArticle(slug, html) {
  const missed = [];
  const notes = [];
  for (const f of ARTICLE_FIXES[slug] ?? []) {
    if (html.includes(f.find)) html = html.replace(f.find, f.replace);
    else if (!html.includes(f.replace)) { missed.push({ slug, find: f.find.slice(0, 80) }); continue; }
    notes.push(f.note);
  }
  return { html, missed, notes };
}
