import type { ReactNode } from 'react';
import type { RouteKey } from '@/config/routes';

/** What each designed page provides. The shell, canonical and robots tags are added for it. */
export interface PageModule {
  /** The <title>. About 60 characters. */
  title: string;
  /** The meta description. About 155 characters. */
  description: string;
  /** Label for the button at the foot of the mobile menu. */
  menuCta?: string;
  /** JSON-LD for the page, built with src/lib/schema.ts. */
  schema: (key: RouteKey) => object;
  Content: () => ReactNode | Promise<ReactNode>;
}
