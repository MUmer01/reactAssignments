import { reducerCases } from "./type";

// Reducer
const initialState = {
  counter: 0,
};
export const decrementCounter = (state = initialState, action) => {
  switch (action.type) {
    case reducerCases.DECREMENT: {
      // const copy = { ...state };
      // copy.counter--;
      const value = action.decrementBy;
      return {
        ...state,
        counter: state.counter - value,
      };
    }
    default:
      return state;
  }
};
