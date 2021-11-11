import { Box } from "@mui/system";
import React from "react";
import Banner from "../Header/Banner/Banner";
import Header from "../Header/Header";
import Products from "../Products/allProducts/Products";

const Home = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <Products />
    </Box>
  );
};

export default Home;
