import type { NextPage } from "next";
import styles from "/styles/Portfolio.module.css";

import Header from "../Header";
import Footer from "../Footer";

const Portfolio: NextPage = () => {
  return (
    <section id="Portfolio">
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Finding solutions <br /> within code.
        </h1>
      </main>
      <Footer />
    </section>
  );
};

export default Portfolio;
