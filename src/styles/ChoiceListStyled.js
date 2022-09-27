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
  box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 12px;
  background: ${ props => props.selected ? (
    "linear-gradient(100deg, #45DDE7 75%, #d5f9fc 90%)"
  ) : (
    "linear-gradient(100deg, #45DDE7 0%, #45DDE7 10%, rgba(26, 32, 44, 1) 15%)"
  )};
  border-radius: 5px;

  &:nth-child(2n+0) {
    margin-left: 15px;
  }

  &:nth-child(2n+1) {
    margin-right: 15px;
  }
`
export const Polygon = styled.span`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 50px;
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  background-color: linear-gradient(100deg, #45DDE7 75%, #d5f9fc 90%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

export const Text = styled.p`
  margin-left: 60px;
`