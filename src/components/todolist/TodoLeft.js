import Success from "./Success";

const TodoLeft = ({ todos, onRemove, onToggle, openClearModal }) => {
  return (
    <div className="todo-left">
      <div className="todo-left-top">
        <div
          className="todo-left-clear"
          onClick={() => {
            openClearModal();
          }}
        >
          비우기
        </div>
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
