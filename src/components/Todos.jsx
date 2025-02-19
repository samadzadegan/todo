import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import NewTodoInput from "./NewTodoInput";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const addNewTodoHandler = (todoTitle) => {
    const newList = todos.concat({
      id: uuidv4(),
      title: todoTitle,
      status: false,
    });
    setTodos(newList);
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

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos_list")) ?? []);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos_list", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
        <div className="flex items-center mb-6">
          <h1 className="mr-6 text-4xl font-bold text-purple-600">
            {" "}
            TO DO APP
          </h1>
        </div>
        <NewTodoInput addTodo={addNewTodoHandler} />
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
