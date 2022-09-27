import { useContext, useEffect } from "react"

import { QuizContext } from "../../contexts/Quiz"
import { Text, SmallText } from "../../styles/OverStyled"

const Over = (props) => {
    const { answers, infos, quiz, score } = useContext(QuizContext)

    useEffect(() => {
        let player = {
            answers,
            full_name: `${infos.firstName} ${infos.lastName}`,
            quiz: quiz._id,
            score
        }
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