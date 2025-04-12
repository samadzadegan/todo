import { useParams } from "react-router";

export default function SingleTodo() {
  const { todoId } = useParams();
  return <h2>Single Todo Page: {todoId}</h2>;
}
