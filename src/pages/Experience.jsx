import styles from './Experience.module.css'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.label}>Experience</span>
        <h1 className={styles.heading}>Places I've worked<br />and contributed</h1>
        <p className={styles.sub}>
          Professional experience and community leadership roles that have
          shaped how I build and collaborate.
        </p>
      </div>

      <div className={styles.timeline}>
        {experience.map(({ role, organisation, division, type, period, location, bullets }) => (
          <div key={organisation} className={styles.entry}>
            <div className={styles.entryLeft}>
              <p className={styles.period}>{period}</p>
              <p className={styles.location}>{location}</p>
            </div>
            <div className={styles.entryRight}>
              <p className={styles.organisation}>{organisation}</p>
              <h2 className={styles.role}>{role}</h2>
              <p className={styles.division}>{division}</p>
              <ul className={styles.bullets}>
                {bullets.map((point, i) => (
                    <li key={i} className={styles.bullet}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}