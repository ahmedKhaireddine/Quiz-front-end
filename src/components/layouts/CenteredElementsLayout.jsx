import React from "react"
import { useColorModeValue } from "@chakra-ui/react"

import { Container } from  "../../styles/CenteredElementsLayoutStyled"
import ToggleMode from "../ToggleMode"

const CenteredElementsLayout = ({children}) => {
    // const bg = useColorModeValue('red', 'green')

    return (
        <Container>
            <ToggleMode />
            {children}
        </Container>
    )
}

export default CenteredElementsLayout