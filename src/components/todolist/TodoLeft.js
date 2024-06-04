import "../../styles/TodoList/left.css";
import Success from "./Success";

const TodoLeft = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="todo-left">
      <div className="todo-left-top">
        <a className="todo-left-clear" href="#">
          비우기
        </a>
        <span className="todo-left-title">완료된 할일</span>
      </div>
      <div className="todo-left-box">
        <Success
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
        ></Success>
      </div>
    </div>
  );
};

export default TodoLeft;
