/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";

const UseCallbackExample1 = () => {
  const [count, setCount] = useState(0);
  const [isActive, setActive] = useState(false);

  // const handleCount = () => {
  //   setCount(count + 1);
  // };
  // const handleShow = () => {
  //   console.log("UseCallbackExample1 => Without useCallback =>", count);
  //   setActive(!isActive);
  // };

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleShow = useCallback(() => {
    console.log("UseCallbackExample1 => With useCallback =>", count);
    setActive(!isActive);
  }, [isActive]);

  return (
    <div>
      <button onClick={handleShow}>
        {isActive ? "Hide Counter" : "Show Counter"}
      </button>
      {isActive && (
        <div>
          <h1>{count}</h1>
          <button onClick={handleCount}>Increment</button>
        </div>
      )}
    </div>
  );
};

export default UseCallbackExample1;
