import React from "react";

// Ref: https://daveceddia.com/useeffect-hook-examples/#prevent-useeffect-from-running-every-render

// ------------->> Prevent useEffect From Running Every Render <<-------------

// If you want your effects to run less often, you can provide a second
// argument – an array of values. Think of them as the dependencies for that effect.
// If one of the dependencies has changed since the last time, the effect will run again. (sort of componentWillReceiveProps)
// (It will also still run after the initial render) (componentDidMount)

const Example2 = (props) => {


  React.useEffect(() => {
    // This effect uses the `value` variable,
    // so it "depends on" `value`.
    console.log(props.value);
  }, [props.value]); // pass `value` as a dependency

  console.log("render..")

  return <h1>Example2</h1>;
};

export default Example2;
