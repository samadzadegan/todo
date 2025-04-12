export default function todoReducer(todos, action) {
  switch (action?.type) {
    case "get-list":
      return [].concat(action?.todos);

    case "add":
      return [action?.newTodo, ...todos];

    case "delete":
      return todos.filter((todoItem) => {
        return todoItem.id !== action?.todo?.id;
      });

    case "toggle-status":
      return todos.map((t) => {
        if (t.id === action?.todo?.id) {
          t.status = action?.todo?.status;
        }
        return t;
      });

    case "edit":
      return todos.map((t) => {
        if (t.id === action?.todo?.id) {
          t.title = action?.todo?.title;
        }
        return t;
      });

    default:
      return todos;
  }
}
