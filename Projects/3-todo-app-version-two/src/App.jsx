import AddTodo from "./components/AddToDo";
import AppName from "./components/AppName";
import Todoitems from "./components/Todoitems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Complete Assignment",
      dueDate: "4/12/2023",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Todoitems todoItems={todoItems}></Todoitems>
    </center>
  );
}

export default App;
