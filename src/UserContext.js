import React, { createContext, useState } from "react";

const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("Clay");
  const [city, setCity] = useState("Paia");
  const [state, setSt] = useState("Hi");

  return (
    <UserContext.Provider
      value={{ name, city, state, setName, setCity, setSt }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
