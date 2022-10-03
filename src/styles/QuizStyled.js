import styled from "styled-components"

export const Content = styled.div`
  display: grid;
  grid-template: auto 1fr auto;
`

export const Index = styled.span`
  padding: 8px 20px;
  text-align: center;
  border-top: 2px solid #45DDE7;
  margin: 20px;
  font-weight: bold;
  `

  export const Question = styled.h2`
  padding: 70px 40px;
  margin: 20px;
  background-color: ${props => props.bg};
  color: ${props => props.color};
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 4px;
  border-radius: 5px;
  text-align: center;
  position: relative;
  width: 800px;
  height: 60px;
  line-height: 35px;
  `
  
export const QuizContainer = styled.div`
height: 100vh;
display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  align-items: center;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // height: ${props => props.height};
  // padding: ${props => props.padding};
`

export const Text = styled.p``

export const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  background-color: ${props => props.bg};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  font-weight: bold;
  color: ${props => props.color};
  position: absolute;
  top: -46px;
  left: 43%;
`


