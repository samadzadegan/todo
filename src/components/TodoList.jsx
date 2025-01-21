import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  deleteTodo,
  changeTodoStatus,
  changeTodoTitle,
}) {
  return (
    <ul className="list-reset">
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
