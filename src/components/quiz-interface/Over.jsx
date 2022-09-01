import React from "react"

import { Item, MagicItems, Text } from "../../styles/OverStyled"

const Over = (props) => {
    return (
        <>
            <Text size="3em">Félicitations!</Text>
            <Text size="2em">Vous avez terminé le quiz!</Text>
            <MagicItems>
                {Array(8).fill().map((el, index) => <Item key={index}>✨</Item>)}
            </MagicItems>
        </>
    )
}

export default Over