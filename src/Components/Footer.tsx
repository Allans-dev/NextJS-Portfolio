import Image from 'next/image';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Allan Cheung: Software Guy</span>
      <ul className={styles.socials}>
        <li>
          <a
            href='https://github.com/Allans-dev'
            target='_blank'
            rel='noreferrer'
            className={styles.nav_link}
          >
            <BsGithub size={22} />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/allan-cheung-web/'
            target='_blank'
            rel='noreferrer'
            className={styles.nav_link}
          >
            <BsLinkedin size={22} />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/_photosbyallan_/'
            target='_blank'
            rel='noreferrer'
            className={styles.nav_link}
          >
            <BsInstagram size={22} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
