const ErrorMsg = () => {
  let foodItems = ["Dal", "Rice", "Vegetables", "Fruits", "Nuts"];

  return <>{foodItems.length === 0 && <h3>No food items available</h3>}</>;
};

export default ErrorMsg;
