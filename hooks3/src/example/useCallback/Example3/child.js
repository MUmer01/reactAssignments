import React from "react";

const ListItem = (props) => {
  console.log("List => ", props.index);
  return (
    <tr>
      <td>
        <h1>{props.count}</h1>
      </td>
      <td>
        <button onClick={() => props.update(props.index)}>Update</button>
      </td>
    </tr>
  );
};

export default React.memo(ListItem, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
