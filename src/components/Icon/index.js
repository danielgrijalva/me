import React from "react";
import { IconWrapper, IconLink, StyledIcon } from "./styles";

const Icon = ({ icon, link }) => {
  return (
    <IconWrapper>
      <IconLink href={link} target="_blank" rel="noreferrer noopener">
        <StyledIcon alt={icon} src={`assets/${icon}.svg`} />
      </IconLink>
    </IconWrapper>
  );
};

export default Icon;
