import { Box } from "@mui/system";
import React from "react";
import Footer from "../../../Shared/Footer/Footer";
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
      <Footer/>
    </Box>
  );
};

export default Home;
