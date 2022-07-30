var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
import Image from "next/image";

import { useEffect } from "react";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

dynamic(() => require("owl.carousel/dist/assets/owl.carousel.css"), {
  ssr: false,
});

dynamic(() => require("owl.carousel"), {
  ssr: false,
});

import styles from "../../styles/CarouselHorizontal.module.css";

const CarouselHorizontal = (props: any) => {
  let screenWidth = 700;
  useEffect(() => {
    screenWidth = window.screen.width;
  }, []);

  const { data, row } = props;

  const filtered = data.filter((item: any, index: number) => {
    return index < row * 10 && index >= 0 && index > row * 10 - 10;
  });
  return (
    <OwlCarousel
      lazyLoad={false}
      className={`${styles.carousel}`}
      loop
      autoplay
      center
      dots={false}
      navElement="span"
      rewind={false}
      items={screenWidth < 460 ? 10 : 10}
      itemElement={`a`}
      mouseDrag={false}
      touchDrag={false}
      pullDrag={false}
    >
      {filtered.map((item: any, index: number) => {
        return (
          <div className={`${styles.owl_item}`} key={item + index}>
            <img
              // loading="eager"
              className={styles.carousel_image}
              src={`/api/imageWorkaround?url=${encodeURIComponent(
                item.imageUrl
              )}`}
              alt="carousel image"
              // layout="fill"
            />
            <h2 className={styles.item_title}>
              <a href={item.url} rel="noreferrer" target="_blank">
                {item.title}
              </a>
            </h2>
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export default CarouselHorizontal;
