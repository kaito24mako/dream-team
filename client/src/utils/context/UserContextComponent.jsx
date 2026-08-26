import { useState } from "react";
import {
  UserContext,
  UserContextGetById,
  UserContextGetPlayers,
} from "./UserContext";

import axios from "axios";

export function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);

  // get a user by id
  async function getUserById() {
    console.log("Get a user - PlayerContextComponent.jsx");

    const res = await axios.get("http://localhost:3001/api/users/1");
    console.log("getUserById - res", res.data);

    setUser(res.data);
  }

  // get a user and all their players by id
  async function getUserAndPlayers() {
    console.log("Get a user and their players - PlayerContextComponent.jsx");

    const res = await axios.get(
      "http://localhost:3001/api/users/4/user-and-players",
    );
    console.log("getUserAndPlayers - res", res.data);

    setUser(res.data);
  }

  return (
    <UserContext.Provider value={user}>
      <UserContextGetById.Provider value={getUserById}>
        <UserContextGetPlayers.Provider value={getUserAndPlayers}>
          {children}
        </UserContextGetPlayers.Provider>
      </UserContextGetById.Provider>
    </UserContext.Provider>
  );
}
