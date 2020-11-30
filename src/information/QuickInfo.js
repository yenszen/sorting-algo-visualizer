import React from "react";

function QuickInfo() {
  return (
    <div className="info-card">
      <div className="summary">
        <h1>Quick Sort</h1>
        <p>
          Quick sort is a Divide and Conquer algorithm. It picks an element as
          pivot and partitions the given array around the picked pivot. There
          are many different versions of quick sort that pick pivot in different
          ways. The implementation showcased here always picks the last element
          as the pivot.
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
          <li>O(n log n)</li>
        </ul>
        <ul>
          <li>Best-case time complexity</li>
          <li>O(n log n)</li>
        </ul>
        <ul>
          <li>Worst-case space complexity</li>
          <li>O(log n)</li>
        </ul>
      </div>
    </div>
  );
}

export default QuickInfo;
