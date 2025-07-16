import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let foodItems = ["Dal", "Rice", "Vegetables", "Fruits", "Nuts"];

  let foodItems = [];

  let emptyMsg =
    foodItems.length === 0 ? <h3>No food items available</h3> : null;

  return (
    <>
      <h1>Healthy Food</h1>
      {emptyMsg}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
