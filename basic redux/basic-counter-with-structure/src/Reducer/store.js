import { createStore } from "redux";
import reducers from "./";

export const store = createStore(reducers);

// store.subscribe(() => {
//   console.log("current store", store.getState());
// });
