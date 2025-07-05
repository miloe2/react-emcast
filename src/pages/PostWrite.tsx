import { Box, Stack, Button, Typography, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput";
import { useNavigate } from "react-router-dom";
type FormValue = {
  title: string;
  body: string;
};
export default function PostWrite() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const navigate = useNavigate();
  const handleCancel = () => {
    console.log("handleCancel");
    navigate(-1);
  };
  const handleConfirm = (data: FormValue) => {
    console.log("write");
    console.log("data", data);
  };

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
            WRITE YOUR POST!
          </Typography>

          <Stack spacing={2}>
            <CustomInput
              label="Title"
              register={register("title", {
                required: "	Please enter a title.",
              })}
            />
            {errors.title && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.title.message}
              </Typography>
            )}

            <CustomInput
              label="Content"
              multiline
              rows={6}
              register={register("body", {
                required: "Please enter content.",
                validate: (value) =>
                  value.trim() !== "" || "Input cannot be only whitespace.",
              })}
            />

            {errors.body && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.body.message}
              </Typography>
            )}
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
