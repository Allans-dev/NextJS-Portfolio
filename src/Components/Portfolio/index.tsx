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
            <a
              className={styles.btn1}
              href="https://github.com/Allans-dev/ForumScraper"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            {/* <a className={styles.btn} href="" rel="noreferrer" target="_blank">
              Original Site
            </a> */}
            <p></p>
          </figcaption>
        </figure>

        <figure className={styles.vid_card}>
          <video className={styles.vid} src="/game2s1.mp4" controls loop muted>
            trading budget demo video not supported by browser
          </video>
          <figcaption className={styles.caption}>
            <div className={styles.btn_container}>
              <a
                className={styles.btn}
                href="https://github.com/Allans-dev/trading-budget"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
              <a
                className={styles.btn}
                href="https://tradingbudget.firebaseapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                Original Site
              </a>
            </div>
            <p></p>
          </figcaption>
        </figure>
        <figure className={styles.vid_card}>
          <video
            className={styles.vid}
            src="/compressed-realuniverse.mp4"
            controls
            muted
          >
            realuniverse demo video not supported by browser
          </video>
          <figcaption className={styles.caption}>
            <div className={styles.btn_container}>
              <a
                className={styles.btn}
                href="https://github.com/Allans-dev/real-universe"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
              <a
                className={styles.btn}
                href="https://allans-dev.github.io/real-universe/"
                rel="noreferrer"
                target="_blank"
              >
                Original Site
              </a>
            </div>
            <p>
              [2019]Realuniverse is a site that built my typescript skills while
              consolidating my react skills.{" "}
            </p>
            <p>
              It uses an autocomplete searchbar and dynamically displays the
              information you will receive when searching for a planet with the
              particular tab selected.
            </p>{" "}
            <p>
              It imports real data from a json file kept within it’s assets
              taken from Wikipedia imported as tables into excel and then parsed
              into json. There is also a link to the data source.
            </p>
          </figcaption>
        </figure>
      </section>
    </article>
  );
};

export default Portfolio;
