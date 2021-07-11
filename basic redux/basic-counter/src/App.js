import "./App.css";
import { createStore } from "redux";

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT": {
      const newState = (state += 1);
      return newState;
    }
    case "DECREMENT": {
      return (state -= 1);
    }
    default:
      return state;
  }
};
let store = createStore(counter);

store.subscribe(() => {
  console.log("current store", store.getState());
});

const App = () => {
  return (
    <div className="App">
      <button
        onClick={() => {
          store.dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          store.dispatch({ type: "DECREMENT" });
        }}
      >
        DECREMENT
      </button>
    </div>
  );
};

export default App;
