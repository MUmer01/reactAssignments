import React from "react";

// UserContext is created with default value "Hammad"
const defaultValue = {
  name: "Hammad",
  updateName: () => {
    console.log("No Update");
  },
  updateAge: () => {
    console.log("No Update Update Age");
  },
};
const UserContext = React.createContext(defaultValue);
// it returns two components Provider and Consumer

const UserProvider = (props) => {
  const [name, setName] = React.useState("Ali123");

  const updateName = (value) => {
    setName(value);
  };

  const providerObject = {
    name: name,
    updateName: updateName,
    age: "20",
    updateAge: () => {
      console.log("updateAge");
    },
  };

  return (
    <UserContext.Provider value={providerObject}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext };
export default UserProvider;
