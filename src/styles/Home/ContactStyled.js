import styled from "styled-components"

export const Button = styled.button`
    width: 150px;
    margin: 40px auto 0;
    color: #fff;
    padding: 0 10px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 50px;
    cursor: pointer;
    display: inline-block;
    border: none;
    border-radius: 5px;
    background: linear-gradient(0deg, rgba(19, 113, 120, 1) 0%, rgba(87, 204, 212, 1) 100%);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);

    &:hover {
        background: #37a8b0;
    }
`

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

