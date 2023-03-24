import styled from "styled-components";

export const Box = styled.div`
  width: 350px;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 30px;
  overflow-y: auto;
  border-left: 1px solid black;

  li {
    list-style-type: none;
  }

  li span {
    font-size: 20px;
    font-weight: bold;
    color: #1f939b;
    margin-bottom: 10px;
  }
`;
