import React from "react";
import { UserContext } from "../useContext/withHOC/Context";

const PrintUserName = () => {
  const { name, age } = React.useContext(UserContext);

  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </div>
  );
};

export default PrintUserName;
