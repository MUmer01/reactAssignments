import { combineReducers } from "redux";
import { incrementCounter } from "./incrementReducer";
import { decrementCounter } from "./decrementReducer";

const reducers = combineReducers({
  increment: incrementCounter,
  decrement: decrementCounter,
});

export default reducers;
