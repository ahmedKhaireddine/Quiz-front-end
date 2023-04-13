import styled from "styled-components";

export const Button = styled.div`
  cursor: pointer;
`;

export const ButtonNew = styled.div`
width: 140px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #1f939b;
  border-right: 1px solid #1f939b;
  cursor: pointer;
  background-color: rgba(0,0,0,0.1);

  :hover {
    background-color: rgba(0,0,0,0.155);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  background: "#f8f8fa";
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #1f939b;
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

export const ItemPreviewCardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`;

export const SearchContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

// -------- 2e version -------- //

export const SearchContainer2 = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 65% 1fr;
  grid-gap: 15px;
  padding: 10px 0 20px 0;
  margin: 0 auto;
`
