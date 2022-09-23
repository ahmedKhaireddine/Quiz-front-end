import React from "react"
import styled from "styled-components"

const Btn = styled.button`
    font-size: 20px;
    width: ${props => props.width};
    color: white;
    background: #45DDE7;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    padding: 7px 30px;
    :hover {
        background: #95F6FD;
        color: #636161;
    }
`

const Button = ({ handleClick, children, width, type }) => {
    return (
        <Btn
            onClick={handleClick}
            type={type}
            width={width}
        >
            {children}
        </Btn>
    )
}

Button.defaultProps = {
    handleClick: () => {},
    type: "button",
    width: "200px"
}

export default Button