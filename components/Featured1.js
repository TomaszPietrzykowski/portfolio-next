import styles from '../styles/Featured.module.css'

const Featured1 = () => {
  return (
    <section className={styles.featured}>
      <div className={styles.featuredLeft}>
        <h2 className={styles.featuredSubtitle}>Featured project</h2>
        <h1 className={styles.featuredTitle}>Climate Monitor</h1>
        <h3 className={styles.featuredWww}>www.climatemonitor.info</h3>
        <h4 className={styles.featuredSubhead}>Free Public API</h4>
        <p className={styles.featuredPara}>
          RESTful API serving json data on climate change. Well over 40
          endpoints with data on main climate factors. Data from NASA, NOAA and
          Berkely Institute, stored, updated daily and served on demand without
          limits.
        </p>
        <h4 className={styles.featuredSubhead}>Frontend</h4>
        <p className={styles.featuredPara}>
          Climate data friendly charted with dynamic range scope for high
          resolution insight. <br />
          <br />
          Up-to-date newsfeed providing wider context on climate change. <br />
          <br />
          Detailed documentation of the API with a list of endpoints.
        </p>
        <div className={styles.featuredBtnsContainer}>
          <button className={styles.featuredBtn}>Read More</button>
          <button className={styles.featuredBtn}>All Projects</button>
        </div>
      </div>
      <div className={styles.featuredRight}></div>
    </section>
  )
}

export default Featured1
