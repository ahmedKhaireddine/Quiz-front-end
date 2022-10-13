import { position } from "@chakra-ui/react"
import React from "react"

import { Container } from  "../../styles/FlexStyled"

const Flex = ({
    alignItems,
    background,
    children,
    color,
    flexDirection,
    height,
    justifyContent,
    width,
    position
}) => {
    return (
        <Container
            alignItems= {alignItems}
            background= {background}
            color= {color}
            flexDirection= {flexDirection}
            height= {height}
            justifyContent= {justifyContent}
            width= {width}
            position={position}
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
    height: "100px",
    justifyContent: "normal",
    width: "100px",
    position: ""
}

export default Flex;