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

  // get all players of a user
  async function getAllPlayers() {
    console.log("Get all players - PlayerContextComponent.jsx");

    // hit the endpoint to get the data
    const res = await axios.get("http://localhost:3001/api/users/1/players");
    console.log("getAllPlayers - res", res.data);

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
      {/* <PlayerContextUpdate.Provider value={updateProduct}>
        <PlayerContextDelete.Provider value={deleteProduct}>
          <PlayerContextAdd.Provider value={addProduct}>
            <PlayerContextGetById.Provider value={getProductById}> */}
      <PlayerContextGetAll.Provider value={getAllPlayers}>
        {children}
      </PlayerContextGetAll.Provider>
      {/* </PlayerContextGetById.Provider>
          </PlayerContextAdd.Provider>
        </PlayerContextDelete.Provider>
      </PlayerContextUpdate.Provider> */}
    </PlayerContext.Provider>
  );
}
