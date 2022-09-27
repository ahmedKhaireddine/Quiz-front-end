import React from "react"

import { Grid, Letter, Span } from "../styles/LogoAnimatedStyled"

const LogoAnimated = ({ color, colorAfter, colorBefore, margin, size, word }) => {
    const LogoItemsJSX = word.split("").map((element, index) => {
        return (
            <Letter key={index}>
                <Span 
                    data-letter={element} 
                    color={color}
                    colorAfter={colorAfter}
                    colorBefore={colorBefore}
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
    margin: "0px",
    size: "100px",
    word: "Logo",
    colorAfter: "white",
    colorBefore: "rgba(0, 0, 0, 0.8)"
}

export default LogoAnimated