import { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodosContext } from "../contexts/TodoContext";

export default function TodoList({
  deleteTodo,
  changeTodoStatus,
  changeTodoTitle,
}) {
  const todos = useContext(TodosContext);
  return (
    <ul className="list-reset overflow-auto max-h-64">
      {todos.map((todo, i) => (
        <TodoListItem
          todo={todo}
          key={i}
          deleteTodo={deleteTodo}
          changeTodoStatus={changeTodoStatus}
          changeTodoTitle={changeTodoTitle}
        />
      ))}
    </ul>
  );
}
