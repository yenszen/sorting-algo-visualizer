import React from "react";

function QuickLegend() {
  return (
    <div className="legend">
      <div className="block" style={{ backgroundColor: "gold" }}></div>
      <div style={{ margin: "0 1rem" }}>Pivot</div>
      <div className="block" style={{ backgroundColor: "turquoise" }}></div>
      <div style={{ margin: "0 1rem" }}>Comparing</div>
      <div className="block" style={{ backgroundColor: "red" }}></div>
      <div style={{ margin: "0 1rem" }}>Overwriting</div>
    </div>
  );
}

export default QuickLegend;
