import axios from "axios";

export const getTodoList = async () => {
  try {
    const rqData = "/api/todolist?user_id=12";
    const response = await axios.get(rqData);
    return response.data.data;
  } catch (error) {
    console.log("error");
  }
};

export const postTodoInsert = async data => {
  try {
    const rqData = "/api/todolist";
    const response = await axios.post(rqData, data);
    if (response.data.code === "SU") {
      return response.data.data;
    } else {
      return response.data;
    }
  } catch (error) {
    console.log("error");
  }
};

export const deleteTodoList = async listId => {
  try {
    const rqData = `/api/todolist?list_id=${listId}`;
    console.log(rqData);
    await axios.delete(rqData);
  } catch (error) {
    console.log("error");
  }
};

export const deleteAllTodoList = async () => {
  try {
    const rqData = "/api/todolist/all-delete?user_id=12";
    console.log(rqData);
    await axios.delete(rqData);
  } catch (error) {
    console.log("error");
  }
};

export const toggleTodolist = async listId => {
  try {
    const rqData = `/api/todolist/is-completed?list_id=${listId}`;
    console.log(rqData);
    const response = await axios.patch(rqData);
    return response.data.data;
  } catch (error) {
    console.log("error");
  }
};
