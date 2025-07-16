import React from "react";
import FoodItems from "./components/FoodItems.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Dal", "Rice", "Vegetables", "Fruits", "Nuts"];

  // let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 && <h3>No food items available</h3>}
      <FoodItems></FoodItems>
    </>
  );
}

export default App;
