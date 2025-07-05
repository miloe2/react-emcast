import { Box, Stack, Button, Typography, Container } from "@mui/material";

import CustomInput from "../components/CustomInput";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const handleCancel = () => {
    console.log("handleCancel");
    navigate(-1);
  };
  const handleSignUp = () => {
    console.log("handleSignUp");
    // navigate("/signup");
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ p: 2, maxWidth: 400, width: "100%" }}>
        <Typography
          sx={{ mb: 4, fontWeight: "bold" }}
          align="center"
          variant="h4"
          gutterBottom
        >
          SIGN UP
        </Typography>

        <Stack spacing={2}>
          <CustomInput label="ID" />
          <CustomInput label="Password" />
          <CustomInput label="Password Confirm" />
        </Stack>
        <Stack direction={"row"} spacing={1} sx={{ mt: 4 }}>
          <Button variant="outlined" fullWidth onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" fullWidth onClick={handleSignUp}>
            Sign Up
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
