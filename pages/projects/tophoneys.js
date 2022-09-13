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
              Node.js application with Express server and MongoDB Atlas
              database. Mollie Payments implementation. Authentication and
              authorization with JWT, encryption with Bcrypt.js.
            </p>
            <p className={styles.detailsPara}>
              React SPA frontend with Redux state management. Custom styles in
              jss applied via MaterialUI theming system. Axios used for data
              fetching.
            </p>
            <h4 className={styles.detailsSubhead}>Story behind</h4>
            <p className={styles.detailsPara}>
              Designed and built for startup, Top Honeys app was kind of a
              journey for me. I initially based payments on PayPal, but I didn't
              want the app to rely too much on third party. PayPal aggressively
              promotes it's client-side implementation, which can be secure only
              if PayPal stores data. Server-side implementation turned out to be
              flagged and discouraged. I ended up implementing Mollie Payments
              (best decision ever) and designing architecture where client,
              product and transaction data is stored within own backend,
              allowing necessary validation without duplicating data.
            </p>
            <p className={styles.detailsPara}>
              Development highlights would certainly be PayPal developer
              experience versus smooth and pleasant Mollie implementation. But
              also funny lessons learnt, like Google Translate confusing the
              world out of React, or Safari ruining my day.
            </p>
            <p className={styles.detailsPara}>
              Seriously though, I enjoyed working with Redux within this project
              a lot. Somewhat repetitive, handling the state of this size gave
              me solid grip on the workflow within Redux to the point I find it
              intuitive and enjoyable.
            </p>
            <p className={styles.detailsPara}>
              Give it a shot:
              <a href='https://tophoneys.com' target='_blank'>
                www.tophoneys.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TopHoneys
