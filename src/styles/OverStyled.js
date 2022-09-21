import styled from "styled-components"

export const Item = styled.li`
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
`
export const MagicItems = styled.ul`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;

    li:nth-child(1) {
        left: 30%;
        top: 35%;
        font-size: 50px;
    }

    li:nth-child(2) {
        left: 1%;
        top: 30%;
        font-size: 50px;
    }

    li:nth-child(3) {
        left: 5%;
        top: 47%;
        font-size: 50px;
    }

    li:nth-child(4) {
        left: 1%;
        top: 65%;
        font-size: 50px;
    }

    li:nth-child(5) {
        left: 9%;
        top: 65%;
        font-size: 20px;
    }

    li:nth-child(6) {
        left: 11%;
        top: 60%;
        font-size: 20px;
    }

    li:nth-child(7) {
        right: 11%;
        top: 44%;
        font-size: 20px;
    }

    li:nth-child(8) {
        left: 68%;
        top: 51%;
        font-size: 20px;
    }
`

export const Text = styled.p`
    color: white;
    font-size: ${props => props.size};
    background-color: #2d3359;
`