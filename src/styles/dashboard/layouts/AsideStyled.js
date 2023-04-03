import styled from "styled-components";

export const Box = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  padding: 30px;
  overflow-y: auto;
  border-left: 1px solid black;
  transform: translateX(0);
  transition: transform 0.2s ease-out;

  // @media (max-width: 1300px) {
  //   transform: translateX(100%);
  // }
`;
