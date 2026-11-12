/**
 * One place decides every redirect, so a request is never redirected twice (D-18, D-36).
 *
 * For each request it works out the final URL in one go:
 *   host      nolanlawyers.com.au → www.nolanlawyers.com.au      (production only)
 *   slash     /our-team           → /our-team/
 *   path      /family-lawyer/     → /sydney/family-law/           (from REDIRECT-MAP.csv)
 * and, if anything changed, sends a single 301 with the query string kept.
 *
 * The redirect table is generated from the CSV by scripts/generate-redirects.mjs.
 * Staging (anything that is not SITE_ENV=production) is also password-protected here.
 */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import table from './generated/redirects.json';

const mode = process.env.URL_MODE === 'A' ? 'A' : 'B';
const redirects: Record<string, string> = table[mode].redirects;
const gone = new Set<string>(table[mode].gone);

const isProduction = process.env.SITE_ENV === 'production';
const canonicalHost = process.env.CANONICAL_HOST ?? '';
const stagingUser = process.env.STAGING_USER ?? '';
const stagingPassword = process.env.STAGING_PASSWORD ?? '';

const isFile = (path: string) => /\.[a-z0-9]{2,5}$/i.test(path);

function unauthorised() {
  return new NextResponse('This is a private staging site.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Nolan staging", charset="UTF-8"', 'X-Robots-Tag': 'noindex, nofollow' },
  });
}

export function proxy(request: NextRequest) {
  const { pathname, search, origin: requestOrigin } = new URL(request.url);
  const host = (request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? '').toLowerCase();

  // Staging password.
  if (!isProduction && stagingPassword) {
    const header = request.headers.get('authorization') ?? '';
    const expected = 'Basic ' + btoa(`${stagingUser}:${stagingPassword}`);
    if (header !== expected) return unauthorised();
  }

  // API routes take no part in URL tidying (a redirected POST would lose its body).
  if (pathname.startsWith('/api/')) return NextResponse.next();

  // 1. Slash and case.
  let path = pathname.replace(/\/{2,}/g, '/');
  if (!isFile(path)) {
    if (!path.endsWith('/')) path += '/';
    path = path.toLowerCase();
  }

  // 2. Gone for good (WordPress theme demo pages).
  if (gone.has(path)) {
    return new NextResponse(
      '<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="robots" content="noindex"><title>Page removed</title><body style="font-family:sans-serif;padding:48px"><h1>This page has been removed.</h1><p><a href="/">Go to the Nolan Family Law &amp; Mediation homepage</a></p></body></html>',
      { status: 410, headers: { 'content-type': 'text/html; charset=utf-8' } },
    );
  }

  // 3. The redirect map.
  path = redirects[path] ?? path;

  // 4. Host (production only, so preview and staging addresses keep working).
  const wrongHost = isProduction && canonicalHost !== '' && host !== canonicalHost && !host.endsWith('.vercel.app') && !host.startsWith('localhost');

  if (path !== pathname || wrongHost) {
    // Same host and protocol as the request, unless the host itself is being corrected.
    const origin = wrongHost ? `https://${canonicalHost}` : requestOrigin;
    return NextResponse.redirect(`${origin}${path}${search}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Everything except Next's own assets.
  matcher: ['/((?!_next/static|_next/image).*)'],
};
