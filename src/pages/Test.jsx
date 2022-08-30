import React from "react"

import Over from "../components/quiz-interface/Over"
import Quiz from "../components/quiz-interface/Quiz"
import Body from "../components/Body"
import SigninComponent from '../components/SigninComponent'
import Logo from '../components/Logo'
import Button from "../components/quiz-interface/core/Button"
import SignupComponent from "../components/SignupComponent"
import QuizLayout from "../components/layouts/QuizLayout"
import Home from "../components/quiz-interface/Home"
import PlayerInfos from "../components/quiz-interface/PlayerInfos"
import ChoiceList from "../components/quiz-interface/core/ChoiceList"
import QuizGameLayout from "../components/layouts/QuizGameLayout"

const Test = (props) => {
    return (
        <div>
            {/* <PlayerInfos/> */}
            {/* <Quiz /> */}
            {/* <Over /> */}
            {/* <ChoiceList /> */}
            {/* <Button /> */}
            <QuizGameLayout />
        </div>
    )
}

export default Test