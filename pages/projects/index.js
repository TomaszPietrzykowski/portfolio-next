import styles from '../../styles/Projects.module.css'

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBackground}>
        <div className={styles.content}>
          <h1 className={styles.title}>My Work</h1>

          <ul className={styles.projectsList}>
            <li>
              <div className={styles.projectLeft}></div>
              <div className={styles.projectDescription}>
                <h4 className={styles.projectSubtitle}>custom e-commerce</h4>
                <h2 className={styles.projectTitle}>Top Honeys</h2>
                <div className={styles.projectWww}>www.tophoneys.com</div>
                <p>
                  Hi, my name's Tomasz. I am polish developer living in the
                  Netherlands, regio Noord - Holland. I have been building web
                  applications since 2019. I have built, deployed and maintained
                  multiple functional websites like content management system or
                  e&nbsp;-&nbsp;commerce. My applications are secure, user
                  friendly and SEO optimized.
                </p>
              </div>
              <div className={styles.projectRight}></div>
            </li>
            <li>
              <div className={styles.projectLeft2}></div>
              <div className={styles.projectDescription}>
                <h4 className={styles.projectSubtitle}>Public API</h4>
                <h2 className={styles.projectTitle}>Climate Monitor</h2>
                <div className={styles.projectWww}>www.tophoneys.com</div>
                <p>
                  Hi, my name's Tomasz. I am polish developer living in the
                  Netherlands, regio Noord - Holland. I have been building web
                  applications since 2019. I have built, deployed and maintained
                  multiple functional websites like content management system or
                  e&nbsp;-&nbsp;commerce. My applications are secure, user
                  friendly and SEO optimized.
                </p>
              </div>
              <div className={styles.projectRight}></div>
            </li>
            <li>
              <div className={styles.projectLeft3}></div>
              <div className={styles.projectDescription}>
                <h4 className={styles.projectSubtitle}>HTTP/API client</h4>
                <h2 className={styles.projectTitle}>Mobula API</h2>
                <div className={styles.projectWww}>www.mobula.dev</div>
                <p>
                  Hi, my name's Tomasz. I am polish developer living in the
                  Netherlands, regio Noord - Holland. I have been building web
                  applications since 2019. I have built, deployed and maintained
                  multiple functional websites like content management system or
                  e&nbsp;-&nbsp;commerce. My applications are secure, user
                  friendly and SEO optimized.
                </p>
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
