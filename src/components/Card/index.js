import React from "react";
import { Links } from "../Links";
import { StyledCard, StyledParagraph, Title } from "./styles";

export const Card = () => {
  return (
    <StyledCard>
      <Title>daniel</Title>
      <StyledParagraph>
        lorem ipsum, dolor sit amet consectetur adipisicing elit{" "}
        <span role="img" aria-label="Sparkles Emoji">
          ✨
        </span>
      </StyledParagraph>
      <Links />
    </StyledCard>
  );
};
