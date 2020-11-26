import React from "react";

function Menu({ generateArray, bubbleSort, insertionSort, quickSort }) {
  return (
    <div className="menu">
      <h1>Sort Visualizer</h1>
      <div>
        <button onClick={generateArray}>Randomize</button>
        <button onClick={bubbleSort}>Bubble Sort</button>
        <button onClick={insertionSort}>Insertion Sort</button>
        <button onClick={quickSort}>Quick Sort</button>
      </div>
    </div>
  );
}

export default Menu;
