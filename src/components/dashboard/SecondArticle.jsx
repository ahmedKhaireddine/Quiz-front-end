import React from "react"

import Flex from "../layouts/Flex"
import { Image, Text } from "../../styles/HomeDashboardStyled"
import team from "../../assets/images/team.jpg"

const SecondArticle = () => {
  return (
    <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
        position="relative"
    >   
        <Image 
            left="5%"
            image={`url(${team})`}
        /> 
        <Text padding="0 100px 0 630px">
            <div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'snchanged. standard dummy text ever since the 1500s.
                </p>
            </div>
        </Text>      
    </Flex>
  )
}

export default SecondArticle
