import React from "react";

//Components
import { ButtonTheme } from "./ButtonTheme";

//
import {
  MenuItem,
  Container,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Box,
} from "@mui/material";

//Icons
import MenuIcon from "@mui/icons-material/Menu";

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (anchor = null) => {
    setAnchorElNav(anchor);
  };

  const scrollTo = (elementId = "") => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: "4" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                key="Inicio_Menu"
                onClick={() => {
                  handleCloseNavMenu();
                  scrollTo("home");
                }}
              >
                <Typography textAlign="center">Inicio</Typography>
              </MenuItem>
              <MenuItem
                key="Projetos_Menu"
                onClick={() => {
                  scrollTo("projects");
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center">Projetos</Typography>
              </MenuItem>
              <MenuItem
                key="Contato_Menu"
                onClick={() => {
                  scrollTo("contact");
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center">Contato</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "space-around",
              display: { xs: "none", md: "flex" },
            }}
          >
            <MenuItem
              key="Inicio"
              onClick={() => {
                handleCloseNavMenu();
                scrollTo("home");
              }}
            >
              <Typography textAlign="center">Inicio</Typography>
            </MenuItem>
            <MenuItem
              key="Projetos"
              onClick={() => {
                scrollTo("projects");
                handleCloseNavMenu();
              }}
            >
              <Typography textAlign="center">Projetos</Typography>
            </MenuItem>
            <MenuItem
              key="Contato"
              onClick={() => {
                scrollTo("contact");
                handleCloseNavMenu();
              }}
            >
              <Typography textAlign="center">Contato</Typography>
            </MenuItem>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <ButtonTheme />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
