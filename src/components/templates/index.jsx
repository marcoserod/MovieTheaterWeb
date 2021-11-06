import { Container } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export const PageTemplate = ({ children }) => {
  return (
    <Container
      maxWidth="lg"
      style={{
        minHeight: "calc(100vh - 60px)",
        marginTop: "24px",
        marginBottom: "24px",
      }}
    >
      {children}
    </Container>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
