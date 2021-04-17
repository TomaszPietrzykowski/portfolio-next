import styles from "../styles/Home.module.css";

const WhatIDo = () => {
  return (
    <div className={styles.whatIDoBackground}>
      <svg viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,170.7C840,160,960,96,1080,69.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div className={styles.whatIDoContainer}>
        <div className={styles.whatIDoLeft}>
          <h2 className={styles.whatIDoSubtitle}>Web development</h2>
          <h1 className={styles.whatIDoTitle}>What I Do</h1>
          <p className={styles.whatIDoPara}>
            My name is Tomasz and I am a fullstack javascript developer. I build
            modern web applications with technologies like NodeJS, Express,
            React and Next. My apps are SEO friendly and PWA optimized.
          </p>
          <button className={styles.ctaAbout}>About</button>
        </div>
        <div className={styles.whatIDoRight}>
          <h4 className={styles.whatIDoSubhead}>Dynamic and static websites</h4>
          <h4 className={styles.whatIDoSubhead}>E - commerce</h4>
          <h4 className={styles.whatIDoSubhead}>Content management systems</h4>
          <h4 className={styles.whatIDoSubhead}>Social networking apps</h4>
          <h4 className={styles.whatIDoSubhead}>
            Backend API's and data processing
          </h4>
          <h4 className={styles.whatIDoSubhead}>Custom software</h4>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
