import React from "react"
import { Button, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const ToggleMode = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <Button
            onClick={() => toggleColorMode()}
            pos="absolute"
            top="0"
            right="0"
            m="1rem"
        >
            {colorMode === "dark" ? (
                <SunIcon color="yellow.300"/>
            ) : (
                <MoonIcon color="orange.400"/>
            )}
        </Button>
    )
}

export default ToggleMode