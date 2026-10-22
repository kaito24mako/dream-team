import { useState } from "react";
import { UserContext } from "./UserContext";

import axios from "axios";

export function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  //* get a user and all their players by id
  // usage: AppLayout.jsx, BattleLayout.jsx
  async function getUserAndPlayers(userId) {
    try {
      setLoading(true);
      setErrorMsg(null);

      const res = await axios.get(
        `http://localhost:3001/api/users/${userId}/user-and-players`,
      );
      console.log("getUserAndPlayers(), data:", res.data);

      setUser(res.data);
    } catch (err) {
      console.error("Failed to get user and players:", err);
      setErrorMsg(
        "Failed to retrieve the user details and players. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  // save wins, losses and coins after a match
  async function saveMatchResult(isWinner, level) {
    const res = await axios.post(
      "http://localhost:3001/api/users/matches/result",
      { isWinner, level },
    );

    // update the totals without removing the player's collection
    setUser((user) => ({ ...user, ...res.data }));
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        errorMsg,
        getUserAndPlayers,
        saveMatchResult,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
