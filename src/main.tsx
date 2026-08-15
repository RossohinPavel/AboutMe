import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header/Header";
import "./main.scss";


createRoot(document.getElementById("header")!).render(
  <StrictMode>
    <Header />
  </StrictMode>,
);
