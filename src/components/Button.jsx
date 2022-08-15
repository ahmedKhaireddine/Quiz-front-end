import React from 'react'

const Button = () => {
    return (
        <div style={{
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