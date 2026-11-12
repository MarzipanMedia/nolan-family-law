/**
 * Some prototypes are exported as a self-unpacking bundle (homepage.html,
 * child-custody-sydney.html): the page only exists once a browser has run it. This opens the
 * file in a browser and saves the finished HTML, with images inlined, for convert-prototype.mjs.
 *
 *   node tools/render-bundled-prototype.cjs export/homepage.html /tmp/homepage.rendered.html
 */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
(async () => {
  const [input, output] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('file://' + path.resolve(input));
  await page.waitForTimeout(2500);
  await page.evaluate(async () => {
    const toData = async (u) => { const b = await (await fetch(u)).blob(); return await new Promise((res) => { const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(b); }); };
    for (const img of document.querySelectorAll('img')) if (img.src.startsWith('blob:')) img.setAttribute('src', await toData(img.src));
  });
  fs.writeFileSync(output, await page.evaluate(() => document.documentElement.outerHTML));
  await browser.close();
})();
