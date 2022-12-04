import styled from "styled-components"

export const ContactSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #F5F5F6;
`

export const ContactContainer = styled.div`
    width: 820px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2 {
        text-align: center;
        font-size: 43px;
        font-weight: bold;
        color: #1F939B;
        margin-bottom: 30px;
    };
    p {
        font-size: 20px;
        text-align: center;
        color: #000;
        margin-bottom: 30px;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const InputName = styled.div`
    width: 405px;
`

export const InputMail = styled.div`
    width: 405px;
`

export const TextareaContainer = styled.div`
    width: 820px;
    margin-bottom: 30px;
`

