import React from "react";

function InsertionInfo() {
  return (
    <div className="info-card">
      <div className="summary">
        <h1>Insertion Sort</h1>
        <p>
          The Insertion sort algorithm iterates through an input array and
          removes one element per iteration, finds the place the element belongs
          in the array, and then places it there. This process grows a sorted
          list from left to right.
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

export default InsertionInfo;
