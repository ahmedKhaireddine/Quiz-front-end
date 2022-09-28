import React from "react"
import { useColorModeValue } from "@chakra-ui/react"

import { Btn } from "../../../styles/ButtonStyled"

const Button = ({ handleClick, children, width, type }) => {
    const bg = useColorModeValue("#1f939b", "#45DDE7")
    const color = useColorModeValue("#F1F1F1", "rgba(0, 0, 0, 0.8)")
    const hoverBg = useColorModeValue("#02818a", "#9ceff5")
    const hoverColor = useColorModeValue("#fafafa", "rgba(0, 0, 0, 0.8)")

    return (
        <Btn
            bg={bg}
            color={color}
            hoverBg={hoverBg}
            hoverColor={hoverColor}
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