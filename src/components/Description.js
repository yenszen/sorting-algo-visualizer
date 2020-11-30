import React from "react";
import BubbleInfo from "../information/BubbleInfo";
import InsertionInfo from "../information/InsertionInfo";
import QuickInfo from "../information/QuickInfo";
import MergeInfo from "../information/MergeInfo";
import BubbleLegend from "../information/BubbleLegend";
import InsertionLegend from "../information/InsertionLegend";
import QuickLegend from "../information/QuickLegend";
import MergeLegend from "../information/MergeLegend";

function Description({ algorithm }) {
  const display = (algo) => {
    switch (algo) {
      case "Insertion Sort":
        return (
          <React.Fragment>
            <InsertionLegend />
            <InsertionInfo />
          </React.Fragment>
        );
      case "Quick Sort":
        return (
          <React.Fragment>
            <QuickLegend />
            <QuickInfo />
          </React.Fragment>
        );
      case "Merge Sort":
        return (
          <React.Fragment>
            <MergeLegend />
            <MergeInfo />
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <BubbleLegend />
            <BubbleInfo />
          </React.Fragment>
        );
    }
  };
  return <div>{display(algorithm)}</div>;
}

export default Description;
