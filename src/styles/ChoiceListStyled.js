import styled from "styled-components"

export const Item = styled.li`
  width: 48%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 20px; 
  background: ${props => props.selected ? "#45DDE7" : ""}
  border-radius: 5px;
  cursor: pointer;
  transition: 0.6s all ease;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 4px;

  &:nth-child(2n+0) {
    margin-left: 15px;
  }

  &:nth-child(2n+1) {
    margin-right: 15px;
  }
`

export const ListItems = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  width: 800px;
  margin-top: 40px;
`

export const Text = styled.p`
  margin-left: 60px;
`

