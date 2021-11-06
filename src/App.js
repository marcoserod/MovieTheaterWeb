import React from "react";
import { Discovery } from "./components/pages/Discovery";
import "./App.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Banner } from "./components/molecules/Banner";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0d253f",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#01b4e4",
      contrastText: "#FFF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Banner />
      <Discovery />
    </ThemeProvider>
  );
}

export default App;
