import PropTypes from "prop-types";
import DeleteIcon from "./icons/DeleteIcon";

export default function EditInput({ todo, editTodoHandler, hideEditMode }) {
  return (
    <div className="w-full flex items-center gap-x-2">
      <input
        type="text"
        // value={inputValue}
        // onChange={handleInputChange}
        defaultValue={todo?.title ?? ""}
        onChange={() => {}}
        onKeyDown={editTodoHandler}
        className="w-full px-4 py-2 border border-gray-400 rounded"
      ></input>
      <DeleteIcon onClick={hideEditMode} />
    </div>
  );
}

EditInput.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.bool,
  }),
  editTodoHandler: PropTypes.func,
  hideEditMode: PropTypes.func,
};
