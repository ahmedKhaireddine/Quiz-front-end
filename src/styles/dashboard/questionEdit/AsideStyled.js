import styled from "styled-components"

export const Box = styled.div`
    height: 100vh;
    width: 350px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 30px;
    overflow-y: auto;

    li {
        list-style-type: none;
    }

    li span {
        font-size: 20px;
        font-weight: bold;
        color: #1f939b;
        margin-bottom: 10px;
    }
`
