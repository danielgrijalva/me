import styled from "styled-components";

export const StyledCard = styled.div`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color: #fafafa;
  margin: auto;
  padding: 3em 5em;
  border-radius: 1.25em;
  background: linear-gradient(25deg, #ff8a80, #f50057);
  box-shadow: 0 15px 55px -2px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    margin: auto 2.5em;
  }
`;

export const Title = styled.h1`
  font-family: "Merriweather", serif;
  font-size: 2.75em;
  margin: 0.75rem 0;
`;

export const StyledParagraph = styled.p`
  margin: 1.5rem 0;
  font-size: 1rem;
`;
