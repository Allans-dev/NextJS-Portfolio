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
        </div>
      </section>
    </article>
  );
};

export default AboutMe;

//256770551
