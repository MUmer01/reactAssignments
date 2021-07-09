/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Child1 from "./child1";
import Child2 from "./child2";
import Child3 from "./child3";

const UseCallbackExample2 = () => {
  const [child1, setChild1] = React.useState(0);
  const [child2, setChild2] = React.useState(0);
  const [child3, setChild3] = React.useState(0);

  const update_child1_count = React.useCallback(() => {
    setChild1(child1 + 1);
  }, [child1]);

  const update_child2_count = React.useCallback(() => {
    setChild2(child2 + 1);
  }, [child2]);

  const update_child3_count = React.useCallback(() => {
    setChild3(child3 + 1);
  }, [child3]);

  console.log("child1 => ", child1);
  console.log("child2 => ", child2);
  console.log("child3 => ", child3);

  return (
    <div>
      <Child1 change={update_child1_count} />
      <Child2 change={update_child2_count} />
      <Child3 change={update_child3_count} />
    </div>
  );
};

export default UseCallbackExample2;
