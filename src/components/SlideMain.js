import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import b4 from "../images/b4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styles/styles.css";

// import required modules

export default function SliderContainer() {
  const items = [{ src: b1 }, { src: b2 }, { src: b3 }, { src: b4 }];

  return (
    <div className="swiper-box">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        loop={true}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item.src} alt={`Slide ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
