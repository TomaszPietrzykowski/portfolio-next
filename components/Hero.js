import styles from '../styles/Home.module.css'

const Hero = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.heroContainer}>
        <h2 className={styles.subtitle}>Javascript Development</h2>
        <h1 className={styles.title}>
          Fast and secure <br />
          web applications
        </h1>
        <button className={styles.cta}>My Work</button>
      </div>
    </main>
  )
}

export default Hero
