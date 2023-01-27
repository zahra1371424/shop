export const findProduct = (products, id) => {
  return products.find((x) => x.id === id);
};
export const deleteProduct = (products, id) => {
  return products.filter((x) => x.id !== id);
};

