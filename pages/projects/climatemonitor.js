import styles from '../../styles/Projects.module.css'
import Link from 'next/link'

const ClimateMonitor = () => {
  return (
    // rethink classes
    <main className={styles.detailsContainer}>
      <section className={styles.detailsUneven}>
        <div className={styles.detailsLeft}>
          <div className={styles.detailsContent}>
            <h2 className={styles.detailsSubtitle}>Public REST API</h2>
            <h1 className={styles.detailsTitle}>Climate Monitor</h1>
            <h3 className={styles.detailsWww}>www.climatemonitor.info</h3>
            <h4 className={styles.detailsSubhead}>Description</h4>
            <p className={styles.detailsPara}>
              Free public API serving json data on climate change. Well over 40
              endpoints with data on main climate factors. Data from NASA, NOAA
              and Berkely Institute, stored, updated daily and served on demand
              without limits. Frontend of the app provides neat charts with
              dynamic scope for data analysis, climate newsfeed with headline
              from last 30 days and documentation of the API.
            </p>
            <h4 className={styles.detailsSubhead}>Quick links</h4>
            <p className={styles.detailsPara}>
              <ul>
                <li>
                  <a href='https://climatemonitor.info' target='_blank'>
                    Project live
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/TomaszPietrzykowski/climate-monitor-nextjs'
                    target='_blank'
                  >
                    Repo frontend
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/TomaszPietrzykowski/climate-monitor'
                    target='_blank'
                  >
                    Repo backend
                  </a>
                </li>
                <li>
                  <Link href='/projects'>Back to all projects</Link>
                </li>
              </ul>
            </p>
          </div>
        </div>
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
