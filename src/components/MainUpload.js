import "../styles/main.css";
import "../styles/common.css";
import "../styles/reset.css";
import mainpeticon from "../images/팻아이콘1.png";
import mainpeticon2 from "../images/팻아이콘2.png";
import mainpeticon3 from "../images/팻아이콘3.png";
import mainpeticon4 from "../images/팻아이콘4.png";
import mainpeticon5 from "../images/팻아이콘5.png";
import mainpeticon6 from "../images/팻아이콘6.png";

const MainUpload = () => {
  return (
    <section className="main-sec-3">
      <div className="main-sec-3-inner">
        <div className="main-animal-box">
          <div className="m-r-animal mra-extra">
            <a href="#" className="animal-txt">
              나의 반려동물 관리
            </a>
            <span>
              <a href="#" className="main-plus-i">
                <i className="xi-plus-square"></i>
              </a>
            </span>
          </div>

          <div className="main-animal-sync">
            <div className="mas-icon-lists-1">
              <a href="#" className="mas-icon-1">
                <img
                  src={mainpeticon}
                  alt="팻밀리 아이콘"
                  className="main-logos-i"
                />
              </a>
              <a href="#" className="mas-icon-2">
                <img
                  src={mainpeticon2}
                  alt="팻밀리 아이콘"
                  className="main-logos-i"
                />
              </a>
              <a href="#" className="mas-icon-3">
                <img
                  src={mainpeticon3}
                  alt="팻밀리 아이콘"
                  className="main-logos-i"
                />
              </a>
            </div>
            <div className="mas-icon-lists-2">
              <a href="#" className="mas-icon-4">
                <img
                  src={mainpeticon4}
                  alt="팻밀리 아이콘"
                  className="main-logos-i"
                />
              </a>
              <a href="#" className="mas-icon-5">
                <img
                  src={mainpeticon5}
                  alt="팻밀리 아이콘"
                  className="main-logos-i"
                />
              </a>
              <a href="#" className="mas-icon-6">
                <img
                  src={mainpeticon6}
                  alt="팻밀리 아이콘"
                  className="main-logos-i"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="animal-pics-box">
          <div className="m-r-animal">
            <a href="#" className="animal-txt">
              동물 친구들
            </a>
          </div>
          <div className="main-animal-pics-sync">
            <p className="maps-text">동물을 등록해주세요</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainUpload;
