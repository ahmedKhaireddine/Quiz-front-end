import styled, { keyframes } from "styled-components"

export const appearance = keyframes`
    0% {
        transform: translateY(25px);
    }
    30% {
        transform: translateY(0px);
        opacity: 1;
    }
    70% {
        transform: translateY(0px);
        opacity: 1;
    }
    100% {
        transform: translateY(25px);
    }
`

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

export const Alert = styled.div`
    height: 50px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 55%;
    right: 42.2%;
    background: rgba(31, 147, 155, 0.8);
    overflow: hidden;
    color: white;

    -webkit-animation-name: ${appearance}; 
    animation-name: ${appearance};
    -webikt-animation-duration: 4500ms;
    animation-duration: 4500ms;
    -webikt-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    opacity: 0;
`

// export const Alert =  styled.div`
//     background-color: #1f939b;
//     background-opacity: 0.7;
// `