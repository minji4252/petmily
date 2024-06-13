import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCheckEmail, postJoin } from "../../api/user/apijoin";
import "../../styles/join.css";

const JoinPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPass2, setUserPass2] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmailCheck, setUserEmailCheck] = useState("");
  const [userEmailCheckCode, setUserEmailCheckCode] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [userEmailCheckCodeSuccess, setUserEmailCheckCodeSuccess] =
    useState(false);

  //  state: 에러 상태 추가  //
  const [errors, setErrors] = useState({
    userEmail: false,
    userPass: false,
    userPass2: false,
    userName: false,
  });

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  const nameRegex = /^[가-힣a-zA-Z]*$/;

  useEffect(() => {
    setEmailCheck(false);
    setUserEmailCheckCodeSuccess(false);
  }, []);

  const navigate = useNavigate();

  const joinMember = async event => {
    event.preventDefault();

    // const isFormValid =
    //   regex.test(userEmail) &&
    //   passRegex.test(userPass) &&
    //   userPass2 === userPass &&
    //   nameRegex.test(userName) &&
    //   userName !== "" &&
    //   userEmailCheckCodeSuccess;

    const newErrors = {
      userEmail: !regex.test(userEmail),
      userPass: !passRegex.test(userPass),
      userPass2: userPass !== userPass2,
      userName: !nameRegex.test(userName) || userName === "",
    };

    setErrors(newErrors);

    const isFormValid =
      Object.values(newErrors).every(error => !error) &&
      userEmailCheckCodeSuccess;

    if (!isFormValid) {
      return;
    }

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
  };

  const checkEmail = async event => {
    event.preventDefault();
    setUserEmailCheck("");

    if (!regex.test(userEmail)) {
      alert("이메일 형식에 맞지 않습니다.");
      setEmailCheck(false);
      return;
    }

    const requestData = { email: userEmail };
    const result = await postCheckEmail(requestData);

    setUserEmailCheckCode(result.data.emailCheckCode);
    console.log(result.data.emailCheckCode);

    if (result.code !== "SU") {
      setEmailCheck(false);
      alert(result.message);
      return;
    }

    setEmailCheck(true);
  };

  const checkEmailSuccess = event => {
    event.preventDefault();

    if (userEmailCheck === userEmailCheckCode) {
      alert("인증완료");
      setUserEmailCheckCodeSuccess(true);
      setEmailCheck(false);
      return;
    }

    alert("인증 코드와 다릅니다.");
    setUserEmailCheckCodeSuccess(false);
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
            {userEmailCheckCodeSuccess ? null : (
              <button
                type="button"
                className="email-check"
                onClick={checkEmail}
              >
                인증
              </button>
            )}
          </h2>
          <input
            type="email"
            id="userid"
            value={userEmail}
            onChange={event => setUserEmail(event.target.value)}
            placeholder="이메일"
            disabled={userEmailCheckCodeSuccess}
            required
          />
          {/* {!userEmail ? (
            <p className="check-email error-pont">이메일을 입력해 주세요.</p>
          ) : regex.test(userEmail) ? null : (
            <p className="check-passwordO error-pont">
              이메일 형식에 맞지 않습니다.
            </p>
          )} */}

          {/* 에러 메시지 처리 */}
          {errors.userEmail && (
            <p className="check-email error-pont">
              이메일 형식에 맞지 않습니다.
            </p>
          )}

          {!emailCheck ? null : (
            <div className="email-checkmodal">
              <h2 className="join-in-title">이메일 인증 코드</h2>
              <input
                type="text"
                id="emailCheck"
                value={userEmailCheck}
                onChange={event => setUserEmailCheck(event.target.value)}
                placeholder="이메일 인증 코드를 입력하세요"
                required
              />
              <div className="button-form">
                <button
                  type="button"
                  className="email-check"
                  onClick={event => checkEmailSuccess(event)}
                >
                  인증
                </button>
                <button
                  type="button"
                  className="email-check"
                  onClick={() => {
                    setEmailCheck(false);
                    setUserEmailCheck("");
                  }}
                >
                  닫기
                </button>
              </div>
            </div>
          )}
          <h2 className="join-in-title">비밀번호</h2>
          <input
            type="password"
            id="pass"
            value={userPass}
            onChange={event => setUserPass(event.target.value)}
            placeholder="비밀번호를 입력하세요"
            required
          />
          {/* {!userPass ? (
            <p className="check-email error-pont">비밀번호를 입력해 주세요</p>
          ) : passRegex.test(userPass) ? null : (
            <p className="check-passwordO error-pont">
              비밀번호는 영문, 숫자 포함하여 8~16자리로 입력하세요.
            </p>
          )} */}

          {/* 에러 메시지 처리 */}
          {errors.userPass && (
            <p className="check-passwordO error-pont">
              비밀번호는 영문, 숫자 포함하여 8~16자리로 입력하세요.
            </p>
          )}

          <h2 className="join-in-title">비밀번호 확인</h2>
          <input
            type="password"
            id="pass2"
            value={userPass2}
            onChange={event => setUserPass2(event.target.value)}
            placeholder="비밀번호 확인"
            required
          />
          {/* {!userPass2 ? (
            <p className="check-email error-pont">비밀번호를 입력해 주세요</p>
          ) : userPass === userPass2 ? null : (
            <p className="check-passwordO error-pont">
              비밀번호가 같지 않습니다.
            </p>
          )} */}

          {/* 에러 메시지 처리 */}
          {errors.userPass2 && (
            <p className="check-passwordO error-pont">
              비밀번호가 같지 않습니다.
            </p>
          )}

          <h2 className="join-in-title">닉네임</h2>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={event => setUserName(event.target.value)}
            placeholder="닉네임을 입력하세요"
            required
          />
          {errors.userName && (
            <p className="check-passwordO error-pont">
              한글, 영문만 입력 가능합니다.
            </p>
          )}
          <button type="button" className="bt-submit" onClick={joinMember}>
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinPage;
