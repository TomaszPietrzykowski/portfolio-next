import styles from '../../styles/About.module.css'
import Link from 'next/link'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>About Me</h1>
        </div>

        <h3 className={styles.subtitle}>who am i</h3>
        <p>
          Hi, I am Tomasz, polish developer based in Amsterdam, NL. <br />
          <br />I have been building web applications since 2019. I have built,
          deployed and I am maintaining multiple functional apps, like content
          management system, public API or e-commerce site. My applications are
          secure, user friendly and SEO optimized.
        </p>
        <h3 className={styles.subtitle}>technologies</h3>
        <p>
          My web biom of choice is Node.js environment with React, Next.js and
          Redux at the frontend. I use javascript and typescript. I build
          RESTful API's with Node and Express. I write custom css/scss and have
          experience with frameworks like Material UI. I work with MongoDB and
          Mongoose, use Git and Github for code and Asana for project
          management. I make mockups in Figma (edit: let's see about that
          one...) and my favourite IDE is VSCode. Having that all said, as a
          self-thaught developer I always am eager to learn new technologies.
        </p>
        <h3 className={styles.subtitle}>interests</h3>
        <p>
          All things React. I consider Next.js framework very exciting to work
          with. Other than that: "backend-of-the-frontend", state mangement,
          data flow through components tree. Not that much of a designer, I am
          particularily interested in frontend logic and data management.
          <br />
          <br />
          Another topic I find really interesting is communication between
          frontend and backend. Request journey through the web has a special
          charm form me. That's probably why I built public API and HTTP client.
          I like Express way of building API's, it's simplicity, clarity and
          minimalizm. And I find concept of middleware simply OP :).
        </p>
        <h3 className={styles.subtitle}>goal</h3>
        <p>
          Currently looking for an entry level position in web develepment
          field. <br />
          <br />
          Are you hiring? Let's get in touch! Connect on{' '}
          <a
            href='https://www.linkedin.com/in/tomaszpietrzykowski/'
            target='_blank'
          >
            LinkedIn
          </a>
          ,{' '}
          <a href='https://github.com/TomaszPietrzykowski' target='_blank'>
            Github
          </a>{' '}
          or{' '}
          <Link href='/contact'>
            <a>send me an email</a>
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default About
