import {
  Alert,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory,useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import PrimaryButton from "../../StyledComponents/PrimaryButton/PrimaryButton";

const Register = () => {
  const [islogin, setIslogin] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const redirectUrl = location?.state?.from || "/dashboard";
  const { LoginUser, registerUser, authError } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (islogin) {
      LoginUser(data.email, data.password, history, redirectUrl);
    } else {
      registerUser(data.email, data.password,data.name, history,redirectUrl);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        my: 5,
      }}
    >
      <Container>
        <Paper
          sx={{
            my: 2,
            px: 3,
            py: 2,
          }}
        >
          {islogin ? (
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "bold", my: 1 }}
            >
              Login Your Account
            </Typography>
          ) : (
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "bold", my: 1 }}
            >
              Register An Account
            </Typography>
          )}
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={12} lg={6}>
              <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                {!islogin && (
                  <TextField
                    label="Your Name"
                    variant="outlined"
                    name="name"
                    type="text"
                    sx={{ width: "100%", mb: 2 }}
                    {...register("name")}
                    required
                  />
                )}
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  type="email"
                  {...register("email")}
                  sx={{ width: "100%" }}
                  required
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  name="password"
                  type="password"
                  {...register("password")}
                  sx={{ width: "100%", my: 2 }}
                  required
                />
                {islogin ? (
                  <PrimaryButton type="submit">Log In</PrimaryButton>
                ) : (
                  <PrimaryButton type="submit">Register</PrimaryButton>
                )}
              </form>
              {islogin ? (
                <Typography variant="h6">
                  New User{" "}
                  <Button onClick={() => setIslogin(false)}>
                    Create An Account
                  </Button>{" "}
                </Typography>
              ) : (
                <Typography variant="h6">
                  Existing User
                  <Button onClick={() => setIslogin(true)}>
                    Log in Your Account
                  </Button>{" "}
                </Typography>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                src="https://image.freepik.com/free-vector/account-concept-illustration_114360-399.jpg"
                alt=""
                width="100%"
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
