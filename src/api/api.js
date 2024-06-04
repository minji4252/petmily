import axios from "axios";
import { SERVER_URL } from "./config";

const API_URL = `${SERVER_URL}/api`;

export const getMainSlide = async () => {
  try {
    const res = await axios.get(`${API_URL}/topslide.json`);
    const status = res.status.toString().charAt(0);
    if (status === "2") {
      return res.data;
    } else {
      console.log("API 오류");
    }
  } catch (error) {
    console.log(error);
    alert(alert);
  }
};
