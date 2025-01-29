export default function NewTodoInput({ addTodo }) {
  const onInputTodoChangeHandler = () => {};

  const addNewTodoHandler = (event) => {
    if (event.key === "Enter" && event.target.value) {
      addTodo(event.target.value);
      event.target.value = "";
    }
  };
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="What needs to be done today?"
        className="w-full px-2 py-3 border rounded outline-none border-grey-600"
        onChange={onInputTodoChangeHandler}
        onKeyDown={addNewTodoHandler}
      />
    </div>
  );
}
