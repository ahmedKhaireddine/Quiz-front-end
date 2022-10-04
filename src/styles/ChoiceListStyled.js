import styled from "styled-components"

export const Item = styled.li`
  width: 390px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${props => props.selected ? props.bgItemSelected : props.bgItems};
  border-radius: 5px;
  cursor: pointer;
  color: ${props => props.color};
  transition: 0.6s all ease;
  box-shadow: ${props => props.boxShadow} 0px 1px 4px;
  margin-bottom: 20px;

  &:nth-child(odd) {
    margin-right: 10px;
  }

  &:nth-child(even) {
    margin-left: 10px;
  }
`

export const ListItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  list-style: none;
  width: 800px;
  margin: 0 auto;
`

export const Polygon = styled.div`
  width: 75px;
  height: 50px;
  clip-path: polygon(0 0, 80% 0%, 41% 100%, 0% 100%);
  border-radius: 5px 0px 0px 5px;
  background: ${props => props.bgPolygon};
`

export const Text = styled.p`
  margin-left: 20px;
  flex-basis: 80%;
`

