import AppName from "./components/AppName";
import Todoitems from "./components/Todoitems";
import { useReducer, useState } from "react";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import AddToDo from "./components/AddTodo";
import { TodoitemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.name,
        dueDate: action.payload.dueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.name
    );
  }
  return newTodoItems;
};

function App() {
  // let [todoItems, setTodoItems] = useState([]);

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (name, dueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        name,
        dueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (name) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        name,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  return (
    <TodoitemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
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
