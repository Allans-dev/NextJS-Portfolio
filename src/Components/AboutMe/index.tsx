import type { NextPage } from "next";
import styles from "../../../styles/AboutMe.module.css";

import Image from "next/image";

import Loading from "../Loading";

interface aboutMeProps {
  ig: string[];
}

const AboutMe: NextPage<aboutMeProps> = ({ ig }) => {
  if (!ig) {
    return <Loading />;
  }

  return (
    <article id="aboutMe" className={styles.about_me}>
      <section className={styles.div_container}>
        <div className={styles.ig_gallery}>
          {ig.map((item: string, index: number) => {
            console.log(item);
            return (
              <Image
                loading="eager"
                className={styles.ig_image}
                key={item + index}
                src={`/api/imageWorkaround?url=${encodeURIComponent(item)}`}
                alt="instagram-about-image"
                width={120}
                height={125}
              />
            );
          })}
        </div>
        <div className={styles.bio}>
          {" "}
          <h2>About Me</h2>
          <p>Hi there, let me introduce Allan:</p>
          <p>
            Allan started his programming journey in 2017 after graduating from
            his bachelor&apos;s degree in Property Economics.
          </p>
          <p>
            He spent his last semester working full-time while finishing his
            last subject and then went on to teach himself web development.
          </p>
          <p>
            During this time he created a study group that met once every two
            weeks focusing on the freeCodeCamp curriculum and was awarded one of
            the top contributors around the world for the well known
            not-for-profit.
          </p>
          <p>
            After his first programming role, he went on to study at TAFE
            completing a Cert IV in programming.
          </p>
          <p>
            Pursuing work that promotes flow and welcomes collaboration, Allan
            continues to grow in technical strength while appreciating every
            step of his journey.
          </p>
          <span>
            <i>
              <a
                href="https://www.instagram.com/_photosbyallan_/"
                target="_blank"
                rel="noreferrer"
              >
                Photos taken from Allan&apos;s Instagram
              </a>
            </i>
          </span>
        </div>
      </section>
    </article>
  );
};

export default AboutMe;

//256770551
