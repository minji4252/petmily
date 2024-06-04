import { Route } from "react-router-dom";
import "../styles/join.css";
import { Link } from "react-router-dom";

const JoinPage = () => {
  return (
    <div className="join-wrap">
      <div className="container">
        <div className="mily-img-group">
          <img
            src="/www/image/mily-icon.png"
            alt="펫밀리"
            className="mily-img"
          />
          <img
            src="/www/image/mily-icon.png"
            alt="펫밀리"
            className="mily-img"
          />
          <img
            src="/www/image/mily-icon.png"
            alt="펫밀리"
            className="mily-img"
          />
        </div>
        <h2>펫밀리 회원가입</h2>
        <div className="login-line"></div>
        <form className="login-form" action="#" method="post">
          <h2 className="join-in-title">이메일</h2>
          <input type="email" name="useremail" placeholder="이메일" required />
          <p className="check-email error-pont">이메일 형식이 아닙니다.</p>
          <h2 className="join-in-title">비밀번호</h2>
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
            required
          />
          <p className="check-password error-pont">
            비밀번호는 영문, 숫자 포함하여 8~16자리로 입력하세요.
          </p>
          <h2 className="join-in-title">비밀번호 확인</h2>
          <input type="password" name="password" placeholder="비밀번호 확인" />
          <p className="check-passwordO error-pont">
            비밀번호가 같지 않습니다.
          </p>
          <h2 className="join-in-title">이름</h2>
          <input
            type="name"
            name="username"
            placeholder="이름을 입력하세요"
            required
          />
          <p className="check-name error-pont">한글, 영문만 입력 가능합니다.</p>
          <Link to="/">
            <button type="submit">회원가입</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default JoinPage;
