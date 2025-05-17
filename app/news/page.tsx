import styles from '../../styles/News.module.css';

const newsList = [
	{
		id: '20240510-1',
		date: '2025.05.10',
		type: 'お知らせ',
		title: '新メンバー募集を開始しました。',
	},
];

export default function NewsPage() {
	return (
		<div className={styles.newsPage}>
			<div className={styles.hero}>
				<h1 className={styles.heroTitle}>お知らせ</h1>
			</div>
			<div className={styles.newsContent}>
				<div className={styles.newsHeader}>
					<div className={styles.newsHeaderLeft}></div>
					<div className={styles.newsHeaderRight}>
						<label
							htmlFor="category"
							className={styles.categoryLabel}
						>
							カテゴリー
						</label>
						<select
							id="category"
							className={styles.categorySelect}
						>
							<option>すべて</option>
							<option>論文</option>
							<option>お知らせ</option>
						</select>
					</div>
				</div>
				<ul className={styles.newsList}>
					{newsList.map((news) => (
						<li key={news.id} className={styles.newsItem}>
							<span className={styles.newsDate}>{news.date}</span>
							<span className={styles.newsType}>{news.type}</span>
							<span className={styles.newsText}>{news.title}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
