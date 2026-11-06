import { useEffect, useRef, useState } from 'react'
import styles from './Reveal.module.css'

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.15 })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`}
      style={{ '--reveal-delay': `${Math.min(delay, 300)}ms` }}
    >
      {children}
    </div>
  )
}
