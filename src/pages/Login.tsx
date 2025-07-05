import { Card, Stack, Button, Typography, Container } from "@mui/material";

import CustomInput from "../components/CustomInput";

export default function LoginCard() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card sx={{ p: 2, maxWidth: 400, width: "100%" }}>
        <Typography variant="h6" gutterBottom>
          Login
        </Typography>

        <Stack spacing={2}>
          <CustomInput />
          <CustomInput />

          <Button variant="contained" fullWidth>
            Sign In
          </Button>
          <Button variant="outlined" fullWidth>
            Sign Up
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
