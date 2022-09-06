import styles from '../../styles/Layout.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.flex}>
        <div className={styles.logo}>
          <span className={styles.firstname}>Tomasz</span>
          <span className={styles.lastname}> Pietrzykowski</span>
        </div>
        <nav>
          <ul className={styles.nav}>
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
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    className={styles.path}
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M0 0V32H32V0H0ZM9.9532 26.5848H5.20552V12.3011H9.9532V26.5848ZM7.57936 10.3515H7.54799C5.95538 10.3515 4.92308 9.25433 4.92308 7.8829C4.92308 6.48137 5.98555 5.41524 7.61044 5.41524C9.23569 5.41524 10.2344 6.48137 10.2655 7.8829C10.2655 9.25433 9.23569 10.3515 7.57936 10.3515ZM27.0769 26.5848H22.328V18.9429C22.328 17.0236 21.6418 15.7134 19.9231 15.7134C18.6104 15.7134 17.8304 16.5956 17.4868 17.4501C17.3619 17.7553 17.3292 18.1796 17.3292 18.6076V26.5848H12.5794C12.5794 26.5848 12.643 13.6411 12.5794 12.3012H17.3292V14.3252C17.9603 13.3541 19.0865 11.9658 21.6092 11.9658C24.7345 11.9658 27.0769 14.0068 27.0769 18.3938V26.5848Z'
                    fill='white'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
