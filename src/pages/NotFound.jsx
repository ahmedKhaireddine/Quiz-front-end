import React from "react"

import { Box, Link, Text, Title } from "../styles/NotFoundStyled"
import Flex from "../components/layouts/Flex"
import LeftElement from "../assets/left-element.svg"
import RightElement from "../assets/right-element.svg"

const NotFound = () => {
  return (
    <Flex
      alignItems= "center"
      color="black"
      background="white"
      flexDirection= "column"
      height= "100vh"
      justifyContent= "center"
      width= "100vw"
    >
      <Title>404</Title>
      <Text
        color="#757575"
        size="2em"
      >
        Oups, Cette page est introuvable!
      </Text>
      <Text
        color="#cfcfcf"
        size="1.7em"
      >
        Le lien est peut-être corrompu,
      </Text>
      <Text
        color="#626262"
        size="1em"
      >
        ou la page a peut-être été supprimée
      </Text>
      <Link href="/">Retour à la page d'accueil</Link>
      <Box
        height="380px"
        position="absolute"
        right={0}
        top={0}
        url={RightElement}
        width="380px"
      />
      <Box
        bottom={0}
        height="390px"
        left={0}
        position="absolute"
        url={LeftElement}
        width="380px"
      />
    </Flex>
  )
}

export default NotFound