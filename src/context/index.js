import { createContext, useEffect, useReducer } from "react";
import { getStorage, setStorage } from "../utility/localstorage";
import ProductReducer from "./reducer";

const PRODUCT_STATE = {
  products:  getStorage('products') ||  [],
  selectedProduct: null,
};
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, PRODUCT_STATE);

  useEffect(() => {
    setStorage("products", state.products);
  },[state.products])

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
