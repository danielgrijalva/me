import styled from "styled-components";

export const StyledCard = styled.div`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color: #f5f5f5;
  margin: auto;
  padding: 3em 5em;
  border-radius: 1.25em;
  background: linear-gradient(25deg, rgba(2,0,36,.5) 0%, rgba(9,9,121,0.5) 35%, rgba(0,212,255,.5) 100%);
  box-shadow: 0 15px 55px -2px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    margin: auto 2.5em;
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 2.5em;
  font-weight: 500;
  margin: 0.75rem 0;
  text-shadow: 3px 5px 2em rgba(0, 0, 0, 0.4);
`;

export const StyledParagraph = styled.p`
  margin: 1.5rem 0;
  font-size: 1rem;
`;
