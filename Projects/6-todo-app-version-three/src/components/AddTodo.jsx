import React, { useState, useRef } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

function AddToDo({ onAdd }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const todoNameElement = useRef("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClick = (todoName, todoDate) => {
    onAdd(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here..."
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            onChange={handleDateChange}
            value={todoDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => handleAddButtonClick(todoName, todoDate)}
          >
            <MdOutlineAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
