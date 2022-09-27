import React from "react"

import { Container } from  "../../styles/CenteredElementsLayoutStyled"
import ToggleMode from "../ToggleMode"

const CenteredElementsLayout = ({children}) => {    
    return (
        <Container>
            <ToggleMode />
            {children}
        </Container>
    )
}

export default CenteredElementsLayout