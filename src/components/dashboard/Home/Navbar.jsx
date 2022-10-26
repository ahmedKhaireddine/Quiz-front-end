import React from "react"

import { Link1, Link2, Link3, Nav } from "../../../styles/HomeDashboardStyled"

const Navbar = () => {
  return (
    <Nav>
        <Link1 
          size="27px"
          marginRight="70px"
        >
          ABOUT
        </Link1>
        <div>
            <Link2>
                <span className="span">CONNEXION</span>
                <span className="span">CONNEXION</span>
            </Link2>
        </div>
        <Link3>INSCRIPTION</Link3>
    </Nav>
  )
}

export default Navbar