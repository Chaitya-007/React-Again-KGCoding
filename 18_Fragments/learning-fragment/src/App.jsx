import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let foodItems = ["Dal", "Rice", "Vegetables", "Fruits", "Nuts"];

  let foodItems = [];

  if (foodItems.length === 0) {
    return <h3>No food items available</h3>;
  }

  return (
    <>
      <h1>Healthy Food</h1>
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
