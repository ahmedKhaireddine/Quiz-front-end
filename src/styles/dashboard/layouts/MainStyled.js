import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 175px auto;
  grid-template-columns: 1fr 350px;
  justify-content: ${props => props.justifyContent || "space-between"};
`;