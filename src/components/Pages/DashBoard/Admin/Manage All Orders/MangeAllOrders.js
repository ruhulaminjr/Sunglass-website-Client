import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import axios from "axios";
import useAuth from "../../../../../hooks/useAuth";
import { Grid } from "@mui/material";
import Orders from "./Orders";

const MangeAllOrders = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [render, setRerender] = useState(false);
  const approveHandler = (id) => {
    axios
      .get(`http://localhost:5000/approve/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          setRerender(!render);
        }
      });
  };
  const cancelHandler = (id) => {
    axios
      .delete(`http://localhost:5000/deletecart/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data.deletedCount > 0) {
          setRerender(!render);
        }
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/getorders", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setOrders(result.data);
      });
  }, [token, render]);
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        {orders.map((order) => (
          <Grid item xs={12} lg={3} key={order._id}>
            <Orders
              order={order}
              approveHandler={approveHandler}
              cancelHandler={cancelHandler}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MangeAllOrders;
