import type { NextConfig } from 'next';

const isProduction = process.env.SITE_ENV === 'production';

const config: NextConfig = {
  // WordPress URLs end in "/". Slash and redirect handling live in src/proxy.ts so that
  // host, slash and path changes are always a single 301 (D-36).
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  poweredByHeader: false,
  env: {
    URL_MODE: process.env.URL_MODE === 'A' ? 'A' : 'B',
    SITE_ENV: isProduction ? 'production' : 'staging',
  },
  async headers() {
    // Anything that is not explicitly production is noindex.
    return isProduction ? [] : [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }];
  },
};

export default config;
