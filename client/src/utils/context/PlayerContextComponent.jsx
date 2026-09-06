import { useState } from "react";
import { PlayerContext } from "./PlayerContext";

import axios from "axios";

export function PlayerContextProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  //* get all players
  // usage: PacksPage.jsx
  async function getAllPlayers() {
    try {
      setLoading(true);
      setErrorMsg(null);

      const res = await axios.get("http://localhost:3001/api/players");
      console.log("getAllPlayers(), data:", res.data);

      setPlayers(res.data);
    } catch (err) {
      console.error("Failed to get all players:", err);
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  }

  //* get all players of a user by id
  // usage: none
  async function getAllPlayersByUser() {
    console.log("Get all players of a user - PlayerContextComponent.jsx");

    const res = await axios.get("http://localhost:3001/api/users/5/players");
    console.log("getAllUserPlayers - res", res.data);

    // put the user's owned players data into state
    setPlayers(res.data);
  }

  // create functions to update the state
  // function getProductById(id) {
  //   console.log("getProductById:", id);
  //   return productList.find((product) => product.id === id);
  // }

  // async function addProduct(newProduct) {
  //   console.log("addProduct:", newProduct);

  //   // hit the endpoint to get the data
  //   const product = await axios.post(
  //     "http://localhost:3001/api/players/add",
  //     newProduct,
  //   );

  //   // add the product to the productList
  //   const newList = [...productList, product];

  //   // put data into state - set new state
  //   setProductList(newList);
  // }

  // function updateProduct(updatedProduct) {
  //   console.log("updateProduct:", updatedProduct);
  //   const newList = productList.map((product) =>
  //     product.id === updatedProduct.id ? updatedProduct : product,
  //   );
  //   setProductList(newList);
  // }

  // function deleteProduct(id) {
  //   console.log("deleteProduct:", id);
  //   const newList = productList.filter((product) => product.id !== id);
  //   setProductList(newList);
  // }

  return (
    <PlayerContext.Provider
      value={{ players, loading, errorMsg, getAllPlayers, getAllPlayersByUser }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
