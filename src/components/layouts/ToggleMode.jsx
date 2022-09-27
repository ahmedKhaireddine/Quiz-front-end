import React from "react"
import { Button, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const ToggleMode = () => {
    const {colorMode, toggleColorMode} = useColorMode()
<<<<<<< HEAD
    
    return (
=======
    return (   
>>>>>>> 5980a0de396bdb48160e54213a3ee57adacaf729
        <Button
            onClick={() => toggleColorMode()}
            pos="absolute"
            top="0"
            right="0"
            m="1rem"
            bg={colorMode === "dark" ? "#242233" : "#e6e6e6"}
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