import { Box } from "@mui/system";
import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Banner from "../Header/Banner/Banner";
import Header from "../Header/Header";
import PairSection from "../PairSection/PairSection";
import Products from "../Products/allProducts/Products";
import Reviews from "../Review/Reviews";

const Home = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <Products />
      <Reviews />
      <PairSection/>
      <Footer />
    </Box>
  );
};

export default Home;
