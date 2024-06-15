import { Link } from "react-router-dom";
import petmilyLogo from "../../images/petmily-header.png";
import "../../styles/common.css";
import "../../styles/header.css";
import "../../styles/reset.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isUser, setIsUser] = useState("");

  const userPk = sessionStorage.getItem("userPk");
  useEffect(() => {
    if (userPk) {
      setIsUser(userPk);
    } else {
      setIsUser("");
    }
  }, [userPk]);

  const handleLogout = () => {
    // 로그아웃 로직 (예: sessionStorage에서 userPk 제거)
    sessionStorage.removeItem("userPk");
    setIsUser("");
    // 필요한 경우 페이지를 새로고침하거나 리다이렉트
  };

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
            <Link to="/petadmin">반려동물관리</Link>
          </li>
        </ul>
        <ul className="navi-list-2">
          {isUser ? (
            <>
              <li style={{ color: "#896555" }}>{isUser} 님</li>
              <li
                onClick={handleLogout}
                style={{ cursor: "pointer", color: "#896555" }}
              >
                로그아웃
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/join">회원가입</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
