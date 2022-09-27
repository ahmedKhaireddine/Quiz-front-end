import { useContext, useEffect } from "react"
import styled from "styled-components"

import { Text, SmallText } from "../../styles/OverStyled"
import { QuizContext } from "../../contexts/Quiz"
import Logo from "../Logo"

const Over = (props) => {
    const { answers, infos, score, quiz } = useContext(QuizContext)

    useEffect(() => {
        let player = {
            answers,
            full_name: `${infos.firstName} ${infos.lastName}`,
            quiz: quiz._id,
            score
        }

        console.log("player => ", player)
    }, [answers, infos, score, quiz])

    return (
        <>
            <Text size="2.5em">Bravo!</Text>
            <Text size="2em">Vous avez terminé le quiz!</Text>
            <SmallText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SmallText>
        </>
    )
}

export default Over