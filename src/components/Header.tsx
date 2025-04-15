'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="h-20">
        <nav className="flex flex-wrap justify-center items-center gap-x-8 h-full">
          <Link href="/">Home</Link>
          <Link href="/concept">Concept</Link>
          <Link href="/plan">Plan</Link>
          <Link href="/event">Event</Link>
          <Link href="/voice">Voice</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/company">Company</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
