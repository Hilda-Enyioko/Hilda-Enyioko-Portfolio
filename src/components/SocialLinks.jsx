import { socials } from '../data/socials'
import styles from './SocialLinks.module.css'

const paths = {
  Instagram: 'M12 2.2A9.8 9.8 0 1 0 12 21.8 9.8 9.8 0 0 0 12 2.2Zm0 2A7.8 7.8 0 1 1 12 19.8 7.8 7.8 0 0 1 12 4.2Zm5.1 1.4a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z',
  YouTube: 'M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5 3-5 3Z',
  LinkedIn: 'M6.5 8H3.3v10h3.2V8ZM4.9 3A1.9 1.9 0 1 0 4.9 6.8 1.9 1.9 0 0 0 4.9 3ZM18.7 8c-1.5 0-2.5.8-2.9 1.4V8h-3.2v10h3.2v-5c0-1.3.2-2.5 1.8-2.5 1.5 0 1.5 1.4 1.5 2.6V18h3.2v-5.6C22.3 9.7 21.5 8 18.7 8Z',
  X: 'M18.8 3H22l-7 8 8.2 10h-6.4l-5-6.2L6.4 21H3.2l7.5-8.6L2.8 3h6.5l4.5 5.7L18.8 3Zm-1.1 16.2h1.8L8.5 4.7H6.6l11.1 14.5Z',
  DEV: 'M3 3h18v18H3V3Zm3 4v10h2V7H6Zm4 0v10h2.2l3.8-5-3.8-5H10Zm2 3 1.5 2-1.5 2v-4Z',
  GitHub: 'M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1A9.7 9.7 0 0 1 12 7c.8 0 1.7.1 2.5.3 2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z',
}

export default function SocialLinks() {
  return <div className={styles.links}>{socials.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} title={social.name} className={styles.link}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[social.name]} fill="currentColor" /></svg></a>)}</div>
}
