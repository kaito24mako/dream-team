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
      setErrorMsg("Failed to retrieve the user details. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  //* update a user's currency
  // usage: BattlePage.jsx
  async function updateUserCurrency(userId, currency) {
    try {
      setErrorMsg(null);

      const res = await axios.put(
        `http://localhost:3001/api/users/${userId}/edit/currency`,
        { currency },
      );
      console.log("updateUserCurrency(), data:", res.data);

      setUser((user) => ({
        ...user,
        currency: res.data.currency,
      }));

      return res.data;
    } catch (err) {
      console.error("Failed to update user currency:", err);
      setErrorMsg("Failed to update your currency. Please try again.");
      return null;
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        errorMsg,
        getUserById,
        getUserAndPlayers,
        updateUserCurrency,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
