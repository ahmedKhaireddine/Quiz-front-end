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
    text-transform: uppercase;

    &::before {
        position: absolute;
        content: attr(data-letter);
        inset: 0;
        transform-origin: left;
        transition: transform 0.4s ease-out;
        color: ${props => props.colorBefore};
    }

    &::after {
        position: absolute;
        content: attr(data-letter);
        inset: 0;
        transform-origin: left;
        color: ${props => props.colorAfter};
        transition: transform 0.4s ease-out;
        transform: rotateY(-20deg);
    }
`