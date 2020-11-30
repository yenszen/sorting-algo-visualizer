import React from "react";

function InsertionLegend() {
  return (
    <div className="legend">
      <div className="block" style={{ backgroundColor: "gold" }}></div>
      <div style={{ margin: "0 1rem" }}>Comparing</div>
      <div className="block" style={{ backgroundColor: "turquoise" }}></div>
      <div style={{ margin: "0 1rem" }}>Swapping</div>
      <div className="block" style={{ backgroundColor: "red" }}></div>
      <div style={{ margin: "0 1rem" }}>Overwriting</div>
    </div>
  );
}

export default InsertionLegend;
