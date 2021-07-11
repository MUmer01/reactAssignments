import { reducerCases } from "./type";

// Reducer
const initialState = {
  counter: 0,
  name: "abc",
  age: 99,
};
export const incrementCounter = (state = initialState, action) => {
  switch (action.type) {
    case reducerCases.INCREMENT: {
      // const copy = { ...state };
      // copy.counter++;
      const value = action.payload.incrementBy
        ? parseInt(action.payload.incrementBy)
        : 1;
      return {
        ...state,
        counter: state.counter + value,
      };
    }
    default:
      return state;
  }
};
