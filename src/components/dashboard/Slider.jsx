import React from "react"

import { Arrow, Carousel, CarouselImages, Nav} from "../../styles/SliderStyled"

const Slider = () => {

    let slider = document.querySelector(".slider");
    let sliderInner = document.querySelector(".slider__inner");
    let sliderNav = document.querySelector(".slider__nav");
    let numImages = sliderInner.childElementCount;
    let delta = (2 * Math.PI) / numImages;
    let currImage = 0;

    function onClick(e) {
    e.stopPropagation();

    const target = e.target;
    if (target.tagName.toUpperCase() != "BUTTON") return;

    if (target.classList.contains("slider__next")) {
        currImage++;
    } else {
        currImage--;
    }

    sliderInner.style.transform = `rotateY(${currImage * -delta}rad)`;
    }

    sliderNav.addEventListener("click", onClick, true);

  return (
        <Carousel className="slider">
            <CarouselImages className="slider__inner">
                <img className="slider__img" src="https://i.ibb.co/GWFRQBj/phone.jpg" alt=""/>
                <img className="slider__img" src="https://i.ibb.co/GWFRQBj/phone.jpg" alt=""/>
                <img className="slider__img" src="https://i.ibb.co/GWFRQBj/phone.jpg" alt=""/>
                <img className="slider__img" src="https://i.ibb.co/GWFRQBj/phone.jpg" alt=""/>
                <img className="slider__img" src="https://i.ibb.co/GWFRQBj/phone.jpg" alt=""/>
                <img className="slider__img" src="https://i.ibb.co/GWFRQBj/phone.jpg" alt=""/>
                <img className="slider__img" src="https://i.ibb.co/GWFRQBj/phone.jpg" alt=""/>
                <img className="slider__img" src="https://i.ibb.co/GWFRQBj/phone.jpg" alt=""/>
            </CarouselImages>
            <Nav className="slider__nav">
                <Arrow className="slider__prev">Prev</Arrow>
                <Arrow className="slider__next">Next</Arrow>
            </Nav>
        </Carousel>
  )
}

export default Slider