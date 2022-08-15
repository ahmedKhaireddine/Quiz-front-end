import React from 'react'
import styled from 'styled-components'

const QuizLayoutComponent = styled.div`
    width: 200px;
    height: 200px;
    background: teal;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const QuizLayout = () => {
    return (
        <QuizLayoutComponent/>
    )
}

export default QuizLayout