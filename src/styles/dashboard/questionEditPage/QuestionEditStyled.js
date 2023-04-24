import styled from "styled-components";

export const AnswerContainer = styled.p`
  white-space: nowrap;
` 

export const ButtonContainer = styled.div`
  display: flex;
`

export const ItemsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  span {
    margin-right: ${props => props.marginRight || "10px"};
  }
`

export const Line = styled.div`
  align-self: flex-end;
  height: 1px;
  width: 100%;
  background-color: rgba(0,0,0,0.2);
`

export const ListContainer = styled.ul`
  display: flex;
  flex-direction column;

  li {
    list-style-type: none;
  }
`

export const TimeContainer = styled.div`
  display: flex;
  width: 100%;
  padding: ${props => props.padding || "0 0 15px 0"};

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
