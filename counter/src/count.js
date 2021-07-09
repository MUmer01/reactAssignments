import React, { Component } from "react";

class Count extends Component {
  constructor() {
      super()
      this.state = {
          isEven: false
      }
  }

  componentWillReceiveProps() {
      this.setState({isEven: this.props.myVar%2 === 0})
  }


  render() {
      return (<div>
          <h1> Count {`${this.state.isEven}`} </h1>
      </div>
      );
  }
}

export default Count ;
