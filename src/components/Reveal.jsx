import { useEffect, useRef, useState } from 'react'
import styles from './Reveal.module.css'

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(() => typeof window === 'undefined' || !('IntersectionObserver' in window))

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.15 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return <Tag ref={ref} className={`${styles.reveal} ${revealed ? styles.revealed : ''} ${className}`} style={{ '--reveal-delay': `${Math.min(delay, 300)}ms` }}>{children}</Tag>
}
