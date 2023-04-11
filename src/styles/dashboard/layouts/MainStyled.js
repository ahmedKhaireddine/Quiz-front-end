import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 143px 1fr;
  grid-template-columns: 1fr 300px;
  justify-content: ${(props) => props.justifyContent || "space-between"};

  @media screen and (max-width: 1024px) {
    width: 100%;

  }
`;
