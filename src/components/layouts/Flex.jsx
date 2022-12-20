import React from "react"

import { Container } from  "../../styles/FlexStyled"

const Flex = ({
    alignItems,
    background,
    borderRadius,
    boxShadow,
    children,
    color,
    flexDirection,
    height,
    justifyContent,
    margin,
    padding,
    width,
}) => {
    return (
        <Container
            alignItems= {alignItems}
            background= {background}
            borderRadius= {borderRadius}
            boxShadow= {boxShadow}
            color= {color}
            flexDirection= {flexDirection}
            height={height}
            justifyContent= {justifyContent}
            margin= {margin}
            padding= {padding}
            width= {width}
        >
            {children}
        </Container>
    )
}

Flex.defaultProps= {
    alignItems: "normal",
    background: "transparent",
    color: "transparent",
    flexDirection: "row",
    justifyContent: "normal",
    margin: "0",
    padding: "0",
    width: "100px"
}

export default Flex