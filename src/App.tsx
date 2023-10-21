import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider } from './context/ThemeContext';
import { Router } from './Router';
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
    <>
      <CssBaseline />
      <Router />
    </>
  </ThemeContextProvider>
  </React.StrictMode>,
)


