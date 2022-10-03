import styled from "styled-components"

export const Index = styled.span`
  width: 100px;
  padding: 8px 20px;
  border-top: 2px solid ${props => props.borderColor};
  margin: 20px auto 0;
  font-weight: bold;
  text-align: center;
  color: ${props => props.color};
`

export const Question = styled.h2`
  padding: 70px 40px;
  background-color: ${props => props.bg};
  color: ${props => props.color};
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 4px;
  border-radius: 5px;
  text-align: center;
  position: relative;
  width: 100%;
  height: 60px;
  line-height: 35px;
`

export const QuizContainer = styled.div`
  width: 800px;
  margin: 30px auto 30px;
  display: grid;
  grid-template-rows: 150px 150px 200px 50px 30px;
  grid-gap: 50px;
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


