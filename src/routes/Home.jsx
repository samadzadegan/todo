import { useMemo, useState } from "react";
import TodoList from "./todo-list";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const [count, setCount] = useState(0);
  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <h1 className="text-orange-700 py-5 text-xl">Home Page</h1>
      <div className="my-3">
        <TodoList todos={todos} addTodo={addTodo} />
      </div>
      <hr />
      <div className="my-3">
        Count: {count}
        <button
          className="border rounded-sm border-green-200 text-green-600 hover:border-transparent hover:bg-green-600 hover:text-white active:bg-green-700 mx-3 px-1"
          onClick={increment}
        >
          +
        </button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </>
  );
}

const expensiveCalculation = (num) =>
  [...Array(10000000).keys()].reduce((total) => total + 1, num);
