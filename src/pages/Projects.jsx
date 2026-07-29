import { useState, useEffect } from 'react'
import styles from './Projects.module.css'
import { projects } from '../data/projects'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    if (!activeProject) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeProject])

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
        {projects.map((project) => (
          <button
            key={project.name}
            type="button"
            className={styles.card}
            onClick={() => setActiveProject(project)}
            aria-haspopup="dialog"
          >
            {project.images?.cover && (
              <img
                src={project.images.cover}
                alt={project.name}
                className={styles.cardImage}
              />
            )}
            <div className={styles.cardTop}>
              <div className={styles.cardMeta}>
                <span className={styles.category}>{project.category}</span>
                <span className={styles.status}>{project.status}</span>
              </div>
              <h2 className={styles.cardTitle}>{project.name}</h2>
              <p className={styles.cardDesc}>{project.description}</p>
            </div>
            <ul className={styles.stack}>
              {project.stack.map(s => (
                <li key={s} className={styles.stackTag}>{s}</li>
              ))}
            </ul>
            <span className={styles.cardMore}>Read more →</span>
          </button>
        ))}
      </div>

      {/* Project detail modal */}
      {activeProject && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.name}
          onClick={() => setActiveProject(null)}
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setActiveProject(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <div className={styles.modalMeta}>
              <span className={styles.category}>{activeProject.category}</span>
              <span className={styles.status}>{activeProject.status}</span>
            </div>
            <h2 className={styles.modalHeading}>{activeProject.name}</h2>

            {activeProject.images?.cover && (
              <img
                src={activeProject.images.cover}
                alt={activeProject.name}
                className={styles.modalCoverImage}
              />
            )}

            <p className={styles.body}>
              {activeProject.longDescription || activeProject.description}
            </p>

            <ul className={styles.stack}>
              {activeProject.stack.map(s => (
                <li key={s} className={styles.stackTag}>{s}</li>
              ))}
            </ul>

            {activeProject.images?.gallery?.length > 0 && (
              <div className={styles.modalGallery}>
                {activeProject.images.gallery.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${activeProject.name} screenshot ${i + 1}`}
                    className={styles.modalGalleryImage}
                  />
                ))}
              </div>
            )}

            <div className={styles.modalLinks}>
              {activeProject.liveUrl && (
                <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                  View live →
                </a>
              )}
              {activeProject.repoUrl && (
                <a href={activeProject.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                  View repo →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
