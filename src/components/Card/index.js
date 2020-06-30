import React from "react";
import { Links } from "../Links";
import { StyledCard, StyledParagraph, Title } from "./styles";

export const Card = () => {
  return (
    <StyledCard>
      <Title>Daniel Grijalva</Title>
      <StyledParagraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit{" "}
        <span style={{
            fontSize: '24px',
            verticalAlign: 'middle',
        }}>
          <img src="assets/emoji/sparkles.svg" width="24px" alt="Sparkles Emoji" />
        </span>
      </StyledParagraph>
      <Links />
    </StyledCard>
  );
};
