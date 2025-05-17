'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">
          <Image src="/images/logo.png" alt="AIdo ロゴ" width={120} height={50} />
        </Link>
      </h1>
      <nav className={styles.nav}>
        <Link href="/activities">活動内容</Link>
        <Link href="/members">メンバー</Link>
        <Link href="/news">お知らせ</Link>
        <Link href="/contact">お問い合わせ</Link>
      </nav>
    </header>
  );
}
