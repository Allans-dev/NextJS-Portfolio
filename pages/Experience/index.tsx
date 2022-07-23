import type { NextPage } from "next";
import styles from "/styles/Experience.module.css";

import Header from "../Header";
import Footer from "../Footer";

const Experience: NextPage = () => {
  return (
    <main>
      <Header />
      <article className={styles.article}>Experience Page</article>
      <Footer />
    </main>
  );
};

export default Experience;
