import { Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Navbar from "../../Shared/Navbar/Navbar";
import PrimaryButton from "../../StyledComponents/PrimaryButton/PrimaryButton";

const PlaceOrder = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { user, token } = useAuth();
  const url = `https://pacific-savannah-45002.herokuapp.com/getproduct/${id}`;
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    const newCart = {
      email: user.email,
      status: "pending",
      userInfo: data,
      orderInfo: product,
    };
    axios
      .post("https://pacific-savannah-45002.herokuapp.com/savecarts", newCart, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data.insertedId) {
          history.push("/");
        }
      });
  };
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setProduct(result.data);
      });
  }, [url, token]);
  return (
    <Box>
      <Navbar />
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} lg={6}>
            <Paper sx={{ px: 2, py: 3 }}>
              <img src={product.img} alt="" width="100%" />
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                {product.name}
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                {product.info}
              </Typography>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                ${product.price}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper sx={{ py: 2, px: 3 }}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Please Provide Your Info
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Name"
                  required
                  variant="standard"
                  sx={{ width: { xs: "100%", lg: "80%" }, my: 2 }}
                  {...register("name")}
                  defaultValue={user.displayName}
                />
                <TextField
                  label="Email"
                  variant="standard"
                  type="email"
                  required
                  sx={{ width: { xs: "100%", lg: "80%" }, my: 2 }}
                  {...register("email")}
                  defaultValue={user.email}
                />
                <TextField
                  label="Address"
                  required
                  variant="standard"
                  sx={{ width: { xs: "100%", lg: "80%" }, my: 2 }}
                  {...register("adress")}
                />
                <TextField
                  label="Phone Number"
                  variant="standard"
                  type="number"
                  required
                  sx={{ width: { xs: "100%", lg: "80%" }, my: 2 }}
                  {...register("phone")}
                />
                <PrimaryButton type="submit">Place Orders</PrimaryButton>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlaceOrder;
