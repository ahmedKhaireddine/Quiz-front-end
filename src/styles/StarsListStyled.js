import styled from "styled-components"

export const Body = styled.div`
    height 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

export const Stars = styled.ul`
    list-style: none;
    margin: auto 80px;
    display: flex;
    flex-direction: column;
    
    li:nth-child(even) {
        font-size: 60px;
        color: #FFB800;
    }

    li:nth-child(odd) {
        font-size: 30px;
        color: #FFD900;
    }
`