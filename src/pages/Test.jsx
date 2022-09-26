import React from "react"

import StarsList from "../components/StarsList"
import Logo from "../components/Logo"
import { Text } from "../styles/OverStyled"
import { Body, Box } from "../styles/StarsListStyled"
import AnswerTest from "../components/others/AnswerTest"

const Test = (props) => {
    return (
        <>
            <AnswerTest />
        </>
        // <Body>
        //     <StarsList />
        //         <Box>
        //             <Logo margin="0px auto 50px"/>
        //             <Text size="3em">Félicitations!</Text>
        //             <Text size="2em">Vous avez terminé le quiz!</Text>
        //         </Box>
        //     <StarsList />
        // </Body>
    )
}

export default Test