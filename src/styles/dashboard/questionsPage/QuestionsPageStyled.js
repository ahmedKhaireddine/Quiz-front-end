import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
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

// Aside //

export const ItemPreviewCardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`