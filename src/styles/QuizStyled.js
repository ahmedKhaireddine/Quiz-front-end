import styled from "styled-components"

export const Index = styled.span`
  padding: 8px 20px;
  border-top: 2px solid #45DDE7;
  margin: 20px;
  font-weight: bold;
  color: white;
`
export const Question = styled.h2`
  padding: 70px 40px;
  margin: 20px;
  background-color: ${props => props.bg};
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 4px;
  border-radius: 5px;
  text-align: center;
  position: relative;
  width: 800px;
  height: 60px;
  line-height: 35px;
`

export const QuizContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white
`

export const Text = styled.p``

export const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  background-color: #45DDE7;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  font-weight: bold;
  position: absolute;
  top: -46px;
  left: 43%;
`


