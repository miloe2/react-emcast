import { AppBar, Toolbar, Box, Container } from "@mui/material";
import SearchBar from "./SearchBar";

const glassStyle = {
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)", // Safari 지원
  backgroundColor: "rgba(255, 255, 255, 0.6)", // 밝은 유리 느낌
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
};

export default function Navigation() {
  return (
    <AppBar position="fixed" color="default" elevation={1} style={glassStyle}>
      <Container maxWidth="sm" sx={{ backgroundColor: "" }}>
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Box sx={{ width: "100%"}}>
            <SearchBar onSearch={(q) => console.log("검색:", q)} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
