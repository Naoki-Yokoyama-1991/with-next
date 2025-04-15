'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 py-4'>
        <nav className='flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base text-gray-700'>
          <Link href='/'>Home</Link>
          <Link href='/concept'>Concept</Link>
          <Link href='/plan'>Plan</Link>
          <Link href='/event'>Event</Link>
          <Link href='/voice'>Voice</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/company'>Company</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
