function CustomButton({ numbers }) {
  return (
    <>
      {numbers.map((num) => (
        <span className="spanButton">{num}</span>
      ))}
    </>
  );
}

export default CustomButton;
