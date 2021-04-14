import styles from "../styles/Home.module.css";

const Hero = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.heroImgLeft}></div>
      <div className={styles.heroContainer}>
        <h2 className={styles.subtitle}>Javascript Development</h2>
        <h1 className={styles.title}>
          Fast and secure <br />
          web applications
        </h1>
        <button className={styles.cta}>My Work</button>
        <div className={styles.heroImg}></div>
      </div>
      <svg id="wave" viewBox="0 0 1440 300" className={styles.svg}>
        <path
          fill="white"
          d="M0,96L80,101.3C160,107,320,117,480,144C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </main>
  );
};

export default Hero;
