import React from "react";
import { IconWrapper, IconLink, StyledIcon } from "./styles";

const Icon = ({ icon, title, link }) => {
  return (
    <IconWrapper>
      <IconLink href={link} target="_blank" rel="noreferrer noopener">
        <StyledIcon
          title={title ? title : icon}
          alt={icon}
          src={`assets/${icon}.svg`}
        />
      </IconLink>
    </IconWrapper>
  );
};

export default Icon;
