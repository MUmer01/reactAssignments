import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "./Counter";

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return (state += 1);
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
    <Provider store={store}>
      <div className="App">
        <button
          onClick={() => {
            store.dispatch({ type: "INCREMENT" });
          }}
        >
          INCREMENT
        </button>
        <b>
          <Counter />
        </b>
        <button
          onClick={() => {
            store.dispatch({ type: "DECREMENT" });
          }}
        >
          DECREMENT
        </button>
      </div>
    </Provider>
  );
};

export default App;