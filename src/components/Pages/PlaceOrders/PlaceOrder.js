import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../Shared/Navbar/Navbar";

const PlaceOrder = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const url = `http://localhost:5000/getproduct/${id}`;
  useEffect(() => {
    axios.get(url).then((result) => {
      setProduct(result.data);
    });
  }, [url]);
  return (
    <Box>
      <Navbar />
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <h1>{product.name}</h1>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlaceOrder;
