import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
createRoot(document.getElementById("root")!).render(
  <Suspense fallback="Loading...">
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>
);
