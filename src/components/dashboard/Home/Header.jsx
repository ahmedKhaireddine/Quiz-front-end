import React from "react"

import Navbar from "./Navbar"
import { BoxDiscover, BoxSlogan, Button, Container } from "../../../styles/HomeDashboardStyled"

const Header = () => {
  return (
    <Container>
      <Navbar/>
        <BoxSlogan>
            <p>Animez vos soirées entre amis</p>
        </BoxSlogan>
        <BoxDiscover>
            <Button>
                <a href="#description">Découvrir</a>
            </Button>
        </BoxDiscover>
    </Container>
  )
}

export default Header