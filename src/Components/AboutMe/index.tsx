import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import "/styles/AboutMe.module.css";

const AboutMe: NextPage = ({
  displayUrl,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  displayUrl.map((item: string) => {
    return item;
  });

  return <section id="AboutMe">{displayUrl.map((item: string) => {})}</section>;
};

export const getStaticProps: GetStaticProps = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.RAPIDAPI_KEY}`,
      "X-RapidAPI-Host": "instagram28.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://instagram28.p.rapidapi.com/medias?user_id=256770551&batch_size=50",
    options
  );
  const data = await res.json();

  const photoArray: object[] =
    data.data.user.edge_owner_to_timeline_media.edges;

  const displayUrl: string[] = photoArray.map((item: any, index: number) => {
    return item.node.display_url;
  });

  if (!photoArray) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      displayUrl,
    },
  };
};

export default AboutMe;

//256770551
