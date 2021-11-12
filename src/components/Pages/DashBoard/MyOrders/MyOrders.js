import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import axios from "axios";
import useAuth from "../../../../hooks/useAuth";

const MyOrders = () => {
  const { user, token } = useAuth();
  const [render, setRerender] = useState(false);
  const [carts, setCarts] = useState([]);
  const cartItemDeleteHandler = (id) => {
    axios
      .get(`http://localhost:5000/cartdelete/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setRerender(!render);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/myorders/${user.email}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setCarts(result.data);
        console.log(result.data);
      });
  }, [render, user, token]);
  return (
    <TableContainer component={Paper} sx={{ mt: 8 }}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carts.map((product) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.orderInfo.name}
              </TableCell>
              <TableCell align="right">{product.status}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  onClick={() => cartItemDeleteHandler(product._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyOrders;
