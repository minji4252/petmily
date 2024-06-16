import axios from "axios";

export const postJoin = async data => {
  try {
    const rqData = "/api/user/sign-up";
    const response = await axios.post(rqData, data);

    if (response.data.code === "SU") {
      return response.data;
    } else {
      return response.data;
    }
  } catch (error) {
    console.log("error");
  }
};

export const postCheckEmail = async requestData => {
  try {
    const rqData = "/api/mail/send";
    const response = await axios.post(rqData, requestData);

    if (response.data.code !== "SU") {
      return response.data;
    } else {
      return response.data;
    }
  } catch (error) {
    console.log("error");
  }
};

export const postCheckEmailSuccess = async data => {
  try {
    const rqData = "/api/mail/send";
    const response = await axios.post(rqData, data);

    if (response.data.code !== "SU") {
      return response.data.message;
    } else {
      return response.data;
    }
  } catch (error) {
    console.log("error");
  }
};

export const postCheckEmailCode = async () => {
  try {
    const rqData = "/api/mail/auth_check";
    const response = await axios.post(rqData);
    console.log(response);

    if (response.data.code !== "SU") {
      return response.data.message;
    } else {
      return response.data;
    }
  } catch (error) {
    console.log("error");
  }
};
