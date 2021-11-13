import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ mt: 3, py: 5, background: "black" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} md={6}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#fff", textAlign: "center" }}
            >
              Eye Care
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "gray", textAlign: "center" }}
            >
              © 2021 EyeCare. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#fff", textAlign: "center" }}
            >
              Location
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "gray", textAlign: "center" }}
            >
              {" "}
              101 Stree,Rangpur,
              <br />
              Birmingham, AL, United States
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#fff", textAlign: "center" }}
            >
              Newsletter
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "gray", textAlign: "center" }}
            >
             Signup To Be The First To Hear Aboutus
            </Typography>
            <div
              style={{
                display: "flex",
                // alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                label="Enter Your Email Address"
                variant="filled"
                sx={{ backgroundColor: "white", color: "gray" }}
              />
              <Button variant="contained" sx={{ marginLeft: "-10px" }}>
                Subscribe
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
