import { useColorModeValue } from "@chakra-ui/react"
import React from "react"

import { Link, Span } from "../styles/LogoStyled"

const Logo = ({
    color,
    href,
    margin,
    size
}) => {
    const bg = useColorModeValue("#1f939b", "#45DDE7")
    
    return (
        <Link 
            href={href} 
            margin={margin}
        >
            <Span
                bg={bg}
                color={color}
                size={size} 
            >
                Quiz !!!
            </Span>
        </Link>
    )
}

Logo.defaultProps = {
    color: "#45DDE7",
    href: "#",
    margin: "0px",
    size: "100px"
}

export default Logo