import React from "react"

import Flex from "../../layouts/Flex"
import Slider from "./Slider"
// import { Section } from "../../../styles/HomeDashboardStyled"

const ThirdArticle = () => {
  return (
        <Flex
            justifyContent="center"
            alignItems="center"
            height="100vh"
            width="100vw"
        >     
            {/* <Section>
              <img src="../../assets/images.tablet.svg" alt="tablette" /> 
            </Section> */}
            <Slider />
        </Flex>
  )
}

export default ThirdArticle