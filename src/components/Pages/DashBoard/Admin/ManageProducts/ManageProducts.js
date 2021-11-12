import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetProducts from "../../../../../hooks/usegetProducts";
import { Button } from "@mui/material";
import axios from "axios";
import useAuth from "../../../../../hooks/useAuth";

const ManageProducts = () => {
  const { products, setRerender, rerender } = useGetProducts();
  const { token } = useAuth();
  const productsDeleteHandler = (id) => {
    axios
      .delete(`http://localhost:5000/deleteproduct/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data.deletedCount > 0) {
          setRerender(!rerender);
        }
      });
  };
  return (
    <TableContainer component={Paper} sx={{ mt: 8 }}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  onClick={() => productsDeleteHandler(product._id)}
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
/*  */
export default ManageProducts;
