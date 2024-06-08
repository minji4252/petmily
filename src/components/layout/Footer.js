import "../../styles/footer.css";
import "../../styles/common.css";
import "../../styles/reset.css";
import petmilyFooter from "../../images/petmily-footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="footer-left">
          <Link to="/" className="footer-logo">
            <img
              src={petmilyFooter}
              alt="팻밀리 로고"
              className="footer-logo-link"
            />
          </Link>
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
      </div>
    </footer>
  );
};

export default Footer;
