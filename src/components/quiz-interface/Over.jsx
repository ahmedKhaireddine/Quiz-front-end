import React from "react"
import { useContext } from "react"

import { Item, MagicItems, Text } from "../../styles/OverStyled"
import Logo from "../Logo"
import { QuizContext } from "../../contexts/Quiz"

const Over = (props) => {
    const { answerSelected } = useContext(QuizContext)
    console.log("réponses séléctionnées :", answerSelected)
    return (
        <>
            <Logo size="50px" />
            <Text size="3em">Félicitations!</Text>
            <Text size="2em">Vous avez terminé le quiz!</Text>
            <MagicItems>
                {Array(8).fill().map((el, index) => <Item key={index}>✨</Item>)}
            </MagicItems>
        </>
    )
}

export default Over