import type { NextPage, GetStaticProps } from "next";

import "/styles/AboutMe.module.css";

interface IGcall {
  [ig: string]: JSON;
}

const AboutMe: NextPage = ({ ig }: IGcall) => {
  // console.log(ig);

  return <section id="AboutMe">About Me Page</section>;
};

export const getStaticProps: GetStaticProps = async () => {
  const igOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.RAPIDAPI_KEY}`,
      "X-RapidAPI-Host": "instagram28.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://instagram28.p.rapidapi.com/medias?user_id=256770551&batch_size=50",
    igOptions
  );
  const ig = await res.json();

  if (!ig) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ig,
    },
  };
};

export default AboutMe;

//256770551
