import { useEffect, useReducer } from "react";
import NewTodoInput from "./NewTodoInput";
import TodoList from "./TodoList";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import todoReducer from "../reducers/todoReducer";

export default function Todos() {
  const [todos, todoDispatcher] = useReducer(todoReducer, []);

  const addNewTodoHandler = (todoTitle) => {
    const newTodo = {
      title: todoTitle,
      status: false,
    };
    fetch("https://67b9b49d51192bd378de2ecc.mockapi.io/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((todo) => {
        todoDispatcher({
          type: "add",
          newTodo: todo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodoHandler = (todo) => {
    fetch(`https://67b9b49d51192bd378de2ecc.mockapi.io/todos/${todo?.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          toast.success("delete is done");
          return res.json();
        } else {
          toast.error("error occurred");
        }
      })
      .then((todo) => {
        todoDispatcher({
          type: "delete",
          todo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeTodoStatusHandler = (todo) => {
    fetch(`https://67b9b49d51192bd378de2ecc.mockapi.io/todos/${todo?.id}`, {
      method: "PUT", // or PATCH
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: !todo.status }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((todo) => {
        todoDispatcher({
          type: "toggle-status",
          todo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeTodoTitleHandler = (value, todo) => {
    fetch(`https://67b9b49d51192bd378de2ecc.mockapi.io/todos/${todo?.id}`, {
      method: "PUT", // or PATCH
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: value }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((todo) => {
        todoDispatcher({
          type: "edit",
          todo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch("https://67b9b49d51192bd378de2ecc.mockapi.io/todos", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((todos) => {
        todoDispatcher({
          type: "get-list",
          todos,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos_list", JSON.stringify(todos));
  // }, [todos]);

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
