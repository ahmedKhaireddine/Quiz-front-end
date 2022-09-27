import React from "react"

import { Link, Span } from "../styles/LogoStyled"

const Logo = ({
    color,
    href,
    margin,
    size
}) => {
    return (
        <Link href={href} margin={margin}>
            <Span size={size} color={color}>
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