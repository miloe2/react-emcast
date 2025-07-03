import "./App.css";
import Home from "./pages/Home";
import { Container } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./api/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="sm">
        <Home />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
