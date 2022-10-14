import styled from "styled-components"

export const Container = styled.div`
    align-items: ${props => props.alignItems};
    background: ${props => props.background};
    color: ${props => props.color};
    display: flex;
    flex-direction: ${props => props.flexDirection};
    height: ${props => props.height};
    justify-content: ${props => props.justifyContent};
    width: ${props => props.width};
    position: ${props => props.position};
    padding: ${props => props.padding}
`