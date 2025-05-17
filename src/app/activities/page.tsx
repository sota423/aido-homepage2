import styles from '../../styles/Activities.module.css';

export default function ActivitiesPage() {
  return (
    <>
      <div className={styles.activitiesHero}>
        <h1 className={styles.activitiesTitle}>活動内容</h1>
      </div>
      <div className={styles.activitiesMain}>
        <h2 className={styles.activitiesCatch}>
          AIで社会に価値を提供する
        </h2>
        <section className={styles.activitiesSection}>
          <h3>主な活動内容</h3>
          <ul>
            <li>AI・機械学習の勉強会・輪読会の開催</li>
            <li>AI技術を活用したプロジェクトの企画・開発</li>
            <li>外部講師を招いた特別セミナーやワークショップ</li>
            <li>学内外のAI関連イベント・コンテストへの参加</li>
            <li>社会課題解決を目指したAI応用の実践</li>
          </ul>
          <h3>活動の様子</h3>
          <p>
            メンバー同士で最新のAI論文を読み解いたり、実際にAIモデルを開発して社会課題に挑戦したりしています。<br />
            初心者から経験者まで幅広いメンバーが在籍し、互いに学び合いながら成長できる環境です。
          </p>
        </section>
      </div>
    </>
  );
}
