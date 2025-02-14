import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Router } from "./Router";
import { MenuContextProvider } from "./context/MenuContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <MenuContextProvider>
        <>
          <CssBaseline />
          <Router />
        </>
      </MenuContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
