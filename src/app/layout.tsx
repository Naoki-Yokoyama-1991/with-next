// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

export const metadata = {
  title: 'WITH HOUSE',
  description: '自然と調和する、家族のための住まい。',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
