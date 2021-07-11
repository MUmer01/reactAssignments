import { reducerCases } from "./type";

// Reducer
const initialState = {
  counter: 0,
  name: "abc",
  age: 99,
};
export const decrementCounter = (state = initialState, action) => {
  switch (action.type) {
    case reducerCases.DECREMENT: {
      // const copy = { ...state };
      // copy.counter--;
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default:
      return state;
  }
};
