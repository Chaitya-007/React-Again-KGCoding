import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TodoitemsContext } from "../store/todo-items-store";

function Todoitem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoitemsContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
