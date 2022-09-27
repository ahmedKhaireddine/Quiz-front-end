import React from "react"
import styled from "styled-components"
import { useColorModeValue } from "@chakra-ui/react"

const Container = styled.div`
    height: 100vh;
    width; 100vw;
    position: relative;
    // background: ${props => props.background}; #1a202c
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1440px) {
        padding: 10vw;
    }
`

const QuizLayout = ({children}) => {
    
    const bg = useColorModeValue("#242233", 'green')
    const color = useColorModeValue("#F9F7F3", 'green')
    return (
        <Container bg={bg} color={color}>
            {children}
        </Container>
    )
}

export default QuizLayout