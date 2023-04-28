import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <section>
      <nav className={styles.nav}>
        <Link href='./'>
          <h2 className={styles.headerText}>Allan Cheung: Portfolio</h2>
        </Link>
        <input
          className={styles.menu_toggle}
          id='menu_toggle'
          type='checkbox'
        />
        <label className={styles.menu_button_container} htmlFor='menu_toggle'>
          <div className={styles.menu_button}></div>
        </label>
        <ul className={styles.menu}>
          <li>
            <Link href='./'>
              <a className={styles.nav_link}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/portfolio'>
              <a className={styles.nav_link}>Portfolio</a>
            </Link>
          </li>

          <li>
            <a
              href='https://github.com/Allans-dev'
              target='_blank'
              rel='noreferrer'
              className={styles.nav_link}
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
