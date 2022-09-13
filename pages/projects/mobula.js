import styles from '../../styles/Projects.module.css'
import Link from 'next/link'

const Mobula = () => {
  return (
    // rethink classes
    <main className={styles.detailsContainer}>
      <section className={styles.detailsUneven}>
        <div className={styles.detailsLeft}>
          <div className={styles.detailsContent}>
            <h2 className={styles.detailsSubtitle3}>HTTP/API client</h2>
            <h1 className={styles.detailsTitle}>Mobula API</h1>
            <h3 className={styles.detailsWww}>
              <a href='https://mobula.dev' target='_blank'>
                www.mobula.dev
              </a>
            </h3>
            <h4 className={styles.detailsSubhead}>Description</h4>
            <p className={styles.detailsPara3}>
              Browser based HTTP/API client for rapid testing of endpoints.
              Let's you bypass CORS, send JSON body from the browser and apply
              custom headers and params. App returns request time, size and
              status, exposes all headers and displays response body. Gives you
              project-scoped environmental variables for faster workflow.
              Creating a free account will let you organize your work in
              projects and folders and save it for easy access from anywhere.
            </p>
            <h4 className={styles.detailsSubhead}>Quick links</h4>
            <p className={styles.detailsPara3}>
              <ul>
                <li>
                  <a href='https://mobula.dev' target='_blank'>
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
            <p className={styles.detailsPara3}>
              Node.js/Express server, proxy dealing with Cross Origin Resourse
              Sharing and exposing data to the browser. User data and work
              stored in MongoDB database. JWT authentication.
            </p>
            <p className={styles.detailsPara3}>
              Next.js-powered React frontend with Redux state management.
              Written in TypeScript and styled with custom css modules.
            </p>
            <h4 className={styles.detailsSubhead}>Story behind</h4>
            <p className={styles.detailsPara3}>
              Inspired by software like Postman and Insomnia I decided to build
              a tool similar in functionality but less bloathed and more
              accessible. Meant for rapid testing and design, Mobula has
              intuitive, recognizable interface and provides resonable, useful
              set of testing functionalities, while staying light-weight and
              easy to work with.
            </p>
            <p className={styles.detailsPara3}>
              Development of Mobula app was very satisfying for me for two main
              resons. First one would be the TypeScript, which turned out to be
              very rewarding to work with. And second - deep dive into REST
              architecture, that gave me a lot of confidence in fullstack
              development and solid understanding of computer networking.
            </p>
            <p className={styles.detailsPara3}>
              Give it a shot:{' '}
              <a href='https://mobula.dev' target='_blank'>
                www.mobula.dev
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Mobula
