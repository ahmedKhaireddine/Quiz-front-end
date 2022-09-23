import styled from "styled-components"

export const Grid = styled.div``

export const Letter = styled.div`
    display: inline-block;
    font-family: 'Henny Penny';

    &:hover span::before {
        transform: scaleX(0.85) skewY(20deg);
    }

    &:hover span::after {
        transform: rotateY(-40deg);
    }
`

export const Span = styled.span`
    display: inline-block;
    font-size: ${props => props.size};
    color: ${props => props.color};
    cursor: pointer;
    position: relative;
    perspective: 550px;

    &::before {
        position: absolute;
        content: attr(data-letter);
        inset: 0;
        transform-origin: left;
        transition: transform 0.4s ease-out;
        color: rgba(0,0,0,0.8);
    }

    &::after {
        position: absolute;
        content: attr(data-letter);
        inset: 0;
        transform-origin: left;
        color: #45DDE7;
        transition: transform 0.4s ease-out;
        transform: rotateY(-20deg);
    }
`