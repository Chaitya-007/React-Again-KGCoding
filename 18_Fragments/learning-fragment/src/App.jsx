import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        <li className="list-group-item">Dal</li>
        <li className="list-group-item">Rice</li>
        <li className="list-group-item">Vegetables</li>
        <li className="list-group-item">Fruits</li>
        <li className="list-group-item">Nuts</li>
      </ul>
    </React.Fragment>
  );
}

export default App;
