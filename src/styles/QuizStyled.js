import styled from "styled-components"

export const QuizContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Timer = styled.span`
  background-color: grey;
  padding: 24px 20px;
  border-radius: 50%;
  align-items: center;
  font-weight: bold;
  position: absolute;
  top: -39px;
  left: 45%;
`
export const Question = styled.h2`
  padding: 40px 20px 36px;
  margin: 20px;
  background-color: red;
  border-radius: 5px;
  text-align: center;
  position: relative;
  width: 722px;
  height: 50px;
`
export const Index = styled.span`
  padding: 8px 20px;
  border-top: 2px solid red;
  margin: 20px;
  font-weight: bold;
  color: white;
`