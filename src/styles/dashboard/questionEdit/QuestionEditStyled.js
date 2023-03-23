import styled from "styled-components"

export const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
`

export const Title = styled.h2`
    font-size: 30px;
    font-weight: bold;
    color: #1f939b;
    margin-bottom: 20px;
`

export const Subtitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: #1f939b;
    margin-bottom: 10px;
`

export const Card = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const TimeContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0px;

    h3 {
        margin-right: 15px;
    }
    
    span {
        margin-left: 15px;
    }
`

export const AnswerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    input {
        width: 350px;
    }
`

export const Input = styled.input`

`