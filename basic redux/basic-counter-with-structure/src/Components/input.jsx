import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        type={props.type || "text"}
        onChange={(e) => {
          props.afterChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
