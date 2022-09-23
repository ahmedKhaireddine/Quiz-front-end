import React from "react"

import { Item, MagicItems, Text } from "../../styles/OverStyled"
import Logo from "../Logo"

const Box = styled.div`
    filter: drop-shadow(0px 1px 4px rgba(69, 221, 231, 0.1));
`

const Polygon = styled.div`
    width: 700px;
    padding: 200px 0px;
    box-sizing: border-box;
    position: relative;
    background-color: #2d3359;
    -webkit-clip-path: polygon(0 30%, 11% 30%, 11% 25%, 89% 25%, 89% 30%, 100% 30%, 95% 50%, 100% 70%, 89% 70%, 89% 65%, 11% 65%, 11% 70%, 0 70%, 5% 50%);
    clip-path: polygon(0 30%, 11% 30%, 11% 25%, 89% 25%, 89% 30%, 100% 30%, 95% 50%, 100% 70%, 89% 70%, 89% 65%, 11% 65%, 11% 70%, 0 70%, 5% 50%);clip-path: polygon(0 30%, 11% 30%, 11% 25%, 89% 25%, 89% 30%, 100% 30%, 95% 50%, 100% 70%, 89% 70%, 89% 65%, 11% 65%, 11% 70%, 0 70%, 5% 50%);
`
export const Text = styled.p`
    color: white;
    position: absolute;
    font-size: ${props => props.size};
    top: ${props => props.top};
    left: ${props => props.left};
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
        left: 11%;
        top: 25%;
        font-size: 18px;
    }

    li:nth-child(2) {
        left: 1%;
        top: 30%;
        font-size: 18px;
    }

    li:nth-child(3) {
        left: 5%;
        top: 47%;
        font-size: 18px;
    }

    li:nth-child(4) {
        left: 1%;
        top: 65%;
        font-size: 18px;
    }

    li:nth-child(5) {
        left: 8%;
        top: 65%;
        font-size: 18px;
    }

    li:nth-child(6) {
        left: 11%;
        top: 60%;
        font-size: 18px;
    }

    li:nth-child(7) {
        right: 11%;
        top: 25%;
        font-size: 18px;
    }

    li:nth-child(8) {
        right: 1%;
        top: 30%;
        font-size: 18px;
    }

    li:nth-child(9) {
        right: 5%;
        top: 47%;
        font-size: 18px;
    }

    li:nth-child(10) {
        right: 1%;
        top: 65%;
        font-size: 18px;
    }

    li:nth-child(11) {
        right: 8%;
        top: 65%;
        font-size: 18px;
    }

    li:nth-child(12) {
        right: 11%;
        top: 60%;
        font-size: 18px;
    }

    li:nth-child(13) {
        left: 30%;
        top: 25%;
        font-size: 18px;
    }

    li:nth-child(14) {
        left: 49%;
        top: 25%;
        font-size: 18px;
    }

    li:nth-child(15) {
        right: 30%;
        top: 25%;
        font-size: 18px;
    }

    li:nth-child(16) {
        left: 30%;
        top: 60%;
        font-size: 18px;
    }

    li:nth-child(17) {
        left: 49%;
        top: 60%;
        font-size: 18px;
    }

    li:nth-child(18) {
        right: 30%;
        top: 60%;
        font-size: 18px;
    }
`

const SmallText = styled.small`
    position: fixed;
    bottom: 0;
    padding: 10px;
    color: white;
`

const Over = (props) => {
    return (
        <>
            <Box>
                <Polygon>
                    <Text size="2.5em" top="33%" left="35%">Félicitations!</Text>
                    <Text size="2em" top="47%" left="24%">Vous avez terminé le quiz!</Text>
                <MagicItems>
                    {Array(50).fill().map((el, index) => <Item key={index}>✨</Item>)}
                </MagicItems>
                </Polygon>
            </Box>
            <SmallText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SmallText>
        </>
    )
}

export default Over