import { useNavigate } from "react-router-dom";
import MainRandom from "../components/MainRandom";
import MainSlides from "../components/MainSlides";
import MainTodo from "../components/MainTodo";
import MainUpload from "../components/MainUpload";
import "../styles/common.css";
import "../styles/main.css";
import "../styles/notfoundpage.css";
import "../styles/reset.css";
import { useEffect, useState } from "react";

const MainPage = () => {
  const navigate = useNavigate();
  const loggedIn = sessionStorage.getItem("userPk");

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div className="wrap main-wrap">
      <main className="main">
        <MainRandom></MainRandom>
        <div className="inner main-space">
          <MainTodo></MainTodo>
          <MainUpload></MainUpload>
          <MainSlides></MainSlides>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
