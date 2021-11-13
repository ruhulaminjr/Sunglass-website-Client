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
      .get(`https://pacific-savannah-45002.herokuapp.com/approve/${id}`, {
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
    const confirm = window.confirm("Are You Sure Want To Delete Your Order ?");
    if (confirm) {
      axios
        .delete(
          `https://pacific-savannah-45002.herokuapp.com/deletecart/${id}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then((result) => {
          if (result.data.deletedCount > 0) {
            setRerender(!render);
          }
        });
    }
  };
  useEffect(() => {
    axios
      .get("https://pacific-savannah-45002.herokuapp.com/getorders", {
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
