import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
  return <div>{props.counter}</div>;
};

const mapStateToProps = (state) => {
  return { counter: state };
};

export default connect(mapStateToProps)(Counter);
