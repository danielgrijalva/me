import React from "react";
import { Links } from "../Links/";
import { StyledBio, StyledParagraph, Title } from "./styles";

export const Bio = () => {
  return (
    <StyledBio>
      <Title>Daniel Grijalva</Title>
      <StyledParagraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit{" "}
        <span role="img" aria-label="Fallen Leaf Emoji">
          🍂
        </span>
      </StyledParagraph>
      <Links />
    </StyledBio>
  );
};
