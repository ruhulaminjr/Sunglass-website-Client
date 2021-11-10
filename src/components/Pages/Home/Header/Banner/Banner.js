import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../../../../StyledComponents/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <Container sx={{ my: 2 }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ alignItems: "center" }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,

              letterSpacing: "1%",
              mb: 3,
            }}
          >
            A BROAD RANGE OF <br /> TRENDY EYEWEAR
          </Typography>
          <Typography
            variant="p"
            sx={{ color: "#666666" }}
            style={{ maxWidth: "80%" }}
          >
            Our sunglasses are designed to protect the eyes both from excessive
            light and from damaging UV light rays.
          </Typography>
          <PrimaryButton sx={{ my: 3, px: 2 }}>Explore Glasses</PrimaryButton>
        </Grid>
        <Grid item xs={12} lg={6}>
          <img
            src="https://lunettes.com.bd/wp-content/uploads/2019/03/Champgne-Creative10.jpg"
            alt=""
            width="400"
            height="400"
            style={{ maxWidth: "99%", maxHeight: "100%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
