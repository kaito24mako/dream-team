//* import created contexts and data
import { useState } from "react";
import {
  DaisyContext,
  DaisyContextUpdate,
  DaisyContextAdd,
  DaisyContextDelete,
  DaisyContextGetById,
  DaisyContextGetAll,
} from "./DaisyContext";

import axios from "axios";

//* create the provider to pass the state and event functions down to the components
export function DaisyContextProvider({ children }) {
  const [productList, setProductList] = useState([]);

  // get ALL products
  async function getAllProducts() {
    console.log("Get all products - DaisyContextComponent.jsx");

    // hit the endpoint to get the data
    const res = await axios.get("http://localhost:3001/api/players");
    console.log(res.data);

    // put data into state - set new state
    setProductList(res.data);
  }

  // create functions to update the state
  function getProductById(id) {
    console.log("getProductById:", id);
    return productList.find((product) => product.id === id);
  }

  async function addProduct(newProduct) {
    console.log("addProduct:", newProduct);

    // hit the endpoint to get the data
    const product = await axios.post(
      "http://localhost:3001/api/players/add",
      newProduct,
    );

    // add the product to the productList
    const newList = [...productList, product];

    // put data into state - set new state
    setProductList(newList);
  }

  function updateProduct(updatedProduct) {
    console.log("updateProduct:", updatedProduct);
    const newList = productList.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product,
    );
    setProductList(newList);
  }

  function deleteProduct(id) {
    console.log("deleteProduct:", id);
    const newList = productList.filter((product) => product.id !== id);
    setProductList(newList);
  }

  // create the return
  return (
    <DaisyContext.Provider value={productList}>
      <DaisyContextUpdate.Provider value={updateProduct}>
        <DaisyContextDelete.Provider value={deleteProduct}>
          <DaisyContextAdd.Provider value={addProduct}>
            <DaisyContextGetById.Provider value={getProductById}>
              <DaisyContextGetAll.Provider value={getAllProducts}>
                {children}
              </DaisyContextGetAll.Provider>
            </DaisyContextGetById.Provider>
          </DaisyContextAdd.Provider>
        </DaisyContextDelete.Provider>
      </DaisyContextUpdate.Provider>
    </DaisyContext.Provider>
  );
}
