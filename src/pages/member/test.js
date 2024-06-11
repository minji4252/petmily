import React, { useState, useEffect } from "react";
import axios from "axios";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = async email => {
    try {
      // 여기서 이메일 검증 API 호출
      const response = await axios.post("/api/validate-email", { email });
      return response.data.isValid;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  useEffect(() => {
    const checkEmailValidity = async () => {
      if (email) {
        const isValid = await validateEmail(email);
        if (!isValid) {
          setErrorMessage("이메일 형식이 맞지 않습니다.");
        } else {
          setErrorMessage("");
        }
      } else {
        setErrorMessage("");
      }
    };

    checkEmailValidity();
  }, [email]);

  const handleSubmit = async e => {
    e.preventDefault();
    const isValid = await validateEmail(email);
    if (!isValid) {
      setErrorMessage("이메일 형식이 맞지 않습니다.");
      return;
    }

    // 폼 데이터 전송
    try {
      await axios.post("/api/signup", { email, password });
      // 회원가입 성공 처리
    } catch (error) {
      console.error(error);
      // 회원가입 실패 처리
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
