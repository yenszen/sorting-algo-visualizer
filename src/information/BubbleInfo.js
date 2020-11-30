import React from "react";

function BubbleInfo() {
  return (
    <div className="info-card">
      <div className="summary">
        <h1>Bubble Sort</h1>
        <p>
          The Bubble sort algorithm compares each pair of elements in an array
          and swaps them if they are out of order until the entire array is
          sorted. For each element in the list, the algorithm compares every
          pair of elements.
        </p>
      </div>

      <br />

      <div className="performance">
        <h2>Performance</h2>
        <ul>
          <li>Worst-case time complexity</li>
          <li>O(n²)</li>
        </ul>
        <ul>
          <li>Average-case time complexity</li>
          <li>O(n²)</li>
        </ul>
        <ul>
          <li>Best-case time complexity</li>
          <li>O(n)</li>
        </ul>
        <ul>
          <li>Worst-case space complexity</li>
          <li>O(1)</li>
        </ul>
      </div>
    </div>
  );
}

export default BubbleInfo;
