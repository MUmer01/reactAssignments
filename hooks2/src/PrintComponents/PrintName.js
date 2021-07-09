import React, { useContext, useEffect } from "react";
import { UserContext } from "../useContext/simpleExample/Context";

// Now we are consuming the UserContext data inside PrintName component
// const PrintName = () => {

//   const print = (name) => {
//     return <div>
//       <p>Name:</p>
//       <h1>{name}</h1>
//     </div>
//   }

//   return (
//     <UserContext.Consumer>
//       {print}
//     </UserContext.Consumer>
//   );
// };

// Now we are consuming the UserContext data inside PrintName component
const PrintName = () => {
  const name = useContext(UserContext);

  // useEffect(() => {
  //   console.log(name)
  // })

  return (
    <div>
      <h1>Name: {name}</h1>
    </div>
  );
};

export default PrintName;
