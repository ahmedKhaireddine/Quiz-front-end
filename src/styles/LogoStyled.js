import styled from "styled-components"

export const Link = styled.a`
    text-decoration: none;
    margin: ${props => props.margin};
`

export const Span = styled.span`
    font-family: "Henny Penny";
    font-size: ${props => props.size};
    color: ${props => props.color};
`