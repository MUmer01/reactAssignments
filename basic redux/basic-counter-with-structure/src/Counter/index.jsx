import React from "react";
import { connect } from "react-redux";
import { reducerCases } from "../Reducer/type";

const CounterComponent = (props) => {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            props.increment();
          }}
        >
          INCREMENT
        </button>
        <b>{props.inc_counter}</b>
      </div>
      <div>
        <button
          onClick={() => {
            props.decrement();
          }}
        >
          DECREMENT
        </button>
        <b>{props.dec_counter}</b>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inc_counter: state.increment.counter,
    dec_counter: state.decrement.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: reducerCases.INCREMENT });
    },
    decrement: () => {
      dispatch({ type: reducerCases.DECREMENT });
    },
  };
};

const returnedFunction = connect(mapStateToProps, mapDispatchToProps);

export default returnedFunction(CounterComponent);
