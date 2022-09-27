import styled from "styled-components"

export const Item = styled.li`
  width: 48%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${props => props.selected ? (
    `background: linear-gradient(100deg, 
      ${props.firstColorGradient} 75%, 
      ${props.secondColorGradient} 90%
    )`
  ) : (
    `background: linear-gradient(100deg, 
      ${props.firstColorGradient} 0%, 
      ${props.firstColorGradient} 10%, 
      ${props.thirdColorGradient} 15%
    )`
  )};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.6s all ease;
  box-shadow: rgba(0, 0, 0, 0.9) 0px 4px 12px;

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
