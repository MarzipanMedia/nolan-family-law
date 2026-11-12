/**
 * Page check used after every page build (brief: "Test as you go").
 *
 *   node tools/check-page.cjs <url-or-file> [--shots <dir>] [--name <name>] [--widths 1440,390]
 *
 * At each width it scrolls the whole page (so every reveal fires) and reports: horizontal
 * overflow, the number of H1s, console errors, JSON-LD validity, reveal or clip elements that
 * never appeared, review notes or a quick exit left in, and images that failed to load.
 * With --shots it also saves full-page screenshots, for comparing against the prototype.
 */
const { chromium } = require('playwright');
const args = process.argv.slice(2);
const target = args[0];
const opt = (n, d) => { const i = args.indexOf('--' + n); return i === -1 ? d : args[i + 1]; };
const widths = opt('widths', '1440,390').split(',').map(Number);
const shots = opt('shots', '');
const name = opt('name', 'page');

(async () => {
  const browser = await chromium.launch();
  let failed = false;
  for (const width of widths) {
    const ctx = await browser.newContext({ viewport: { width, height: width < 600 ? 844 : 900 }, deviceScaleFactor: 1, httpCredentials: process.env.STAGING_PASSWORD ? { username: process.env.STAGING_USER || '', password: process.env.STAGING_PASSWORD } : undefined });
    const page = await ctx.newPage();
    const errors = [];
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('pageerror', (e) => errors.push(String(e)));
    await page.goto(target.startsWith('http') ? target : 'file://' + require('path').resolve(target), { waitUntil: 'load' });
    await page.waitForTimeout(target.startsWith('http') ? 600 : 2500);
    // Scroll through the page the way a reader would, so the reveal sweep runs.
    const height = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < height; y += 500) { await page.evaluate((v) => window.scrollTo(0, v), y); await page.waitForTimeout(60); }
    await page.waitForTimeout(900);
    const r = await page.evaluate(() => {
      const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => { try { const d = JSON.parse(s.textContent); return (d['@graph'] || [d]).map((n) => n['@type']); } catch (e) { return 'INVALID: ' + e.message; } });
      const visible = (el) => el.getClientRects().length > 0;
      return {
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        h1: [...document.querySelectorAll('h1')].map((h) => h.textContent.trim()),
        ld,
        unrevealed: [...document.querySelectorAll('[data-reveal]:not([data-in]), [data-clip]:not([data-in])')].filter(visible).length,
        reveals: document.querySelectorAll('[data-reveal], [data-clip]').length,
        notes: document.querySelectorAll('[data-review-note], [data-notes-toggle]').length,
        quickExit: /quick exit/i.test(document.body.innerText),
        brokenImages: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src.slice(0, 90)),
        title: document.title,
        height: document.documentElement.scrollHeight,
      };
    });
    const problems = [];
    if (r.overflow > 0) problems.push(`horizontal overflow ${r.overflow}px`);
    if (r.h1.length !== 1) problems.push(`${r.h1.length} H1s`);
    if (errors.length) problems.push(`console errors: ${errors.slice(0, 3).join(' | ')}`);
    if (r.ld.some((x) => typeof x === 'string')) problems.push('invalid JSON-LD');
    if (r.unrevealed) problems.push(`${r.unrevealed} reveal/clip elements never appeared`);
    if (r.notes) problems.push(`${r.notes} review notes left in`);
    if (r.quickExit) problems.push('quick exit text present');
    if (r.brokenImages.length) problems.push(`broken images: ${r.brokenImages.join(', ')}`);
    console.log(`${name} @${width}: ${problems.length ? 'FAIL ' + problems.join('; ') : 'ok'} · H1 "${r.h1[0] ?? ''}" · ${r.reveals} reveals · JSON-LD ${JSON.stringify(r.ld.flat())} · ${r.height}px tall`);
    if (problems.length) failed = true;
    if (shots) { await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(300); await page.screenshot({ path: `${shots}/${name}-${width}.png`, fullPage: true }); }
    await ctx.close();
  }
  await browser.close();
  process.exit(failed ? 1 : 0);
})();
