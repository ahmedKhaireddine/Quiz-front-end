import styled from "styled-components";

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
