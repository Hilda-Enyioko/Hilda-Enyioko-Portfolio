import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function closeMenu() { setOpen(false) }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          Hilda Enyioko
        </NavLink>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a href="/contact" className={styles.cta}>
          Contact me
        </a>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barBot : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobileMenu}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? `${styles.mobileLink} ${styles.mobileLinkActive}` : styles.mobileLink
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
          <a href="/contact" className={styles.mobileCta} onClick={closeMenu}>
            Contact me
          </a>
        </div>
      )}
    </nav>
  )
}