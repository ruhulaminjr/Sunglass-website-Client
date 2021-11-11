import { useContext } from "react";
import { ProductsProvider } from "../context/ProductsContext/ProductsContext";

const useGetProducts = () => {
  return useContext(ProductsProvider);
};
export default useGetProducts;
