import React from "react"

import styled from "styled-components"

const Btn = styled.div`
    font-size: 20px;
    color: white;
    background: #45DDE7;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    padding: 10px 30px;
    :hover {
        background: #95F6FD;
        color: #636161;
    }
`

const Button = ({ handleClick, children }) => {
    return (
        <Btn
            onClick={handleClick}
            type="button"
        >
            {children}
        </Btn>
    )
}

Button.defaultProps = {
    handleClick: () => console.log("clicked")
}

export default Button