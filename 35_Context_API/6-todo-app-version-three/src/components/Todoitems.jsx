import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";

const Todoitems = ({ todoItems, onDelete }) => {
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
