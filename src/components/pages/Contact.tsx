//Components
import { Fade, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const Contact = () => {
  return (
    <Fade
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...{ timeout: 1000 }}
    >
      <Stack key={"contact"} id="contact">
        <Stack margin={2} gap={2}>
          <Stack display={"flex"} alignItems={"center"}>
            <Typography variant="h1" className="responsive-headline">
              Entre em contato
            </Typography>
          </Stack>
          <Stack
            display={"flex"}
            direction={"row"}
            flexWrap={"wrap"}
            gap={2}
            justifyContent={"space-around"}
          >
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
      </Stack>
    </Fade>
  );
};
