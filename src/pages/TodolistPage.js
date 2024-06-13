import { useEffect, useRef, useState } from "react";
import {
  deleteTodoList,
  getTodoList,
  postTodoInsert,
  toggleTodolist,
} from "../api/todolist";
import Clear from "../components/todolist/Clear";
import MobileMenu from "../components/todolist/MobileMenu";
import TodoLeft from "../components/todolist/TodoLeft";
import TodoRight from "../components/todolist/TodoRight";
import TodoTemplate from "../components/todolist/TodoTemple";
import useClearModal from "../components/todolist/useClearModal";
import useModifyModal from "../components/todolist/useModifyModal.js";
import "../styles/TodoList/left.css";

const TodolistPage = () => {
  const [todos, setTodos] = useState([]);
  const [todoInsert, setTodoInsert] = useState("");
  const mobileMenu = useRef(null);
  const todoListRight = useRef(null);
  const todoListLeft = useRef(null);
  const [checked, setChecked] = useState(false);
  const [modifyInsert, setModifyInsert] = useState("");

  /* todos 배열에 새 객체 추가*/

  const onInsert = async () => {
    setChecked(false);
    if (todoInsert == "") {
      alert("공백은 넣을 수 없습니다.");
      return;
    } else {
      const requestData = {
        userId: "12",
        content: todoInsert,
      };
      const result = await postTodoInsert(requestData);
      if (result) {
        const todo = {
          listId: result.listId,
          content: todoInsert,
          isCompleted: checked,
        };
        setTodos(todos.concat(todo));
      } else {
        console.log("에러입니다");
      }
    }
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const onModifyInsert = (id, newText) => {
    // id에 해당하는 할 일을 찾아서 텍스트를 수정
    const modifiedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
  };

  // 삭제 기능
  const onRemove = async listId => {
    setTodos(todos.filter(todo => todo.listId !== listId));
    console.log(listId);

    await deleteTodoList(listId);
    console.log(listId);
  };

  // 토글 기능
  const onToggle = async listId => {
    setTodos(
      todos.map(todo =>
        todo.listId === listId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo,
      ),
    );

    const result = await toggleTodolist(listId);
    if (result) {
      console.log(result.listId);
    }
  };

  const openMobileMenu = () => {
    mobileMenu.current.style.display = "flex";
  };

  const todoListInit = async () => {
    const result = await getTodoList();
    setTodos(result);
  };
  useEffect(() => {
    // 초기 목록 가져오기
    todoListInit();
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        if (mobileMenu.current) {
          mobileMenu.current.style.display = "none";
          todoListRight.current.style.display = "flex";
          todoListLeft.current.style.display = "flex";
        }
      }
    };

    // 처음 마운트될 때와 resize 이벤트 발생 시 handleResize를 호출합니다.
    handleResize();
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 리스너를 제거합니다.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileMenu = () => {
    mobileMenu.current.style.display = "none";
  };
  const clickTodoList = () => {
    todoListRight.current.style.display = "flex";
    todoListLeft.current.style.display = "none";
    mobileMenu.current.style.display = "none";
  };
  const clickSuccessList = () => {
    todoListRight.current.style.display = "none";
    todoListLeft.current.style.display = "flex";
    mobileMenu.current.style.display = "none";
  };

  const { clearModalOpen, openClearModal, clearNo, clearYes, clearModalRef } =
    useClearModal({ todos, setTodos });

  const { openModifyModal, modifyModalRef, modifyYes, modifyNo } =
    useModifyModal({
      todos,
    });

  return (
    <TodoTemplate>
      <TodoLeft
        openMobileMenu={openMobileMenu}
        todoListLeft={todoListLeft}
        openClearModal={openClearModal}
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      ></TodoLeft>
      <TodoRight
        setModifyInsert={setModifyInsert}
        todoInsert={todoInsert}
        setTodoInsert={setTodoInsert}
        todoListRight={todoListRight}
        openMobileMenu={openMobileMenu}
        modifyInsert={modifyInsert}
        modifyModalRef={modifyModalRef}
        onInsert={onInsert}
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        openModifyModal={openModifyModal}
        modifyYes={modifyYes}
        modifyNo={modifyNo}
      ></TodoRight>
      <Clear
        clearModalRef={clearModalRef}
        clearNo={clearNo}
        clearYes={clearYes}
      ></Clear>
      <MobileMenu
        mobileMenu={mobileMenu}
        closeMobileMenu={closeMobileMenu}
        clickTodoList={clickTodoList}
        clickSuccessList={clickSuccessList}
      ></MobileMenu>
    </TodoTemplate>
  );
};

export default TodolistPage;
