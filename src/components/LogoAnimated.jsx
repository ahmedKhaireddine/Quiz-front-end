import React from "react"
import { useColorModeValue } from "@chakra-ui/react"

import { Grid, Letter, Span } from "../styles/LogoAnimatedStyled"

const LogoAnimated = ({ size, word }) => {
    const color = useColorModeValue("rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 1)")
    const colorAfter = useColorModeValue("#1f939b", "#45DDE7")
    const colorBefore = useColorModeValue("rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.6)")

    const LogoItemsJSX = word.split("").map((element, index) => {
        return (
            <Letter key={index}>
                <Span 
                    color={color}
                    colorAfter={colorAfter}
                    colorBefore={colorBefore}
                    data-letter={element} 
                    size={size}
                >
                    {element}
                </Span>
            </Letter>
        )
    })

    return <Grid>{LogoItemsJSX}</Grid>
}

LogoAnimated.defaultProps = {
    color: "black",
    colorAfter: "white",
    colorBefore: "rgba(0, 0, 0, 0.8)",
    size: "100px",
    word: "Logo"
}

export default LogoAnimated