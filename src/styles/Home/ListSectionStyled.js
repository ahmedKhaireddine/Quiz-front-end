import styled from "styled-components";

export const ListContainer = styled.div`
    max-width: 1300px;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-gap: 20px;
    justify-content: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        color: black;
        padding: 20px;
        div {
            border: 1px solid;
            height: 90px;
            width: 115px;
        }
        h3 {
            font-size: 20px;
            color: black;
        }
        p {
            font-size: 13px;
            color: rgba(0,0,0,0.5);
        }
    }
`