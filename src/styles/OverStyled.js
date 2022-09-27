import styled from "styled-components"

export const Text = styled.p`
    color: white;
    font-size: ${props => props.size};
    margin-bottom: 20px;
`

export const SmallText = styled.small`
    position: fixed;
    bottom: 0;
    padding: 10px;
    color: white;
`