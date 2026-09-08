import { createContext, useContext } from "react";

// create the context
export const LineupContext = createContext();

// custom hook to use the context in other files
export function useLineup() {
  return useContext(LineupContext);
}
