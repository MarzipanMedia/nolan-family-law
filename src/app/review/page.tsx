/**
 * The review board: what is built, what needs Chad's or Tash's eyes, and what is coming.
 * Staging only. On the live site (SITE_ENV=production) this page does not exist.
 * The list itself comes from src/review/board.ts; ticks and notes from /api/review.
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildBoard, DATES, REVIEWERS } from '@/review/board';
import { ReviewBoard } from './ReviewBoard';

export const metadata: Metadata = {
  title: { absolute: 'Review board | Nolan Family Law & Mediation (staging)' },
  robots: { index: false, follow: false },
};

export default function ReviewPage() {
  if (process.env.SITE_ENV === 'production') notFound();
  return <ReviewBoard items={buildBoard()} dates={DATES} reviewers={REVIEWERS} />;
}
