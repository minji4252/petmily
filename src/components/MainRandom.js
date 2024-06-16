import "../styles/main.css";
import "../styles/common.css";
import "../styles/reset.css";
import { useEffect, useState } from "react";
import { getMainbanner } from "../api/apimain";

const MainRandom = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const fetchRandomImage = async () => {
      const images = await getMainbanner();
      if (images.length > 0) {
        const randomIndex = Math.floor(Math.random() * images.length);
        setBackgroundImage(images[randomIndex]);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <section className="main-sec-1">
      <div
        className="m-top-random"
        id="random-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="m-tr-texts">
          <p className="m-tr-text">
            반려동물의
            <br />
            체계적인 일정 관리,
            <br />
            펫밀리에서 시작
          </p>
          <p className="m-tr-text-2">
            반려동물의 일정을 효율적으로 관리하고, <br />
            소중한 순간을 함께하세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainRandom;
