/**
 * The plain text of a piece of JSX, as a reader would see it. Used to build FAQPage schema
 * from the visible FAQ, so the two can never differ.
 */
import { isValidElement, type ReactNode } from 'react';

export function textOf(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (isValidElement<{ children?: ReactNode }>(node)) {
    // A small function component (such as a link helper) is rendered to find its words.
    if (typeof node.type === 'function') {
      const rendered = (node.type as (p: unknown) => ReactNode)(node.props);
      if (!(rendered instanceof Promise)) return textOf(rendered);
    }
    return textOf(node.props.children);
  }
  return '';
}

/** Collapses runs of whitespace, as a browser does. */
export const plain = (node: ReactNode) => textOf(node).replace(/\s+/g, ' ').trim();
