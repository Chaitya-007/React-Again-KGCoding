const ErrorMsg = ({ items }) => {
  return <>{items.length === 0 && <h3>No food items available</h3>}</>;
};

export default ErrorMsg;
