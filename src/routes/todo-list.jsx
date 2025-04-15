import PropTypes from "prop-types";
import { memo } from "react";

const TodoList = ({ todos, addTodo }) => {
  console.log("rendered");
  return (
    <>
      <h2 className="text-purple-700 py-2 text-l">
        Todos List (Memorization*):
      </h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button
        className="border rounded-sm border-green-200 text-green-600 hover:border-transparent hover:bg-green-600 hover:text-white active:bg-green-700 px-1"
        onClick={addTodo}
      >
        Add Todo
      </button>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func,
};

export default memo(TodoList, (prevProps, nextProps) => {
  return prevProps.todos === nextProps.todos;
});
