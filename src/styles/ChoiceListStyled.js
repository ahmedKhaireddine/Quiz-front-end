import styled from "styled-components"

export const Item = styled.li`
  position: relative;
  width: 48%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${props => props.selected ? props.bgItemSelected : props.bgItems};
  border-radius: 5px;
  cursor: pointer;
  color: ${props => props.color};
  transition: 0.6s all ease;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 4px;
`

export const ListItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  width: 800px;
  margin: 0 auto;
  height: 200px;
`

export const Polygon = styled.div`
  width: 75px;
  height: 50px;
  clip-path: polygon(0 0, 80% 0%, 41% 100%, 0% 100%);
  border-radius: 5px 0px 0px 5px;
  background: ${props => props.bgPolygon};
`

export const Text = styled.p`
  margin-left: 60px;
`

