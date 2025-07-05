import { Modal, Box, Typography, Stack, Button } from "@mui/material";
import CustomInput from "./CustomInput";

interface MydialogProps {
  open: boolean;
  onClose: () => void;
}

export default function BasicModal({ open, onClose }: MydialogProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          maxWidth: "90%",
          bgcolor: "background.paper",
          borderRadius: 2,
          p: 4,
          outline: "none",
          overflow: "auto",
        }}
      >
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
      </Box>
    </Modal>
  );
}
