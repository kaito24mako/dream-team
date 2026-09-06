import { useState, useCallback, useMemo } from "react";
import { UserContext } from "./UserContext";

import axios from "axios";

export function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  //* get a user by id
  // usage: none
  const getUserById = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMsg(null);

      const res = await axios.get(`http://localhost:3001/api/users/1`);
      console.log("getUserById(), data:", res.data);

      setUser(res.data);
    } catch (err) {
      console.error("Failed to get user:", err);
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  //* get a user and all their players by id
  // usage: to display a user's details and players in HomePage.jsx
  const getUserAndPlayers = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMsg(null);

      const res = await axios.get(
        `http://localhost:3001/api/users/1/user-and-players`,
      );
      console.log("getUserAndPlayers(), data:", res.data);

      setUser(res.data);
    } catch (err) {
      console.error("Failed to get user and players:", err);
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({ user, loading, errorMsg, getUserById, getUserAndPlayers }),
    [user, loading, errorMsg, getUserById, getUserAndPlayers],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
