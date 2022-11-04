import styled from "styled-components"

export const Container = styled.div`
    align-items: ${props => props.alignItems};
    background: ${props => props.background};
    ${props => props.borderRadius && `border-raduis: ${props.borderRadius};`}
    color: ${props => props.color};
    display: flex;
    flex-direction: ${props => props.flexDirection};
    ${props => props.height && `height: ${props.height}`};
    justify-content: ${props => props.justifyContent};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    width: ${props => props.width};
`