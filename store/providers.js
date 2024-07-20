"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import { GlobalStateProvider } from "./provider";

export const Providers = ({children}) => {
    return (
        <ThemeProvider theme={createTheme()}>
            <GlobalStateProvider>
                {children}
            </GlobalStateProvider>
        </ThemeProvider>
    )
}
