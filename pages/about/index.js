import styles from '../../styles/About.module.css'
import Link from 'next/link'
import Image from 'next/image'

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
          Hi, I am Tomasz. Polish, self-taught developer, based in Amsterdam,
          NL. <br />
          <br />I have been building web applications since 2019. I built and
          deployed a number of apps, like content management system, public API
          or e-commerce site. My applications are secure, user friendly and SEO
          optimized.
        </p>

        <h3 className={styles.subtitle}>technologies</h3>
        <p>
          My web biom of choice is Node.js environment with React, Next.js and
          Redux at the frontend. I use javascript and typescript. I build
          RESTful APIs with Node and Express. I write custom css and have
          experience with frameworks like Material UI. I work with MongoDB and
          Mongoose, use Git and Github for code and Asana for project
          management. I make mockups in Figma and my IDE is VSCode. Having that
          all said, I am easy to be mentored and eager to learn new
          technologies.
        </p>
        <div className={styles.imgMobile}>
          <Image
            src='/about-me.jpeg'
            alt='developer behind pc -  van goghs starry night style painting'
            width={680}
            height={680}
            className={styles.image}
          />
        </div>
        <h3 className={styles.subtitle}>interests</h3>
        <p>
          React and it's environment, building lightning fast interfaces.
          Recently experimenting with TypeScript, I start to see how useful it
          is. I also find Next.js framework very exiting to work with. And I am
          curiously looking towards three.js.
          <br />
          <br />I am also interested in the communication between frontend and
          backend. Request journey through the web has a special charm form me.
          I tried to explore REST architecture by building HTTP client and
          exposing public API. I like the Express way of building APIs for it's
          simplicity but also plan to explore graphQl.
        </p>
        <h3 className={styles.subtitle}>goal</h3>
        <p>
          I am currently looking for an entry level position in web development
          field. Preferably as a Junior Frontend/React Developer.
          <br />
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
          <Link href='/contact/'>
            <a>send me an email</a>
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default About
