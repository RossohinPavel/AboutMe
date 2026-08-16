import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GitHub } from "./components/GitHub/GitHub";
import { Header } from "./components/Header/Header";
import "./main.scss";


createRoot(document.getElementById("header")!).render(
  <StrictMode>
    <Header />
  </StrictMode>,
);

createRoot(document.getElementById("github")!).render(
  <StrictMode>
    <GitHub />
  </StrictMode>,
);
