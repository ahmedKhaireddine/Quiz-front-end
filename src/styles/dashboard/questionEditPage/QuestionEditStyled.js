import styled from "styled-components";

export const ItemsList = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    margin-right: 10px;
  }
`

export const TimeContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 0 30px;

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

export const ListContainer = styled.ul`
  display: flex;
  flex-direction column;

  li {
    list-style-type: none;
  }
`