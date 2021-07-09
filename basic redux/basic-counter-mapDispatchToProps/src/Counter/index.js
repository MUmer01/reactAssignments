import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.increment();
        }}
      >
        INCREMENT
      </button>
      <div>
        <b>{props.counter}</b>
      </div>
      <button
        onClick={() => {
          props.decrement();
        }}
      >
        DECREMENT
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { counter: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      return dispatch({ type: "INCREMENT" });
    },
    decrement: () => {
      dispatch({ type: "DECREMENT" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
