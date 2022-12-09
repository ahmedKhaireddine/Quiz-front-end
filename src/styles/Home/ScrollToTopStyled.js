import styled from "styled-components";

export const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: #1F939B;
    border-radius: 10px 0 10px 0;
    box-shadow: 0px 5px 15px 0px #1F939B;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 50px;
    bottom: 50px;
    cursor: pointer;

    &:hover {
        background: #37a8b0;
        transform: scale(1.05);
    }
`