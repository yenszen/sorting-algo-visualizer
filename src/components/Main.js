import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import { getBubbleSortAnimations } from "../algorithms/BubbleSort";
import { getInsertionSortAnimation } from "../algorithms/InsertionSort";
import { getQuickSortAnimation } from "../algorithms/QuickSort";
import { getMergeSortAnimation } from "../algorithms/MergeSort";
import Description from "./Description";

function Main() {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(50);
  const [isRunning, setIsRunning] = useState(false);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");

  useEffect(() => {
    generateArray(50);
    // eslint-disable-next-line
  }, []);

  const resetBarColour = (delayMs, colour) => {
    for (let i = 0; i < array.length; i++) {
      const bars = document.getElementsByClassName("bar");
      setTimeout(() => {
        bars[i].style.backgroundColor = colour;
      }, delayMs);
    }
  };

  const generateArray = (arrSize) => {
    const arr = [];
    for (let i = 0; i < arrSize; i++) {
      arr.push(getRandomArbitrary(10, 400));
    }
    setArray(arr);
  };

  // resets bar colour when generating new array
  useEffect(() => {
    resetBarColour(0, "#303030");
    // eslint-disable-next-line
  }, [array]);

  // resets bar colour and array order when switching algorithms to compare performance across same array
  useEffect(() => {
    resetBarColour(0, "#303030");
    for (let i = 0; i < array.length; i++) {
      const bars = document.getElementsByClassName("bar");
      bars[i].style.backgroundColor = "#303030";
      bars[i].style.height = `${array[i]}px`;
    }
    // eslint-disable-next-line
  }, [algorithm]);

  // VARIABLES
  const ANIMATION_MS = speed;
  const MAIN_COLOUR = "#303030";
  const SWAP_COLOUR = "turquoise";
  const OVERWRITE_COLOUR = "red";
  const COMPARE_COLOUR = "gold";

  const bubbleSort = () => {
    setIsRunning(true);
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
    resetBarColour(animations.length * ANIMATION_MS, "green");
    setTimeout(() => {
      setIsRunning(false);
    }, animations.length * ANIMATION_MS);
  };

  const insertionSort = () => {
    setIsRunning(true);
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
    resetBarColour(animations.length * ANIMATION_MS, "green");
    setTimeout(() => {
      setIsRunning(false);
    }, animations.length * ANIMATION_MS);
  };

  const quickSort = () => {
    setIsRunning(true);
    const animations = getQuickSortAnimation(array);
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName("bar");
      // highlight pivot
      if (animations[i].length === 1) {
        setTimeout(() => {
          bars[animations[i]].style.backgroundColor = COMPARE_COLOUR;
        }, i * ANIMATION_MS);
        // highlight pointer and pivot
      } else if (animations[i].length === 2) {
        const [pointerIndex, pivotIndex] = animations[i];
        setTimeout(() => {
          bars[pointerIndex].style.backgroundColor = SWAP_COLOUR;
          bars[pivotIndex].style.backgroundColor = COMPARE_COLOUR;
        }, i * ANIMATION_MS);
        setTimeout(() => {
          bars[pointerIndex].style.backgroundColor = MAIN_COLOUR;
        }, i * ANIMATION_MS + ANIMATION_MS / 2);
        // highlight and swap storeIndex and pointer
      } else if (animations[i].length === 5) {
        const [
          storeIndex,
          storeHeight,
          pointerIndex,
          pointerHeight,
          pivotIndex,
        ] = animations[i];
        setTimeout(() => {
          bars[storeIndex].style.backgroundColor = OVERWRITE_COLOUR;
          bars[pointerIndex].style.backgroundColor = SWAP_COLOUR;
        }, i * ANIMATION_MS);
        setTimeout(() => {
          bars[storeIndex].style.height = `${pointerHeight}px`;
          bars[pointerIndex].style.height = `${storeHeight}px`;
        }, i * ANIMATION_MS + ANIMATION_MS / 2);
        setTimeout(() => {
          bars[storeIndex].style.backgroundColor = MAIN_COLOUR;
          bars[pointerIndex].style.backgroundColor = MAIN_COLOUR;
          bars[pivotIndex].style.backgroundColor = MAIN_COLOUR;
        }, i * ANIMATION_MS + ANIMATION_MS / 1.5);
        // swap pivot and storeIndex
      } else if (animations[i].length === 4) {
        let [storeIndex, storeHeight, pivotIndex, pivotHeight] = animations[i];
        setTimeout(() => {
          bars[storeIndex].style.backgroundColor = OVERWRITE_COLOUR;
          bars[pivotIndex].style.backgroundColor = COMPARE_COLOUR;
        }, i * ANIMATION_MS);
        setTimeout(() => {
          bars[storeIndex].style.height = `${pivotHeight}px`;
          bars[pivotIndex].style.height = `${storeHeight}px`;
        }, i * ANIMATION_MS + ANIMATION_MS / 2);
        setTimeout(() => {
          bars[storeIndex].style.backgroundColor = MAIN_COLOUR;
          bars[pivotIndex].style.backgroundColor = MAIN_COLOUR;
        }, i * ANIMATION_MS + ANIMATION_MS / 1.5);
      }
    }
    resetBarColour(animations.length * ANIMATION_MS, "green");
    setTimeout(() => {
      setIsRunning(false);
    }, animations.length * ANIMATION_MS);
  };

  const mergeSort = () => {
    // setIsRunning(true);
    const animations = getMergeSortAnimation(array);
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName("bar");
      // every third array element in animations array is an overwriting animation
      const overwriting = i % 3 === 2;
      if (overwriting) {
        const [index, height] = animations[i];
        setTimeout(() => {
          bars[index].style.backgroundColor = OVERWRITE_COLOUR;
          bars[index].style.height = `${height}px`;
        }, i * ANIMATION_MS);
        setTimeout(() => {
          bars[index].style.backgroundColor = MAIN_COLOUR;
        }, i * ANIMATION_MS + ANIMATION_MS / 2);
      } else {
        const [barOneIndex, barTwoIndex] = animations[i];
        // every first array element in animations array is index for highlighting
        const color = i % 3 === 0 ? COMPARE_COLOUR : MAIN_COLOUR;
        setTimeout(() => {
          bars[barOneIndex].style.backgroundColor = color;
          bars[barTwoIndex].style.backgroundColor = color;
        }, i * ANIMATION_MS);
      }
    }
    resetBarColour(animations.length * ANIMATION_MS, "green");
    // setTimeout(() => {
    //   setIsRunning(false);
    // }, animations.length * ANIMATION_MS);
  };

  return (
    <React.Fragment>
      <Menu
        generateArray={generateArray}
        bubbleSort={bubbleSort}
        insertionSort={insertionSort}
        quickSort={quickSort}
        mergeSort={mergeSort}
        speed={speed}
        setSpeed={setSpeed}
        isRunning={isRunning}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
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
      <Description algorithm={algorithm} />
    </React.Fragment>
  );
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Main;
