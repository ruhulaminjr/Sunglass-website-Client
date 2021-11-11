import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [rerender,setRerender] = useState(false);
  useEffect(() => {
    let ismounted = true;
    axios.get("http://localhost:5000/allproducts").then((result) => {
      if (ismounted) {
        setProducts(result.data);
      }
    });
    return () => {
      ismounted = false;
    };
  }, [rerender]);
  return { products,setRerender,rerender };
};

export default useProducts;
