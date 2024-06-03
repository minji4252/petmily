import { Link } from "react-router-dom";
import "../styles/common.css";
import "../styles/footer.css";
import "../styles/header.css";
import "../styles/notfoundpage.css";
import "../styles/reset.css";
import errorCat from "../images/error-cat.png";

const NotfoundPage = () => {
  return (
    <div className="wrap error-wrap">
      <main className="error-inner">
        <section className="notf-sec-1">
          <p className="error-title">Page Not Found</p>
          <div className="error-cat-box">
            <img src={errorCat} alt="에러 일러스트" className="error-cat-i" />
            <p className="error-cat-m">
              찾으려는 페이지의 주소가 잘못 입력되었거나
              <br />
              요청하신 주소의 변경 혹은 삭제로 인해 사용할 수 없습니다.
              <br />
              정확한 주소를 다시 한번 확인해주세요.
            </p>
          </div>
          <Link to="/">
            <button className="error-btn">메인으로</button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default NotfoundPage;
