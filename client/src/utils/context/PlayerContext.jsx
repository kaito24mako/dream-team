import { createContext, useContext } from "react";

// create the context
export const PlayerContext = createContext();

// custom hook to use the context in other components
export function usePlayers() {
  return useContext(PlayerContext);
}
