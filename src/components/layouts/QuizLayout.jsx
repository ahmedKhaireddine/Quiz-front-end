import React from "react"
import styled from "styled-components"
// import Body from "../Body"
// import FormCard from "../FormCard"

const Container = styled.div`
    height: 100vh;
    width; 100vw;
    background: ${props => props.background};
    display: flex;
    justify-content: center;
    align-items: center
`

const QuizLayout = ({background, children}) => {
    return (
        <Container background={background}>
            {children}
        </Container>
    )
}

QuizLayout.defaultProps = {
    background: '#242233'
}

export default QuizLayout