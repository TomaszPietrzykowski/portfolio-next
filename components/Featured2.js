import Link from 'next/link'
import styles from '../styles/Featured.module.css'

const Featured2 = () => {
  return (
    <section className={styles.featured} style={{ marginBottom: '12rem' }}>
      <div className={styles.featuredRight}></div>
      <div className={styles.featuredLeft2}>
        <h2 className={styles.featuredSubtitle2}>Featured project</h2>
        <h1 className={styles.featuredTitle}>Mobula API</h1>
        <h3 className={styles.featuredWww}>www.mobula.dev</h3>
        <h4 className={styles.featuredSubhead}>
          Browser based HTTP/API client
        </h4>
        <p className={styles.featuredPara}>
          <strong>Test your endpoints from the browser</strong>, send json body,
          set custom headers and query params. Get response timing, size and
          status. Read body data in custom editor.
        </p>
        <p className={styles.featuredPara}>
          <strong>Design with ease</strong>. Organize your API's in projects and
          your requests in collections. Save your work with free account and
          access from anywhere.
        </p>
        <p className={styles.featuredPara}>
          Use the power of <strong>environmental variables</strong>. Save your
          tokens and root endpoints, easily switch between development, staging
          and production.
        </p>
        <p className={styles.featuredPara}>
          Use <strong>custom proxy</strong> by default to expose headers and
          validate CORS. Disable proxy with one click and read resources
          directly from the browser. Postman won't let you do it - just
          saying... ;)
        </p>
        <div className={styles.featuredBtnsContainer}>
          <a href='https://mobula.dev' target='_blank'>
            <button className={styles.featuredBtn2}>Project Live</button>
          </a>
          <Link href='/projects/mobula'>
            <a>
              <button className={styles.featuredBtn2}>Read More</button>
            </a>
          </Link>
          <Link href='/projects'>
            <a>
              <button className={styles.featuredBtn2}>All Projects</button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Featured2
