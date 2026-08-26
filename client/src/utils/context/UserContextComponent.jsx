import { useState } from "react";
import { UserContext, UserContextGetById } from "./UserContext";

import axios from "axios";

export function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);

  // get a user by id
  async function getUserById() {
    console.log("Get a user - PlayerContextComponent.jsx");

    // hit the endpoint to get the data
    const res = await axios.get("http://localhost:3001/api/users/1");
    console.log("response data", res.data);

    // put the user data into state
    setUser(res.data);
  }

  return (
    <UserContext.Provider value={user}>
      <UserContextGetById.Provider value={getUserById}>
        {children}
      </UserContextGetById.Provider>
    </UserContext.Provider>
  );
}
