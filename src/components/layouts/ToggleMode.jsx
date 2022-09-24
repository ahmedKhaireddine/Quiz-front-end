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
            bg={colorMode === "dark" ? "#242233" : "#ebebeb"}
        >
            {colorMode === "light" ? (
                <SunIcon color="orange.400"/>
            ) : (
                <MoonIcon color="yellow.300"/>
            )}
        </Button>
    )
}

export default ToggleMode