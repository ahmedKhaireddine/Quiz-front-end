import React from "react"
import { FaRegCopyright } from 'react-icons/fa'

import { BottomSection, FooterContainer, Link1, LinkContainer, LinkSection, LogoSection } from "../../styles/Home/HomeDashboardStyled"
import Logo from "../Logo"
import instagram from "../../assets/logo/instagram.png"
import facebook from "../../assets/logo/facebook.png"
import twitter from "../../assets/logo/twitter.png"

const Footer = () => {
  return (
    <FooterContainer>
        
        <LinkContainer>
            <LinkSection margin="0 200px 0 0" width="170px">
                <h3>Corporate</h3>
                <Link1 
                    heightBefore="1px"
                    href="#"
                >
                    Qui sommes-nous ?
                </Link1>
                <Link1 
                    heightBefore="1px"
                    href="#description"
                >
                    Découvrir
                </Link1>
                <Link1 
                    heightBefore="1px"
                    href="#"
                >
                    Conditions d'utilisation
                </Link1>
            </LinkSection>

            <LinkSection margin="0 0 0 200px" width="200px">
                <h3>Suivez-nous</h3>
                <LogoSection>
                            <Link1 href="#"><img src={instagram}/></Link1>
                            <Link1 href="#"><img src={facebook}/></Link1>
                            <Link1 href="#"><img src={twitter}/></Link1>
                </LogoSection>
            </LinkSection>
        </LinkContainer>
        <hr/>
        <BottomSection>
            <Logo size="20px"/>&nbsp;&nbsp;<FaRegCopyright color ="#e3e1e1"/>&nbsp;Tous droits réservés
        </BottomSection>

    </FooterContainer>
  )
}

export default Footer