// Components
import { Fade, Stack, Typography } from "@mui/material";

export const Apresentation = () => {
  return (
    <Fade in={true} style={{ transformOrigin: "0 0 0" }} {...{ timeout: 1000 }}>
      <Stack display={"flex"} alignItems={"center"}>
        <Typography variant="h1" className="responsive-headline">
          Pablo Bispo
        </Typography>
        <Typography variant="h4">FullStack Developer</Typography>
        <Typography variant="h3" paddingTop="5px" textAlign="justify">
          Olá, sou um desenvolvedor de software apaixonado por criar soluções
          inovadoras e eficientes. Com 2 anos de experiência em programação,
          tenho trabalhado em diversos projetos que vão desde websites até
          sistemas corporativos complexos. <br />
          Minha jornada no mundo da programação começou com um fascínio por como
          o código pode transformar ideias em realidade. Com os cursos técnicos
          que fiz e com a formação que estou finalizando desenvolvi habilidades
          para resolver problemas de forma criativa e eficaz. <br />
          Estou confortável em várias linguagens de programação, incluindo PHP,
          Javascript, Typescript e Python, e tenho experiência prática com
          frameworks e ferramentas como Laravel e React. Tenho uma forte
          compreensão de princípios de design de software, metodologias ágeis e
          melhores práticas de desenvolvimento, o que me permite trabalhar de
          forma colaborativa e entregar resultados de alta qualidade.
        </Typography>
      </Stack>
    </Fade>
  );
};
