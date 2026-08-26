import { createContext, useContext } from "react";

// contexts
export const UserContext = createContext();
export const UserContextGetById = createContext();
export const UserContextGetPlayers = createContext();

// custom hooks to use the contexts
export function useUser() {
  return useContext(UserContext);
}
export function useUserGetById() {
  return useContext(UserContextGetById);
}
export function useUserGetPlayers() {
  return useContext(UserContextGetPlayers);
}
