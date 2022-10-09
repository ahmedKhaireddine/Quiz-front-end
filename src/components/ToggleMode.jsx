import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import React from "react"

const ToggleMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    const bg = useColorModeValue("#f1f1f1", "#171923")
    const boxShadow = useColorModeValue("rgba(0, 0, 0, 0.1)", "rgba(255, 255, 255, 0.1)")

    return (
        <Button
            bg={bg}
            boxShadow={boxShadow}
            m="1rem"
            onClick={() => toggleColorMode()}
            pos="absolute"
            right="0"
            top="0"
            zIndex="10"
        >
            {colorMode === "dark" ? <SunIcon color="yellow.300"/> : <MoonIcon color="orange.400"/>}
        </Button>
    )
}

export default ToggleMode