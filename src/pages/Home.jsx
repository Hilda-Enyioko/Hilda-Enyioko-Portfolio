import styles from './Home.module.css'

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>

        <span className={styles.badge}>Available for work & speaking</span>

        <h1 className={styles.title}>
          Hilda Enyioko.
        </h1>

        <p className={styles.bio}>
          Software Engineer · Community Lead
          <br/>
          Hilda is a multi-scholarship award-winning engineer building solutions that sit at the intersection of infrastructure, access, and technology while leading developer communities.
        </p>

        <div className={styles.ctas}>
          <a href="/projects" className={styles.btnPrimary}>View my work</a>
          <a href="/contact" className={styles.btnGhost}>Contact me</a>
        </div>

      </div>

      <div className={styles.photoWrap}>
        <div className={styles.photoPlaceholder}>
          <img src="/hilda-enyioko.jpg" alt="Hilda Enyioko" />
        </div>
      </div>
    </section>
  )
}