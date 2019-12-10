import styled from "styled-components";

export const IconWrapper = styled.li`
  width: 2.15em;
  height: 2.15em;
  margin: 0.75em 0.5em 0 0;
  display: inline-block;
`;

export const StyledIcon = styled.img`
  border-radius: 50%;
  transition: filter 0.2s ease-in-out;
  filter: grayscale(100%) contrast(200%);
  &:hover {
    filter: none;
  }
`;

export const IconLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
