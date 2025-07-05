import { Typography, Stack, Button } from "@mui/material";
import CustomInput from "./CustomInput";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface SignInModalProps {
  onClose: () => void;
}
type FormValue = {
  userId: string;
  password: string;
};

export default function SignInModal({ onClose }: SignInModalProps) {
  const { register, handleSubmit } = useForm<FormValue>();

  const navigate = useNavigate();

  const handleSignIn = (data: FormValue) => {
    console.log("handleSignIn");
    console.log("data", data.userId, data.password);
  };
  
  const handleSignUp = () => {
    onClose();
    console.log("handleSignUp");
    navigate("/signup");
  };

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <Typography
        sx={{ mb: 4, fontWeight: "bold" }}
        align="center"
        variant="h4"
        gutterBottom
      >
        LOGIN
      </Typography>

      <Stack spacing={2}>
        <CustomInput label="ID" register={register("userId")} />
        <CustomInput
          label="Password"
          type="password"
          register={register("password")}
        />
      </Stack>
      <Stack spacing={1} sx={{ mt: 4 }}>
        <Button variant="contained" fullWidth type="submit">
          Sign In
        </Button>
        <Button variant="outlined" fullWidth onClick={handleSignUp}>
          Sign Up
        </Button>
      </Stack>
    </form>
  );
}
