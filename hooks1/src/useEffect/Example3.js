import React from "react";

// Ref: https://daveceddia.com/useeffect-hook-examples/#only-run-once-on-mount

// ------------->> Only Run Once, on Mount <<-------------

// You can pass the empty array [] as a way of saying “only run on mount, and clean up on unmount”. (componentDidMount & componentWillUnmount if we return from effect)

const Example3 = () => {
  React.useEffect(() => {
    console.log("mounted");
    return () => console.log("unmounting...");
  }, []); // <-- add this empty array here

  return <>
    <h1>Example3</h1>
  </>;
};

export default Example3;
