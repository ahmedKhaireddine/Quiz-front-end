import styled from "styled-components"

export const QuizContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white
`
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
export const Question = styled.h2`
  padding: 70px 40px 40px;
  margin: 20px;
  background-color: #2d3359;
  border-radius: 5px;
  text-align: center;
  position: relative;
  width: 722px;
  height: 60px;
  line-height: 35px;
`
export const Index = styled.span`
  padding: 8px 20px;
  border-top: 2px solid #45DDE7;
  margin: 20px;
  font-weight: bold;
  color: white;
`

export const Text = styled.p``