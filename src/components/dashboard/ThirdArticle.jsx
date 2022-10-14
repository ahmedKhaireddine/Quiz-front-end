import React from "react"

import Flex from "../layouts/Flex"
import { Section } from "../../styles/HomeDashboardStyled"

const ThirdArticle = () => {
  return (
        <Flex
            justifyContent="center"
            alignItems="center"
            height="100vh"
            width="100vw"
        >     
            <Section>
              <img src="../../assets/images.tablet.svg" alt="tablette" /> 
            </Section>
        </Flex>
  )
}

export default ThirdArticle