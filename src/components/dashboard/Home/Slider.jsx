import React, { Component } from "react"
import Carousel from "react-spring-3d-carousel"
import { config } from "react-spring"

import { ArrowContainer, CarouselContainer } from "../../../styles/SliderStyled"

export default class Slider extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  }

  slides = [
    {
      key: 1,
      content: <img src="https://picsum.photos/id/0/650/400/?random" alt="1" />
    },
    {
      key: 2,
      content: <img src="https://picsum.photos/id/1/650/400/?random" alt="2" />
    },
    {
      key: 3,
      content: <img src="https://picsum.photos/id/10/650/400/?random" alt="3" />
    },
    {
      key: 4,
      content: <img src="https://picsum.photos/id/100/650/400/?random" alt="4" />
    },
    {
      key: 5,
      content: <img src="https://picsum.photos/id/1000/650/400/?random" alt="5" />
    },
    {
      key: 6,
      content: <img src="https://picsum.photos/id/1001/650/400/?random" alt="6" />
    },
    {
      key: 7,
      content: <img src="https://picsum.photos/id/1002/650/400/?random" alt="7" />
    },
    {
      key: 8,
      content: <img src="https://picsum.photos/id/1003/650/400/?random" alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) }
  })

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    })
  }

  render() {
    return (
      <CarouselContainer>
        <Carousel
          slides={this.slides}
          showNavigation={this.state.showNavigation}
        />
        <ArrowContainer/>
      </CarouselContainer>
    )
  }
}
