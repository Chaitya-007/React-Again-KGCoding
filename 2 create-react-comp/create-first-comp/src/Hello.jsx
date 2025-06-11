function Hello()
{
  let myName = "Kiran";
  let myAge = 30;
  let sayHello = () =>
  {
    return "Baburao";
  }

  return <div>
    <h3>
      This is {myName} speaking.
      <br />
      And I am {sayHello()}.
      <br />
      this is my age: {myAge}
    </h3>
  </div>
}

export default Hello;