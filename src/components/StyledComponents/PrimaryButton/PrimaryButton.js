import { Button } from "@mui/material";
import { styled } from "@mui/system";

const PrimaryButton = styled(Button)({
  background: "black",
  color: "white",
  "&:hover": {
    background: "#222",
    color: "white",
  },
});

export default PrimaryButton;
