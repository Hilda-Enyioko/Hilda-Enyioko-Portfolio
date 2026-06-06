import styles from './About.module.css'
import { communities, awards } from '../data/about'

export default function About() {
  return (
    <div className={styles.page}>

      {/* Bio */}
      <section className={styles.bio}>
        <div className={styles.bioInner}>
          <span className={styles.label}>About</span>
          <h1 className={styles.heading}>
            Hilda Enyioko
          </h1>
          <p className={styles.body}>
            I'm Hilda Enyioko — a final-year Electronic Engineering student at FUTO,
            graduating August 2026, and a full-stack software developer focused on
            financial systems infrastructure.
          </p>
          <p className={styles.body}>
            My work sits at the intersection of payments, product, and people. I build
            API-first platforms, lead developer communities, and create spaces where
            more people — especially women — can access and contribute to technology.
          </p>
          <p className={styles.body}>
            I completed an IT internship at Stanbic IBTC Group in the Applications
            and E-channels Unit, working closely with payment infrastructure and
            digital banking systems. I'm open to roles, collaborations, mentorships,
            scholarships, and speaking engagements.
          </p>
        </div>
      </section>

      {/* Communities */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={styles.label}>Communities I help run</span>
          <div className={styles.communityGrid}>
            {communities.map(({ name, role, description, image }) => (
              <div key={name} className={styles.communityCard}>
                <img src={image} alt={name} className={styles.communityImage} />
                <div className={styles.communityTop}>
                  <p className={styles.communityName}>{name}</p>
                  <p className={styles.communityRole}>{role}</p>
                </div>
                <p className={styles.communityDesc}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={styles.label}>Awards & scholarships</span>
          <div className={styles.awardsList}>
            {awards.map(({ title, year, description }) => (
              <div key={title} className={styles.awardRow}>
                <div className={styles.awardLeft}>
                  <p className={styles.awardYear}>{year}</p>
                </div>
                <div className={styles.awardRight}>
                  <p className={styles.awardTitle}>{title}</p>
                  <p className={styles.awardDesc}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={styles.label}>YouTube</span>
          <div className={styles.youtubeTop}>
            <div>
              <h2 className={styles.youtubeHeading}>Watch me build & explain</h2>
              <p className={styles.youtubeDesc}>
                I share tech tutorials and walkthroughs of projects I've built —
                from payment integrations to full-stack applications.
              </p>
            </div>
            <a
              href="https://youtube.com/@HildaBabyyy"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.youtubeBtn}
            >
              Visit channel →
            </a>
          </div>
          {/* <div className={styles.videoGrid}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.videoCard}>
                <div className={styles.videoThumb} />
                <p className={styles.videoTitle}>Video title goes here</p>
                <p className={styles.videoMeta}>Tutorial · 2025</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

    </div>
  )
}