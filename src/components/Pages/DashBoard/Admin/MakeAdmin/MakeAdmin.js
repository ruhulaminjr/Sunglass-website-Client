import { Alert, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../../hooks/useAuth";
import PrimaryButton from "../../../../StyledComponents/PrimaryButton/PrimaryButton";

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .put(
        "https://pacific-savannah-45002.herokuapp.com/makeadmin",
        { email: data.Email },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      });
  };


  return (
    <Box
      sx={{
        mt: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper sx={{ width: { lg: "400px" }, px: 1, py: 5 }}>
        <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
          Make a User Admin
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField fullWidth label="Email" {...register("Email")} required />
          <PrimaryButton sx={{ my: 2 }} type="submit">
            Make Admin
          </PrimaryButton>
          {success && (
            <Alert severity="success">Admin Added Successfully</Alert>
          )}
        </form>
      </Paper>
    </Box>
  );
};

export default MakeAdmin;
