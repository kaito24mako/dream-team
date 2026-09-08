import { useState } from "react";
import { UserContext } from "./UserContext";

import axios from "axios";

export function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [lineup, setLineup] = useState([]);
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
      setErrorMsg("Failed to get user and players");
    } finally {
      setLoading(false);
    }
  }

  //* get a user's lineup
  // usage: AppLayout.jsx
  async function getLineup(userId) {
    try {
      setLoading(true);
      setErrorMsg(null);

      const res = await axios.get(
        `http://localhost:3001/api/users/${userId}/lineup`,
      );
      console.log("getUserLineup(), data:", res.data);

      setLineup(res.data);
    } catch (err) {
      console.error("Failed to get the user's lineup:", err);
      setErrorMsg("Failed to get lineup");
    } finally {
      setLoading(false);
    }
  }

  //* add a player to the user's lineup
  async function addToLineup(userId, playerId) {
    try {
      setLoading(true);
      setErrorMsg(null);

      const res = await axios.put(
        `http://localhost:3001/api/users/${userId}/lineup/add`,
        {
          playerId: playerId,
        },
      );
      console.log("addToLineup(), data:", res.data);

      // refresh the lineup
      await getLineup(userId);
    } catch (err) {
      console.error("Failed to add player to lineup:", err);
      setErrorMsg("Failed to add player to lineup");
    } finally {
      setLoading(false);
    }
  }

  //* remove a player to the user's lineup
  // usage: LineupPosition.tsx
  async function removeFromLineup(userId, playerId) {
    try {
      setLoading(true);
      setErrorMsg(null);

      const res = await axios.put(
        `http://localhost:3001/api/users/${userId}/lineup/remove`,
        {
          playerId: playerId,
        },
      );
      console.log("removeFromLineup(), data:", res.data);

      // refresh the lineup
      await getLineup(userId);
    } catch (err) {
      console.error("Failed to remove player to lineup:", err);
      setErrorMsg("Failed to remove player to lineup");
    } finally {
      setLoading(false);
    }
  }

  //* get a user by id
  // usage: none
  async function getUserById(userId) {
    try {
      setLoading(true);
      setErrorMsg(null);

      const res = await axios.get(`http://localhost:3001/api/users/${userId}`);
      console.log("getUserById(), data:", res.data);

      setUser(res.data);
    } catch (err) {
      console.error("Failed to get user:", err);
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        lineup,
        loading,
        errorMsg,
        getUserById,
        getUserAndPlayers,
        getLineup,
        addToLineup,
        removeFromLineup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
