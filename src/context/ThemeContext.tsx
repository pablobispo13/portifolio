import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import React, { createContext, ReactElement, useEffect, useState } from "react";

interface ThemeContextInterface {
    toggleColorMode: () => void
}

export const ThemeContext = createContext<ThemeContextInterface>({ toggleColorMode: () => { } })

type ThemeType = 'light' | 'dark'

interface ThemeContextProviderInterface {
    children: ReactElement<any, any> | null
}
export const ThemeContextProvider: React.FC<ThemeContextProviderInterface> = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const getTheme = () => {
        const theme = localStorage.getItem('theme')
        return theme === 'light' || theme === 'dark' ? theme : (prefersDarkMode ? 'dark' : 'light')
    }

    const [mode, setMode] = useState<ThemeType>(getTheme())

    useEffect(() => {
        localStorage.setItem('theme', mode)
    }, [mode])

    const toggleColorMode = () => setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light')

    const scrollbarColor = mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';

    const theme = createTheme({
        palette: {
            mode,
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        scrollbarWidth: 'thin',
                        scrollbarColor: `${scrollbarColor} transparent`,
                        '&::-webkit-scrollbar': {
                            width: '12px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'transparent',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: scrollbarColor,
                            borderRadius: '12px',
                        },
                    },
                },
            },
        },
    })

    return <ThemeContext.Provider value={{ toggleColorMode }}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </ThemeContext.Provider>
}