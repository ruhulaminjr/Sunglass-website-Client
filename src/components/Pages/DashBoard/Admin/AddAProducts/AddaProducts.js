import { Alert, Button, Paper, TextField, Typography } from "@mui/material";

import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../../hooks/useAuth";
import useGetProducts from "../../../../../hooks/usegetProducts";
import PrimaryButton from "../../../../StyledComponents/PrimaryButton/PrimaryButton";
import CircularProgressWithLabel from "./ProgressCircle";

const AddaProducts = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const { token, storage, ref, uploadBytesResumable, getDownloadURL } =
    useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const imgfile = data.img[0];
    if (imgfile && types.includes(imgfile.type)) {
      const newImage = ref(storage, imgfile.name);
      const uploadTask = uploadBytesResumable(newImage, imgfile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progressx =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressx);
        },
        (error) => {
          setError("Something Went wrong");
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            data.img = downloadURL;
            axios
              .post(
                "https://pacific-savannah-45002.herokuapp.com/addproducts",
                data
              )
              .then((Result) => {
                if (Result.data.acknowledged) {
                  reset();
                  setSuccess(true);
                  setProgress(null);
                }
              });
          });
        }
      );
    } else {
      setError("Please Select Image File jpeg or png");
      setSuccess(false);
    }
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
          Add New Products
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField fullWidth label="Name" {...register("name")} required />
          <TextField
            fullWidth
            label="Info"
            {...register("info")}
            required
            sx={{ my: 1 }}
          />
          <TextField
            fullWidth
            label="Price"
            {...register("price")}
            required
            sx={{ my: 1 }}
            type="number"
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" component="label">
             Upload Image
              <input type="file" hidden required {...register("img")} />
            </Button>
            {progress && <CircularProgressWithLabel value={progress} />}
          </div>

          <PrimaryButton sx={{ my: 2 }} type="submit">
            Add Product
          </PrimaryButton>
          {success && (
            <Alert severity="success">Products Added Successfully</Alert>
          )}
        </form>
      </Paper>
    </Box>
  );
};

export default AddaProducts;
