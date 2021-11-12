import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/review").then((result) => {
      setReview(result.data);
    });
  }, []);
  return (
    <Box sx={{ my: 8 }}>
      <Container>
        <Typography variant="h5" sx={{ textAlign: "center", my: 2 }}>
          What Our Customers Are Saying ?
        </Typography>
        <Grid container spacing={2}>
          {reviews.slice(0, 3).map((review) => (
            <Grid item xs={12} lg={4} key={review._id}>
              <Review review={review} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
