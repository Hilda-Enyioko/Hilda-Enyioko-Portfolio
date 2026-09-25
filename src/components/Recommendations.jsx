'use client'

import { useState, useEffect, useRef } from 'react'
import recommendations from '../data/recommendations'
import styles from './Recommendations.module.css'

const INTERVAL_MS = 6000

export default function Recommendations() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % recommendations.length)
    }, INTERVAL_MS)

    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (index) => {
    clearInterval(timerRef.current)
    setActive(index)
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % recommendations.length)
    }, INTERVAL_MS)
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Recommendations</span>
        <h2 className={styles.heading}>What people say about working with her</h2>

        <div className={styles.track}>
          {recommendations.map((rec, index) => (
            <article
              key={rec.id}
              className={`${styles.card} ${index === active ? styles.cardActive : ''}`}
              aria-hidden={index !== active}
            >
              <p className={styles.quote}>&ldquo;{rec.quote}&rdquo;</p>
              <div className={styles.attribution}>
                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.name}
                >
                  {rec.name}
                </a>
                <span className={styles.title}>{rec.title}</span>
                {rec.relationship && (
                  <span className={styles.relationship}>{rec.relationship}</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.dots}>
          {recommendations.map((rec, index) => (
            <button
              key={rec.id}
              className={`${styles.dot} ${index === active ? styles.dotActive : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Show recommendation from ${rec.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
