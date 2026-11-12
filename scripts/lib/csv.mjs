// Minimal CSV reader (handles quoted fields and embedded commas/quotes).
import { readFileSync } from 'node:fs';

export function readCsv(file) {
  const text = readFileSync(file, 'utf8').replace(/^﻿/, '');
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((f) => f !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  const [head, ...body] = rows;
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
}

/** Lower-case, and add a trailing slash unless the path is a file. */
export function normalisePath(p) {
  let path = p.trim().replace(/\/{2,}/g, '/');
  const isFile = /\.[a-z0-9]{2,5}$/i.test(path);
  if (!isFile && !path.endsWith('/')) path += '/';
  return isFile ? path : path.toLowerCase();
}

export const MAP_FILE = new URL('../../export/REDIRECT-MAP.csv', import.meta.url);

/** The map as { path, type, action, target, notes } for one URL mode. */
export function readMap(mode) {
  const col = mode === 'A' ? 'option_a' : 'option_b';
  return readCsv(MAP_FILE).map((r) => ({
    rawPath: r.old_path,
    path: normalisePath(r.old_path),
    type: r.type,
    action: r[`${col}_action`].trim(),
    target: r[`${col}_target`].trim(),
    notes: r.notes,
  }));
}
