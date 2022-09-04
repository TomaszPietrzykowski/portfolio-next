import styles from '../styles/Home.module.css'

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
          <button className={styles.cta}>My Work</button>
          <button className={styles.ctaSecondary}>Contact</button>
        </div>
      </div>
    </main>
  )
}

export default Hero
