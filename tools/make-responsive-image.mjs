/**
 * Makes responsive AVIF and WebP copies of a photo for <Picture> (src/components/Picture.tsx).
 *
 *   node tools/make-responsive-image.mjs <source> <name> <width> [<width>...]
 *
 * Writes public/images/<name>-<width>.avif and .webp for each width (never wider than the
 * source), then prints the entry to paste into src/site/images.ts.
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const [src, name, ...ws] = process.argv.slice(2);
if (!src || !name || !ws.length) { console.error('usage: make-responsive-image.mjs <source> <name> <width> [<width>...]'); process.exit(1); }
const dir = new URL('../public/images/', import.meta.url).pathname;
mkdirSync(dir, { recursive: true });

const meta = await sharp(src).metadata();
const widths = [...new Set(ws.map(Number).map((w) => Math.min(w, meta.width)))].sort((a, b) => a - b);
for (const w of widths) {
  const base = sharp(src).resize({ width: w }).flatten({ background: '#FFFFFF' });
  const avif = await base.clone().avif({ quality: 60, effort: 6 }).toFile(`${dir}${name}-${w}.avif`);
  const webp = await base.clone().webp({ quality: 80 }).toFile(`${dir}${name}-${w}.webp`);
  console.log(`${name}-${w}: avif ${avif.size} B, webp ${webp.size} B`);
}
const h = Math.round((meta.height / meta.width) * widths.at(-1));
console.log(`\n  ${JSON.stringify({ name, widths, width: widths.at(-1), height: h })}`);
