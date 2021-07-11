import React from "react";
import { connect } from "react-redux";

const CounterComponent = (props) => {
  return <div>{props.counter}</div>;
};

const mapStateToProps = (state) => {
  return { counter: state };
};

const returnedFunction = connect(mapStateToProps);

export default returnedFunction(CounterComponent);
