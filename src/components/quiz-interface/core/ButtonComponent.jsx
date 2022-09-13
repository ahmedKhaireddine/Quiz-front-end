import React from "react"

import { Button, useToast } from "@chakra-ui/react"

const ButtonComponent = ({handleClick, px, children}) => {
    const toast = useToast()

    return (
        <Button
            type="submit"
            size="md"
            px={px}
            variant="outline"
            colorScheme="teal" 
            onClick={() => toast({
                isClosable: true,
                title: "Code Valide",
                description:"Vous pouvez accéder au Quiz",
                duration:3000,
                position:"bottom-right",
                status:"success",
                })
            }
        >
            {children}
        </Button>
    )
}

// ButtonComponent.defaultProps = {
//     handleClick: () => {return console.log("clicked")}
// }

export default ButtonComponent