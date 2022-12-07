import React from "react"

import Logo from "../Logo"
import { Link3, Nav } from "../../styles/Home/NavbarStyled"

const Navbar = () => {
  return (
    <Nav>
        <div>
          <Logo size="43px"/>
        </div>
        <div>
          <Link3>Inscription</Link3>
          <Link3>Connexion</Link3>
        </div>
    </Nav>
  )
}

export default Navbar