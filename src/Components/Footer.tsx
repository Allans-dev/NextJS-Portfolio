import Image from "next/image";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>code.allan</span>
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </footer>
  );
};

export default Footer;
