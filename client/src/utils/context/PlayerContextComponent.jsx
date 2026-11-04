import { useState } from "react";
import { PlayerContext } from "./PlayerContext";

import axios from "axios";

export function PlayerContextProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  //* get all players
  // usage: PacksPage.jsx
  async function getAllPlayers() {
    try {
      setLoading(true);
      setErrorMsg(null);

      const res = await axios.get("http://localhost:3001/api/players");

      setPlayers(res.data);
    } catch (err) {
      console.error("Failed to get all players:", err);
      setErrorMsg("Failed to retrieve the players. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PlayerContext.Provider
      value={{ players, loading, errorMsg, getAllPlayers }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
