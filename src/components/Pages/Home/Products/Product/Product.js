import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import PrimaryButton from "../../../../StyledComponents/PrimaryButton/PrimaryButton";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  const { name, price, img, info } = product;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: "80px" }}
          >
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography gutterBottom variant="h6" component="div">
          ${price}
        </Typography>{" "}
        <PrimaryButton>
          {" "}
          <NavLink to={`/placeorder/${product._id}`} style={{ color: "#fff" }}>
            {" "}
            Buy Now{" "}
          </NavLink>
        </PrimaryButton>
      </CardActions>
    </Card>
  );
};

export default Product;
