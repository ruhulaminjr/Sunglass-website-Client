import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PairSection = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Paper sx={{ py: 2, px: 3 }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", py: 2, fontWeight: "bold" }}
              >
                A PAIR FOR HER
              </Typography>
              <img
                src="https://lunettes.com.bd/wp-content/uploads/2021/05/Female-Model-tinified.jpg"
                alt="female model"
                width="100%"
              />
              <Typography variant="h6" sx={{ textAlign: "center", pt: 2 }}>
                Put on the right sunglasses and conquer the world
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center", pt: 2 }}>
                Sunglasses might be a small accessory, but they have a large
                impact. A great pair can elevate your outfit and your style, but
                our sunglasses for women can boost your mood too
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper sx={{ py: 2, px: 3 }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", py: 2, fontWeight: "bold" }}
              >
                A PAIR FOR HIM
              </Typography>
              <img
                src="https://lunettes.com.bd/wp-content/uploads/2021/05/ironman-red-model-photo-2021-a-resized-tinified.png"
                alt="female model"
                width="100%"
              />
              <Typography variant="h6" sx={{ textAlign: "center", pt: 2 }}>
                Look hot with cool sunglasses
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center", pt: 2 }}>
                No matter your taste, no matter your budget, no matter how often
                you lose your damn sunglasses in the back of a Lyft, we’ve got
                you covered with a wide range of trendy and fashionable shades
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PairSection;
