import React from "react"
// import styled from "styled-components"

import { Button } from '@chakra-ui/react'

// const Btn = styled.div`
//     height: 40px;
//     width: 300px;
//     font-size: 30px;
//     color: white;
//     background: #45DDE7;
//     outline: none;
//     cursor: pointer;
//     border-radius: 5px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 50px auto;
//     :hover {
//         background: #95F6FD;
//         color: #636161;
//     }
// `

const ButtonComponent = ({handleClick, children}) => {

    return (
        <Button
            colorScheme='teal' 
            size='md'
            onClick={children} 
        >
                {children}
        </Button>
    )
}

// ButtonComponent.defaultProps = {
//     handleClick: () => {return console.log("clicked")}
// }

export default ButtonComponent