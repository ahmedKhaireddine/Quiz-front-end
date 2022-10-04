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
    width
}) => {

        return (
        <Container 
            alignItems={alignItems}
            background={background}
            color={color}
            flexDirection={flexDirection}
            height={height}
            justifyContent={justifyContent}
            width={width}
            // background: ${props => props.bg};
        >
            {children}
        </Container>
    )
}

Flex.defaultProps={
    alignItems: "normal",
    background: "transparent",
    color: "transparent",
    flexDirection: "row",
    height: "100px",
    justifyContent: "normal",
    width: "100px"
}

export default Flex