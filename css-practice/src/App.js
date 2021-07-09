import "./App.css";
import CSSModulesStyle from "./CSSModulesStyle";
import InlineStyle from "./InlineStyle";
import JavaScriptObjectStyle from "./JavaScriptObjectStyle";
import StyleComponent from "./StyleComponent";

const App = () => {
  return (
    <div className="App">
      <InlineStyle />
      <JavaScriptObjectStyle />
      <CSSModulesStyle />
      <StyleComponent />
    </div>
  );
};

export default App;
