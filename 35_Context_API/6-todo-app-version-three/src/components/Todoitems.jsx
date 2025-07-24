import { TodoitemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";

const Todoitems = () => {
  const { todoItems, deleteItem } = useContext(TodoitemsContext);

  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <Todoitem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </>
  );
};

export default Todoitems;
