import React from "react"

// import Button from "../quiz-interface/core/Button"
import { BoxDiscover, BoxSlogan, Button, Container } from "../../styles/HomeDashboardStyled"

const Header = () => {
  return (
    <Container>
        <BoxSlogan>
            <p>Animez vos soirées entre amis</p>
        </BoxSlogan>
        <BoxDiscover>
          <a href="#description">
            <Button>Découvrir</Button>
          </a>
        </BoxDiscover>
    </Container>
  )
}

export default Header