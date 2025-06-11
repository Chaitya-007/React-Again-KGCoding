function Random()
{
  let myNumber = Math.round(Math.random() * 100);

  return <h1 style = {{'background-color':'#476692' }}>
    My Random Number : {myNumber}
  </h1>
}

export default Random;