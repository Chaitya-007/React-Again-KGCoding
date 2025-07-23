import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import Todoitems from "./components/Todoitems";
import { useState } from "react";
import "./App.css";

function App() {
  // const todoItems = [
  //   {
  //     name: "Complete Assignment",
  //     dueDate: "4/12/2023",
  //   },
  // ];

  let [todoItems, setTodoItems] = useState([
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
  ]);

  const addTodo = (name, dueDate) => {
    let newTodo = [
      ...todoItems,
      {
        name: name,
        dueDate: dueDate,
      },
    ];
    setTodoItems(newTodo);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onAdd={addTodo} />
      <Todoitems todoItems={todoItems}></Todoitems>
    </center>
  );
}

export default App;
