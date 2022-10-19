import React from "react"
import { Heading } from "@chakra-ui/react"
import { FaRegCopyright } from 'react-icons/fa'

import { BottomSection, FooterContainer, LinkContainer, LinkSection } from "../../../styles/HomeDashboardStyled"
import Logo from "../../Logo"
const Footer = () => {
  return (
    <FooterContainer>
        
        <LinkContainer>
            <LinkSection margin="0 150px 0 0">
                <h3>Corporate</h3>
                <a href="#">Qui sommes-nous ?</a>
                <a href="#description">Découvrir</a>
                <a href="#">Conditions d'utilisation</a>
            </LinkSection>

            <LinkSection margin="0 0 0 150px">
                <h3>Suivez-nous</h3>
            </LinkSection>
        </LinkContainer>
        
        <BottomSection>
            <Logo size="20px"/>&nbsp;<FaRegCopyright/>&nbsp;Tous droits réservés
        </BottomSection>

    </FooterContainer>
  )
}

export default Footer