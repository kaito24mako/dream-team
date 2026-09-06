import { useState } from "react";
import { UserContext } from "./UserContext";

import axios from "axios";

export function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);

  //* get a user by id
  // usage: none
  async function getUserById() {
    console.log("Get a user - UserContextComponent.jsx");

    const res = await axios.get("http://localhost:3001/api/users/5");
    console.log("getUserById - res", res.data);

    setUser(res.data);
  }

  //* get a user and all their players by id
  // usage: to display a user's details and players in HomePage.jsx
  async function getUserAndPlayers() {
    console.log("Get a user and their players - UserContextComponent.jsx");

    const res = await axios.get(
      "http://localhost:3001/api/users/5/user-and-players",
    );
    console.log("getUserAndPlayers - res", res.data);

    setUser(res.data);
  }

  return (
    <UserContext.Provider value={{ user, getUserById, getUserAndPlayers }}>
      {children}
    </UserContext.Provider>
  );
}
