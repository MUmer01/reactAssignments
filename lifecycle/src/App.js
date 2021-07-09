import React from "react";
import Row from "./row";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [1, 2, 3, 4],
      hide: false,
    };
  }

  render() {
    return (
      <div className="App">
        <table border="1">
          {this.state.arr.map((v, i) => {
            return this.state.hide && i === 3 ? null : (
              <Row
                key={i}
                onclick={() => {
                  const arr = [...this.state.arr];
                  arr[i]++;
                  this.setState({ arr });
                }}
                arr={this.state.arr}
                i={i}
              />
            );
          })}
        </table>
        <div>
          <button
            onClick={() => {
              this.setState({ hide: !this.state.hide });
            }}
          >
            hide 3rd
          </button>
        </div>
      </div>
    );
  }
}

export default App;
