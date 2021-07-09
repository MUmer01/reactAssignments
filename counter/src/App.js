import React, { Component } from "react";
import Count from './count'

class CustomButton extends Component {
    
    render() {
        return (<button onClick={() => {
            this.props.incFunction()
        }}>Update</button>);
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            counter: 10
        }
    }

    incCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
      <div>
        <Count myVar={this.state.counter} />
        <CustomButton incFunction={this.incCounter} />
      </div>
    );
        }
}

export { App } ;
