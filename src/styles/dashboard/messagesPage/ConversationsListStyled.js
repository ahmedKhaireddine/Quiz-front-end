import styled from "styled-components";

export const Box = styled.div`
  height: 100%;
  width: 100%;
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
