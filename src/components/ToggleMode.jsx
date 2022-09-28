import React from "react"
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const ToggleMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue("#CBD5E0", "#718096")

    return (   
        <Button
            onClick={() => toggleColorMode()}
            pos="absolute"
            top="0"
            right="0"
            m="1rem"
            zIndex="10"
            bg={bg}
        >
            {colorMode === "dark" ? <SunIcon color="yellow.300"/> : <MoonIcon color="orange.400"/>}
        </Button>
    )
}

export default ToggleMode