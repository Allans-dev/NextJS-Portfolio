import type { NextPage } from "next";
import styles from "/styles/Portfolio.module.css";

const Portfolio: NextPage = () => {
  return (
    <article id="portfolio" className={styles.portfolio}>
      <h1 className={styles.title}>Portfolio</h1>
    </article>
  );
};

export default Portfolio;
