import React from "react"
import { Input } from "@chakra-ui/react"

const InputComponent = ({placeholder, value, children}) => {
    return (
        // <Input 
        //     color="teal"
        //     focusBorderColor="pink.400"
        //     value={value}
        //     size="md"
        //     placeholder={placeholder}
        // >
        //     {/* {children} */}
        //     Hello
        // </Input>
        <>
            <Input placeholder='Basic usage' />
        </>
    )
}

export default InputComponent