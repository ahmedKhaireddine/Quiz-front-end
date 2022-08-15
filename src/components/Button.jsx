import React from 'react'

const Button = () => {

    const handleClick = (e) => {
        e.preventDefault()
        console.log('Le lien a été cliqué.')  
    }

    return (
        <div onClick={handleClick} style={{
            width: '100px',
            height: '40px',
            background: 'teal',
            borderRadius: '5px',
            textAlign: 'center',
            verticalAlign: 'center',
            color: "white"
        }} hover={{cursor: 'pointer'}}>Button    
        </div>
    )
}

export default Button