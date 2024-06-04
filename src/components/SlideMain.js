import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const imagePaths = ["b1.jpg", "b2.jpg", "b3.jpg", "b4.jpg"];
const fetchImages = async () => {
  return imagePaths.map(path => `images/${path}`);
};

const SlideMain = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await fetchImages();
      setImages(loadedImages);
    };
    loadImages();
  }, []);

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SlideMain;
