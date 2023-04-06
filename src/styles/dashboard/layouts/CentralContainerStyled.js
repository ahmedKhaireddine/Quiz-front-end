import styled from "styled-components";

export const Box = styled.div`
  grid-column: 1 / 2;
  width: 100%;
  height: ${(props) => props.height || "100%"};
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
  padding: 20px;
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
