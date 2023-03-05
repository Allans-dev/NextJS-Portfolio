import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Image from "next/image";

import { useEffect, useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Portfolio from "../Components/Portfolio";
import AboutMe from "../Components/AboutMe";

import CarouselHorizontal from "../Components/CarouselHorizontal";

import styles from "../../styles/Home.module.css";

const Home: NextPage = ({
  ig,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      //dom is fully loaded, but maybe waiting on images & css files
      if (window) {
        window.$ = window.jQuery = require("jquery");
      }
    });
  }, [ig]);

  // const [ig,setIG` ] = useState(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Allan Cheung Portfolio</title>
        <meta name="description" content="Allan Cheung web Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <article className={styles.main_article}>
          <section className={styles.section_carousel}>
            <div className={styles.background_image1}>
              <div className={styles.background_image2}>
                <div className={styles.background_image3}></div>
              </div>
            </div>
          </section>
          <h1 className={styles.title}>Finding Solutions within Code</h1>
        </article>
        <Portfolio />
        <AboutMe ig={ig} />
      </main>
      <Footer />
    </div>
  );
};

// interface gssPropsTypes {
//   [key: string]: {
//     news: {
//       title: string;
//       url: string;
//       imageUrl: string;
//     };
//     ig: string[];
//   };
// }

export const getServerSideProps: GetServerSideProps = async () => {
  const igOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.RAPIDAPI_KEY}`,
      "X-RapidAPI-Host": "instagram28.p.rapidapi.com",
    },
  };

  try {
    // IG API =============================================

    const igRes = await fetch(
      "https://instagram28.p.rapidapi.com/medias?user_id=256770551&batch_size=50",
      igOptions
    );
    const igData = await igRes.json();

    interface igItem {
      node: { display_url: string };
    }

    const ig = igData.data.user.edge_owner_to_timeline_media.edges.map(
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
        ig,
      },
    };
  } catch {
    throw new Error(`API error`);
  }
};

export default Home;
