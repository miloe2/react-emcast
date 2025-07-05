import { AppBar, Toolbar, Box, Container, Button } from "@mui/material";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SignInModal from "./SignInModal";
import BasicModal from "./BasicModal";
import { useState } from "react";

const glassStyle = {
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)", // Safari 지원
  backgroundColor: "rgba(255, 255, 255, 0.6)", // 밝은 유리 느낌
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
};

export default function Navigation() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleLogin = () => {
    setOpen(true);
  };

  const handleSearch = (q: string) => {
    navigate(`/?search=${encodeURIComponent(q)}`);
  };

  return (
    <AppBar position="fixed" color="default" elevation={1} style={glassStyle}>
      <Container maxWidth="sm" sx={{ backgroundColor: "" }}>
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Box>
            <Button sx={{ minWidth: 40, mr: 2 }} onClick={() => navigate("/")}>
              <HomeIcon />
            </Button>
            <Button sx={{ minWidth: 40, mr: 2 }} onClick={handleLogin}>
              <PersonIcon />
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <SearchBar onSearch={(q) => handleSearch(q)} />
          </Box>
        </Toolbar>
      </Container>
      {
        <BasicModal open={open} onClose={() => setOpen(false)}>
          <SignInModal onClose={() => setOpen(false)} />
        </BasicModal>
      }
    </AppBar>
  );
}
