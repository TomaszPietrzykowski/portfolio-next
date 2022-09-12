import styles from '../../styles/Projects.module.css'
import Link from 'next/link'

const TopHoneys = () => {
  return (
    // rethink classes
    <main className={styles.detailsContainer}>
      <section className={styles.detailsUneven}>
        <div className={styles.detailsLeft}>
          <div className={styles.detailsContent}>
            <h2 className={styles.detailsSubtitle}>e-commerce</h2>
            <h1 className={styles.detailsTitle}>Top Honeys</h1>
            <h3 className={styles.detailsWww}>
              <a href='https://tophoneys.com' target='_blank'>
                www.tophoneys.com
              </a>
            </h3>
            <h4 className={styles.detailsSubhead}>Description</h4>
            <p className={styles.detailsPara}>
              MERN stack e-commerce app running in production since June 2021.
              Webshop implements all user auth logic, provides custom profiles
              for clients and functionality-rich admin area. Fully responsive
              app with wide scope of supported payment methods. Fast, 3-steps
              checkout, designed with UX and conversion in mind.
            </p>
            <h4 className={styles.detailsSubhead}>Quick links</h4>
            <p className={styles.detailsPara}>
              <ul>
                <li>
                  <a href='https://tophoneys.com' target='_blank'>
                    Project live
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/TomaszPietrzykowski/tophoneys-frontend'
                    target='_blank'
                  >
                    Repo frontend
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/TomaszPietrzykowski/tophoneys-backendr'
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
          <img src='/cm-project.png' className={styles.imageTop} />
        </div>
        <div className={styles.detailsRight}>
          <div className={styles.detailsContent}>
            <h4 className={styles.detailsSubhead}>Technology</h4>
            <p className={styles.detailsPara}>
              Node.js application with Express server and MongoDB Atlas. Mollie
              Payments implementation. Authentication and authorization with
              JWT.
            </p>
            <p className={styles.detailsPara}>
              React SPA frontend with custom styles in jss applied via
              MaterialUI theme. Axios used for data fetching.
            </p>
            <h4 className={styles.detailsSubhead}>Story behind</h4>
            <p className={styles.detailsPara}>
              Designed and built for startup, Top Hooneys app was kind of a
              journey for me. I initially based my payments on PayPal, but I
              didn't want to make my app rely too much on third party. It was
              supposed to be easy to plug in and out payments gates as needed.
              PayPal agressivly promotes it's client-side implementation, which
              can be sacure only if PayPal stores client, products and
              transactions data. I ended up
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

export default TopHoneys
