import { Box } from "@mui/system";
import React from "react";
import Banner from "../Header/Banner/Banner";
import Header from "../Header/Header";
import Products from "../Products/allProducts/Products";
import Reviews from "../Review/Reviews";

const Home = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <Products />
      <Reviews/>
    </Box>
  );
};

export default Home;
