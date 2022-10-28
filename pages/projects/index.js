import Image from 'next/image'
import Link from 'next/link'
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
              <div className={styles.projectDescription}>
                <h4 className={styles.projectSubtitle}>custom e-commerce</h4>
                <h2 className={styles.projectTitle}>Top Honeys</h2>
                <div className={styles.projectWww}>www.tophoneys.com</div>
                <p>
                  MERN stack e-commerce with rich admin functionalities.
                  Currently using Mollie payments, fully responsive, secure and
                  modern e-commerce app, smoothly running in production since
                  june 2021.
                </p>
                <div className={styles.projectLiBtnsContainer}>
                  <Link href='/projects/tophoneys/'>
                    <a>
                      <button className={styles.projectLiBtn}>Read More</button>
                    </a>
                  </Link>
                  <a href='https://tophoneys.com' target='_blank'>
                    <button className={styles.projectLiBtn}>
                      Project live
                    </button>
                  </a>
                </div>
              </div>
              <div className={styles.projectRight}>
                <img
                  src='/th-isometric.png'
                  alt='project preview top honeys e-commerce'
                  className={styles.imageRight}
                />
              </div>
            </li>
            <li>
              <div className={styles.projectDescription}>
                <h4 className={styles.projectSubtitle2}>Public API</h4>
                <h2 className={styles.projectTitle}>Climate Monitor</h2>
                <div className={styles.projectWww}>www.climatemonitor.info</div>
                <p>
                  Free public REST API, comprehensive and easy to use. Serving
                  json data on earth CO<sub>2</sub> and other climate factors.
                  Frontend presents charted data, climate-oriented newsfeed and
                  detailed documentation.
                </p>
                <div className={styles.projectLiBtnsContainer}>
                  <Link href='/projects/climatemonitor/'>
                    <a>
                      <button className={styles.projectLiBtn2}>
                        Read More
                      </button>
                    </a>
                  </Link>
                  <a href='https://climatemonitor.info' target='_blank'>
                    <button className={styles.projectLiBtn2}>
                      Project live
                    </button>
                  </a>
                </div>
              </div>
              <div className={styles.projectRight2}>
                <img
                  src='/cm-isometric.png'
                  alt='project preview climate monitor free public json API'
                  className={styles.imageRight}
                />
              </div>
            </li>
            <li>
              <div className={styles.projectDescription}>
                <h4 className={styles.projectSubtitle3}>HTTP/API client</h4>
                <h2 className={styles.projectTitle}>Mobula API</h2>
                <div className={styles.projectWww}>www.mobula.dev</div>
                <p>
                  Browser-based HTTP/API client, inspierd by software like
                  Postman and Insomnia. Simple and light-weight, built for rapid
                  testing of endpoints. Comes with a free user account, CORS
                  proxy and environmental variables.
                </p>
                <div className={styles.projectLiBtnsContainer}>
                  <Link href='/projects/mobula/'>
                    <a>
                      <button className={styles.projectLiBtn3}>
                        Read More
                      </button>
                    </a>
                  </Link>
                  <a href='https://mobula.dev' target='_blank'>
                    <button className={styles.projectLiBtn3}>
                      Project live
                    </button>
                  </a>
                </div>
              </div>
              <div className={styles.projectRight3}>
                <img
                  src='/mobula-isometric.png'
                  alt='project preview mobula http client'
                  className={styles.imageRight}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
