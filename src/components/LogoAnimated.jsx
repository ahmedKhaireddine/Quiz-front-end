import React from "react"

import { Grid, Letter, Span } from "../styles/LogoAnimatedStyled"

const LogoAnimated = ({ color, href, margin, size, word }) => {
    const LogoItemsJSX = word.split("").map((element, index) => {
        return (
            <Letter key={index}>
                <Span 
                    data-letter={element} 
                    color={color}
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
    href: "#",
    margin: "0px",
    size: "100px",
    word: "Logo"
}

export default LogoAnimated