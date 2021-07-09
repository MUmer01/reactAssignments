import React from "react";

class User extends React.Component {
  shouldComponentUpdate(nextProps, ns) {
    // if (this.props.name === nextProps.name) {
    //   return false;
    // } else {
    //   return true;
    // }
    return this.props.name !== nextProps.name
  }

  render() {
    console.log(this.props.name);
    return <div>{this.props.name}</div>;
  }
}

export default User;
