import styled from "styled-components"

export const ListItems = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  width: 800px;
  margin-top: 40px;
`
export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 48%;
  margin-bottom: 20px;
  height: 50px;
  background-color: #2d3359;
  border-radius: 5px;

  &:nth-child(2n+0) {
    margin-left: 15px;
  }

  &:nth-child(2n+1) {
    margin-right: 15px;
  }

  & span {
    display: inline-block;
    width: 40px;
    height: 50px;
    background-color: #45DDE7;
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  & p {
    margin-left: 20px;
  }
`