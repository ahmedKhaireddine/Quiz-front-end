import React from 'react'
import Logo from '../components/Logo'

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
} from './Footer1Styled'

const Footer1 = () => {
  return (
    <FooterContainer>
      <SideContainer>
        <Bar />
        <Link1>PRIVACY POLICY</Link1>
        <Link1>TERMS & CONDITIONS</Link1>
        <Link1>ABOUT</Link1>
      </SideContainer>

      <MiddleContainer>
        <Logo 
          size="40px"
        />
        <p>Community</p>
        <LinkContainer>
          <Link href="http://www.twitter.com">
            <GrTwitter fontSize={30} color="#1DA1F2"/>
          </Link>
          <Link  href="http://www.facebook.com">
            <BsFacebook fontSize={30} color="#1877F2"/>
          </Link>
          <Link href="http://www.intagram.com">
            <AiFillInstagram fontSize={35} color="#E4405F"/>
          </Link>
        </LinkContainer>
        <VerticalBar />
        <CopyrightContainer>
          <Logo size="12px"/>&nbsp;&nbsp;<FaRegCopyright />&nbsp;Tous droits réservés
        </CopyrightContainer>
      </MiddleContainer>

      <SideContainer>
        <Bar />
        <Link1>SHIPPING INFO</Link1>
        <Link1>RETURNS / EXCHANGES</Link1>
        <Link1>CONTACT</Link1>
      </SideContainer>
    </FooterContainer>
  )
}

export default Footer1