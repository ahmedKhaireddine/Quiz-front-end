import React from "react"

import { Container } from  "../../styles/CenteredElementsLayoutStyled"

const CenteredElementsLayout = ({children}) => {    
    return (
        <Container>
            {children}
        </Container>
    )
}

export default CenteredElementsLayout