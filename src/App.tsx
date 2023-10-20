import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider } from './context/ThemeContext';
import { Router } from './Router';

export const App = () =>
  <ThemeContextProvider>
    <>
      <CssBaseline />
      <Router />
    </>
  </ThemeContextProvider>
