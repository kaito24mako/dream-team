import { useState } from "react";
import { PackContext } from "./PackContext";

import axios from "axios";

export function PackContextProvider({ children }) {
  const [pulledPlayer, setPulledPlayer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  //* get a player from opening a pack
  // usage: PackModal.jsx
  async function openPack(userId, packType) {
    try {
      setLoading(true);
      setErrorMsg(null);

      const res = await axios.post(
        `http://localhost:3001/api/users/${userId}/packs/${packType}/open`,
      );

      console.log("Player pulled:", res.data.player, "Pack type:", packType);

      setPulledPlayer(res.data.player);
    } catch (err) {
      console.error("Failed to open pack:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PackContext.Provider
      value={{
        pulledPlayer,
        loading,
        errorMsg,
        openPack,
      }}
    >
      {children}
    </PackContext.Provider>
  );
}
