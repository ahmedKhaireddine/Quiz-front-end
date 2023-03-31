import styled from "styled-components";

export const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #1f939b;
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.txtCenter};
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #1f939b;
`;

export const Box = styled.div`
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  padding: 20px;
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

export const TimeContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;

  p {
    line-height: 40px;
  }

  div {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 15px;
    line-height: 40px;
  }
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 0;

  input {
    width: 350px;
  }
`;

export const List = styled.p`
  list-style-type: none;

  span {
    font-size: 22px;
    font-weight: semi-bold;
    color: #1f939b;
  }
`;
