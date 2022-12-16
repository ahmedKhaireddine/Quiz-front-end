import styled from "styled-components"

export const ContactContainer = styled.div`
    width: 820px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    p {
        font-size: 18px;
        text-align: center;
        letter-spacing: 1px;
        color: #000;
        margin-bottom: 32px;
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

export const SelectContainer = styled.div`
  margin-bottom: 10px;
`

export const Button = styled.button`
    width: 200px;
    display: block;
    margin: 43px auto 0px;
    padding: 0 10px;
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 50px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: linear-gradient(0deg, rgba(19, 113, 120, 1) 0%, rgba(87, 204, 212, 1) 100%);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);

    &:hover {
        background: #37a8b0;
    }
`