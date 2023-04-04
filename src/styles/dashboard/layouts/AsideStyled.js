import styled from "styled-components";

export const Box = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  padding: ${props => props.padding || '30px'};
  overflow-y: auto;
  border-left: 1px solid black;
  transform: translateX(0);
  transition: transform 0.2s ease-out;

  // @media (max-width: 1300px) {
  //   transform: translateX(100%);
  // }

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px #1f939b;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #1f939b;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #02818a;
  }
`;
