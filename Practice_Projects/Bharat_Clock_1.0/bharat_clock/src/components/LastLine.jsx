function LastLine(){




  return <p>This is the current time : {new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
}

export default LastLine;