import React from "react";
import FoodItems from "./components/FoodItems.jsx";
import ErrorMsg from "./components/ErrorMsg.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Dal", "Rice", "Vegetables", "Fruits", "Nuts"];

  // let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
