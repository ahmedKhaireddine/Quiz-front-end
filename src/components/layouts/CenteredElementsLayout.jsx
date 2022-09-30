import React from "react"
import { useColorModeValue } from "@chakra-ui/react"

import { Container } from  "../../styles/CenteredElementsLayoutStyled"
import ToggleMode from "../ToggleMode"

const CenteredElementsLayout = ({ children }) => {
    const color = useColorModeValue("black", "white")

    return (
        <Container
            color={color}
        >
            <ToggleMode />
            {children}
        </Container>
    )
}

export default CenteredElementsLayout