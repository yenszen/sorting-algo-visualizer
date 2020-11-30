import React from "react";

function MergeLegend() {
  return (
    <div className="legend">
      <div className="block" style={{ backgroundColor: "purple" }}></div>
      <div style={{ margin: "0 1rem" }}>Sorted</div>
      <div className="block" style={{ backgroundColor: "gold" }}></div>
      <div style={{ margin: "0 1rem" }}>Comparing</div>
      <div className="block" style={{ backgroundColor: "red" }}></div>
      <div style={{ margin: "0 1rem" }}>Overwriting</div>
    </div>
  );
}

export default MergeLegend;
