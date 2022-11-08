import styles from '../../styles/Projects.module.css'
import Link from 'next/link'

const TopHoneys = () => {
  return (
    // rethink classes
    <main className={styles.detailsContainer}>
      <section className={styles.detailsUneven}>
        <div className={styles.detailsLeft}>
          <div className={styles.detailsContent}>
            <h2 className={styles.detailsSubtitle2}>e-commerce</h2>
            <h1 className={styles.detailsTitle}>Top Honeys</h1>
            <h3 className={styles.detailsWww}>
              <a href='https://tophoneys.com' target='_blank'>
                www.tophoneys.com
              </a>
            </h3>
            <div className={styles.imgMobile}>
              <img src='/th-desk-01.png' className={styles.image} />
            </div>
            <h4 className={styles.detailsSubhead}>Description</h4>
            <p className={styles.detailsPara2}>
              MERN stack e-commerce app, running in production since June 2021.
              Webshop implements all user auth logic, provides custom profiles
              for clients and functionality-rich admin area with 3 tiers of
              permissons. Admin area fully accessible for non-technical user.
              Responsive app, PWA-optimized, with wide scope of supported
              payment methods. Fast, 3-steps checkout, designed with UX and
              conversion in mind. Email notification and reminder logic
              implemented for dropout percentage reduction.
            </p>
            <h4 className={styles.detailsSubhead}>Quick links</h4>
            <p className={styles.detailsPara2}>
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
                    href='https://github.com/TomaszPietrzykowski/tophoneys-backend'
                    target='_blank'
                  >
                    Repo backend
                  </a>
                </li>
                <li>
                  <Link href='/projects/'>Back to all projects</Link>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className={styles.detailsRight}>
          <img src='/th-desk-01.png' className={styles.imageTop} />
        </div>
      </section>
      <section className={styles.detailsEven}>
        <div className={styles.detailsLeft}>
          <img src='/th-desk-02.png' className={styles.imageBottom} />
        </div>
        <div className={styles.imgMobile}>
          <img src='/th-desk-02.png' className={styles.image} />
        </div>
        <div className={styles.detailsRight}>
          <div className={styles.detailsContent}>
            <h4 className={styles.detailsSubhead}>Technology</h4>
            <p className={styles.detailsPara2}>
              Node.js application with Express server and MongoDB Atlas
              database. Mollie Payments implementation. Authentication and
              authorization with JWT, encryption with Bcrypt.js.
            </p>
            <p className={styles.detailsPara2}>
              React SPA frontend with Redux state management. Custom styles in
              jss, applied via MaterialUI theming system. Axios used for data
              fetching.
            </p>
            <h4 className={styles.detailsSubhead}>Story behind</h4>
            <p className={styles.detailsPara2}>
              Designed and built for startup, Top Honeys app was kind of a
              journey for me. I initially planned to use PayPal gateway. PayPal
              however aggressively promotes it's client-side implementation
              which didn't seem particularly secure. Additionally discouraged by
              experiences like features perfectly working in sandbox environment
              and simply impossible in production, I decided to look further and
              ended up using Mollie with secure, backend implementation and the
              suite of payment methods ideal for Benelux.
            </p>
            <p className={styles.detailsPara2}>
              Development highlights would certainly be funny lessons learnt,
              like Google Translate confusing the world out of React and
              changing prices of honey in my shop.
            </p>
            <p className={styles.detailsPara2}>
              Seriously though, I enjoyed working with Redux within this project
              a lot. Somewhat repetitive, handling the state of this size gave
              me a solid grip on workflow within Redux, to the point I find it
              intuitive and enjoyable.
            </p>
            <p className={styles.detailsPara2}>
              Give it a shot:{' '}
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
