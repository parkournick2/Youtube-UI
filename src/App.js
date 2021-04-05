import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import Nav from './components/Nav'

export default function App() {

  const theme = createMuiTheme({
    palette:{
      type: 'dark',
      primary:{
        main: '#CC0000',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background:{
        default: '#232323',
        dark: '#181818',
        paper: '#232323'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>
  );
}
