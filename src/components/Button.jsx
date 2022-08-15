import React from 'react'
import styled from 'styled-components'

const Btn = styled.div`
    display: block;
    height: 50px;
    width: 100px;
    font-size: 30px;
    color: white;
    padding: 10px 60px;
    background: red;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    :hover {
        background: blue;
    }
`

const Button = () => {

    const handleClick = (e) => {
        e.preventDefault()
        console.log('Le lien a été cliqué.')  
    }

    return ( 
        <Btn onClick={handleClick} type='button'>              
             Bouton
        </Btn>
    )
}

export default Button