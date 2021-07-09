/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ListItem from "./child";

const UseCallbackExample3 = () => {
  const [list, updateList] = React.useState([2, 6, 12]);
  const [count, updateCount] = React.useState("");

  const addStudent = () => {
    updateList([...list, count]);
    updateCount("");
  };

  const updateValue = (index) => {
    const copy = [...list];
    copy[index] = copy[index] + 1;
    updateList(copy);
  };
  return (
    <div>
      <input
        type="number"
        onChange={(e) => updateCount(Number(e.target.value))}
        value={count}
      />
      <button onClick={addStudent}>Add Student</button>
      <div>
        <table>
          <tbody>
            {list.map((c, i) => {
              return (
                <ListItem key={i} count={c} index={i} update={updateValue} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UseCallbackExample3;
