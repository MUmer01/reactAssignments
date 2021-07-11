import "./App.css";
import { Provider } from "react-redux";
import CounterComponent from "./Counter";
import { store } from "./Reducer/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent />
      </div>
    </Provider>
  );
};

export default App;
