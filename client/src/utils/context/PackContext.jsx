import { createContext, useContext } from "react";

// create the context
export const PackContext = createContext();

// custom hook to use the context in other files
export function usePack() {
  return useContext(PackContext);
}
