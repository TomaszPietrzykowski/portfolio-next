import styles from '../styles/Home.module.css'

const Featured2 = () => {
  return (
    <section className={styles.featured} style={{ marginBottom: '12rem' }}>
      <div className={styles.featuredRight}></div>
      <div className={styles.featuredRight2}>
        <h2 className={styles.featuredSubtitle2}>Featured project</h2>
        <h1 className={styles.featuredTitle}>Mobula API</h1>
        <h3 className={styles.featuredWww}>www.mobula.dev</h3>
        <h4 className={styles.featuredSubhead}>
          Browser based HTTP/API client
        </h4>
        <p className={styles.featuredPara2}>
          Test your endpoints from the browser, send json body, set custom
          headers and query params. Get response timing, size and status. Read
          body data in custom editor.
        </p>
        <p className={styles.featuredPara2}>
          Design with ease. Organize your API's in projects and your requests in
          collections. Save your work with free account and access from
          anywhere.
        </p>
        <p className={styles.featuredPara2}>
          Use the power of environmental variables. Save your tokens and root
          endpoints, easily switch between development, staging and production.
        </p>
        <p className={styles.featuredPara2}>
          Use custom proxy by default to expose headers and validate CORS.
          Disable proxy with one click and read resources directly from the
          browser. Postman won't let you do it - just saying... ;)
        </p>
      </div>
    </section>
  )
}

export default Featured2
