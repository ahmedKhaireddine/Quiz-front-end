import React from 'react'
import Logo from '../Logo'
import QuizSignin from '../QuizSignin'

import styled from 'styled-components'

const Body = styled.div`
    height: 100vh;
    width; 100wv;
    background: #242233;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction column;
    height: 400px;
    width: 300px;
`

const QuizHomeLayout = () => {
    return (
        <Body>
            <Card>
                <Logo/>
                <QuizSignin/>
            </Card>
        </Body>
    )
}

export default QuizHomeLayout