import { createContext, useContext } from "react";

// contexts
export const UserContext = createContext();
export const UserContextGetById = createContext();

// custom hooks to use the contexts
export function useUser() {
  return useContext(UserContext);
}
export function useUserGetById() {
  return useContext(UserContextGetById);
}
