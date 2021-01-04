import React, { useContext } from "react";
import UserContext from "./UserContext";

const UpdateContextData = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>Change user info:</h3>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => user.setName(e.target.value)}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          value={user.city}
          onChange={(e) => user.setCity(e.target.value)}
        />
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          value={user.state}
          onChange={(e) => user.setSt(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UpdateContextData;
