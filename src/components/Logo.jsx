import React from "react"
import styled from "styled-components"

const Span = styled.span`
    font-family: "Henny Penny";
    font-size: ${props => props.size};
    color: #F1F1F1;
`
const Link = styled.a`
    text-decoration: none;
    margin: ${props => props.margin};
`
const Logo = ({ href, margin, size }) => {
    return (
        <Link href={href} margin={margin}>
            <Span size={size}>
                Quiz!!!
            </Span>
        </Link>

    )
}

Logo.defaultProps = {
    href: "#",
    margin: "0px",
    size: "100px"
}

export default Logo