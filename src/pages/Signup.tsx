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

import CustomInput from "../components/CustomInput";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const handleCancel = () => {
    console.log("handleCancel");
    navigate(-1);
  };
  const handleConfirm = () => {
    console.log("handleConfirm");
    // navigate("/signup");
  };
  return (
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
          <CustomInput label="ID" />
          <CustomInput label="Password" />
          <CustomInput label="Password Confirm" />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">ROLE</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="admin"
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
                value="member"
                control={<Radio size="small" />}
                label="MEMBER"
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
          <Button variant="contained" fullWidth onClick={handleConfirm}>
            Confirm
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
