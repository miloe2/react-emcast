import { Backdrop, CircularProgress } from "@mui/material";
import { useStore } from "../stores";

export default function LoadingOverlay() {
  const isLoading = useStore((state) => state.isLoading);

  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.modal + 1,
      }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
