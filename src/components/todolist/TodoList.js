import TodoLeft from "./TodoLeft";
import TodoRight from "./TodoRight";
import "../../styles/TodoList/left.css";
import { useRef, useState } from "react";
import TodoTemplate from "./TodoTemple";

const initState = [
  {
    id: 1,
    text: "리액트의 기초 알아보기",
    checked: true,
  },
  {
    id: 2,
    text: "컴포넌트의 이해",
    checked: false,
  },
  {
    id: 3,
    text: "할 일 앱 만들어 보기",
    checked: true,
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initState);

  // id는 고유한 값이어야 한다.
  const nextId = useRef(4);

  /* todos 배열에 새 객체 추가*/
  const onInsert = text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
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
  return (
    <TodoTemplate>
      <div className="inner">
        <div className="todo-main">
          <TodoLeft />
          <TodoRight
            onInsert={onInsert}
            todos={todos}
            onRemove={onRemove}
            onToggle={onToggle}
          ></TodoRight>
        </div>
      </div>
    </TodoTemplate>
  );
};

export default TodoList;
