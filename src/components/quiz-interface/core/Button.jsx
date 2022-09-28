import React from "react"
import { useColorModeValue } from "@chakra-ui/react"

import { Btn } from "../../../styles/ButtonStyled"

const Button = ({ handleClick, children, width, type }) => {
    const bg = useColorModeValue("grey", "salmon")
    const color = useColorModeValue("purple", "yellow")

    return (
        <Btn
            onClick={handleClick}
            type={type}
            width={width}
            bg={bg}
            color={color}
        >
            {children}
        </Btn>
    )
}

Button.defaultProps = {
    handleClick: () => {},
    type: "button",
    width: "200px"
}

export default Button