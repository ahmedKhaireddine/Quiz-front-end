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
    id,
    justifyContent,
    width,
    position,
    padding,
}) => {
    return (
        <Container
            alignItems= {alignItems}
            background= {background}
            color= {color}
            flexDirection= {flexDirection}
            height= {height}
            id={id}
            justifyContent= {justifyContent}
            width= {width}
            position={position}
            padding={padding}
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
    position: "",
    padding: "",
    id: "",
}

export default Flex
