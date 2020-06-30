import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  background: center / cover no-repeat;
  background-image:  url("assets/photo.webp"), url("assets/photo.jpg");
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
