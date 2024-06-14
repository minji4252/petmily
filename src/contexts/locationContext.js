import { createContext, useEffect, useState } from "react";

export const userInfoContext = createContext();
export const UserInfoProvider = ({ children }) => {
  // 전역 상태 관리 (사용자 아이디를 관리)
  const [isUserPk, setIsUserPk] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);

  useEffect(() => {
    setIsUserPk(sessionStorage.getItem("userPk"));
    if (isUserPk) {
      setIsLogIn(true);
    }
    if (!isUserPk) {
      setIsLogIn(false);
    }
    // setIsUser에 값을 채워준다.
    // const tempUser = localStorage.getItem("userid");
    // const tempUser = sessionStorage.getItem("userid");
  }, [isUserPk]);

  console.log(isLogIn);

  return (
    <userInfoContext.Provider
      value={{ isUserPk, setIsUserPk, setIsLogIn, isLogIn }}
    >
      {children}
    </userInfoContext.Provider>
  );
};
