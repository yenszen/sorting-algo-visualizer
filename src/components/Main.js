import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import { getBubbleSortAnimations } from "../algorithms/BubbleSort";

function Main() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(getRandomArbitrary(10, 500));
    }
    setArray(arr);
  };

  const ANIMATION_MS = 500;

  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array);
    // console.log("animations", animations);
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName("bar");
      // every odd-numbered element in animations array contain height info
      const changeHeight = i % 2 !== 0;
      const [barOneIndex, barTwoIndex] = animations[i];
      if (changeHeight) {
        if (barOneIndex > barTwoIndex) {
          const tempHeight = bars[barOneIndex].style.height;
          setTimeout(() => {
            bars[
              barOneIndex
            ].style.height = `${bars[barTwoIndex].style.height}`;
            bars[barTwoIndex].style.height = `${tempHeight}`;
          }, i * ANIMATION_MS);
        }
        setTimeout(() => {
          bars[barOneIndex].style.backgroundColor = "darkslateblue";
          bars[barTwoIndex].style.backgroundColor = "darkslateblue";
        }, i * ANIMATION_MS + 250);
      } else {
        setTimeout(() => {
          bars[barOneIndex].style.backgroundColor = "darkgreen";
          bars[barTwoIndex].style.backgroundColor = "darkgreen";
        }, i * ANIMATION_MS);
      }
    }
  };

  return (
    <React.Fragment>
      <Menu generateArray={generateArray} bubbleSort={bubbleSort} />
      <div className="main">
        {array.map((value, index) => {
          return (
            <div
              key={index}
              className="bar"
              style={{ height: `${value}px` }}
            ></div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Main;
