import AppName from "./components/AppName";
import Todoitems from "./components/Todoitems";
import { useReducer, useState } from "react";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import AddToDo from "./components/AddTodo";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  // let [todoItems, setTodoItems] = useState([]);

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <WelcomeMessage />

        <Todoitems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
