import React from "react";

function Menu({ generateArray }) {
  return (
    <div className="menu">
      <h1>Sort Visualizer</h1>
      <button onClick={generateArray}>New Array</button>
    </div>
  );
}

export default Menu;
