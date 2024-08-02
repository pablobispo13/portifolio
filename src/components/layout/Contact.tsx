import { useEffect, useState } from "react";

//Components
import { Grow, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const Contact = () => {
  useEffect(() => {
    setSlideContent(true);
  });

  const [slideContet, setSlideContent] = useState(false);

  return (
    <Stack
      key={"contact"}
      id="contact"
      sx={{ minHeight: "20vh", paddingTop: "40px", backgroundColor: "#050c1c" }}
    >
      <Grow
        in={slideContet}
        style={{ transformOrigin: "0 0 0" }}
        {...(slideContet ? { timeout: 1000 } : {})}
      >
        <Stack margin={2} gap={2}>
          <Stack display={"flex"} alignItems={"center"}>
            <Typography variant="h3" className="responsive-headline">
              Contato
            </Typography>
          </Stack>
          <Stack
            display={"flex"}
            direction={"row"}
            flexWrap={"wrap"}
            gap={2}
            justifyContent={"space-around"}
          >
            <Tooltip title="Instagram">
              <IconButton
                size="large"
                aria-label="instagram"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/pablo_delatore/",
                    "_blank"
                  )
                }
              >
                <InstagramIcon sx={{ width: "50px", height: "50px" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Github">
              <IconButton
                size="large"
                aria-label="github"
                onClick={() =>
                  window.open("https://github.com/pablobispo13", "_blank")
                }
              >
                <GitHubIcon sx={{ width: "50px", height: "50px" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Linkedin">
              <IconButton
                size="large"
                aria-label="linkedin"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/pablo-pimentel/",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon sx={{ width: "50px", height: "50px" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="E-mail">
              <IconButton
                size="large"
                aria-label="email"
                onClick={() =>
                  (window.location.href = "mailto:contato.pabloed@gmail.com")
                }
              >
                <EmailIcon sx={{ width: "50px", height: "50px" }} />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Grow>
    </Stack>
  );
};
