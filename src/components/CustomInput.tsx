import { TextField, Box } from "@mui/material";

interface CustomInputProps {
  label: string;
}
export default function CustomInput({ label }: CustomInputProps) {
  return (
    <Box sx={{ mt: 2 }}>
      <TextField label={label} fullWidth />
    </Box>
  );
}
