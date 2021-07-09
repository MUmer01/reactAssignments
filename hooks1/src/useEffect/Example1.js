import React from "react";

// Ref: https://daveceddia.com/useeffect-hook-examples/#useeffect-vs-lifecycle-methods

// Let’s look at how to run code after a component mounts (componentDidMount),
// after it re-renders (componentDidUpdate),
// and before it unmounts (componentWillUnmount).

const Example1 = () => {
  // Pass useEffect a function
  React.useEffect(() => {
    // This gets called after every render 
    // eg. componentDidMount, componentDidUpdate
    console.log("render!");

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call it before unmount.
    return () => { // clear
      console.log("unmounting...");
    }
  });

  return <h1>Example1</h1>;
};
// Why is it “unmounting” with every render?

// Well, the cleanup function you can (optionally) return from useEffect isn’t only 
// called when the component is unmounted. It’s called every time before that 
// effect runs – to clean up from the last run. This is actually more powerful 
// than the componentWillUnmount lifecycle because it lets you run a side effect 
// before and after every render, if you need to.

export default Example1;
