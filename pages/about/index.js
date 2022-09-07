import styles from '../../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        <h3>who am i</h3>
        <p>
          Hi, my name's Tomasz. I am polish developer living in the Netherlands,
          regio Noord - Holland. I have been building web applications since
          2019. I have built, deployed and maintained multiple functional
          websites like content management system or e&nbsp;-&nbsp;commerce. My
          applications are secure, user friendly and SEO optimized.
        </p>
        <h3>technologies</h3>
        <p>
          My web biom of choice is Node.js environment with React, Next.js and
          Redux at the frontend. I build RESTful API's with Express framework. I
          write my own css/scss and have experience with frameworks like
          Material UI. For data storage my current apps are mostly using
          MongoDB.
        </p>
        <h3>interests</h3>
        <p>
          "Backend-of-the-frontend", state mangement, data flow through
          components structe. I find Redux intuitive but also also work with
          Context API. Communication between frontend and backend is another
          topic I find extremely interesting. That's probably why I have built
          public API and HTTP client.
        </p>
        <h3>goal</h3>
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
