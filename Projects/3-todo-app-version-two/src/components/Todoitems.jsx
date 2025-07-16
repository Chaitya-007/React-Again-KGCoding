import Todoitem from "./Todoitem";

const Todoitems = ({ todoItems }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <Todoitem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          />
        ))}
      </div>
    </>
  );
};

export default Todoitems;
