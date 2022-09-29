import { useColorModeValue } from "@chakra-ui/react"
import { useContext, useEffect } from "react"

import { QuizContext } from "../../contexts/Quiz"
import { Text, SmallText } from "../../styles/OverStyled"

const Over = (props) => {
    const { answers, infos, quiz, score } = useContext(QuizContext)
    const color = useColorModeValue("rgba(0, 0, 0, 0.8)", "#F1F1F1")

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
            <Text
                color={color}
                size="2.5em"
            >
                Bravo!
            </Text>
            <Text
                color={color} 
                size="2em"
            >
                Vous avez terminé le quiz!
            </Text>
            <SmallText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SmallText>
        </>
    )
}

export default Over