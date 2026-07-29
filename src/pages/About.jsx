import { useState, useEffect } from 'react'
import styles from './About.module.css'
import { communities, awards } from '../data/about'

export default function About() {
  const [activeCommunity, setActiveCommunity] = useState(null)

  useEffect(() => {
    if (!activeCommunity) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveCommunity(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeCommunity])

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
            {communities.map((community) => (
              <button
                key={community.name}
                type="button"
                className={styles.communityCard}
                onClick={() => setActiveCommunity(community)}
                aria-haspopup="dialog"
              >
                <img src={community.image} alt={community.name} className={styles.communityImage} />
                <div className={styles.communityTop}>
                  <p className={styles.communityName}>{community.name}</p>
                  <p className={styles.communityRole}>{community.role}</p>
                </div>
                <p className={styles.communityDesc}>{community.description}</p>
                <span className={styles.communityMore}>Read more →</span>
              </button>
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
        </div>
      </section>

      {/* Community detail modal */}
      {activeCommunity && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={activeCommunity.fullName}
          onClick={() => setActiveCommunity(null)}
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setActiveCommunity(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <span className={styles.label}>{activeCommunity.role}</span>
            <h2 className={styles.modalHeading}>{activeCommunity.fullName}</h2>

            <div className={styles.modalSection}>
              <div className={styles.modalText}>
                <p className={styles.body}>{activeCommunity.detail.intro}</p>
              </div>
              <img
                src={activeCommunity.detail.introImage}
                alt={`${activeCommunity.name} overview`}
                className={styles.modalImage}
              />
            </div>

            <div className={`${styles.modalSection} ${styles.modalSectionReverse}`}>
              <img
                src={activeCommunity.detail.whatWeDoImage}
                alt={`${activeCommunity.name} activity`}
                className={styles.modalImage}
              />
              <div className={styles.modalText}>
                <p className={styles.modalSubheading}>What we do</p>
                <p className={styles.body}>{activeCommunity.detail.whatWeDo}</p>
              </div>
            </div>

            <div className={styles.modalSection}>
              <div className={styles.modalText}>
                <p className={styles.modalSubheading}>What we've achieved</p>
                <p className={styles.body}>{activeCommunity.detail.achievements}</p>
              </div>
              <img
                src={activeCommunity.detail.achievementsImage}
                alt={`${activeCommunity.name} achievements`}
                className={styles.modalImage}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
