import {
  Box,
  Stack,
  Button,
  Typography,
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth";
import { useStore } from "../stores";
type FormValue = {
  email: string;
  password: string;
  passwordConfirm: string;
  role: string;
};
export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      role: "admin",
    },
  });

  const navigate = useNavigate();
  const setLoading = useStore((state) => state.setLoading);
  const handleCancel = () => {
    console.log("handleCancel");
    navigate(-1);
  };
  const handleConfirm = async (data: FormValue) => {
    try {
      setLoading(true);
      const rsp = await signup(data);
      console.log("성공", rsp);
      setLoading(false);
      navigate("/");
      return rsp;
    } catch (error) {
      console.log(error);
    }
  };

  const password = watch("password");
  const role = watch("role");

  return (
    <form onSubmit={handleSubmit(handleConfirm)}>
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
            <CustomInput label="E-mail" register={register("email")} />
            <CustomInput
              label="Password"
              type="password"
              register={register("password")}
            />
            <CustomInput
              label="Password Confirm"
              type="password"
              register={register("passwordConfirm", {
                required: "Please check password again.",
                validate: (value) =>
                  value === password || "Please check password again.",
              })}
            />
            {errors.passwordConfirm && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.passwordConfirm.message}
              </Typography>
            )}

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                <Typography variant="body2" color="primary">
                  ROLE
                </Typography>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="role"
                value={role}
                onChange={(e) => setValue("role", e.target.value)}
              >
                <FormControlLabel
                  value="admin"
                  control={<Radio size="small" />}
                  label="ADMIN"
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "0.8rem" },
                    mr: 2,
                  }}
                />
                <FormControlLabel
                  value="user"
                  control={<Radio size="small" />}
                  label="USER"
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "0.8rem" },
                    mr: 2,
                  }}
                />
                <FormControlLabel
                  value="guest"
                  control={<Radio size="small" />}
                  label="GUEST"
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "0.8rem" },
                    mr: 2,
                  }}
                />
              </RadioGroup>
            </FormControl>
          </Stack>

          <Stack direction={"row"} spacing={1} sx={{ mt: 6 }}>
            <Button variant="outlined" fullWidth onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="contained" fullWidth type="submit">
              Confirm
            </Button>
          </Stack>
        </Box>
      </Container>
    </form>
  );
}
