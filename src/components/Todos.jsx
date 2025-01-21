import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

export default function Todos() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Tailwind CSS To DO App List 1",
      status: true,
    },
    {
      id: uuidv4(),
      title: "Tailwind CSS To DO App List 2",
      status: false,
    },
  ]);

  const onInputTodoChangeHandler = () => {};

  const addNewTodoHandler = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const newList = todos.concat({
        id: uuidv4(),
        title: event.target.value,
        status: false,
      });
      setTodos(newList);
      event.target.value = "";
    }
  };

  const deleteTodoHandler = (todo) => {
    const newList = todos.filter((todoItem) => {
      return todoItem.id !== todo.id;
    });

    setTodos(newList);
  };

  const changeTodoStatusHandler = (todo) => {
    const newList = todos.map((t) => {
      if (t.id === todo.id) {
        t.status = !todo.status;
      }
      return t;
    });
    setTodos(newList);
  };

  const changeTodoTitleHandler = (value, todo) => {
    const newList = todos.map((t) => {
      if (t.id === todo.id) {
        t.title = value;
      }
      return t;
    });
    setTodos(newList);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
        <div className="flex items-center mb-6">
          <h1 className="mr-6 text-4xl font-bold text-purple-600">
            {" "}
            TO DO APP
          </h1>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="What needs to be done today?"
            className="w-full px-2 py-3 border rounded outline-none border-grey-600"
            onChange={onInputTodoChangeHandler}
            onKeyDown={addNewTodoHandler}
          />
        </div>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          changeTodoStatus={changeTodoStatusHandler}
          changeTodoTitle={changeTodoTitleHandler}
        />
      </div>
    </div>
  );
}
