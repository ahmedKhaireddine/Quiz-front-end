import styled from "styled-components"

export const Btn = styled.button`
    font-size: 17px;
    width: ${props => props.width};
    color: ${props => props.color};
    background-color: ${props => props.bg};
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    padding: 7px 30px;
    border: 1px solid rgba(255, 255, 255, 0);

    :hover {
        background-color: ${props => props.hoverBg};
        color: ${props => props.hoverColor};
    }
`