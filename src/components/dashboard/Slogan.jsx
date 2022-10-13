import React from "react"
import styled from "styled-components"

const Box = styled.div`
    heigth: 250px;
    width: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    position: relative;
    z-index: 1;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    // filter: blur(4px);

    p {
        font-size: 50px;
        color: white;
    }
`

const Slogan = () => {
  return (
    <Box>
        <p>Animez vos soirées entre amis</p>
    </Box>
  )
}

export default Slogan