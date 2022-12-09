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
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: black;
        padding: 20px; 
        
        h3 {
            font-size: 20px;
            color: black;
            margin-bottom: 8px;
        }

        p {
            font-size: 15px;
            color: rgba(0,0,0,0.5);
        }
    }
`
export const Icone = styled.div`
    height: 90px;
    width: 115px;
`