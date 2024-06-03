import "../../styles/header.css";
import "../../styles/global.css";
import "../../styles/reset.css";
import { Link } from "react-router-dom";
import petmilyLogo from "../../images/petmily-header.png";

const Header = () => {
  return (
    <header className="header">
      <div className="nav-inner">
        <div className="header-logo">
          <Link to="/" className="header-logo-link">
            <img
              src={petmilyLogo}
              alt="팻밀리 로고"
              className="header-logo-img"
            />
          </Link>
        </div>
        <ul className="navi-list">
          <li>
            <Link to="/todolist">일정</Link>
          </li>
          <li>
            <Link to="/calendar">캘린더</Link>
          </li>
          <li>
            <Link to="/">게시판</Link>
          </li>
        </ul>
        <ul className="navi-list-2">
          <li>
            <a href="#">로그인</a>
          </li>
          <li>
            <a href="#">회원가입</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
