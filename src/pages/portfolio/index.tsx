import type { NextPage } from 'next';

import styles from '../../../styles/Portfolio.module.css';

import Image from 'next/image';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

const Portfolio: NextPage = () => {
  return (
    <main className={styles.main}>
      <Header />
      <article id='portfolio' className={styles.portfolio}>
        <h2 className={styles.title}>Portfolio</h2>
        <section className={styles.card_container}>
          <figure className={styles.vid_card}>
            <video
              className={styles.vid}
              src='/ForumScraper.mp4'
              controls
              muted
            >
              video not supported by browser
            </video>
            <figcaption className={styles.caption}>
              <a
                className={styles.btn1}
                href='https://github.com/Allans-dev/ForumScraper'
                rel='noreferrer'
                target='_blank'
              >
                Github
              </a>
              <p>
                [2022] Forum Scraper is a console program built in C# to scrape
                the web forum HotCopper. The console menu allows the user to
                select one of the top 10 recent forum posts in the daily trading
                section and is given a list of stock ticker symbols along with
                the number of repetitions.{' '}
              </p>
              <p>
                The user is then given the option to save the file (currently
                points to my onedrive address) or discard. If saved, the file
                also includes the post contents.
              </p>
            </figcaption>
          </figure>

          <figure className={styles.vid_card}>
            <video
              className={styles.vid}
              src='/TradingBudget.mp4'
              controls
              loop
              muted
            >
              trading budget demo video not supported by browser
            </video>
            <figcaption className={styles.caption}>
              <div className={styles.btn_container}>
                <a
                  className={styles.btn}
                  href='https://github.com/Allans-dev/trading-budget'
                  rel='noreferrer'
                  target='_blank'
                >
                  Github
                </a>
                <a
                  className={styles.btn}
                  href='https://tradingbudget.firebaseapp.com/'
                  rel='noreferrer'
                  target='_blank'
                >
                  Original Site
                </a>
              </div>
              <p>
                [2021] React project to refresh on fundamentals and learn about
                react hooks / context. It is a project that calculates and
                records investment information as well as provide a net income
                after expenses calculation.{' '}
              </p>
              <p>
                It displays information about potential tax applied to capital
                gains and breaks down expenses into categories and includes a
                savings rate. It then displays a pie chart of profit/loss and
                another on expenses by category.
              </p>
            </figcaption>
          </figure>
          <figure className={styles.vid_card}>
            <video
              className={styles.vid}
              src='/RealUniverse.mp4'
              controls
              muted
            >
              realuniverse demo video not supported by browser
            </video>
            <figcaption className={styles.caption}>
              <div className={styles.btn_container}>
                <a
                  className={styles.btn}
                  href='https://github.com/Allans-dev/real-universe'
                  rel='noreferrer'
                  target='_blank'
                >
                  Github
                </a>
                <a
                  className={styles.btn}
                  href='https://allans-dev.github.io/real-universe/'
                  rel='noreferrer'
                  target='_blank'
                >
                  Original Site
                </a>
              </div>
              <p>
                [2019] Realuniverse is a site that built my typescript skills
                while consolidating my react skills.{' '}
              </p>
              <p>
                It uses an autocomplete searchbar and dynamically displays the
                information you will receive when searching for a planet with
                the particular tab selected.
              </p>{' '}
              <p>
                It imports real data from a json file kept within it’s assets
                taken from Wikipedia imported as tables into excel and then
                parsed into json. There is also a link to the data source.
              </p>
            </figcaption>
          </figure>
          <figure className={styles.vid_card}>
            <div className={styles.image_container}>
              <Image
                className={styles.image}
                src='/classic_website.png'
                alt='portfolio image classic website'
                layout='responsive'
                width='100vw'
                height='56vw'
              />
            </div>
            <figcaption className={styles.caption}>
              <div className={styles.btn_container}>
                <a
                  className={styles.btn}
                  href='https://github.com/Allans-dev/Practice-web-site'
                  rel='noreferrer'
                  target='_blank'
                >
                  Github
                </a>
                <a
                  className={styles.btn}
                  href='allans-dev.github.io/practice-web-site/'
                  rel='noreferrer'
                  target='_blank'
                >
                  Original Site
                </a>
              </div>
              <p>
                [2017] Classic Website with slider and menu button. Demonstrates
                responsive styling techniques and on hover animations. It also
                shows the ability to work with shapes and different media
                formats.
              </p>
              <p></p>
            </figcaption>
          </figure>
        </section>
      </article>
      <Footer />
    </main>
  );
};

export default Portfolio;
