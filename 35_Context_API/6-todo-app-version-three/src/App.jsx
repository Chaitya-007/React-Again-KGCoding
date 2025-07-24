import AppName from "./components/AppName";
import Todoitems from "./components/Todoitems";
import { useState } from "react";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import AddToDo from "./components/AddTodo";
import { TodoitemsContext } from "./store/todo-items-store";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  const addNewItem = (name, dueDate) => {
    let newTodo = [
      ...todoItems,
      {
        name: name,
        dueDate: dueDate,
      },
    ];
    setTodoItems(newTodo);
  };

  const deleteItem = (name) => {
    // console.log(name);
    const newTodoItems = todoItems.filter((item) => item.name !== name);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoitemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <WelcomeMessage />

        <Todoitems />
      </center>
    </TodoitemsContext.Provider>
  );
}

export default App;
