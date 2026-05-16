import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© 2026 Hilda Enyioko</p>
      <ul className={styles.socials}>
        <li><a href="https://github.com/Hilda-Enyioko" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com/in/hilda-amarachi-enyioko" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://twitter.com/amarachii_e" target="_blank" rel="noopener noreferrer">X</a></li>
      </ul>
    </footer>
  )
}