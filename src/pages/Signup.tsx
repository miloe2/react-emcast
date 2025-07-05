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
        <Typography
          sx={{ mb: 4, fontWeight: "bold" }}
          align="center"
          variant="h4"
          gutterBottom
        >
          LOGIN
        </Typography>

        <Stack spacing={2}>
          <CustomInput label="ID" />
          <CustomInput label="Password" />
        </Stack>
        <Stack spacing={1} sx={{ mt: 4 }}>
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
