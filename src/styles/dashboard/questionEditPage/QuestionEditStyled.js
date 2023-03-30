import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 175px auto;
  grid-template-columns: 1fr 350px;
  justify-content: space-between;
`;

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
`;

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px;

  h3 {
    margin-right: 15px;
  }

  span {
    margin-left: 15px;
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
