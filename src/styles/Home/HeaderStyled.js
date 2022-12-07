import styled from "styled-components";

import people from "../../assets/images/people.jpg";

export const Container = styled.div`
    height: 100vh;
    width: 100vW;
    background-image: url(${people});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
`

export const SloganContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    z-index: 1;
    background: inherit;
    padding: 20px 20px;
    display: flex;
    position: relative;
    margin-top: 60px;
    margin-left: 100px;
    // top: 12%;
    // left: 15%;
    // align-items: center;
    // text-align: center;
    
    h2 {
        font-size: 45px;
        line-height: 50px;
        font-weight: bold;
        color: #1F939B;
    }

    &::before {
        content: "";
        position: absolute;
        background: inherit;
        z-index: -1;
        inset: 0;
        filter: blur(8px);
    }
    
    p {
        margin: 30px 0;
        font-size: 18px;
        color: white;
    }
`

export const Button = styled.a`
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
    position: relative;
    left: 16%;

    span {
        margin-top: 16px;
        float: right;
        margin-left: 20px;
        display: none;
    }

    &:hover {
        background: #37a8b0;
        span {
            display: flex;
        }
    }
`

// export const Button = styled.a`
//     color: #fff;
//     padding: 0 10px;
//     font-family: 'Lato', sans-serif;
//     font-size: 18px;
//     font-weight: 500;
//     letter-spacing: 2px;
//     line-height: 50px;
//     cursor: pointer;
//     display: inline-block;
//     border: none;
//     border-radius: 3px;
//     background: linear-gradient(0deg, rgba(19, 113, 120, 1) 0%, rgba(87, 204, 212, 1) 100%);
//     position: relative;
//     left: 16%;

//     span {
//         margin-top: 16px;
//         float: right;
//         margin-left: 20px;
//         display: none;
//     }

//     &:hover {
//         background: #37a8b0;
//         span {
//             display: flex;
//         }
//     }

//     &::before, ::after {
//         content: '';
//         position: absolute;
//         top: 0;
//         right: 0;
//         height: 2px;
//         width: 0;
//         background: #f1f1f1;
//         box-shadow:
//         -1px -1px 5px 0px #fff,
//         7px 7px 20px 0px #0003,
//         4px 4px 5px 0px #0002;
//         transition: 400ms ease all;
//     }

//     &::before {
//         right: inherit;
//         top: inherit;
//         left: 0;
//         bottom: 0;
//     }

//     &:hover::before, :hover::after {
//         width: 100%;
//         transition: 800ms ease all;
//     }
// `

