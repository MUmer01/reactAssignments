import React from "react";
import User from "./User";

class App extends React.Component {
  state = {
    names: ["Jhon", "Salman", "Amir"],
  };

  changeInputValue = (event, index) => {
    const newNames = [...this.state.names];
    newNames[index] = event.target.value;
    this.setState({
      names: newNames,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.names.map((name, index) => {
          return (
            <div key={index}>
              <label htmlFor={`inputName${index}`}>Enter Name</label>
              <input
                type="text"
                id={`inputName${index}`}
                value={name}
                onChange={(e) => {
                  this.changeInputValue(e, index)
                }}
              />
              <User name={name} />
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
