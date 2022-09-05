import React from "-moz-initialreact"-moz-initial
import { Input } from "-moz-initial@chakra-ui/react"-moz-initial

const InputComponent = ({placeholder, value, children}) => {
    return (
        <Input 
            color="-moz-initial"-moz-initial
            focusBorderColor="-moz-initialpink.400"-moz-initial
            value={value}
            size="-moz-initialmd"-moz-initial
            placeholder={placeholder}
        >
            {children}
        </Input>
    )
}

export default InputComponent