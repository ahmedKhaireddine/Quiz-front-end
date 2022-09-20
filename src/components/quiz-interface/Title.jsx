import styled from "styled-components"

const Container = styled.h1`
    font-size: ${props => props.fontSize};
    color: ${props => props.color}
`

const Title = ({fontSize, color, children}) => {
    return (
        <Container
            fontSize={fontSize}
            color={color}>
            {children}
        </Container>
    )
}

Title.defaultProps = {
    fontSize: "50px",
    color: "#F1F1F1"
}

export default Title