import { Typography, Stack, Button } from "@mui/material";
import CustomInput from "./CustomInput";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../api/auth";
import { useStore } from "../stores";
import { setUserWithRole } from "../utils/setUserWithRole";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

interface SignInModalProps {
  onClose: () => void;
}
type FormValue = {
  email: string;
  password: string;
};

export default function SignInModal({ onClose }: SignInModalProps) {
  const { register, handleSubmit } = useForm<FormValue>();
  const setLoading = useStore((state) => state.setLoading);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleSignIn = async (data: FormValue) => {
    setLoading(true);
    try {
      // console.log("handleSignIn");
      const rsp = await login(data.email, data.password);
      console.log("성공", rsp);

      const memberInfo = {
        uid: rsp.user.uid,
        email: rsp.user.email,
      };
      await setUserWithRole(memberInfo);
      toast.success(`${t("Welcome")} ${memberInfo.email}!`);

      onClose();
    } catch (error) {
      console.error("로그인 실패:", error);
      toast.error(t("AccountError"));
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    onClose();
    // console.log("handleSignUp");
    navigate("/signup");
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Typography
          sx={{ mb: 4, fontWeight: "bold" }}
          align="center"
          variant="h4"
          gutterBottom
        >
          {t("Login")}
        </Typography>

        <Stack spacing={2}>
          <CustomInput label="E-mail" register={register("email")} />
          <CustomInput
            label="Password"
            type="password"
            register={register("password")}
          />
        </Stack>
        <Stack spacing={1} sx={{ mt: 4 }}>
          <Button variant="contained" fullWidth type="submit">
            {t("SignIn")}
          </Button>
          <Button variant="outlined" fullWidth onClick={handleSignUp}>
            {t("SignUp")}
          </Button>
        </Stack>
      </form>
    </>
  );
}
