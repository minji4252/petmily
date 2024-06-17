import axios from "axios";

// 회원가입 API
// 민기님 코드

// 로그인 API
export const postSignIn = async ({ userId, userPass }) => {
  try {
    const response = await axios.post("/api/user/sign-in", {
      email: userId,
      password: userPass,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
