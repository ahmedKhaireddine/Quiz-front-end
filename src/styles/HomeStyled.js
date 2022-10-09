import styled from "styled-components"

export const Footer = styled.footer`
    text-align: center;
    position: fixed;
    bottom: 0;
`

export const Link = styled.a`
    color: ${props => props.color};
    &:hover {
        text-decoration: underline;
    }
`

export const SmallText = styled.small``

export const Text = styled.p``
