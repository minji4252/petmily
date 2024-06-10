import { useEffect, useRef, useState } from "react";
import TodoLeft from "../components/todolist/TodoLeft";
import TodoRight from "../components/todolist/TodoRight";
import TodoTemplate from "../components/todolist/TodoTemple";
import "../styles/TodoList/left.css";
import Clear from "../components/todolist/Clear";
import useClearModal from "../components/todolist/useClearModal";
import useModifyModal from "../components/todolist/useModifyModal.js";
import useModal from "../hooks/UseModal";
import MobileMenu from "../components/todolist/MobileMenu";

const initState = [
  {
    id: 1,
    text: "반갑습니다",
    checked: true,
  },
  {
    id: 2,
    text: "이건",
    checked: true,
  },
  {
    id: 3,
    text: "기본 리스트들입니다",
    checked: true,
  },
];

const TodolistPage = () => {
  const [todos, setTodos] = useState(initState);
  const mobileMenu = useRef(null);
  const todoListRight = useRef(null);
  const todoListLeft = useRef(null);

  // id는 고유한 값이어야 한다.
  const nextId = useRef(4);

  /* todos 배열에 새 객체 추가*/

  const onInsert = text => {
    if (text == "") {
      alert("공백은 넣을 수 없습니다.");
    } else {
      const todo = {
        id: nextId.current,
        text,
        checked: true,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }
  };

  const modifyInsert = (id, newText) => {
    // id에 해당하는 할 일을 찾아서 텍스트를 수정
    const modifiedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
  };

  // 삭제 기능
  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 토글 기능
  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  const openMobileMenu = () => {
    mobileMenu.current.style.display = "flex";
  };
  useEffect(() => {
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
      modifyInsert,
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
