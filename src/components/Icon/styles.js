import styled from "styled-components";

export const IconWrapper = styled.li`
  width: 2.25em;
  height: 2.25em;
  margin: 0.75em 0.5em 0 0;
  display: inline-block;
`;

export const StyledIcon = styled.img`
  border-radius: 50%;
  transition: 0.1s ease-in-out;  
  &:hover {
    transform: scale(1.25);
  }
`;

export const IconLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
