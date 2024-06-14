import SuccessItem from "./SuccessItem";

const Success = ({ todos, onRemove, onToggle, realDate }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <SuccessItem
          key={todo.listId}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          realDate={realDate}
        />
      ))}
    </div>
  );
};

export default Success;
