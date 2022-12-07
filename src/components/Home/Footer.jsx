import React from "react"
import { FaRegCopyright } from 'react-icons/fa'

import { BottomSection, ColumnContainer, FooterContainer, LeftContainer, LinkContainer, LogoSection, RightContainer } from "../../styles/Home/FooterStyled"
import { Link1 } from "../../styles/Home/HomeDashboardStyled"
import Logo from "../Logo"
import instagram from "../../assets/logo/instagram.png"
import facebook from "../../assets/logo/facebook.png"
import twitter from "../../assets/logo/twitter.png"

const Footer = () => {
  return (
    <FooterContainer>
        
        <LinkContainer>
            <LeftContainer>
                <ColumnContainer margin="0 200px 0 0" width="170px">
                    <h3>Corporate</h3>
                    <p>
                        <Link1 
                            heightBefore="1px"
                            href="#"
                        >
                            Qui sommes-nous ?
                        </Link1>
                    </p>
                    <p>
                        <Link1 
                            heightBefore="1px"
                            href="#description"
                        >
                            Découvrir
                        </Link1>
                    </p>
                    <p>
                        <Link1 
                            heightBefore="1px"
                            href="#"
                        >
                            Conditions d'utilisation
                        </Link1>
                    </p>
                </ColumnContainer>
            </LeftContainer>

            <RightContainer>
                <ColumnContainer margin="0 0 0 200px" width="200px">
                    <h3>Suivez-nous</h3>
                    <LogoSection>
                                <a href="#"><img src={instagram}/></a>
                                <a href="#"><img src={facebook}/></a>
                                <a href="#"><img src={twitter}/></a>
                    </LogoSection>
                </ColumnContainer>
            </RightContainer>
        </LinkContainer>
        <hr/>
        <BottomSection>
            <Logo size="20px"/>&nbsp;&nbsp;<FaRegCopyright color ="#e3e1e1"/>&nbsp;Tous droits réservés
        </BottomSection>

    </FooterContainer>
  )
}

export default Footer