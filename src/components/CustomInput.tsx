import { TextField, Box } from "@mui/material";
import type { TextFieldProps } from "@mui/material";
import type { UseFormRegisterReturn } from "react-hook-form";

type CustomInputProps = TextFieldProps & {
  label: string;
  register?: UseFormRegisterReturn;
};

export default function CustomInput({
  label,
  register,
  ...props
}: CustomInputProps) {
  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        label={label}
        fullWidth
        {...register}
        {...props}
      />
    </Box>
  );
}
