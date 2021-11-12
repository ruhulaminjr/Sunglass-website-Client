import { Paper, Rating, Typography } from "@mui/material";
import React from "react";

const Review = (review) => {
  const { title, rating, displayName, desc } = review.review;
  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        px: 2,
        py: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Rating name="read-only" value={rating} readOnly />
      <Typography variant="body2" sx={{ textAlign: "center", height: "80px" }}>
        {desc}
      </Typography>
      <Typography variant="h6">{displayName}</Typography>
      <Typography variant="body2">customer</Typography>
    </Paper>
  );
};

export default Review;
