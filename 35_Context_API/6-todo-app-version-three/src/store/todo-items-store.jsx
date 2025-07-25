import { createContext, useReducer } from "react";

export const TodoitemsContext = createContext([]);

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

const TodoItemsContextProvider = ({ children }) => {
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
      {children}
    </TodoitemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
