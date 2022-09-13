import Link from 'next/link'
import styles from '../styles/Featured.module.css'

const Featured1 = () => {
  return (
    <section className={styles.featured}>
      <div className={styles.featuredLeft}>
        <h2 className={styles.featuredSubtitle}>Featured project</h2>
        <h1 className={styles.featuredTitle}>Climate Monitor</h1>
        <a href='https://climatemonitor.info' target='_blank'>
          <h3 className={styles.featuredWww}>www.climatemonitor.info</h3>
        </a>

        <h4 className={styles.featuredSubhead}>Free Public API</h4>
        <p className={styles.featuredPara}>
          <strong>Public RESTful API</strong> serving json data on climate
          change. Well over 40 endpoints with data on main climate factors. Data
          from NASA, NOAA and Berkely Institute, stored, updated daily and
          served on demand without limits.
        </p>
        <p className={styles.featuredPara}>
          <strong>Climate data friendly charted</strong> with dynamic range
          scope for high resolution insight. <br />
          <br />
          <strong>Up-to-date newsfeed</strong> providing wider context on
          climate change. <br />
          <br />
          <strong>Detailed documentation</strong> of the API with a list of
          endpoints.
        </p>
        <div className={styles.featuredBtnsContainer}>
          <a href='https://climatemonitor.info' target='_blank'>
            <button className={styles.featuredBtn}>Project Live</button>
          </a>
          <Link href='/projects/climatemonitor'>
            <a>
              <button className={styles.featuredBtn}>Read More</button>
            </a>
          </Link>
          <Link href='/projects'>
            <a>
              <button className={styles.featuredBtn}>All Projects</button>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.featuredRight}></div>
    </section>
  )
}

export default Featured1
