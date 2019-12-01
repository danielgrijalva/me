import React from "react";
import { Container } from "./components/Container";
import { Bio } from "./components/Bio";
import { Photo } from "./components/Photo";

export const App = () => {
  return (
    <Container>
      <Bio />
      <Photo />
    </Container>
  );
};
