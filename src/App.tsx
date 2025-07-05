import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "@tanstack/react-query";
import { Container } from "@mui/material";
import Home from "./pages/Home";
import queryClient from "./api/queryClient";
import PostDetail from "./pages/PostDetail";
import PostWrite from "./pages/PostWrite";
import Signup from "./pages/Signup";
import LoadingOverlay from "./components/LoadingOverlay";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster position="top-right" />
        <LoadingOverlay />
        <Container maxWidth="sm">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/write" element={<PostWrite />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
