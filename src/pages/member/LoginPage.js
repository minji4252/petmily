import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignIn } from "../../api/user/apiuser";
import milyicon from "../../images/mily-icon.png";
import { Link } from "react-router-dom";

const WrapStyle = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  width: 460px;
  border-radius: 5px;

  > h2 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 16px;
    color: #a47e6d;
    font-weight: 600;
  }
`;

const MilyImgGroup = styled.div`
  display: flex;
  margin: 0 auto;
  width: 110px;
  margin-bottom: 5px;

  > img {
    width: 100%;
    height: 35px;
  }
`;

const LoginLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #cbb1a2;
  margin-bottom: 50px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  & input {
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #cbb1a2;
    box-sizing: border-box;
    background-color: transparent;
  }

  & input::placeholder {
    color: #d5c3bc;
  }

  > button {
    width: 100%;
    height: 55px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    margin-top: 45px;
    background-color: #a47e6d;
    font-size: 16px;
  }
`;

const JoinBtn = styled.button`
  float: right;
  background-color: transparent;
  border: none;
  color: #a47e6d;
  margin-top: 10px;
  cursor: pointer;
`;

const LoginPage = ({ children, setIsUser }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPass, setUserPass] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await postSignIn({ userId, userPass });
    if (result.code !== "SU") {
      alert(result.message);
      return;
    }
    // navigate("/");
    // 로그인 성공
    setIsUser(userId);
    sessionStorage.setItem("userPk", result.data.userId);

    navigate("/");
  };

  return (
    <WrapStyle>
      <Container>
        <MilyImgGroup>
          <img src={milyicon} alt="펫밀리" />
          <img src={milyicon} alt="펫밀리" />
          <img src={milyicon} alt="펫밀리" />
        </MilyImgGroup>
        <h2>펫밀리 로그인</h2>
        <LoginLine></LoginLine>

        <LoginForm action="#" method="post">
          <input
            type="email"
            placeholder="이메일"
            value={userId}
            id="userid"
            onChange={e => {
              setUserId(e.target.value);
            }}
            required
            autoComplete="off"
          />

          <input
            type="password"
            placeholder="비밀번호"
            value={userPass}
            id="pass"
            onChange={e => {
              setUserPass(e.target.value);
            }}
            required
            autoComplete="off"
          />

          <button
            type="submit"
            onClick={e => {
              handleSubmit(e);
            }}
          >
            로그인
          </button>
        </LoginForm>
        <Link to="/join">
          <JoinBtn type="submit">회원가입</JoinBtn>
        </Link>
      </Container>
      {children}
    </WrapStyle>
  );
};

export default LoginPage;
