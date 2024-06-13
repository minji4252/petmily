import "../../styles/TodoList/left.css";
import { BsFillPlusSquareFill } from "react-icons/bs";

const TodoInsert = ({ onInsert, setTodoInsert, todoInsert }) => {
  const onSubmit = event => {
    onInsert(todoInsert);

    // submit 이벤트는 브라우저에서 새로고침 발생시킴
    // 이를 방지하기 위해 아래 함수 호출

    event.preventDefault();

    setTodoInsert("");
  };

  return (
    <form className="todo-right-create-box">
      <input
        className="todo-right-create-input"
        placeholder="할 일을 입력하세요."
        value={todoInsert}
        onChange={e => {
          setTodoInsert(e.target.value);
        }}
      />
      <button
        className="create-button"
        type="submit"
        onClick={event => {
          onSubmit(event);
        }}
      >
        <BsFillPlusSquareFill />
      </button>
    </form>
  );
};

export default TodoInsert;
