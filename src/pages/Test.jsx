import React from 'react'
import Logo from '../Logo'

const Test = () => {
    return (
        <div>
            <div style={{
                width: "200px",
                height: "200px",
                background: "teal",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                }}>
                <Logo/>
            </div>
        </div>
    )
}

export default Test