import styled from "styled-components";

export const StyledCard = styled.div`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  margin: auto;
  padding: 3em 5em;
  border-radius: 1.25em;
  background: linear-gradient(25deg, rgba(2,0,65,.4) 0%, rgba(10,16,122,0.4) 35%, rgba(95,200,255,.4) 100%);
  box-shadow: 0 10px 55px -6px rgba(0, 0, 0, 0.63);
  @media (max-width: 768px) {
    margin: auto 2.5em;
  }
`;

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2.75em;
  margin: 0.75rem 0;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);      
`;

export const StyledParagraph = styled.p`
  margin: 1.5rem 0;
  font-size: 1rem;
`;
