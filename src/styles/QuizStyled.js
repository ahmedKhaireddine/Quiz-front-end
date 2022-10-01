import styled from "styled-components"

export const Index = styled.span`
  width: 100px;
  padding: 8px 20px;
  border-top: 2px solid ${props => props.borderColor};
  margin: 20px auto 0;
  font-weight: bold;
  color: ${props => props.color};
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`

export const Question = styled.h2`
  padding: 70px 40px;
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
  width: 70%;
  max-width: 1300px;
  height: auto;
  margin: 30px auto 30px;
  display: grid;
  justify-content: center;
  text-align: center;
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


