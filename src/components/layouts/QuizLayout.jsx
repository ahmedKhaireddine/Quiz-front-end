import React from "react"
import styled from "styled-components"
import { Box, useColorModeValue } from "@chakra-ui/react"

// const Container = styled.div`
//     height: 100vh;
//     width; 100vw;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     @media (max-width: 1440px) {
//         padding: 10vw;
//     }
// `

const QuizLayout = ({background, children}) => {
    const bg = useColorModeValue('yellow', 'red.200')
    // const color = useColorModeValue('white', 'gray.800')
    return (
        <Box bg={bg}>
            {children}
        </Box>
    )
}

QuizLayout.defaultProps = {
    background: '#242233'
}

export default QuizLayout