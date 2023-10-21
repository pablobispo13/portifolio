//Components
import { Typography, Stack } from "@mui/material";
import { NavBar } from "../navbar/NavBar";

//css
import './css/mouseScroller.css'

//Service
import { useTheme } from "@mui/material";

export const Page = () => {
  const theme = useTheme()

  return <Stack maxWidth="100%">
    {/* Navbar */}
    <NavBar />
    {/* Header */}
    <Stack sx={{ backgroundColor: theme.palette.mode == 'dark' ? "red" : "green" }}>
      <Stack alignItems={"center"} display={"flex"} gap={1} paddingTop={{ xs: '12em', md: '10em' }} sx={{ height: { xs: '475px', md: '425px' } }}>
        <Typography variant="h2">Pablo Bispo</Typography>
        <Typography variant="h4">FullStack Developer</Typography>
        <Stack className="mouse">
          <Stack className="roll"></Stack>
          <Stack className="rollshadow"></Stack>
        </Stack>
      </Stack>
    </Stack>
    {/* Sobre Mim */}
    <Stack sx={{ backgroundColor: theme.palette.mode == 'dark' ? "green" : "red" }}>
      <Stack display={"flex"} alignItems={"center"} gap={1}>
        <Typography variant="h2">Sobre mim</Typography>
      </Stack>
    </Stack>
  </Stack>
}