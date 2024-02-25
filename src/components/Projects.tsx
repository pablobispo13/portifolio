import { useEffect, useState } from "react";

//Components
import { Grow, Stack, Typography } from "@mui/material";
import CardProjects from "./CardProjects";

export const Projects = () => {
  useEffect(() => {
    setSlideContent(true);
  });

  const [slideContet, setSlideContent] = useState(false);

  return (
    <Stack key={"projects"} id="projects" sx={{minHeight:"100vh", paddingTop:"40px"}}>
      <Grow
        in={slideContet}
        style={{ transformOrigin: "0 0 0" }}
        {...(slideContet ? { timeout: 1000 } : {})}
      >
        <Stack margin={2} gap={2}>
          <Stack display={"flex"} alignItems={"center"}>
            <Typography variant="h3" className="responsive-headline">
              Projetos
            </Typography>
          </Stack>
          <Stack display={"flex"} direction={"row"} flexWrap={"wrap"} gap={2} justifyContent={"space-around"}>
            <CardProjects
              title={"title"}
              content={"content"}
              image={"image"}
              alt={"alt"}
            />
            <CardProjects
              title={"title"}
              content={"content"}
              image={"image"}
              alt={"alt"}
            />
            <CardProjects
              title={"title"}
              content={"content"}
              image={"image"}
              alt={"alt"}
            />
            <CardProjects
              title={"title"}
              content={"content"}
              image={"image"}
              alt={"alt"}
            />
          </Stack>
          <Stack display={"flex"} direction={"row"} flexWrap={"wrap"} gap={2} justifyContent={"space-around"}>
            <CardProjects
              title={"title"}
              content={"content"}
              image={"image"}
              alt={"alt"}
            />
            <CardProjects
              title={"title"}
              content={"content"}
              image={"image"}
              alt={"alt"}
            />
            <CardProjects
              title={"title"}
              content={"content"}
              image={"image"}
              alt={"alt"}
            />
            <CardProjects
              title={"title"}
              content={"content"}
              image={"image"}
              alt={"alt"}
            />
          </Stack>
          
        </Stack>
      </Grow>
    </Stack>
  );
};
