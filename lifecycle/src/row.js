import React, { Component } from "react";

function stateSetter(context) {
  var cancelled = false;
  return {
    cancel: function () {
      cancelled = true;
    },
    setState(newState) {
      if (!cancelled) {
        context.setState(newState);
      }
    },
  };
}

class Row extends Component {
  constructor() {
    super();
    this.setter = stateSetter(this);
    this.state = {
      localstate: false,
    };
    this.interval = null;
  }
  componentWillUpdate(nextProps, nextState) {
    // console.log(2);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(1);
    console.log(nextProps.arr[nextProps.i] !== this.props.arr[this.props.i])
    return nextProps.arr[nextProps.i] !== this.props.arr[this.props.i];
    // return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(4);
  }

//   componentWillUnmount() {
//     console.log("Unmount");
//     // clearTimeout(this.interval);
//     this.setter.cancel();
//   }

  componentWillMount() {
    console.log(1);
  }

  componentDidMount() {
    this.interval = setTimeout(() => {
      console.log("Update State");
      this.setter.setState({ localstate: !this.state.localstate });
    }, 2000);
    console.log(2);
  }

  render() {
    console.log("render", this.props.i);
    // console.log({currentComponentIndex: this.props.i})
    return (
      <tr>
        <td onClick={this.props.onclick}>{this.props.arr[this.props.i]}</td>
      </tr>
    );
  }
}

export default Row;
