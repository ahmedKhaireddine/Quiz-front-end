import React from "react"

import Flex from "../../layouts/Flex"
import { Image, Text } from "../../../styles/HomeDashboardStyled"
import team from "../../../assets/images/team.jpg"

const FirstArticle = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      position="relative"
      id="description"
      // padding="0 0 0 170px"
    >     
      <Text 
        padding="0 600px 0 100px"
      >
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'snchanged. standard dummy text ever since the 1500s.
          </p>
        </div>
      </Text>
      <Image 
        left="55%"
        image={`url(${team})`}
      />         
    </Flex>
  )
}

export default FirstArticle