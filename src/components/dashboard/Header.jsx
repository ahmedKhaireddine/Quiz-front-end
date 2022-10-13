import React from "react"

import Button from "../quiz-interface/core/Button"
import { BoxDiscover, BoxSlogan, Container } from "../../styles/HomeDashboardStyled"

const Header = () => {
  return (
    <Container>
        <BoxSlogan>
            <p>Animez vos soirées entre amis</p>
        </BoxSlogan>
        <BoxDiscover>
            <Button color="white">
                Découvrir
            </Button>
        </BoxDiscover>
    </Container>
  )
}

export default Header