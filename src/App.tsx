import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./api/queryClient";
import PostDetail from "./pages/PostDetail";
import Signup from "./pages/Signup";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Container maxWidth="sm">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
