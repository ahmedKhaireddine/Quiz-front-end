import styled from "styled-components"

export const Btn = styled.button`
    font-size: 20px;
    width: ${props => props.width};
    color: ${props => props.color};
    background: ${props => props.bg};
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    padding: 7px 30px;

    :hover {
        opacity: 0.9;
    }
`