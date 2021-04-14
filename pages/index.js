import styles from "../styles/Home.module.css";
import Link from "next/link";

function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
        <div className={styles.flex}>
          <div className={styles.logo}>
            <span className={styles.firstname}>Tomasz</span>{" "}
            <span className={styles.lastname}>Pietrzykowski</span>
          </div>
          <nav>
            <ul className={styles.nav}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/projects">My Work</Link>
              </li>
              <li>
                <Link href="/about">About Me</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <a
                  href="https://github.com/TomaszPietrzykowski"
                  target="_blank"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      className={styles.path}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2763 30.1077 27.0363 28.0664 28.9917 25.3432C30.947 22.6201 31.9991 19.3524 32 16C32 7.16 24.84 0 16 0Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
      <section className={styles.featured}>
        <div className={styles.container}></div>
      </section>
    </div>
  );
}

export default HomePage;
