import { TodoitemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";

const Todoitems = ({ onDelete }) => {
  const todoItems = useContext(TodoitemsContext);

  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <Todoitem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
};

export default Todoitems;
