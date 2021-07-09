/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";

const Child1 = (props) => {
  console.log("UseCallback Child 1 Rerender");
  return (
    <div>
      <button onClick={props.change}>Re Render Child 1</button>
    </div>
  );
};

export default React.memo(Child1);
