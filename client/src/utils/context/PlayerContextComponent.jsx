import { useState } from "react";
import {
  PlayerContext,
  PlayerContextUpdate,
  PlayerContextAdd,
  PlayerContextDelete,
  PlayerContextGetById,
  PlayerContextGetAll,
} from "./PlayerContext";

import axios from "axios";

export function PlayerContextProvider({ children }) {
  const [players, setPlayers] = useState([]);

  // get all players
  async function getAllPlayers() {
    console.log("Get all players - PlayerContextComponent.jsx");

    // hit the endpoint to get the data
    const res = await axios.get("http://localhost:3001/api/players");
    console.log("getAllPlayers - res", res.data);

    // put the user's owned players data into state
    setPlayers(res.data);
  }

  //! NOT USING ATM
  // get all players of a user
  async function getAllUserPlayers() {
    console.log("Get all players of a user - PlayerContextComponent.jsx");

    // hit the endpoint to get the data
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

  // create the return
  return (
    <PlayerContext.Provider value={players}>
      <PlayerContextGetAll.Provider value={getAllPlayers}>
        {children}
      </PlayerContextGetAll.Provider>
    </PlayerContext.Provider>
  );
}
