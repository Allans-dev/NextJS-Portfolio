import type { NextPage } from "next";
import styles from "/styles/Portfolio.module.css";

import Header from "../Header";
import Footer from "../Footer";

const Portfolio: NextPage = () => {
  return (
    <article className={styles.article}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Finding solutions <br /> within code.
        </h1>
      </main>
      <Footer />
    </article>
  );
};

export default Portfolio;
