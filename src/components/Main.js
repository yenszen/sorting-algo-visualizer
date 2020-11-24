import React, { useState, useEffect } from "react";
import Menu from "./Menu";

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

  return (
    <React.Fragment>
      <Menu generateArray={generateArray} />
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
