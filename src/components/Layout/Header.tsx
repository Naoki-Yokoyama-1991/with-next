'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="h-20">
        <nav className="size- flex h-full flex-wrap items-center justify-center gap-x-8">
          <Link href="/">
            <Image src="/images/logo.png" alt="ロゴ" width={120} height={80} />
          </Link>
          <Link href="/about">初めての方へ</Link>
          <Link href="/area">地域から探す</Link>
          <Link href="/plan">葬儀プラン・費用</Link>
          <Link href="/voice">事例・お客様の声</Link>
          <Link href="/company">私たちについて</Link>
          <Link href="/funeral">供花・供物のご注文</Link>
          <a href="tel:+0366269457" className="text-primary">
            03-6626-9457
          </a>
        </nav>
      </div>
    </header>
  );
}
