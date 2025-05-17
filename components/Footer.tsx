import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Image
          src="/images/logo.png"
          alt="AIdo ロゴ"
          height={40}
          width={120}
          className={styles.logo}
          style={{ width: 'auto', height: '40px' }}
        />
      </div>
      <div className={styles.footerRight}>
        <nav className={styles.nav}>
          <Link href="/activities">活動内容</Link>
          <Link href="/members">メンバー</Link>
          <Link href="/news">お知らせ</Link>
          <Link href="/contact">お問い合わせ</Link>
        </nav>
        <div className={styles.sns}>
          <a href="https://twitter.com/utokyo_aido" target="_blank" rel="noopener noreferrer" aria-label="X">
            <span className={styles.xicon}>𝕏</span>
          </a>
          <a href="https://instagram.com/utokyo_aido" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <span className={styles.igicon}>Instagram</span>
          </a>
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} AIdo. All rights reserved.
      </p>
    </footer>
  );
}
