import styles from '../../styles/About.module.css'

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
          Hi, I am Tomasz, polish developer living in the Netherlands, region
          Noord - Holland. I have been building web applications since 2019. I
          have built, deployed and I am maintaining multiple functional apps
          like content management system, public API or e-commerce site. My
          applications are secure, user friendly and SEO optimized.
        </p>
        <h3 className={styles.subtitle}>technologies</h3>
        <p>
          My web biom of choice is Node.js environment with React, Next.js and
          Redux at the frontend. I use javascript and typescript. I build
          RESTful API's with Node and Express. I write custom css/scss and have
          experience with frameworks like Material UI. I work with MongoDB and
          Mongoose, use Git and Github for code and Asana for project
          management. I make mockups in Figma and my favourite IDE is VSCode.
          That said, as a self-thaught developer I have strong learning skills
          and I am eager to learn new technologies.
        </p>
        <h3 className={styles.subtitle}>interests</h3>
        <p>
          I consider Next.js framework extremely powerful and exciting to work
          with. Other than that: "backend-of-the-frontend", state mangement,
          data flow through components tree. Not that much of a designer, I am
          particularily interested in frontend logic and data management.
          Another topic I find extremely interesting is communication between
          frontend and backend. Protocols like HTTP, request journey through the
          web, harmony of REST architecture, have a magical charm form me. I
          still find it mind-blowing how amazingly web really works. That's
          probably why I have built public API and HTTP client. I like Express
          way of building API's, it's simplicity, clarity and minimalizm. And I
          find concept of middleware simply OP.
        </p>
        <h3 className={styles.subtitle}>goal</h3>
        <p>
          Currently looking for an entry level position in web develepment
          field. Are you hiring? Let's get in touch! Connect on LinkedIn, Github
          or send me an email.
        </p>
      </div>
    </div>
  )
}

export default About
