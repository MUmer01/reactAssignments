import React from "react";

// Ref: https://daveceddia.com/useeffect-hook-examples/#only-run-once-on-mount

// ------------->> Only Run Once, on Mount <<-------------

// You can pass the empty array [] as a way of saying “only run on mount, and clean up on unmount”. (componentDidMount & componentWillUnmount if we return from effect)


const ExampleState1 = () => {
  const [show, setShow] = React.useState(true)
  return <>
    <button onClick={() => {
      setShow(!show)
    }}>Show/Hide</button>
    <p style={
      {
        width: 400,
        border: '1px solid',
        overflow: 'hidden',
        height: show ? 'auto' : 20
      }
    }>useState returns an array with 2 elements, and we’re using ES6 destructuring to assign names to them. The first element is the current value of the state, and the second element is a state setter function – just call it with a new value, and the state will be set and the component will re-render.</p>
  </>;
};

export default ExampleState1;
