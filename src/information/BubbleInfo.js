import React from "react";
import { Table } from "reactstrap";

function BubbleInfo() {
  return (
    <div>
      <h1>Bubble Sort</h1>
      <p>
        The Bubble sort algorithm compares each pair of elements in an array and
        swaps them if they are out of order until the entire array is sorted.
        For each element in the list, the algorithm compares every pair of
        elements.
      </p>
      <br></br>
      <Table dark>
        <thead>
          <th>Performance</th>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </Table>
    </div>
  );
}

export default BubbleInfo;
