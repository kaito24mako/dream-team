import { createContext, useContext } from "react";

// contexts
export const PlayerContext = createContext();
export const PlayerContextUpdate = createContext();
export const PlayerContextAdd = createContext();
export const PlayerContextDelete = createContext();
export const PlayerContextGetById = createContext();
export const PlayerContextGetAll = createContext();

// custom hooks to use the contexts
export function usePlayers() {
  return useContext(PlayerContext);
}
// export function useProductsUpdate() {
//   return useContext(PlayerContextUpdate);
// }
// export function useProductsAdd() {
//   return useContext(PlayerContextAdd);
// }
// export function useProductsDelete() {
//   return useContext(PlayerContextDelete);
// }
// export function useProductsGetById() {
//   return useContext(PlayerContextGetById);
// }
export function usePlayersGetAll() {
  return useContext(PlayerContextGetAll);
}
