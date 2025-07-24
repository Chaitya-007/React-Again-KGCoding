import AppName from "./components/AppName";
import Todoitems from "./components/Todoitems";
import { useState } from "react";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import AddToDo from "./components/AddTodo";
import { TodoitemsContext } from "./store/todo-items-store";

function App() {
  // const todoItems = [
  //   {
  //     name: "Complete Assignment",
  //     dueDate: "4/12/2023",
  //   },
  // ];

  let [todoItems, setTodoItems] = useState([]);

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

  const deleteTodo = (name) => {
    // console.log(name);
    const newTodoItems = todoItems.filter((item) => item.name !== name);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoitemsContext.Provider value={todoItems}>
      <center className="todo-container">
        <AppName />
        <AddToDo onAdd={addTodo} />
        <WelcomeMessage />

        <Todoitems onDelete={deleteTodo} />
      </center>
    </TodoitemsContext.Provider>
  );
}

export default App;
