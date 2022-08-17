import React from 'react'
import styled from 'styled-components'

const Btn = styled.div`
    height: 40px;
    width: 200px;
    font-size: 30px;
    color: white;
    background: #45DDE7;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background: #95F6FD;
        color: #636161;
    }
`

const Button = () => {

    const handleClick = (e) => {
        e.preventDefault()
        console.log('Le lien a été cliqué.')  
    }

    return ( 
        <Btn onClick={handleClick} type='button'>Bouton</Btn>
    )
}

export default Button