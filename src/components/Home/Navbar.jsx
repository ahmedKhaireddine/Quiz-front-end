import React from "react"

import Logo from "../Logo"
import { Link3, Nav } from "../../styles/home/NavbarStyled"

const Navbar = () => {
  return (
    <Nav>
        <div>
          <Logo size="28px"/>
        </div>
        <div>
          <Link3>Inscription</Link3>
          <Link3>Connexion</Link3>
        </div>
    </Nav>
  )
}

export default Navbar