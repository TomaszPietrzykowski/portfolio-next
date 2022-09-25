import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Featured.module.css'

const Featured1 = () => {
  return (
    <section className={styles.featured1}>
      <div className={styles.featuredLeft}>
        <h2 className={styles.featuredSubtitle}>Featured project</h2>
        <h1 className={styles.featuredTitle}>Climate Monitor</h1>
        <a href='https://climatemonitor.info' target='_blank'>
          <h3 className={styles.featuredWww}>www.climatemonitor.info</h3>
        </a>
        <div className={styles.imgMobile}>
          <Image
            src='/cm-project.png'
            alt='project preview'
            width={680}
            height={382}
          />
        </div>
        <h4 className={styles.featuredSubhead}>Free Public API</h4>
        <p className={styles.featuredPara}>
          Public RESTful API serving json data on climate change. Well over 40
          endpoints with data on main climate factors. Data from NASA, NOAA and
          Berkely Institute, stored, updated daily and served on demand without
          limits.
        </p>
        <p className={styles.featuredPara}>
          Climate data friendly charted with dynamic range scope for high
          resolution insight. <br />
          <br />
          Up-to-date newsfeed providing wider context on climate change. <br />
          <br />
          Detailed documentation of the API with a list of endpoints.
        </p>
        <div className={styles.featuredBtnsContainer}>
          <a href='https://climatemonitor.info' target='_blank'>
            <button className={styles.featuredBtn}>Project Live</button>
          </a>
          <Link href='/projects/climatemonitor'>
            <a>
              <button className={styles.featuredBtn}>Read More</button>
            </a>
          </Link>
          <Link href='/projects'>
            <a>
              <button className={styles.featuredBtn}>All Projects</button>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.featuredRight}>
        <Image
          src='/cm-project.png'
          alt='project preview'
          width={960}
          height={540}
        />
      </div>
    </section>
  )
}

export default Featured1
