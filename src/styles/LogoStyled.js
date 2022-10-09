import styled from "styled-components"

export const Link = styled.a`
    text-decoration: none;
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`

export const Span = styled.span`
    font-family: "Henny Penny";
    font-size: ${props => props.size};
    color: ${props => props.bg};
    margin: ${props => props.margin};
    text-transform: uppercase;
`