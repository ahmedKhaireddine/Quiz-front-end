import styled from "styled-components"

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
`

export const Text = styled.p`
    color: ${props => props.color};
    font-size: ${props => props.size};
    margin-bottom: 20px;
    font-family: "Henny Penny";
    text-transform: uppercase;
    letter-spacing: .5rem;
    font-weight: bold;
`

export const SmallText = styled.small``