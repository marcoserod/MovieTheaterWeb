import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";

import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

export const Banner = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar style={{ height: "60px" }}>
          <LocalMoviesIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
