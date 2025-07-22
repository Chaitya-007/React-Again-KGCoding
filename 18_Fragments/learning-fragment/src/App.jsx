import React from "react";
import FoodItems from "./components/FoodItems.jsx";
import ErrorMsg from "./components/ErrorMsg.jsx";
import Container from "./components/Container.jsx";
import FoodInput from "./components/FoodInput.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Rice", "Vegetables", "Fruits", "Nuts"];

  // let foodItems = [];

  const handleChange = (event) => {
    console.log(`New food item: ${event.target.value}`);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodInput handleChange={handleChange}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>All the food items are healthy and nutritious.</p>
      </Container> */}
    </>
  );
}

export default App;
