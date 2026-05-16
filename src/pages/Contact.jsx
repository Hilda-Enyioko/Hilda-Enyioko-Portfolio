import { useState } from 'react'
import styles from './Contact.module.css'
import { services } from '../data/contact'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.page}>

      {/* Header */}
      <div className={styles.header}>
        <span className={styles.label}>Contact</span>
        <h1 className={styles.heading}>Let's work together</h1>
        <p className={styles.sub}>
          Open to roles, projects, mentorships, scholarships, and speaking engagements.
          Reach out and let's talk.
        </p>
      </div>

      {/* Services */}
      <div className={styles.servicesSection}>
        <span className={styles.label}>What I offer</span>
        <div className={styles.servicesGrid}>
          {services.map(({ title, description }) => (
            <div key={title} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{title}</h3>
              <p className={styles.serviceDesc}>{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className={styles.formSection}>
        <span className={styles.label}>Send a message</span>
        <div className={styles.formCard}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Name</label>
              <input
                className={styles.formInput}
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email</label>
              <input
                className={styles.formInput}
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Subject</label>
            <input
              className={styles.formInput}
              type="text"
              name="subject"
              placeholder="What's this about?"
              value={form.subject}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Message</label>
            <textarea
              className={styles.formTextarea}
              name="message"
              placeholder="Tell me about your project, opportunity, or idea..."
              rows={6}
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <a
            href={`mailto:enyiokohilda@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`}
            className={styles.submitBtn}
          >
            Send message →
          </a>
        </div>
      </div>

    </div>
  )
}