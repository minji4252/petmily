import axios from "axios";

export const getTodoList = async () => {
  try {
    const rqData = "/api/todolist?user_id=1";
    const response = await axios.get(rqData);
    return response.data;
  } catch (error) {
    console.log("error");
  }
};
