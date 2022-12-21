import React from 'react'
import Logo from '../Logo'

import { AiFillInstagram } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { FaRegCopyright } from "react-icons/fa"
import { GrTwitter } from "react-icons/gr"
import { 
  Bar, 
  CopyrightContainer, 
  FooterContainer, 
  Link, 
  Link1, 
  LinkContainer, 
  MiddleContainer, 
  SideContainer, 
  VerticalBar 
} from '../../styles/home/FooterStyled'

const Footer1 = () => {
  return (
    <FooterContainer>
      <SideContainer>
        <Bar />
        <Link1 href="#">PRIVACY POLICY</Link1>
        <Link1 href="#">TERMS & CONDITIONS</Link1>
        <Link1 href="#">ABOUT</Link1>
      </SideContainer>

      <MiddleContainer>
        <Logo 
          size="40px"
        />
        <p>Community</p>
        <LinkContainer>
          <Link href="http://www.twitter.com" aria-label="twitter">
            <GrTwitter fontSize={30} color="#1DA1F2"/>
          </Link>
          <Link  href="http://www.facebook.com" aria-label="facebook">
            <BsFacebook fontSize={30} color="#1877F2" />
          </Link>
          <Link href="http://www.intagram.com" aria-label="instagram">
            <AiFillInstagram fontSize={35} color="#E4405F" />
          </Link>
        </LinkContainer>
        <VerticalBar />
        <CopyrightContainer>
          <Logo size="12px" aria-label="logo Quiz"/>&nbsp;&nbsp;<FaRegCopyright />&nbsp;Tous droits réservés
        </CopyrightContainer>
      </MiddleContainer>

      <SideContainer>
        <Bar />
        <Link1 href="#">SHIPPING INFO</Link1>
        <Link1 href="#">RETURNS / EXCHANGES</Link1>
        <Link1 href="#contact">CONTACT</Link1>
      </SideContainer>
    </FooterContainer>
  )
}

export default Footer1