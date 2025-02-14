import { useEffect, useState } from "react";

//Components
import { Fade, Stack, Typography } from "@mui/material";
import { CardProjects } from "../layout/CardProjects";
import { ProjectsData, ProjectsDataType } from "../../../public/ProjectsData";
export const Projects = () => {
  useEffect(() => {
    setSlideContent(true);
  }, []);

  const [slideContet, setSlideContent] = useState(false);

  return (
    <Fade
      in={slideContet}
      style={{ transformOrigin: "0 0 0", marginTop: "81.19px" }}
      {...(slideContet ? { timeout: 1000 } : {})}
    >
      <Stack key={"projects"} id="projects">
        <Stack margin={2} gap={2}>
          <Stack display={"flex"} alignItems={"center"}>
            <Typography variant="h2" className="responsive-headline">
              Projetos
            </Typography>
          </Stack>
          {ProjectsData.length > 0 ? (
            <Stack
              display={"flex"}
              direction={"row"}
              flexWrap={"wrap"}
              gap={2}
              justifyContent={"space-around"}
            >
              {ProjectsData?.map((project: ProjectsDataType) => (
                <CardProjects
                  title={project.title}
                  content={project.content}
                  img={project.img}
                  alt={project.alt}
                  tags={project.tags}
                  expandImage={project.expandImage}
                  linkApi={project.linkApi}
                  linkApp={project.linkApp}
                  notionLink={project.notionLink}
                />
              ))}
            </Stack>
          ) : (
            <Typography> Não possuem projetos registrados</Typography>
          )}
        </Stack>
      </Stack>
    </Fade>
  );
};
