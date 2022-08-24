import React from "react"

import Body from "../components/Body"
import SigninComponent from '../components/SigninComponent'
import Logo from '../components/Logo'
import Button from "../components/quiz-interface/core/Button"
import SignupComponent from "../components/SignupComponent"
import QuizLayout from "../components/layouts/QuizLayout"
import Home from "../components/quiz-interface/Home"
import PlayerInfos from "../components/quiz-interface/PlayerInfos"
import Over from "../components/quiz-interface/Over"

const Test = (props) => {
    return (
        <>
            <QuizLayout>
                <Logo />
                <Over />
            </QuizLayout>
        </>
    )
}

export default Test