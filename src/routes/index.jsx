import { createBrowserRouter } from "react-router";
import Home from "./home";
import About from "./About";
import Root from "./Root";
import SingleTodo from "./Todos/SingleTodo";
import TodosPage from "./todos";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Second Option for creating routes <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todos",
        element: <TodosPage />,
      },
      {
        path: "/todos/:todoId",
        element: <SingleTodo />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> First Option for creating routes <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/todos",
//     element: <Todos />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

export default router;
