import { lazy, Suspense, useState } from "react";
import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";
import { Link } from "react-router";
const EditInput = lazy(() =>
  import(/* webpackChunkName: "Edit-input"*/ "./edit-input")
);

export default function TodoListItem({
  todo,
  deleteTodo,
  changeTodoStatus,
  changeTodoTitle,
}) {
  // const [inputValue, setInputValue] = useState(todo.title ?? "");
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  //   changeTodoTitle(event.target.value, todo);
  // };

  const [editMode, setEditMode] = useState(false);
  const showEditMode = () => {
    setEditMode(true);
  };

  const hideEditMode = () => {
    setEditMode(false);
  };

  const deleteItem = () => {
    deleteTodo(todo);
  };

  const changeStatus = () => {
    changeTodoStatus(todo);
  };

  const editTodoHandler = (event) => {
    if (event.key === "Enter") {
      changeTodoTitle(event.target.value, todo);
      setEditMode(false);
    }
  };

  return (
    <li className="relative flex items-center justify-between px-2 py-6 border-b">
      {editMode ? (
        <Suspense fallback={<p>Loading ...</p>}>
          <EditInput
            todo={todo}
            editTodoHandler={editTodoHandler}
            hideEditMode={hideEditMode}
          />
        </Suspense>
      ) : (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={todo?.status}
            onChange={changeStatus}
            className=""
          />
          <p
            className={`inline-block mt-1 ml-2 text-gray-600 ${
              todo?.status ? "line-through" : ""
            }`}
          >
            <Link to={`/todos/${todo.id}`}>{todo?.title}</Link>
          </p>

          <button
            type="button"
            className="absolute right-0 flex items-center space-x-1"
          >
            <EditIcon onClick={showEditMode} />
            <DeleteIcon onClick={deleteItem} />
          </button>
        </div>
      )}
    </li>
  );
}
