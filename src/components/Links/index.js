import React from "react";
import Icon from "../Icon/";
import { StyledLinks } from "./styles";

export const Links = () => {
  return (
    <StyledLinks>
      <Icon icon="flickr" link="https://flickr.com/danielgrijalvas/" />
      <Icon icon="github" link="https://github.com/danielgrijalva/" />
      <Icon icon="instagram" link="https://instagram.com/daniel.serdaigle/" />
      <Icon icon="linkedin" link="https://linkedin.com/in/danielgrijalva/" />
      <Icon icon="letterboxd" link="https://letterboxd.com/danieeel/" />
      <Icon icon="overworld" link="https://overworld.netlify.com/user/daniel" />
      <Icon icon="spotify" link="https://open.spotify.com/user/jdgs.gt" />
      <Icon icon="twitter" link="https://twitter.com/danielgrijalvas" />
      <Icon icon="vimeo" link="https://vimeo.com/danielgrijalva" />
    </StyledLinks>
  );
};
