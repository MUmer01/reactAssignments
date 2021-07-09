/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import MemoChild from "./child";

const MemoExample = () => {
  const [reRender, setReRender] = React.useState(false);
  const [reRenderChild, setReRenderChild] = React.useState(false);
  
  console.log("MemoExample Rerender");
  return (
    <div>
      <h1>MemoExample</h1>
      <MemoChild value={reRenderChild} />
      <button onClick={() => setReRender(!reRender)}>Re Render</button>
      <button onClick={() => setReRenderChild(!reRenderChild)}>
        Re Render Child
      </button>
    </div>
  );
};

export default MemoExample;
