import { useColorModeValue } from "@chakra-ui/react"
import { useContext, useEffect } from "react"

import Logo from "../Logo"
import { Footer, Text, SmallText } from "../../styles/OverStyled"
import { QuizContext } from "../../contexts/Quiz"

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
    }, [answers, infos, quiz, score])

    return (
        <>
            <Text
                color={color}
                size="3.5em"
            >
                Bravo !
            </Text>
            <Text
                color={color}
                size="2.5em"
            >
                Et à la prochaine !
            </Text>
            <Footer>
                <SmallText>
                    <Logo
                        color="black"
                        padding="0px 6px"
                        size="12px"
                    />
                    Corporation © 2022
                </SmallText>
            </Footer>
        </>
    )
}

export default Over