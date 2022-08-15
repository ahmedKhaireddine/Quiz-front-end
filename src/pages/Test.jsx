import React from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
import QuizLayout from '../components/layouts/QuizLayout'
import Logo from '../components/Logo'

const Card = styled.div`
    height: 200px;
    width: 200px;
    background: salmon
`

const Test = () => {
    return (
        <QuizLayout>
            <Logo/>
            <Button/>
            <Card/>
        </QuizLayout>
    )
}

export default Test