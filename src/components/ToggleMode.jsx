import React from "react"
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const ToggleMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue("#f1f1f1", "#171923")
    const boxShadow = useColorModeValue("rgba(0, 0, 0, 0.1)", "rgba(255, 255, 255, 0.1)")

    return (
        <Button
            onClick={() => toggleColorMode()}
            pos="absolute"
            top="0"
            right="0"
            m="1rem"
            zIndex="10"
            bg={bg}
            boxShadow={boxShadow}
        >
            {colorMode === "dark" ? <SunIcon color="yellow.300"/> : <MoonIcon color="orange.400"/>}
        </Button>
    )
}

export default ToggleMode