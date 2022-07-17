import { useEffect } from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

dynamic(() => require("owl.carousel/dist/assets/owl.carousel.css"), {
  ssr: false,
});

dynamic(() => require("owl.carousel"), {
  ssr: false,
});

import styles from "../styles/CarouselHorizontal.module.css";

const CarouselHorizontal = (props: any) => {
  const { data, row, rtl } = props;

  const filtered = data.filter((item: any, index: number) => {
    return index < row * 10 && index >= 0 && index > row * 10 - 10;
  });
  return (
    <OwlCarousel
      className={`${styles.carousel}`}
      loop
      autoplay
      lazyLoad
      dots={false}
      navElement="span"
      rewind={false}
      items={2}
      itemElement={`a`}
      margin={0}
    >
      {/* <div className={`${styles.owl_item}`}>
        <span>1</span>
      </div>
      <div className={`${styles.owl_item}`}>
        <span>2</span>
      </div>
      <div className={`${styles.owl_item}`}>
        <span>3</span>
      </div>
      <div className={`${styles.owl_item}`}>
        <span>4</span>
      </div> */}

      {filtered.map((item: any, index: number) => {
        return (
          <a
            className={`${styles.owl_item}`}
            key={item + index}
            href={item.url}
            target="_blank"
          >
            <img
              className={styles.carousel_image}
              src={item.imageUrl}
              alt="carousel image"
            />
          </a>
        );
      })}
    </OwlCarousel>
  );
};

export default CarouselHorizontal;
