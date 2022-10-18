import styled, { StyleSheetManager } from "styled-components"

export const Carousel = styled.div`
    padding: 20px;
    perspective: 500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
       flex: 0 0 auto; 
    }
`

export const CarouselImages = styled.div`
    margin: 0;
    width: 400px;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    transform-origin: 50% 50% -482.8427124746px;

    img {
        width: 100%;
        padding: 0 40px;
        opacity: 0.9;
    }

    img:not(:first-of-type) {
          position: absolute;
        left: 0;
        top: 0;
        transform-origin: 50% 50% -482.8427124746px;
    }

    img:nth-child(2) {
        transform: rotateY(0.7853981634rad);
    }

    img:nth-child(3) {
        transform: rotateY(1.5707963268rad);
    }

    img:nth-child(4) {
        transform: rotateY(2.3561944902rad);
    }

    img:nth-child(5) {
        transform: rotateY(3.1415926536rad);
    }

    img:nth-child(6) {
        transform: rotateY(3.926990817rad);
    }

    img:nth-child(7) {
        transform: rotateY(4.7123889804rad);
    }

    img:nth-child(8) {
        transform: rotateY(5.4977871438rad);
    }
`

export const Nav = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0 0;
`

export const Arrow = styled.div`
    flex: 0 0 auto;
    margin: 0 5px;
    cursor: pointer;
    color: #333;
    background: none;
    padding: 5px 10px;
`

// .slider__prev,
// .slider__next {
//     flex: 0 0 auto;
//     margin: 0 5px;
//     cursor: pointer;
//     color: #333;
//     background: none;
//     padding: 5px 10px;
// }
// .slider > * {
//   flex: 0 0 auto;
// }

// .slider__inner {
//   margin: 0;
//   width: 400px;
//   transform-style: preserve-3d;
//   transition: transform 0.5s;
//   transform-origin: 50% 50% -482.8427124746px;
// }

// .slider__img {
//   width: 100%;
//   padding: 0 40px;
//   opacity: 0.9;
// }

// .slider__img:not(:first-of-type) {
//   position: absolute;
//   left: 0;
//   top: 0;
//   transform-origin: 50% 50% -482.8427124746px;
// }

// .slider__img:nth-child(2) {
//   transform: rotateY(0.7853981634rad);
// }

// .slider__img:nth-child(3) {
//   transform: rotateY(1.5707963268rad);
// }

// .slider__img:nth-child(4) {
//   transform: rotateY(2.3561944902rad);
// }

// .slider__img:nth-child(5) {
//   transform: rotateY(3.1415926536rad);
// }

// .slider__img:nth-child(6) {
//   transform: rotateY(3.926990817rad);
// }

// .slider__img:nth-child(7) {
//   transform: rotateY(4.7123889804rad);
// }

// .slider__img:nth-child(8) {
//   transform: rotateY(5.4977871438rad);
// }

// .slider__nav {
//   display: flex;
//   justify-content: center;
//   margin: 20px 0 0;
// }

// .slider__prev,
// .slider__next {
//   flex: 0 0 auto;
//   margin: 0 5px;
//   cursor: pointer;
//   color: #333;
//   background: none;
//   padding: 5px 10px;
// }