import React from "react";
import { UserContext } from "../useContext/withHOC/Context";
import Input from "../common/input";

const UpdateUserName = () => {
  const { updateName, updateAge } = React.useContext(UserContext);

  const update = (v) => {
    updateName(v);
  };
  const update2 = () => {
    updateAge();
  };

  return (
    <div>
      <Input onChange={update} placeholder="User Name" />
      <button onClick={update2}>Update Age</button>
    </div>
  );
};

export default UpdateUserName;
