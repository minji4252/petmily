import { Route, useNavigate } from "react-router-dom";
import "../../styles/join.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { postCheckEmail, postJoin } from "../../api/user/apijoin";

const JoinPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPass2, setUserPass2] = useState("");
  const [userName, setUserName] = useState("");
  const [success, setSuccess] = useState(false);

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  const nameRegex = /^[가-힣a-zA-Z]*$/;

  useEffect(() => {}, []);

  const navigate = useNavigate();
  const joinMember = async event => {
    // form 태그에서 submit 을 하면 웹브라우저 갱신
    // 갱신하면 초기화 되므로 막아줌. (기본기능막기)
    event.preventDefault();

    if (
      regex.test(userEmail) &&
      passRegex.test(userPass) &&
      userPass2 === userPass &&
      nameRegex.test(userName) &&
      (userName !== "") === true
    ) {
      setSuccess(true);
    } else {
      setSuccess(false);
      alert("형식에 맞지 않습니다 확인해주세요");
      return;
    }
    if (success === true) {
      // 아래의 데이터를 API 로 보낸다.
      const requestData = {
        email: userEmail,
        password: userPass,
        checkPassword: userPass2,
        nickname: userName,
      };
      const result = await postJoin(requestData);
      console.log(result);
      if (result.code !== "SU") {
        alert(result.message);
        return;
      }
      alert("회원가입 성공");
      navigate("/login");
    }
  };
  const checkEmail = async event => {
    event.preventDefault();
    const requestData = {
      email: userEmail,
      password: userPass,
      checkPassword: userPass2,
      nickname: userName,
    };
    const result = await postCheckEmail(requestData);
    if (regex.test(userEmail)) {
      return "성공했습니다";
    } else {
      return "이메일 형식에 맞지 않습니다.";
    }
  };
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
          <h2 className="join-in-title">
            이메일
            <button
              type="submit"
              className="email-check"
              onClick={event => {
                checkEmail(event);
              }}
            >
              인증
            </button>
          </h2>
          <input
            type="email"
            id="userid"
            value={userEmail}
            onChange={event => {
              // console.log(event.target);
              setUserEmail(event.target.value);
            }}
            placeholder="이메일"
            required
          />

          {!userEmail ? (
            <p className="check-email error-pont">이메일을 입력해 주세요.</p>
          ) : regex.test(userEmail) ? null : (
            <p className="check-passwordO error-pont">
              이메일 형식에 맞지 않습니다.
            </p>
          )}

          <h2 className="join-in-title">비밀번호</h2>
          <input
            type="password"
            id="pass"
            value={userPass}
            onChange={event => {
              setUserPass(event.target.value);
            }}
            placeholder="비밀번호를 입력하세요"
            required
          />
          {!userPass ? (
            <p className="check-email error-pont">비밀번호를 입력해 주세요</p>
          ) : passRegex.test(userPass) ? null : (
            <p className="check-passwordO error-pont">
              비밀번호는 영문, 숫자 포함하여 8~16자리로 입력하세요.
            </p>
          )}

          <h2 className="join-in-title">비밀번호 확인</h2>
          <input
            type="password"
            id="pass2"
            value={userPass2}
            onChange={event => {
              setUserPass2(event.target.value);
            }}
            placeholder="비밀번호 확인"
          />
          {!userPass2 ? (
            <p className="check-email error-pont">비밀번호를 입력해 주세요</p>
          ) : userPass === userPass2 ? null : (
            <p className="check-passwordO error-pont">
              비밀번호가 같지 않습니다.
            </p>
          )}

          <h2 className="join-in-title">닉네임</h2>
          <input
            type="name"
            id="username"
            value={userName}
            onChange={event => {
              setUserName(event.target.value);
            }}
            placeholder="닉네임을 입력하세요"
            required
          />
          {!userName ? (
            <p className="check-email error-pont">닉네임을 입력해 주세요</p>
          ) : nameRegex.test(userName) ? null : (
            <p className="check-passwordO error-pont">
              한글, 영문만 입력 가능합니다.
            </p>
          )}

          <button
            type="submit"
            className="bt-submit"
            onClick={event => {
              joinMember(event);
            }}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinPage;
