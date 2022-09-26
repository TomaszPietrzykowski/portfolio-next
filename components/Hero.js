import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Hero = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.heroContainer}>
        <h2 className={styles.subtitle}>Javascript Developer</h2>
        <h1 className={styles.title}>
          Weaving software
          <br />
          for the Web
        </h1>
        <div className={styles.btnContainers}>
          <Link href='/projects'>
            <a>
              <button className={styles.cta}>My Work</button>
            </a>
          </Link>
          <Link href='/contact'>
            <a>
              <button className={styles.ctaSecondary}>Contact</button>
            </a>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Hero
