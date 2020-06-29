import React from "react";
import Icon from "../Icon/";
import { StyledLinks } from "./styles";

export const Links = () => {
  return (
    <StyledLinks>
      <Icon icon="flickr" link="https://flickr.com/danielgrijalvas/" />
      <Icon icon="github" link="https://github.com/danielgrijalva/" />
      <Icon icon="instagram" link="https://instagram.com/danie.serdaigle/" />
      <Icon icon="linkedin" link="https://linkedin.com/in/danielgrijalva/" />
      <Icon icon="letterboxd" link="https://letterboxd.com/danieeel/" />
      <Icon icon="mail" link="mailto:danielgrisoto@gmail.com" />
      <Icon icon="medium" link="https://medium.com/@danielgrijalvas" />
      <Icon icon="overworld" link="https://overworld.netlify.com/user/daniel" />
      <Icon icon="spotify" link="https://open.spotify.com/user/jdgs.gt" />
      <Icon icon="twitter" link="https://twitter.com/danielgrijalvas" />
    </StyledLinks>
  );
};
