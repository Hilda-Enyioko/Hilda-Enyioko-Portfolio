import styles from './Projects.module.css'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.label}>Projects</span>
        <h1 className={styles.heading}>Projects I've Built</h1>
        <p className={styles.sub}>
          A mix of fintech infrastructure, community tools, and hardware — all
          currently in progress or recently completed.
        </p>
      </div>

      <div className={styles.list}>
        {projects.map(({ name, category, status, description, stack }) => (
          <div key={name} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardMeta}>
                <span className={styles.category}>{category}</span>
                <span className={styles.status}>{status}</span>
              </div>
              <h2 className={styles.cardTitle}>{name}</h2>
              <p className={styles.cardDesc}>{description}</p>
            </div>
            <ul className={styles.stack}>
              {stack.map(s => (
                <li key={s} className={styles.stackTag}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}