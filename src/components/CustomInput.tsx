import { TextField, Box } from '@mui/material';

export default function CustomInput() {
  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        label="Your input"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
}
