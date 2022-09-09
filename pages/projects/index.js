import styles from '../../styles/Projects.module.css'

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBackground}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>My Work</h1>
          </div>

          <ul className={styles.projectsList}>
            <li>
              <div className={styles.projectLeft}></div>
              <div className={styles.projectDescription}>
                <h4 className={styles.projectSubtitle}>custom e-commerce</h4>
                <h2 className={styles.projectTitle}>Top Honeys</h2>
                <div className={styles.projectWww}>www.tophoneys.com</div>
                <p>
                  Fully custom MERN stack e-commerce with rich admin
                  functionalities. One of main goals was the ease of switching
                  between payment gates, therefore app is running own backend
                  and stores all user, product and transaction data in custom db
                  rather than rely on payment gates providers. <br />
                  <br />
                  Currently using Mollie payments, fully responsive, SEO
                  optimized and PWA ready, secure and modern e-commerce app,
                  smoothly running in production since june 2021.
                </p>
                <div className={styles.projectLiBtnsContainer}>
                  <button className={styles.projectLiBtn}>Read More</button>
                  <button className={styles.projectLiBtn}>Project Live</button>
                </div>
              </div>
              <div className={styles.projectRight}></div>
            </li>
            <li>
              <div className={styles.projectLeft2}></div>
              <div className={styles.projectDescription}>
                <h4 className={styles.projectSubtitle2}>Public API</h4>
                <h2 className={styles.projectTitle}>Climate Monitor</h2>
                <div className={styles.projectWww}>www.climatemonitor.info</div>
                <p>
                  Free public REST API, comprehensive and easy to use. Serving
                  json data on earth CO<sub>2</sub> and other climate factors.
                  Frontend presents data in elegant charts with dynamic scope,
                  provides climate-oriented newsfeed and detailed documentation.
                  <br />
                  <br />
                  App built around complex scheduler running updates over
                  multiple sources. Data is parsed and unified, than served as
                  json from database without limits.
                </p>
                <div className={styles.projectLiBtnsContainer}>
                  <button className={styles.projectLiBtn2}>Read More</button>
                  <button className={styles.projectLiBtn2}>Project Live</button>
                </div>
              </div>
              <div className={styles.projectRight}></div>
            </li>
            <li>
              <div className={styles.projectLeft3}></div>
              <div className={styles.projectDescription}>
                <h4 className={styles.projectSubtitle3}>HTTP/API client</h4>
                <h2 className={styles.projectTitle}>Mobula API</h2>
                <div className={styles.projectWww}>www.mobula.dev</div>
                <p>
                  Browser-based HTTP/API client, inspierd by software like
                  Postman and Insomnia. Simple and light-weight, built for quick
                  and effortless testing of endpoints.
                  <br />
                  <br />
                  App is running custom proxy for CORS validation, uses JSON
                  editor for body data and gives you control over headers and
                  query params. Let's you organize your work in projects and
                  folders and save it with free account. Environmental variables
                  make work even easer.
                </p>
                <div className={styles.projectLiBtnsContainer}>
                  <button className={styles.projectLiBtn3}>Read More</button>
                  <button className={styles.projectLiBtn3}>Project Live</button>
                </div>
              </div>
              <div className={styles.projectRight}></div>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.imageContainer}></div>
    </div>
  )
}

export default ProjectsPage
