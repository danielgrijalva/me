import React from "react";
import { StyledPhoto } from "./styles";

export const Photo = () => {
  return <StyledPhoto loading="lazy" src="/assets/photo.jpg" />;
};
