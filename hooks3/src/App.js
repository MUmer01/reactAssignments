/* eslint-disable no-unused-vars */
import MemoExample from "./example/memoSimpleExample/memo";
import UseCallbackExample1 from "./example/useCallback/Example1/useCallback";
import UseCallbackExample2 from "./example/useCallback/Example2/useCallback";
import UseCallbackExample3 from "./example/useCallback/Example3/useCallback";
import UseMemoExample from "./example/useMemo";

const App = () => {
  return (
    <div className="App">
      {/* <MemoExample /> */}
      {/* <UseCallbackExample1 /> */}
      {/* <UseCallbackExample2 /> */}
      {/* <UseCallbackExample3 /> */}
      <UseMemoExample />
    </div>
  );
};

export default App;
