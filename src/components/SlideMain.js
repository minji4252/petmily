import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styles/styles.css";
import { getEventbanner } from "../api/apimain";

export default function SliderContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchEventBanners = async () => {
      const banners = await getEventbanner();
      setItems(banners);
    };

    fetchEventBanners();
  }, []);

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
        {items.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`Slide ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
