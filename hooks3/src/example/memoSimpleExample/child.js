/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";

const MemoChild = (props) => {
  console.log("MemoExample Child Rerender");
  return (
    <div>
      <h1>MemoExample Child {`${props.value}`}</h1>
    </div>
  );
};

export default React.memo(MemoChild);
