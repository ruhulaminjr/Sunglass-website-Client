import React, { createContext } from "react";
import useProducts from "../../hooks/useProducts";
export const ProductsProvider = createContext();
const ProductsContext = ({ children }) => {
  const allProducts = useProducts();
  return (
    <ProductsProvider.Provider value={allProducts}>
      {children}
    </ProductsProvider.Provider>
  );
};

export default ProductsContext;
