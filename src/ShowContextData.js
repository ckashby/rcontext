import React, { useContext } from "react";
import UserContext from "./UserContext";

const ShowContextData = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.city}</h3>
      <h3>{user.state}</h3>
    </div>
  );
};

export default ShowContextData;
