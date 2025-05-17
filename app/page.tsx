// src/app/page.tsx
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const newsList = [
	{
		id: '20240510-1',
		date: '2025.05.10',
		type: 'お知らせ',
		title: '新メンバー募集を開始しました。',
	},
];

export default function HomePage() {
	return (
		<div className={styles.container}>
			<div className={styles.hero}>
				<h2>東京大学AIサークル「AIdo」</h2>
				<p className={styles.catchcopy}>
					AIで社会に価値を提供する
					<br />
					<span className={styles.catchcopyEn}>
						Providing value to society with AI
					</span>
					<Link href="/activities" className={styles.moreLink}>
						さらに詳しく &gt;
					</Link>
				</p>
			</div>
			<div className={styles.newsBg}>
				<section className={styles.newsSection}>
					<h3 className={styles.newsTitle}>お知らせ</h3>
					<ul className={styles.newsList}>
						{newsList.map(news => (
							<li key={news.id} className={styles.newsItem}>
								<Link href={`/news/${news.id}`} className={styles.newsLink}>
									<span className={styles.newsDate}>{news.date}</span>
									<span className={styles.newsType}>{news.type}</span>
									<span className={styles.newsText}>{news.title}</span>
								</Link>
							</li>
						))}
					</ul>
					<div className={styles.newsMore}>
						<Link href="/news" className={styles.newsMoreBtn}>
							もっと見る
						</Link>
					</div>
				</section>
			</div>
		</div>
	);
}
