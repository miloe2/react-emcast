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
import { login, signup } from "../api/auth";
import { useStore } from "../stores";
import { setUserWithRole } from "../utils/setUserWithRole";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const handleConfirm = async (data: FormValue) => {
    setLoading(true);
    try {
      // 1. 회원가입
      await signup(data);

      // 2. 회원가입에 성공하면 바로 로그인
      const rspLogin = await login(data.email, data.password);
      console.log("성공", rspLogin);

      // 3. role 등 권한 정보를 zustand에 저장
      const memberInfo = {
        uid: rspLogin.user.uid,
        email: rspLogin.user.email,
      };
      await setUserWithRole(memberInfo);
      toast.success(`Welcome ${memberInfo.email}!`);

      // 4. 홈으로 이동
      navigate("/");

      return rspLogin;
    } catch (error) {
      console.error("회원가입 or 로그인 실패:", error);
      toast.error(t("AccountError"));
    } finally {
      setLoading(false);
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
            {t("SignUp")}
          </Typography>

          <Stack spacing={2}>
            <CustomInput label={t("E-mail")} register={register("email")} />
            <CustomInput
              label={t("Password")}
              type="password"
              register={register("password")}
            />
            <CustomInput
              label={t("PasswordConfirm")}
              type="password"
              register={register("passwordConfirm", {
                required: t("PasswordError"),
                validate: (value) => value === password || t("PasswordError"),
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
              {t("Cancel")}
            </Button>
            <Button variant="contained" fullWidth type="submit">
              {t("Confirm")}
            </Button>
          </Stack>
        </Box>
      </Container>
    </form>
  );
}
