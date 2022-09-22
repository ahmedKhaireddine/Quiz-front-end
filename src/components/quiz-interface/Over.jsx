import React from "react"
// import { Box } from "@chakra-ui/react"

import { Item, MagicItems, Text } from "../../styles/OverStyled"
import Logo from "../Logo"

const Over = (props) => {
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