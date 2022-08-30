import React from "react"
import styled from "styled-components"

const Link = styled.a`
    text-decoration: none;
    margin: ${props => props.margin};
`

const Span = styled.span`
    font-family: "Henny Penny";
    font-size: ${props => props.size};
    color: #F1F1F1;
    color: ${props => props.color};
`
const Logo = ({
    color,
    href,
    margin,
    size
}) => {
    return (
        <Link href={href} margin={margin}>
            <Span size={size} color={color}>
                Quiz!!!
            </Span>
        </Link>

    )
}

Logo.defaultProps = {
    color: "white",
    href: "#",
    margin: "0px",
    size: "100px"
}

export default Logo