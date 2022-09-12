import { Button, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const ToggleMode = () => {
    const {colorMode, ToggleColorMode} = useColorMode()
    return (
        <Button
            onClick={() => ToggleColorMode()}
            pos="absolute"
            top="0"
            right="0"
            m="1rem"
        >
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
    )
}

export default ToggleMode