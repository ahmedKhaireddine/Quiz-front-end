import React from "react"
import { ColorMode } from "@chakra-ui/react"

import { Btn } from "../../../styles/ButtonStyled"

const Button = ({ handleClick, children, width, type }) => {
    return (
        <Btn
            onClick={handleClick}
            type={type}
            width={width}
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