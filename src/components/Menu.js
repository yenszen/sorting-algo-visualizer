import React from "react";

function Menu({ generateArray, bubbleSort }) {
  return (
    <div className="menu">
      <h1>Sort Visualizer</h1>
      <button onClick={generateArray}>New Array</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
    </div>
  );
}

export default Menu;
