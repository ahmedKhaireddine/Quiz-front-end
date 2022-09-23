import styled from "styled-components"

export const BubblesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`
export const Bubble = styled.div`
  position: absolute;
  left: ${props => props.bubbleLeftOffset};
  bottom: -75%;
  display: block;
  width: ${props => props.bubbleRadius};
  height: ${props => props.bubbleRadius};
  border-radius: 50%;
  animation: float-up ${props => props.bubbleFloatDuration} ${props => props.bubbleFloatDelay} ease-in infinite;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(136, 246, 251, 0.3);
    border-radius: inherit;
    animation: ${props => props.bubbleSwayType} ${props => props.bubbleSwayDuration} ${props => props.bubbleSwayDelay} ease-in-out alternate infinite;
  }

  @keyframes float-up {
    to {
        transform: translateY(-175vh);
    }
  }

  @keyframes sway-left-to-right {
      from {
          transform: translateX(-100%);
      }
      to {
          transform: translateX(100%);
      }
  }

  @keyframes sway-right-to-left {
      from {
          transform: translateX(100%);
      }
      to {
          transform: translateX(-100%);
      }
  }
`