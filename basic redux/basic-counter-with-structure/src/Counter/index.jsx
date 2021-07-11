import React from "react";
import { connect } from "react-redux";
import { reducerCases } from "../Reducer/type";
import Input from "../Components/input";

const CounterComponent = (props) => {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <Input
        type="number"
        afterChange={(value) => {
          setValue(value);
        }}
      />
      <p>{value}</p>
      <div>
        <button
          onClick={() => {
            props.increment(value);
          }}
        >
          INCREMENT
        </button>
        <b>{props.inc_counter}</b>
      </div>
      <div>
        <button
          onClick={() => {
            props.decrement(value);
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
    increment: (value) => {
      dispatch({
        type: reducerCases.INCREMENT,
        payload: {
          incrementBy: value,
        },
      });
    },
    decrement: (value) => {
      dispatch({
        type: reducerCases.DECREMENT,
        decrementBy: value,
      });
    },
  };
};

const returnedFunction = connect(mapStateToProps, mapDispatchToProps);

export default returnedFunction(CounterComponent);
