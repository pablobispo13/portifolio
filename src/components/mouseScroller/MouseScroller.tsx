//Components
import { Stack } from "@mui/material";
import { CardActionArea } from "@mui/material";

//css
import "./css/mouseScroller.css";

export default function MouseScroller({ onClickAction = () => {} }) {
  return (
    <CardActionArea
      sx={{ width: "26px", height: "40px", marginTop: "40px" }}
      onClick={onClickAction}
    >
      <Stack className="mouse">
        <Stack className="roll"></Stack>
        <Stack className="rollshadow"></Stack>
      </Stack>
    </CardActionArea>
  );
}
