import "../styles/main.css";
import "../styles/common.css";
import "../styles/reset.css";
import { useEffect, useState } from "react";
import ranpic1 from "../images/ranpic1.jpg";
import ranpic2 from "../images/ranpic2.jpg";
import ranpic3 from "../images/ranpic3.jpg";
import ranpic4 from "../images/ranpic4.jpg";
import ranpic5 from "../images/ranpic5.jpg";

const images = [ranpic1, ranpic2, ranpic3, ranpic4, ranpic5];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

const MainRandom = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const randomImage = getRandomImage();
    setBackgroundImage(randomImage);
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
