import { useEffect, useState } from "react";

//Components
import { Grow, Stack, Typography } from "@mui/material";

//css
import "./css/main.css";

//Service
import { useTheme } from "@mui/material";

export const Header = () => {
  useEffect(() => {
    cacheImages(["header-background.jpg", "header-background-light.jpg"]);
    setSlideContent(true);
  }, []);

  const [slideContet, setSlideContent] = useState(false);

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

  const theme = useTheme();
  return (
    <Stack
      sx={{
        background:
          theme.palette.mode === "dark"
            ? "#5a1b2f url(header-background.jpg) no-repeat top center"
            : "#96bac5 url(header-background-light.jpg) no-repeat top center",
      }}
      id="home"
    >
      <Stack className="row banner">
        <Stack className="banner-text">
          <Grow
            in={slideContet}
            style={{ transformOrigin: "0 0 0" }}
            {...(slideContet ? { timeout: 1000 } : {})}
          >
            <Stack display={"flex"} alignItems={"center"}>
              <Typography variant="h1" className="responsive-headline">
                Pablo Bispo
              </Typography>
              <Typography variant="h3">FullStack Developer</Typography>
            </Stack>
          </Grow>
        </Stack>
      </Stack>
    </Stack>
  );
};
