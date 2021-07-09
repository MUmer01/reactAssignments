import React from "react";
import "./App.css";
import Assignment from "./assignment";
import Example1 from "./useEffect/Example1";
import Example2 from "./useEffect/Example2";
import Example3 from "./useEffect/Example3";
import ExampleState1 from "./useState/Example1";
import ExampleState2 from "./useState/Example2";

const App = () => {
  // Set up a piece of state, so that we have
  // a way to trigger a re-render.

  // const [name, setName] = React.useState("abc")
  const [number, setNumber] = React.useState(1);
  const [random, setRandom] = React.useState(Math.random());

  // Set up another piece of state to keep track of
  // whether the LifecycleDemo is shown or hidden
  const [mounted, setMounted] = React.useState(true);

  // This function will change the random number,
  // and trigger a re-render (in the console,
  // you'll see a "render!" from LifecycleDemo)

  const reRender = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };

  const reRenderRandom = () => {
    setRandom(Math.random());
  };

  // This function will unmount and re-mount the
  // LifecycleDemo, so you can see its cleanup function
  // being called.
  const toggle = () => setMounted(!mounted);

  return (
    <>
      {/* <button onClick={reRenderRandom}>Re-render-random</button> */}
      {/* <button onClick={reRender}>Re-render</button> */}
      {/* <button onClick={toggle}>Show/Hide LifecycleDemo</button> */}
      {/* {mounted && <Example1 />} */}
      {/* {mounted && <Example2 value={number} />} */}
      {/* {mounted && <Example3 />} */}
      {/* {mounted && <ExampleState1 />} */}
      {/* {mounted && <ExampleState2 />} */}
      <Assignment />
    </>
  );
};

export default App;
