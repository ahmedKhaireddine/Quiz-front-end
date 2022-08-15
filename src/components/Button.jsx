import React from 'react'
import styled from 'styled-components'

const Btn = styled.div`
    display: block;
    height: 60px;
    width: 100px;
    margin: 150px auto 0;
    font-size: 30px;
    font-weight: lighter;
    color: white;
    padding: 25px 80px;
    background: teal;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
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