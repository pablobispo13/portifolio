import React from "react";

//Components
import { ButtonTheme } from "../theme/ButtonTheme";

//
import { MenuItem, Container, Menu, Typography, IconButton, Toolbar, AppBar, Box } from '@mui/material';

//Icons
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (anchor = null) => {
    setAnchorElNav(anchor);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key="Inicio_Menu" onClick={() => handleCloseNavMenu()}>
                <Typography textAlign="center">Inicio</Typography>
              </MenuItem>
              <MenuItem key="SobreMim_Menu" onClick={() => handleCloseNavMenu()}>
                <Typography textAlign="center">Sobre mim</Typography>
              </MenuItem>
              <MenuItem key="Experiências_Menu" onClick={() => handleCloseNavMenu()}>
                <Typography textAlign="center">Experiências</Typography>
              </MenuItem>
              <MenuItem key="Projetos_Menu" onClick={() => handleCloseNavMenu()}>
                <Typography textAlign="center">Projetos</Typography>
              </MenuItem>
              <MenuItem key="Contato_Menu" onClick={() => handleCloseNavMenu()}>
                <Typography textAlign="center">Contato</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, justifyContent: "space-around", display: { xs: 'none', md: 'flex' } }}>
            <MenuItem key="Inicio" onClick={() => handleCloseNavMenu()}>
              <Typography textAlign="center">Inicio</Typography>
            </MenuItem>
            <MenuItem key="SobreMim" onClick={() => handleCloseNavMenu()}>
              <Typography textAlign="center">Sobre mim</Typography>
            </MenuItem>
            <MenuItem key="Experiências" onClick={() => handleCloseNavMenu()}>
              <Typography textAlign="center">Experiências</Typography>
            </MenuItem>
            <MenuItem key="Projetos" onClick={() => handleCloseNavMenu()}>
              <Typography textAlign="center">Projetos</Typography>
            </MenuItem>
            <MenuItem key="Contato" onClick={() => handleCloseNavMenu()}>
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
}