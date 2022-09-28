import React from "react"
import { useColorModeValue } from "@chakra-ui/react"

import { Container } from  "../../styles/CenteredElementsLayoutStyled"
import ToggleMode from "../ToggleMode"

const CenteredElementsLayout = ({children}) => {
    // const bg = useColorModeValue('yellow', "red")
    
    return (
        <Container 
            // bg={bg}
        >
            <ToggleMode />
            {children}
        </Container>
    )
}

export default CenteredElementsLayout