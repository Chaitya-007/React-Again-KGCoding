import React, { useState, useRef, useContext } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { TodoitemsContext } from "../store/todo-items-store";

function AddToDo() {
  const contextObj = useContext(TodoitemsContext);
  const onAdd = contextObj.addNewItem;
  const todoNameElement = useRef(0);
  const dueDateElement = useRef(0);

  const handleAddButtonClick = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onAdd(todoName, todoDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here..."
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <MdOutlineAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
