import Item from "./Item";

const FoodItems = () => {
  let foodItems = ["Dal", "Rice", "Vegetables", "Fruits", "Nuts"];

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
