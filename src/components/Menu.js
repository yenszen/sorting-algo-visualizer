import React, { useState } from "react";
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Menu({
  generateArray,
  bubbleSort,
  insertionSort,
  quickSort,
  mergeSort,
  speed,
  setSpeed,
  isRunning,
  algorithm,
  setAlgorithm,
}) {
  const [speedOpen, setSpeedOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const speedToggle = () => setSpeedOpen(!speedOpen);
  const sizeToggle = () => setSizeOpen(!sizeOpen);
  const sortToggle = () => setSortOpen(!sortOpen);

  const sortMode = () => {
    if (algorithm === "Bubble Sort") {
      bubbleSort();
    } else if (algorithm === "Insertion Sort") {
      insertionSort();
    } else if (algorithm === "Quick Sort") {
      quickSort();
    } else if (algorithm === "Merge Sort") {
      mergeSort();
    }
  };

  return (
    <div className="menu">
      <h1>Sort Visualizer</h1>
      <div className="controls">
        <ButtonDropdown
          isOpen={sizeOpen}
          toggle={sizeToggle}
          disabled={isRunning}
        >
          <DropdownToggle caret>Generate array</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => generateArray(10)}>
              Random array of size 10
            </DropdownItem>
            <DropdownItem onClick={() => generateArray(25)}>
              Random array of size 25
            </DropdownItem>
            <DropdownItem onClick={() => generateArray(50)}>
              Random array of size 50
            </DropdownItem>
            <DropdownItem onClick={() => generateArray(75)}>
              Random array of size 75
            </DropdownItem>
            <DropdownItem onClick={() => generateArray(100)}>
              Random array of size 100
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        <ButtonDropdown
          isOpen={speedOpen}
          toggle={speedToggle}
          disabled={isRunning}
        >
          <DropdownToggle caret>Speed {speed}ms</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setSpeed(250)}>Slow</DropdownItem>
            <DropdownItem onClick={() => setSpeed(50)}>Normal</DropdownItem>
            <DropdownItem onClick={() => setSpeed(25)}>Fast</DropdownItem>
            <DropdownItem onClick={() => setSpeed(10)}>Super fast</DropdownItem>
            <DropdownItem onClick={() => setSpeed(5)}>Godspeed</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        <ButtonDropdown
          isOpen={sortOpen}
          toggle={sortToggle}
          disabled={isRunning}
        >
          <DropdownToggle caret>{algorithm}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setAlgorithm("Bubble Sort")}>
              Bubble Sort
            </DropdownItem>
            <DropdownItem onClick={() => setAlgorithm("Insertion Sort")}>
              Insertion Sort
            </DropdownItem>
            <DropdownItem onClick={() => setAlgorithm("Quick Sort")}>
              Quick Sort
            </DropdownItem>
            <DropdownItem onClick={() => setAlgorithm("Merge Sort")}>
              Merge Sort
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        <Button color="success" onClick={sortMode} disabled={isRunning}>
          Start animation
        </Button>

        <Button color="danger" onClick={() => window.location.reload()}>
          Cancel animation
        </Button>
      </div>
    </div>
  );
}

export default Menu;
