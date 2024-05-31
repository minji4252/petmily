import styled from "@emotion/styled";
import React from "react";

const HeaderStyle = styled.header`
  width: 100%;
  height: 100px;
  display: block;
  border-bottom: 1px solid #896555;
  z-index: 999999;
  /* background-color: #fefbf8; */
  display: flex;
`;

const NavInnerStyle = styled.div`
  width: calc(100% - 30px);
  max-width: 1465px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto;
`;

const Header = () => {
  return (
    <HeaderStyle className="header">
      {/* <div className="nav-inner">
        <div className="header-logo">
          <a href="index.html" className="header-logo-link">
            <img src="#" alt="팻밀리" className="header-logo-img" />
          </a>
        </div>
        <ul className="navi-list">
          <li>
            <a href="#">일정</a>
          </li>
          <li>
            <a href="#">캘린더</a>
          </li>
          <li>
            <a href="#">게시판</a>
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
      </div> */}
    </HeaderStyle>
  );
};

export default Header;
