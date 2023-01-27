import {findProduct, deleteProduct } from "../../utility/util";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_PRODUCT":
      return {
        ...state,
        selectedProduct: findProduct(state.products, action.payload),
      };
    case "DELETE_PRODUCT":
    return {
      ...state,
      products: deleteProduct(state.products, action.payload),
    };
    default:
      return state;
  }
};

export default ProductReducer;
