// Imports 
import AnimatedCursor from "react-animated-cursor";
import { useTheme } from "@mui/material";

// Components
import { Content } from "../layout/content/Content";
import { NavBar } from "../layout/NavBar";

const Portifolio = () => {
  const theme = useTheme()
  return (
    <>
      {/* Navbar */}
      <NavBar />
      {/* Body */}
      <Content />
      <AnimatedCursor
        key={"cursor"}
        color={theme.palette.mode == "dark" ? "60,147,186" : "90,27,47"}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
      />
    </>
  )
};

export default Portifolio;
