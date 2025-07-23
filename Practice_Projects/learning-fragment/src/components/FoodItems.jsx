import Item from "./Item";
import React, { useState } from "react";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyItem = (item, event) => {
    let newActiveItems = [...activeItems, item];
    setActiveItems(newActiveItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyItem={(event) => onBuyItem(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
