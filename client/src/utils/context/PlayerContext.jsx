import { createContext, useContext } from "react";

//* create new contexts using createContext
// these contexts will hold our data and functions

export const PlayerContext = createContext();
export const PlayerContextUpdate = createContext();
export const PlayerContextAdd = createContext();
export const PlayerContextDelete = createContext();
export const PlayerContextGetById = createContext();
export const PlayerContextGetAll = createContext();

//* create custom hooks to use the contexts in our components
// allows us to access the context values without having to import useContext in every component

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
export function useGetAllPlayers() {
  return useContext(PlayerContextGetAll);
}
