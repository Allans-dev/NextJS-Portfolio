import type { NextPage } from "next";
import styles from "../../styles/Loading.module.css";

const Portfolio: NextPage = () => {
  return (
    <article className={styles.loading}>
      <h2 className={styles.title}>Loading</h2>
    </article>
  );
};

export default Portfolio;
