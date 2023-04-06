import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: grid;
  grid-template-columns: ${props => props.gridTemplateColumns};
  grid-template-rows: ${props => props.gridTemplateRows};
`

const GridTest = ({ children }) => {
  return (
    <Container
      height= "100vh"
      gridTemplateColumns="250px 1fr 300px"
      gridTemplateRows="150px 1fr"
      width= "100vw"
    >
      {children}
    </Container>
  )
}

export default GridTest