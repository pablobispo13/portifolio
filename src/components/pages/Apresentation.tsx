// Imports
import { Fade, Stack, Typography, Tooltip, IconButton } from "@mui/material";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const Apresentation = () => {
  return (
    <Fade in={true} style={{ transformOrigin: "0 0 0", marginTop: "81.19px" }} {...{ timeout: 1000 }} >
      <Stack display={"flex"} alignItems={"center"}>
        <Typography variant="h2" className="responsive-headline">
          Pablo Bispo
        </Typography>
        <Typography variant="h4">Desenvolvedor Web Fullstack</Typography>
        <Typography variant="h3" paddingTop="5px" textAlign="justify">
          Olá, sou um Desenvolvedor Web Fullstack com sólida experiência no desenvolvimento de soluções escaláveis e de alto
          desempenho.<br />
          Expertise em tecnologias como React, PHP, Python, Javascript, e design de interfaces, com um
          histórico comprovado na criação e integração de sistemas complexos.<br />
          Possuo habilidade em otimizar
          processos e automatizar fluxos de trabalho, com foco na entrega de resultados eficientes e de qualidade.
        </Typography>
        <Stack margin={2} gap={2}>
          <Stack display={"flex"} alignItems={"center"}>
            <Typography variant="h4" className="responsive-headline">
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
                <GitHubIcon sx={{ width: "36px", height: "36px" }} />
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
                <LinkedInIcon sx={{ width: "36px", height: "36px" }} />
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
                <EmailIcon sx={{ width: "36px", height: "36px" }} />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Stack>
    </Fade>
  );
};
