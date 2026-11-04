import { useEffect, useState } from 'react'
import styles from './About.module.css'
import { awards } from '../data/about'
import { aboutImages } from '../data/aboutImages'
import { reviews } from '../data/reviews'

function SafeImage({ src, alt, className }) { const [visible, setVisible] = useState(true); return visible ? <img src={src} alt={alt} className={className} onError={() => setVisible(false)} /> : null }

function Reviews() {
  const [perView, setPerView] = useState(1)
  const [page, setPage] = useState(0)
  useEffect(() => { const update = () => setPerView(window.matchMedia('(min-width: 1024px)').matches ? 4 : window.matchMedia('(min-width: 640px)').matches ? 2 : 1); update(); window.addEventListener('resize', update); return () => window.removeEventListener('resize', update) }, [])
  const pages = Math.ceil(reviews.length / perView)
  const currentPage = Math.min(page, Math.max(0, pages - 1))
  return <section className={styles.section}><div className={styles.sectionInner}><span className={styles.label}>What people say</span><div className={styles.reviewSlider} tabIndex="0" role="region" aria-roledescription="carousel" aria-label="Recommendations" onKeyDown={(e) => { if (e.key === 'ArrowLeft') setPage(Math.max(0, page - 1)); if (e.key === 'ArrowRight') setPage(Math.min(pages - 1, page + 1)) }}><div className={styles.reviewTrack} style={{ transform: `translateX(-${currentPage * 100}%)` }}>{reviews.map((review) => <article className={styles.review} key={review.name}><span className={styles.quoteMark}>“</span><p className={styles.quote}>{review.quote}</p><div><strong>{review.name}</strong><p className={styles.reviewRole}>{review.role}</p></div></article>)}</div></div>{pages > 1 && <div className={styles.reviewControls}><button type="button" aria-label="Previous reviews" onClick={() => setPage(Math.max(0, page - 1))}>←</button><div className={styles.dots}>{Array.from({ length: pages }, (_, i) => <button type="button" key={i} aria-label={`Go to review page ${i + 1}`} className={i === currentPage ? styles.dotActive : ''} onClick={() => setPage(i)} />)}</div><button type="button" aria-label="Next reviews" onClick={() => setPage(Math.min(pages - 1, page + 1))}>→</button></div>}</div></section>
}

export default function About() { return <div className={styles.page}><section className={styles.intro}><span className={styles.label}>About</span><h1 className={styles.heading}>About Me</h1><p className={styles.oneLiner}>Code, Community &amp; Impact</p><div className={styles.imageGrid}>{aboutImages.map((image) => <div className={styles.imageTile} key={image.src}><SafeImage {...image} className={styles.galleryImage} /></div>)}</div></section><section className={styles.section}><div className={styles.sectionInner}><span className={styles.label}>Bio</span><div className={styles.bio}>{[
'Hilda Enyioko is a software engineer, developer relations leader, and technology community builder shaping how emerging developers learn, connect, and create impact. She works at the intersection of financial technology, software engineering, and developer ecosystems.',
'She is a Women Techmakers Ambassador, affiliated with Technovation, and the former Community Lead for the Interswitch Developer Community at FUTO. She also served as Chapter Lead for She Code Africa Owerri, Co-Convener of Hack4FUTO 5.0. Her professional experience includes working with Stanbic IBTC Group across Applications & E-Channels Support and Solutions Development.',
"Through her community leadership, Hilda has delivered 30+ technical sessions, reached 400+ developers, and grown She Code Africa Owerri's membership by 34% in four months. Hack4FUTO's fifth edition recorded 1,600+ registrations, 500+ active builders, and over ₦4.5 million in prizes.",
'Her contributions to technology and community building earned her the Rising Star of the Decade Award 2026, presented by She Code Africa.',
'Hilda speaks on developer relations, community-led growth, technical leadership, and building ecosystems that turn access into opportunity.',
].map((paragraph) => <p className={styles.body} key={paragraph}>{paragraph}</p>)}</div></div></section><section className={styles.section}><div className={styles.sectionInner}><span className={styles.label}>Awards &amp; scholarships</span><div className={styles.awardsGrid}>{awards.map((award) => <article className={styles.awardCard} key={award.title}><div className={styles.awardImage}><SafeImage src={award.image} alt="" className={styles.galleryImage} /></div><span className={styles.awardYear}>{award.year}</span><h2>{award.title}</h2><p>{award.description}</p></article>)}</div></div></section><Reviews /></div> }
