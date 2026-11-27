/**
 * Builds src/generated/decisions.json from export/DECISIONS.md, for the "Decisions so far"
 * section of the review board (/review/, staging only). Runs before every build and dev start.
 *
 * Reads each "### D-nn · date · who · status" heading under "## Decisions", its bold summary
 * line, the rest of that paragraph, and any *Evidence:* line. Markdown is turned into plain text.
 * DECISIONS.md stays the one place a decision is written; this file is only a copy for display.
 */
import { fileURLToPath } from 'node:url';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const root = fileURLToPath(new URL('..', import.meta.url));
const source = readFileSync(root + 'export/DECISIONS.md', 'utf8');

const plain = (s) => s
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  .replace(/~~([^~]+)~~/g, '$1')
  .replace(/\*\*([^*]+)\*\*/g, '$1')
  .replace(/(^|[^*])\*([^*]+)\*/g, '$1$2')
  .replace(/`([^`]+)`/g, '$1')
  .replace(/\s+/g, ' ')
  .trim();

const start = source.indexOf('\n## Decisions');
const end = source.indexOf('\n## ', start + 5);
const section = source.slice(start, end === -1 ? undefined : end);

const decisions = [];
for (const block of section.split(/\n(?=### )/).slice(1)) {
  const [heading, ...lines] = block.split('\n');
  const m = heading.match(/^###\s+(D-\d+)\s+·\s+([^·]+?)\s+·\s+([^·]+?)\s+·\s+(.+)$/);
  if (!m) continue;
  const [, id, date, who, status] = m;
  const text = lines.join('\n').trim();
  const evidence = text.match(/^\*Evidence:\*\s*(.+)$/m)?.[1];
  const main = text.split(/\n(?=\*[A-Z][a-z]+[^*]*:\*)/)[0];
  const summary = main.match(/^\*\*(.+?)\*\*/s)?.[1] ?? main.split('\n')[0];
  const detail = main.replace(/^\*\*(.+?)\*\*/s, '').trim();
  decisions.push({
    id,
    num: Number(id.slice(2)),
    date: plain(date),
    who: plain(who),
    status: plain(status),
    summary: plain(summary),
    detail: plain(detail),
    evidence: evidence ? plain(evidence).replace(/^./, (c) => c.toUpperCase()) : '',
  });
}
decisions.sort((a, b) => b.num - a.num);

if (decisions.length < 10) {
  console.error(`generate-decisions: only ${decisions.length} decisions read from export/DECISIONS.md; has its format changed?`);
  process.exit(1);
}

mkdirSync(root + 'src/generated', { recursive: true });
writeFileSync(root + 'src/generated/decisions.json', JSON.stringify(decisions, null, 2) + '\n');
console.log(`decisions: ${decisions.length} read from export/DECISIONS.md`);
