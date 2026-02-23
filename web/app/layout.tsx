import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shepherd – Learn the Bible',
  description:
    'A mobile app that helps new and seasoned Christians explore the Bible through engaging lessons, quizzes, and verse memorization.',
  openGraph: {
    title: 'Shepherd – Learn the Bible',
    description:
      'Engaging Bible lessons, quizzes, and verse memorization for new and seasoned Christians.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
