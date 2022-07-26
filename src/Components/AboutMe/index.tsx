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
            return (
              <Image
                className={styles.ig_image}
                key={item + index}
                src={item}
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
          <p>Hi there,</p>
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
            Pursuing work that induces flow and welcomes collaboration, Allan
            continues to grow in technical strength with persistence while
            growing as a person with patience and gratitude.
          </p>
          <span>
            <i>Photos taken from Allan&apos;s Instagram</i>
          </span>
        </div>
      </section>
    </article>
  );
};

export default AboutMe;

//256770551
