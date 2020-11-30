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
  arrSize,
  setArrSize,
  isRunning,
}) {
  const [speedOpen, setSpeedOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortMode, setSortMode] = useState("Algorithm");

  const speedToggle = () => setSpeedOpen(!speedOpen);
  const sizeToggle = () => setSizeOpen(!sizeOpen);
  const sortToggle = () => setSortOpen(!sortOpen);

  return (
    <div className="menu">
      <h1>Sort Visualizer</h1>
      <div className="controls">
        <ButtonDropdown
          isOpen={sizeOpen}
          toggle={sizeToggle}
          disabled={isRunning ? true : false}
        >
          <DropdownToggle caret>Size {arrSize}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setArrSize(10)}>10</DropdownItem>
            <DropdownItem onClick={() => setArrSize(25)}>25</DropdownItem>
            <DropdownItem onClick={() => setArrSize(50)}>50</DropdownItem>
            <DropdownItem onClick={() => setArrSize(75)}>75</DropdownItem>
            <DropdownItem onClick={() => setArrSize(100)}>100</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        <Button
          color="secondary"
          onClick={generateArray}
          disabled={isRunning ? true : false}
        >
          Generate new array
        </Button>

        <ButtonDropdown
          isOpen={speedOpen}
          toggle={speedToggle}
          disabled={isRunning ? true : false}
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
          disabled={isRunning ? true : false}
        >
          <DropdownToggle caret>{sortMode}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => {
                bubbleSort();
                setSortMode("Bubble Sort");
              }}
            >
              Bubble Sort
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                insertionSort();
                setSortMode("Insertion Sort");
              }}
            >
              Insertion Sort
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                quickSort();
                setSortMode("Quick Sort");
              }}
            >
              Quick Sort
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                mergeSort();
                setSortMode("Merge Sort");
              }}
            >
              Merge Sort
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        <Button color="danger" onClick={() => window.location.reload()}>
          Cancel animation
        </Button>
      </div>
    </div>
  );
}

export default Menu;
