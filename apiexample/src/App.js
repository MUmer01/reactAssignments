import "./App.css";
import React from "react";
import CallAPI from "./CallAPI";

const App = () => {
  const [isMount, setIsMount] = React.useState(true);
  return (
    <div>
      <button onClick={() => setIsMount(!isMount)}>Unmount</button>
      {isMount ? <CallAPI /> : null}
    </div>
  );
};

export default App;
