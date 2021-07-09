/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";

const Child3 = (props) => {
  console.log("UseCallback Child 3 Rerender");
  return (
    <div>
      <button onClick={props.change}>Re Render Child 3</button>
    </div>
  );
};

export default React.memo(Child3);
