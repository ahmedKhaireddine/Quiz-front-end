import React from "react"

import { Button } from "@chakra-ui/react"

const ButtonComponent = ({handleClick, children}) => {

    return (
        <Button
            type="submit"
            size="md"
            variant="outline"
            colorScheme="teal" 
            // onClick={children} 
        >
            {children}
        </Button>
    )
}

// ButtonComponent.defaultProps = {
//     handleClick: () => {return console.log("clicked")}
// }

export default ButtonComponent