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
            <h3 className={styles.detailsWww}>
              <a href='https://climatemonitor.info' target='_blank'>
                www.climatemonitor.info
              </a>
            </h3>
            <div className={styles.imgMobile}>
              <img src='/cm-project.png' className={styles.image} />
            </div>
            <h4 className={styles.detailsSubhead}>Description</h4>
            <p className={styles.detailsPara}>
              Free public API serving json data on climate change. Well over 40
              endpoints with data on main climate factors. Data from NASA, NOAA
              and Berkely Institute, stored, updated daily and served on demand
              without limits. Frontend of the app provides neat charts with
              dynamic scope for data analysis, climate newsfeed with headlines
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
        <div className={styles.detailsRight}>
          <img src='/cm-project.png' className={styles.imageTop} />
        </div>
      </section>
      <section className={styles.detailsEven}>
        <div className={styles.detailsLeft}>
          <img src='/cm-project.png' className={styles.imageBottom} />
        </div>
        <div className={styles.imgMobile}>
          <img src='/cm-project.png' className={styles.image} />
        </div>
        <div className={styles.detailsRight}>
          <div className={styles.detailsContent}>
            <h4 className={styles.detailsSubhead}>Technology</h4>
            <p className={styles.detailsPara}>
              Node.js application with Express server. The heart of the
              application is Cron scheduler running updates on all datasets.
              Data is stored in MongoDB Atlas with use of Mongoose.
            </p>
            <p className={styles.detailsPara}>
              Frontend written in React with Next.js and styled with custom jss
              using Material UI theming setup. Chart.js used for data
              presentation and Spring.js for animations.
            </p>
            <h4 className={styles.detailsSubhead}>Story behind</h4>
            <p className={styles.detailsPara}>
              Climate Monitor evolved quite a bit from it's original idea.
              Initially I wanted to play with data presentation, see how deeply
              I can customize Chart.js library. Frontend app was supposed to
              consume API and present charted data. Apparently I could not find
              API that I would be 100% satisfied with, so I decided to write and
              expose the one of my own.
            </p>
            <p className={styles.detailsPara}>
              Some highlights of development would be lots of fun with
              Material&nbsp;UI and a deep dive into REST architecture. I am also
              happy to provide useful resources to other developers and possibly
              contribute by that to raise of climate awareness.
            </p>
            <p className={styles.detailsPara}>
              Give it a shot:{' '}
              <a href='https://climatemonitor.info' target='_blank'>
                www.climatemonitor.info
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ClimateMonitor
