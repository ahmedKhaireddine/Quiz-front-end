import React from 'react'
import styled from 'styled-components'

const QuizLayoutComponent = styled.div`
    max-width: 800px;
    margin: 100px auto;
    display: grid;

    grid-template-rows: 100px 200px 100px 100px 100px;
    grid-template-columns: 390px 390px;
    grid-gap: 10px;

    * {
        background-color: red;
        padding: 20px;
        color: white;
        font-size: 30px;
    }
`
const Title = styled.div`
    grid-column: 1 / -1;
`
const Question = styled.div`
    grid-column: 1 / -1;
`
const Reponse = styled.div`
    grid-gap: 10px;
`
const Index = styled.div`
    grid-column: 1 / -1
`

const QuizGameLayout = () => {
    return (
        <QuizLayoutComponent>
            <Title>Titre</Title>
            <Question>Question</Question>
            <Reponse/>
            <Reponse/>
            <Reponse/>
            <Reponse/>
            <Index>Index</Index>
        </QuizLayoutComponent>
    )
}

export default QuizGameLayout