import React from "react"
import { useColorModeValue } from "@chakra-ui/react"

import { Container } from  "../../styles/CenteredElementsLayoutStyled"

const CenteredElementsLayout = ({ children }) => {
    const color = useColorModeValue("black", "white")

    return (
        <Container
            color={color}
        >
            {children}
        </Container>
    )
}

export default CenteredElementsLayout