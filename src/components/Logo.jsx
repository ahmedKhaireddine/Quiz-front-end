import React from "react"
import styled from "styled-components"

const Span = styled.span`
    font-family: 'Henny Penny';
    font-size: ${props => props.size};
    color: #F1F1F1;
`

const Link = styled.a`
    text-decoration: none;
`
const Logo = ({href, size}) => {
    return (
        <Link href={href}>
            <Span 
                size={size}
            >
                Quiz
            </Span>
        </Link>
        
    )
}

Logo.defaultProps = {
    href: '#',
    size: '100px'
}

export default Logo