//Components
import { Stack } from "@mui/material";

//css
import './css/mouseScroller.css'


export const MouseScroller = () => {
  return <Stack className="mouse">
    <Stack className="roll"></Stack>
    <Stack className="rollshadow"></Stack>
  </Stack>
}