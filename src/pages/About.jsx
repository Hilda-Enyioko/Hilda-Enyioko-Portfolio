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

export default function About() { return <div className={styles.page}><section className={styles.intro}><h1 className={styles.heading}>About Me</h1><p className={styles.oneLiner}>Code, Community &amp; Impact</p><div className={styles.imageGrid}>{aboutImages.map((image) => <div className={styles.imageTile} key={image.src}><SafeImage {...image} className={styles.galleryImage} /></div>)}</div></section><section className={styles.section}>
  <div className={styles.sectionInner}>
    <div className={styles.bio}>
      {[
        "Hilda Enyioko is a backend-leaning software engineer and community builder. She is drawn to designing scalable, API-first systems for fintech and payments, and cares about making financial services more accessible across Africa. She works as a Software Engineer at Bunchbay Nigeria Limited.",
        "She holds a degree in Electronic Engineering from the Federal University of Technology, Owerri (FUTO), where coursework in control systems, digital signal processing, data communications, and optoelectronics sat alongside a self-directed path into full-stack development. Her first real exposure to fintech came through an internship at Stanbic IBTC Group’s Applications and E-Channels unit.",
        "Beyond engineering, Hilda is deeply invested in community. She has held leadership roles with the Interswitch Developer Community at FUTO (IDC-FUTO) and She Code Africa Owerri, mentoring members into web development careers and internships. She co-convened Hack4FUTO, FUTO’s flagship student hackathon, which drew over 1,600 registered attendees and more than ₦4.5M in prizes in its latest edition. She also writes on dev.to and LinkedIn and shares content on software architecture on YouTube.",
        "Her work has been recognised with the Rising Star of the Decade Award from She Code Africa, and she is a Women Techmakers Ambassador. She is also a multiple scholarship recipient, supported by Stanbic IBTC, She Code Africa, and the Kaizen Reading Group.",
        "Her career ambition is to become a world-class financial and data engineer, building the payment systems and infrastructure that power the next generation of finance in Africa, while opening doors for more young people and women in the Nigerian tech ecosystem to follow.",
      ].map((paragraph) => (
        <p className={styles.body} key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </div>
</section><section className={styles.section}><div className={styles.sectionInner}><span className={styles.label}>Awards &amp; scholarships</span><div className={styles.awardsGrid}>{awards.map((award) => <article className={styles.awardCard} key={award.title}><div className={styles.awardImage}><SafeImage src={award.image} alt="" className={styles.galleryImage} /></div><span className={styles.awardYear}>{award.year}</span><h2>{award.title}</h2><p>{award.description}</p></article>)}</div></div></section><Reviews /></div> }
