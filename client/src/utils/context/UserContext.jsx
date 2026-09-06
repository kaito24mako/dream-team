import { createContext, useContext } from "react";

// create the context
export const UserContext = createContext();

// custom hook to use the context in other files
export function useUser() {
  return useContext(UserContext);
}
