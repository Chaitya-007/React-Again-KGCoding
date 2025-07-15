function LastLine(){

  let time = new Date();

  return <p>This is the current time : {time.toLocaleDateString()}</p>
}

export default LastLine;