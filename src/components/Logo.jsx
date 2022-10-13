import React from "react"
import { useColorModeValue } from "@chakra-ui/react"

import { Link, Span } from "../styles/LogoStyled"

const Logo = ({
    color,
    href,
    margin,
    padding,
    size
}) => {
    const bg = useColorModeValue("#1f939b", "#45DDE7")

    return (
        <Link
            href={href}
            margin={margin}
            padding={padding}
        >
            <Span
                bg={bg}
                color={color}
                margin={margin}
                size={size}
            >
                Quiz
            </Span>
        </Link>
    )
}

Logo.defaultProps = {
    color: "#45DDE7",
    href: "#",
    margin: "0px",
    padding: "0px",
    size: "100px"
}

export default Logo