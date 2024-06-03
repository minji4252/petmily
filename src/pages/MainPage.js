import "../styles/common.css";
import "../styles/notfoundpage.css";
import "../styles/reset.css";
import "../styles/main.css";
import MainRandom from "../components/MainRandom";
import MainTodo from "../components/MainTodo";
import MainUpload from "../components/MainUpload";

const MainPage = () => {
  return (
    <div className="wrap main-wrap">
      <main className="main">
        <MainRandom></MainRandom>
        <div className="inner main-space">
          <MainTodo></MainTodo>
          <MainUpload></MainUpload>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
