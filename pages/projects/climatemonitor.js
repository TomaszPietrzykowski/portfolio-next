import styles from '../styles/Featured.module.css'

const ClimateMonitor = () => {
  return (
    // rethink classes
    <main>
      <h1>Project title</h1>
      <section className={styles.detailsEven}>
        <div className={styles.detailsLeft}></div>
        <div className={styles.detailsRight}></div>
      </section>
      <section className={styles.detailsUneven}>
        <div className={styles.detailsLeft}></div>
        <div className={styles.detailsRight}></div>
      </section>
      <section className={styles.detailsEven}>
        <div className={styles.detailsLeft}></div>
        <div className={styles.detailsRight}></div>
      </section>
    </main>
  )
}

export default ClimateMonitor
