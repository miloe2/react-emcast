import { Modal, Box } from "@mui/material";

interface BasicModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export default function BasicModal({
  open,
  onClose,
  children,
}: BasicModalProps) {
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
        {children}
      </Box>
    </Modal>
  );
}
