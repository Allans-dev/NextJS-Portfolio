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
    <section id="aboutMe" className={styles.about_me}>
      <h2>About Me</h2>
      {ig.map((item: string, index: number) => {
        return (
          <Image
            key={item + index}
            src={item}
            alt="instagram-about-image"
            width={100}
            height={100}
          />
        );
      })}
    </section>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const igOptions = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": `${process.env.RAPIDAPI_KEY}`,
//       "X-RapidAPI-Host": "instagram28.p.rapidapi.com",
//     },
//   };

//   const res = await fetch(
//     "https://instagram28.p.rapidapi.com/medias?user_id=256770551&batch_size=50",
//     igOptions
//   );
//   const igData = await res.json();

//   const photoArray: object[] =
//     igData.data.user.edge_owner_to_timeline_media.edges;

//   const displayUrl: string[] = photoArray.map((item: any, index: number) => {
//     return item.node.display_url;
//   });

//   if (!photoArray) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       displayUrl,
//     },
//   };
// };

export default AboutMe;

//256770551
