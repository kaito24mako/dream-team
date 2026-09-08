import { useState } from "react";
import { LineupContext } from "./LineupContext";

import axios from "axios";

export function LineupContextProvider({ children }) {
  const [lineup, setLineup] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

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
      setErrorMsg("Failed to retrieve the lineup. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  //* add a player to the user's lineup
  // usage: CollectionSection.tsx
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
      setErrorMsg("Failed to add the player to the lineup. Please try again.");
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
      console.error("Failed to remove player from lineup:", err);
      setErrorMsg(
        "Failed to remove the player from the lineup. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <LineupContext.Provider
      value={{
        lineup,
        loading,
        errorMsg,
        getLineup,
        addToLineup,
        removeFromLineup,
      }}
    >
      {children}
    </LineupContext.Provider>
  );
}
