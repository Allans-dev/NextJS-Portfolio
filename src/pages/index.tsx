import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/AboutMe.module.css';

import Image from 'next/image';

import Footer from '../Components/Footer';
import Header from '../Components/Header';

const AboutMe: NextPage<{ [key: string]: string[] }> = ({ image_urls }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Allan Cheung Portfolio</title>
        <meta name='description' content='Allan Cheung web Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Header />
        <article id='aboutMe' className={styles.about_me}>
          <section className={styles.div_container}>
            <div className={styles.ig_gallery}>
              {image_urls.map((item: string, index: number) => {
                return (
                  <Image
                    loading='eager'
                    className={styles.ig_image}
                    key={item + index}
                    src={item}
                    alt='instagram-about-image'
                    width={150}
                    height={140}
                  />
                );
              })}
            </div>
            <div className={styles.bio}>
              <h2>Hi there, let me introduce Allan:</h2>
              <p>
                Allan started his programming journey in 2017 after graduating
                from his bachelor&apos;s degree in Property Economics.
              </p>
              <p>
                He spent his last semester working full-time while finishing his
                last subject and then went on to teach himself web development.
              </p>
              <p>
                During this time he created a study group that met once every
                two weeks focusing on the freeCodeCamp curriculum and was
                awarded one of the top contributors around the world for the
                well known not-for-profit.
              </p>
              <p>
                After his first programming role, he went on to study at TAFE
                completing a Cert IV in programming.
              </p>
              <p>
                Pursuing work that promotes flow and welcomes collaboration,
                Allan continues to grow in technical strength while appreciating
                every step of his journey.
              </p>
              <span>
                <i>
                  <a
                    href='https://www.instagram.com/_photosbyallan_/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Photos taken from Allan&apos;s Instagram
                  </a>
                </i>
              </span>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const igOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': 'instagram28.p.rapidapi.com',
    },
  };

  try {
    // IG API =============================================

    const igRes = await fetch(
      'https://instagram28.p.rapidapi.com/medias?user_id=256770551&batch_size=50',
      igOptions
    );
    const igData = await igRes.json();

    interface igItem {
      node: { display_url: string };
    }

    const image_urls = igData.data.user.edge_owner_to_timeline_media.edges.map(
      (item: igItem) => {
        return item.node.display_url;
      }
    );

    if (!igData) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        image_urls,
      },
      revalidate: 2629800, // 1 month
    };
  } catch {
    throw new Error(`API error`);
  }
}

export default AboutMe;

//256770551
