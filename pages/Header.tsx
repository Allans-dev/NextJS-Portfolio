import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <section>
      <div className={styles.navbar}></div>
      <nav className={styles.nav}>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={72}
          height={16}
        ></Image>{" "}
        <h2 className={styles.headerText}>code.allan</h2>
        <input
          id="menu_toggle"
          className={styles.menu_toggle}
          type="checkbox"
        />
        <label className={styles.menu_button_container} htmlFor="menu_toggle">
          <div className={styles.menu_button}></div>
        </label>
        <ul className={styles.menu}>
          <li>
            <Link href="./Portfolio">
              <a className={styles.nav_link}>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="./Experience">
              <a className={styles.nav_link}>Experience</a>
            </Link>
          </li>
          <li>
            <Link href="./AboutMe">
              <a className={styles.nav_link}>About Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
