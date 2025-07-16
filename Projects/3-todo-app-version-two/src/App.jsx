import AddTodo from "./components/AddToDo";
import AppName from "./components/AppName";
import Todoitem from "./components/Todoitem";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <Todoitem todoName="Buy Milk" todoDate="4/10/2023" />
        <Todoitem todoName="Go to College" todoDate="4/10/2023" />
      </div>
    </center>
  );
}

export default App;
