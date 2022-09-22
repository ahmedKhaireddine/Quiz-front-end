import React from "react"
import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    width; 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1440px) {
        padding: 10vw;
    }
`

const QuizLayout = ({background, children}) => {

    return (
        <Container>
            {children}
        </Container>
    )
}

export default QuizLayout