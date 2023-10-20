import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ToggleColorMode = () =>  {
const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
const colorMode = React.useMemo(
  () => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }),
  [],
);

const theme = React.useMemo(
  () =>
    createTheme({
      palette: {
        mode,
        primary: {
          main: '#1976d2',
        },
      },
    
    }),
  [mode],
);

return <IconButton onClick={colorMode.toggleColorMode} color="inherit">
    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  </IconButton>

}