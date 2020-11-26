import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import { getBubbleSortAnimations } from "../algorithms/BubbleSort";
import { getInsertionSortAnimation } from "../algorithms/InsertionSort";

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
  const MAIN_COLOUR = "#303030";
  const SWAP_COLOUR = "turquoise";
  const OVERWRITE_COLOUR = "red";
  const COMPARE_COLOUR = "gold";

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

  const insertionSort = () => {
    const animations = getInsertionSortAnimation(array);
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName("bar");
      if (animations[i].length === 3) {
        const [barOneIndex, barOneHeight, barTwoIndex] = animations[i];
        setTimeout(() => {
          bars[barOneIndex].style.backgroundColor = SWAP_COLOUR;
          bars[barTwoIndex].style.backgroundColor = COMPARE_COLOUR;
        }, i * ANIMATION_MS);
        setTimeout(() => {
          bars[barTwoIndex].style.height = `${barOneHeight}px`;
          bars[barTwoIndex].style.backgroundColor = SWAP_COLOUR;
        }, i * ANIMATION_MS + ANIMATION_MS / 2);
        setTimeout(() => {
          bars[barOneIndex].style.backgroundColor = MAIN_COLOUR;
          bars[barTwoIndex].style.backgroundColor = MAIN_COLOUR;
        }, i * ANIMATION_MS + ANIMATION_MS / 1.5);
      } else if (animations[i].length === 2) {
        const [index, height] = animations[i];
        setTimeout(() => {
          bars[index].style.backgroundColor = OVERWRITE_COLOUR;
        }, i * ANIMATION_MS);
        setTimeout(() => {
          bars[index].style.height = `${height}px`;
        }, i * ANIMATION_MS + ANIMATION_MS / 2);
        setTimeout(() => {
          bars[index].style.backgroundColor = MAIN_COLOUR;
        }, i * ANIMATION_MS + ANIMATION_MS / 1.5);
      } else {
        const [index] = animations[i];
        setTimeout(() => {
          bars[index].style.backgroundColor = COMPARE_COLOUR;
        }, i * ANIMATION_MS);
      }
    }
  };

  return (
    <React.Fragment>
      <Menu
        generateArray={generateArray}
        bubbleSort={bubbleSort}
        insertionSort={insertionSort}
      />
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
