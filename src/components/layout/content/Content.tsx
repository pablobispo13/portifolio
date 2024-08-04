import { useContext, useEffect } from "react";

//Components
import { Stack } from "@mui/material";

//css
import "./css/main.css";

//Service
import { useTheme } from "@mui/material";

// Context
import { MenuContext } from "../../../context/MenuContext";

// Pages
import { Contact } from "../../pages/Contact";
import { Projects } from "../../pages/Projects";
import { Apresentation } from "../../pages/Apresentation";

export const Content = () => {
  // Initiate libraries
  const theme = useTheme();
  const menuContext = useContext(MenuContext);

  // UseStates, UseEffects & functions

  const cacheImages = async (params: string[]) => {
    const promises = await params.map((src: string) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = function () {
          resolve("");
        };
        img.onerror = function () {
          reject("");
        };
      });
    });
    await Promise.all(promises);
  };
  useEffect(() => {
    cacheImages(["content-background.jpg", "content-background-light.jpg"]);
  }, []);
  return (
    <Stack
      sx={{
        background:
          theme.palette.mode === "dark"
            ? "#5a1b2f url(content-background.jpg) no-repeat top center"
            : "#96bac5 url(content-background-light.jpg) no-repeat top center",
      }}
      id="home"
    >
      <Stack className="row banner">
        <Stack className="banner-text">
          {/* Home area */}
          {menuContext?.value == "home" && <Apresentation />}

          {/* Contact area */}
          {menuContext?.value == "contact" && <Contact />}

          {/* Projects area */}
          {menuContext?.value == "projects" && <Projects />}
        </Stack>
      </Stack>
    </Stack>
  );
};
