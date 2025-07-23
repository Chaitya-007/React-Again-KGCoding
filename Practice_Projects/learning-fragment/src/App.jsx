import React, { useState } from "react";
import FoodItems from "./components/FoodItems.jsx";
import ErrorMsg from "./components/ErrorMsg.jsx";
import Container from "./components/Container.jsx";
import FoodInput from "./components/FoodInput.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = ""; // Clear the input field after adding the item
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMsg items={foodItems}></ErrorMsg>

        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>All the food items are healthy and nutritious.</p>
      </Container> */}
    </>
  );
}

export default App;
