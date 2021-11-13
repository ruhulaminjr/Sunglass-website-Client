import { Alert, Paper, Rating, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import PrimaryButton from "../../../StyledComponents/PrimaryButton/PrimaryButton";

const MyReview = () => {
  const [ratevalue, setValue] = React.useState(4);
  const { user, token } = useAuth();
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.rating = ratevalue;
    data.displayName = user.displayName;
    data.email = user.email;
    axios
      .post("https://pacific-savannah-45002.herokuapp.com/addreview", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data.insertedId) {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      });
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        my: 2,
      }}
    >
      <Paper sx={{ py: 2, px: 3, width: { xs: "100%", lg: "500px" } }}>
        <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
          Add Your Review
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Review Title"
            variant="outlined"
            name="title"
            type="text"
            sx={{ width: "100%", my: 2 }}
            {...register("title")}
            required
          />
          <TextField
            label="Description"
            variant="outlined"
            name="desc"
            type="text"
            rows={2}
            sx={{ width: "100%", my: 2 }}
            {...register("desc")}
            required
            multiline
          />
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={ratevalue}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <br />
          <PrimaryButton sx={{ my: 2 }} type="submit">
            Submit Review
          </PrimaryButton>
          <div>
            {success && (
              <Alert severity="success">Review Added Successfylly</Alert>
            )}
          </div>
        </form>
      </Paper>
    </Box>
  );
};

export default MyReview;
