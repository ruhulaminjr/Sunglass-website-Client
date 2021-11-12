import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Orders = ({ order, approveHandler, cancelHandler }) => {
  return (
    <Card variant="outlined">
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          {order.orderInfo.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {order.email}
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          style={
            order.status === "pending" ? { color: "red" } : { color: "green" }
          }
        >
          {order.status}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {order.status === "pending" ? (
            <Button
              color="success"
              variant="outlined"
              onClick={() => approveHandler(order._id)}
            >
              Approve
            </Button>
          ) : (
            <Button
              color="success"
              variant="outlined"
              disabled
            >
              Approved
            </Button>
          )}
          <Button
            variant="outlined"
            sx={{ mx: 2 }}
            color="error"
            onClick={() => cancelHandler(order._id)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Orders;
