import styles from '../../styles/Layout.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <ul className={styles.footerNav}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/projects'>My Work</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
        <li>
          <Link href='https://github.com/TomaszPietrzykowski'>Github</Link>
        </li>
        <li>
          <Link href='https://www.linkedin.com/in/tomaszpietrzykowski/'>
            LinkedIn
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
