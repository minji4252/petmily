import React from "react";
import styled from "@emotion/styled";

const FooterStyle = styled.footer`
  height: 215px;
  background-color: #a47e6d;
`;

const Footer = () => {
  return (
    <FooterStyle className="footer">
      {/* <div className="inner">
        <div className="footer-left">
          <a href="index.html" className="footer-logo">
            <img src="#" alt="팻밀리" />
          </a>
          <ul className="footer-l-info">
            <li>
              <a href="#" className="footer-map">
                고객센터 · 문의하기 · 이용약관 · 사이트 ·
                <span className="footer-p-info">개인정보처리방침</span>
              </a>
            </li>
            <li>
              <a href="#" className="footer-cr">
                Copyright © PETMILY All Right Reserved.
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="sns-list">
            <li>
              <a href="#">
                <i className="xi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="xi-naver"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="xi-youtube-play"></i>
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </FooterStyle>
  );
};

export default Footer;
