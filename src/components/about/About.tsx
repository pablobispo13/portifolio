import { useEffect, useState } from "react";

//Components
import { Grow, Stack, Typography } from "@mui/material";

//css
import './css/mouseScroller.css'
import './css/main.css'

export const About = () => {

  useEffect(() => {
    setSlideContent(true)
  })

  const [slideContet, setSlideContent] = useState(false)

  return <Stack>
    <Grow
      in={slideContet}
      style={{ transformOrigin: '0 0 0' }}
      {...(slideContet ? { timeout: 1000 } : {})}
    >
      <Stack display={"flex"} alignItems={"center"}>
        <Typography variant="h1" className="responsive-headline">Sobre Mim</Typography>
      </Stack>
    </Grow>
  </Stack>
}