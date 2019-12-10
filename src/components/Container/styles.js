import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  background-color: #212121;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 12px;
    flex-flow: column-reverse;
  }
`;
