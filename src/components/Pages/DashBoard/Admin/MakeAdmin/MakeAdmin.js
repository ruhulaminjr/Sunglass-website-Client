import { Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import PrimaryButton from "../../../../StyledComponents/PrimaryButton/PrimaryButton";

const MakeAdmin = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const handleinputBlur = (e) => {
    setAdminEmail(e.target.value);
    console.log(e.target.value);
  };
  const makeAdminHandler = (e) => {
    e.preventDefault();
    console.log(adminEmail);
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
        <form onSubmit={makeAdminHandler}>
          <TextField
            fullWidth
            label="Email"
            onBlur={handleinputBlur}
            required
          />
          <PrimaryButton sx={{ my: 2 }} type="submit">
            Make Admin
          </PrimaryButton>
        </form>
      </Paper>
    </Box>
  );
};

export default MakeAdmin;
