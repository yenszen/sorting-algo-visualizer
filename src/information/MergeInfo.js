import React from "react";

function MergeInfo() {
  return (
    <div className="info-card">
      <div className="summary">
        <h1>Merge Sort</h1>
        <p>
          Merge sort is a Divide and Conquer algorithm. It divides the unsorted
          list into n sublists, each containing one element, since a list of one
          element is considered sorted. Then, it repeatedly merges sublists to
          produce new sorted sublists until there is only one sublist remaining.
          This will be the sorted list.
        </p>
      </div>

      <br />

      <div className="performance">
        <h2>Performance</h2>
        <ul>
          <li>Worst-case time complexity</li>
          <li>O(n log n)</li>
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
          <li>O(n)</li>
        </ul>
      </div>
    </div>
  );
}

export default MergeInfo;
