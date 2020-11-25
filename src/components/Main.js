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
    for (let i = 0; i < 50; i++) {
      arr.push(getRandomArbitrary(10, 400));
    }
    setArray(arr);
  };

  // VARIABLES
  const ANIMATION_MS = 10;
  const MAIN_COLOUR = "black";
  const SWAP_COLOUR = "lightgreen";

  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName("bar");
      // every odd-numbered element in animations array contain height info
      const changeHeight = i % 2 !== 0;
      if (changeHeight) {
        if (animations[i].length !== 2) {
          const [
            barOneIndex,
            barOneHeight,
            barTwoIndex,
            barTwoHeight,
          ] = animations[i];
          setTimeout(() => {
            bars[barOneIndex].style.height = `${barOneHeight}px`;
            bars[barTwoIndex].style.height = `${barTwoHeight}px`;
            bars[barOneIndex].style.backgroundColor = MAIN_COLOUR;
            bars[barTwoIndex].style.backgroundColor = MAIN_COLOUR;
          }, i * ANIMATION_MS);
        } else {
          const [barOneIndex, barTwoIndex] = animations[i];
          setTimeout(() => {
            bars[barOneIndex].style.backgroundColor = MAIN_COLOUR;
            bars[barTwoIndex].style.backgroundColor = MAIN_COLOUR;
          }, i * ANIMATION_MS);
        }
      } else {
        const [barOneIndex, barTwoIndex] = animations[i];
        setTimeout(() => {
          bars[barOneIndex].style.backgroundColor = SWAP_COLOUR;
          bars[barTwoIndex].style.backgroundColor = SWAP_COLOUR;
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
