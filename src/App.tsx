import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import AnimatedCursor from "react-animated-cursor";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Router } from "./Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <>
        <CssBaseline />
        <AnimatedCursor
          key={"cursorTest"}
          color="90,27,47"
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
        />
        <Router />
      </>
    </ThemeContextProvider>
  </React.StrictMode>
);
