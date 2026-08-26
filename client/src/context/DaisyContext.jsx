import { createContext, useContext } from "react";

//* create new contexts using createContext
// these contexts will hold our data and functions

export const DaisyContext = createContext();
export const DaisyContextUpdate = createContext();
export const DaisyContextAdd = createContext();
export const DaisyContextDelete = createContext();
export const DaisyContextGetById = createContext();

export const DaisyContextGetAll = createContext();

//* create custom hooks to use the contexts in our components
// allows us to access the context values without having to import useContext in every component

export function useProducts() {
  return useContext(DaisyContext);
}
export function useProductsUpdate() {
  return useContext(DaisyContextUpdate);
}
export function useProductsAdd() {
  return useContext(DaisyContextAdd);
}
export function useProductsDelete() {
  return useContext(DaisyContextDelete);
}
export function useProductsGetById() {
  return useContext(DaisyContextGetById);
}
export function useProductsGetAll() {
  return useContext(DaisyContextGetAll);
}
