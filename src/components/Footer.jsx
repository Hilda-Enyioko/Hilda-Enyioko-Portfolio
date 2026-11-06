import styles from './Footer.module.css'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© 2026 Hilda Enyioko</p>
      <SocialLinks />
    </footer>
  )
}