/* eslint-disable no-unused-vars */
import React from "react";
import HOC from "./HigherOC";
import PrintName from "./PrintComponents/PrintName";
import PrintUserName from "./PrintComponents/PrintUserName";
import UpdateUserName from "./PrintComponents/UpdateUserName";
import { UserContext } from "./useContext/simpleExample/Context";
import UserProvider from "./useContext/withHOC/Context";

// HOC Example Start --------------------------

// const App = () => {
//   return (
//     <HOC>
//       {/* {
//         () => {
//           return <p>Hello</p>
//         }
//       } */}
//       <p>Hello</p>
//       <div>XYZ</div>
//     </HOC>
//   );
// };

// HOC Example End --------------------------

// Example 1 Start --------------------------

const App = () => {
  /* we are wrapping the Provider component by passing
  the current value "Ali" */
  return (
    <UserContext.Provider value={"Ali"}>
      <PrintName />
    </UserContext.Provider>
  );
};

// Example 1 End --------------------------

// Example 2 Start --------------------------

// const App = () => {
//   /* we are wrapping the Provider component by passing
//   the current value "Ali" */
//   /* If we did not wrap the Provider component on our PrintName component
//   we will not get the updated value */
//   return (
//     <div>
//       <UserContext.Provider value={"Ali"}>
//         <PrintName />
//       </UserContext.Provider>
//       <PrintName />
//     </div>
//   );
// };

// Example 2 End --------------------------

// Example 3 Start --------------------------

// const App = () => {
//   // update provider Value
//   const [name, setName] = React.useState("Ali");
//   const updateName = (e) => {
//     setName(e.target.value);
//   };
//   return (
//     <div>
//       <input type="text" value={name} onChange={updateName} />
//       <UserContext.Provider value={name}>
//         <PrintName />
//       </UserContext.Provider>
//       <PrintName />
//     </div>
//   );
// };

// Example 3 End --------------------------

// Example 4 Start --------------------------

// const App = () => {
//   /* Use HOC (Higher Order Component) */
//   return (
//     <div>
//       <UserProvider>
//         <UpdateUserName />
//         <PrintUserName />
//       </UserProvider>
//       <UpdateUserName />
//       <PrintUserName />
//     </div>
//   );
// };

// Example 4 End --------------------------

export default App;
