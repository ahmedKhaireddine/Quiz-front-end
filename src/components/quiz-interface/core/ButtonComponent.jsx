import React from "react"

import { Button, useToast } from "@chakra-ui/react"

const ButtonComponent = ({handleClick, onClick, px, children}) => {

    return (
        <Button
            type="submit"
            size="md"
            px={px}
            variant="outline"
            colorScheme="teal"
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

ButtonComponent.defaultProps = {
    handleClick: () => {return console.log("clicked")}
}

export default ButtonComponent