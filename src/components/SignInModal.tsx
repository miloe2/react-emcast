import { Typography, Stack, Button } from "@mui/material";
import CustomInput from "./CustomInput";
import { useNavigate } from "react-router-dom";
interface SignInModalProps {
  onClose: () => void;
}

export default function SignInModal({ onClose }: SignInModalProps) {
  const navigate = useNavigate();
  const handleSignIn = () => {
    console.log("handleSignIn");
  };
  const handleSignUp = () => {
    onClose();
    console.log("handleSignUp");
    navigate("/signup");
  };
  return (
    <>
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
        <Button variant="contained" fullWidth onClick={handleSignIn}>
          Sign In
        </Button>
        <Button variant="outlined" fullWidth onClick={handleSignUp}>
          Sign Up
        </Button>
      </Stack>
    </>
  );
}
