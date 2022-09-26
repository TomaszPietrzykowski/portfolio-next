import { useState } from 'react'
import Link from 'next/link'

import styles from '../../styles/Layout.module.css'

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <header className={styles.navbar}>
      <div className={styles.flex}>
        <Link href='/'>
          <a>
            <div className={styles.logo}>
              <span className={styles.firstname}>Tomasz</span>
              <span className={styles.lastname}> Pietrzykowski</span>
            </div>
          </a>
        </Link>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/projects'>My Work</Link>
            </li>
            <li>
              <Link href='/about'>About Me</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
            <li>
              <a href='https://github.com/TomaszPietrzykowski' target='_blank'>
                <svg width='32' height='32' viewBox='0 0 32 32' fill='none'>
                  <path
                    className={styles.path}
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2763 30.1077 27.0363 28.0664 28.9917 25.3432C30.947 22.6201 31.9991 19.3524 32 16C32 7.16 24.84 0 16 0Z'
                    fill='white'
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/tomaszpietrzykowski/'
                target='_blank'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                >
                  <path
                    className={styles.path}
                    d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                  />
                </svg>
              </a>
            </li>
            <li
              className={styles.hamburger}
              onClick={() => setOpenDrawer(true)}
            >
              <div className={styles.hamburgerIcon} />
            </li>
          </ul>
        </nav>
      </div>
      <div className={openDrawer ? styles.drawerOpen : styles.drawerClosed}>
        <ul>
          <li onClick={() => setOpenDrawer(false)}>
            <Link href='/'>Home</Link>
          </li>
          <li onClick={() => setOpenDrawer(false)}>
            <Link href='/projects'>My Work</Link>
          </li>
          <li onClick={() => setOpenDrawer(false)}>
            <Link href='/about'>About</Link>
          </li>
          <li onClick={() => setOpenDrawer(false)}>
            <Link href='/contact'>Contact</Link>
          </li>
          <li onClick={() => setOpenDrawer(false)}>
            <a href='https://github.com/TomaszPietrzykowski' target='_blank'>
              Github
            </a>
          </li>
          <li onClick={() => setOpenDrawer(false)}>
            <a
              href='https://www.linkedin.com/in/tomaszpietrzykowski/'
              target='_blank'
            >
              Linkedin
            </a>
          </li>
        </ul>
        <div
          onClick={() => setOpenDrawer(false)}
          className={styles.closeBtnContainer}
        >
          <div className={styles.closeBtn} />
        </div>
      </div>
    </header>
  )
}

export default Navbar
