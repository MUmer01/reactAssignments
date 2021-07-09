/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [thirdValue, setThirdValue] = useState(0);

  const calculate = () => {
    console.log("thirdValue=>", thirdValue);
    return firstValue + secondValue;
  };

  // const sum = calculate();
  const sum = useMemo(calculate, [firstValue, secondValue]);

  return (
    <div>
      <input
        type="number"
        value={firstValue}
        onChange={(e) => {
          setFirstValue(parseInt(e.target.value));
        }}
      />
      <input
        type="number"
        value={secondValue}
        onChange={(e) => {
          setSecondValue(parseInt(e.target.value));
        }}
      />
      <input
        type="number"
        value={thirdValue}
        onChange={(e) => {
          setThirdValue(parseInt(e.target.value));
        }}
      />
      <h1>Result: {sum}</h1>
    </div>
  );
};

export default UseMemoExample;
