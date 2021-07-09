/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";

const Child2 = (props) => {
  console.log("UseCallback Child 2 Rerender");
  return (
    <div>
      <button onClick={props.change}>Re Render Child 2</button>
    </div>
  );
};

export default React.memo(Child2);
