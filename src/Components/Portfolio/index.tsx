import type { NextPage } from "next";
import styles from "../../../styles/Portfolio.module.css";

const Portfolio: NextPage = () => {
  return (
    <article id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}>Portfolio</h2>
      <section className={styles.card_container}>
        <figure className={styles.vid_card}>
          <video
            className={styles.vid}
            src="/game2s1.mp4"
            controls
            autoPlay
            loop
            muted
          >
            video not supported by browser
          </video>
          <figcaption className={styles.caption}>
            <p></p>
            <a
              className={styles.btn}
              href=""
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Github
            </a>
            <a
              className={styles.btn}
              href=""
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Original Site
            </a>
          </figcaption>
        </figure>

        <figure className={styles.vid_card}>
          <video className={styles.vid} src="/game2s1.mp4" controls loop muted>
            video not supported by browser
          </video>
          <figcaption className={styles.caption}>
            <p></p>
            <a
              className={styles.btn}
              href=""
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Github
            </a>
            <a
              className={styles.btn}
              href=""
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Original Site
            </a>
          </figcaption>
        </figure>
        <figure className={styles.vid_card}>
          <video className={styles.vid} src="/game2s1.mp4" controls loop muted>
            video not supported by browser
          </video>
          <figcaption className={styles.caption}>
            <p></p>
            <a
              className={styles.btn}
              href=""
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Github
            </a>
            <a
              className={styles.btn}
              href=""
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Original Site
            </a>
          </figcaption>
        </figure>
        <figure className={styles.vid_card}>
          <video className={styles.vid} src="/game2s1.mp4" controls loop muted>
            video not supported by browser
          </video>
          <figcaption className={styles.caption}>
            <p></p>
            <a
              className={styles.btn}
              href=""
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Github
            </a>
            <a
              className={styles.btn}
              href=""
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Original Site
            </a>
          </figcaption>
        </figure>
      </section>
    </article>
  );
};

export default Portfolio;
