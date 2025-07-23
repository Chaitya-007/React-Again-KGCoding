import React, { useState } from "react";

function AddToDo({ onAdd }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleClick = (todoName, todoDate) => {
    onAdd(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here..."
            // onKeyDown={(event) => setTodoName(event.target.value)}
            onChange={(e) => setTodoName(e.target.value)}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            onChange={(event) => setTodoDate(event.target.value)}
            value={todoDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => handleClick(todoName, todoDate)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
